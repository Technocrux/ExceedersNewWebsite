/**
 * Build-time prerender: snapshots every route of the built SPA to static HTML.
 *
 * Why: the site is client-rendered, so on mobile nothing paints until ~100KB of JS has
 * downloaded and run. With prerendered HTML the hero text paints straight from the
 * document (fast FCP/LCP) and crawlers/agents get real content. React then renders the
 * same initial markup over it (index.js preloads the route chunk first, so no flash).
 *
 * How: serves build/ with server.js, crawls internal links from "/" in headless Chrome
 * (puppeteer-core + the locally installed Chrome/Edge), and writes build/<route>/index.html.
 * `window.__PRERENDER__` stops Framer Motion features loading (see App.js), so animated
 * elements are captured in their `initial` state — exactly the client's first render.
 * The untouched app shell is kept as build/200.html for server.js's SPA fallback.
 *
 * Runs after `craco build` (see package.json). If no browser is found it warns and leaves
 * the plain SPA build in place — the site still works, just without prerendered HTML.
 */
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const BUILD = path.join(__dirname, "..", "build");
const PORT = 45000 + Math.floor(Math.random() * 1000);
const ORIGIN = `http://localhost:${PORT}`;
const MAX_PAGES = 200;

function findBrowser() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
  return candidates.find((p) => p && fs.existsSync(p));
}

function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      fetch(url)
        .then(() => resolve())
        .catch(() => (Date.now() - start > timeoutMs ? reject(new Error("server did not start")) : setTimeout(tick, 200)));
    };
    tick();
  });
}

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

let shellHtml = "";

async function snapshot(page, route) {
  await page.goto(ORIGIN + route, { waitUntil: "networkidle0", timeout: 30000 });
  // Wait for the page to render and its <meta>/<link> tags to be hoisted into <head>.
  await page.waitForFunction(
    () => document.querySelector("#root")?.children.length && document.querySelector('head link[rel="canonical"]'),
    { timeout: 15000 },
  );
  await new Promise((r) => setTimeout(r, 300));

  return page.evaluate((shell) => ({
    finalPath: window.location.pathname,
    title: document.title,
    // Tags React hoisted into <head> (SEO component): anything not already in the shell,
    // minus webpack's chunk tags. Marked so index.js can drop them before React re-adds them.
    head: [...document.head.querySelectorAll("meta, link")]
      .filter((el) => !shell.includes(el.outerHTML) && !/^\/static\//.test(el.getAttribute("href") || ""))
      .map((el) => {
        el.setAttribute("data-prerender", "");
        return el.outerHTML;
      })
      .join(""),
    root: document.querySelector("#root").innerHTML,
    links: [...document.querySelectorAll("a[href]")]
      .map((a) => new URL(a.getAttribute("href"), window.location.href))
      .filter((u) => u.origin === window.location.origin)
      .map((u) => u.pathname.replace(/\/+$/, "") || "/"),
  }), shellHtml);
}

// The page is readable before any JS runs, so the app bundle starts only once the browser
// reports first contentful paint, instead of as a `defer` script: its download and execution
// then never delay first paint / LCP on slow phones. (Hidden tabs boot immediately — they
// don't paint; browsers without paint timing boot on load.)
function bootAfterPaint(html) {
  const tag = html.match(/<script defer="defer" src="([^"]+)"><\/script>/);
  if (!tag) throw new Error("app bundle <script defer> tag not found in the shell");
  const boot = `<script>(function () {
  var started = false;
  function boot() {
    if (started) return;
    started = true;
    var s = document.createElement("script");
    s.src = ${JSON.stringify(tag[1])};
    document.body.appendChild(s);
  }
  if (document.visibilityState === "hidden" || !window.PerformanceObserver) return boot();
  try {
    new PerformanceObserver(function (list) {
      if (list.getEntriesByName("first-contentful-paint").length) setTimeout(boot);
    }).observe({ type: "paint", buffered: true });
  } catch (e) {
    boot();
  }
  window.addEventListener("load", function () { setTimeout(boot, 1000); });
})();</script>`;
  return html.replace(tag[0], "").replace("</body>", () => `${boot}</body>`);
}

function render(shell, snap) {
  const html = bootAfterPaint(
    shell
      // Function replacers: page content may contain `$&`-style sequences.
      .replace(/<title>[\s\S]*?<\/title>/, () => `<title data-prerender>${escapeHtml(snap.title)}</title>${snap.head}`)
      .replace('<div id="root"></div>', () => `<div id="root">${snap.root}</div>`),
  );
  if (html === shell || !html.includes(snap.root.slice(0, 50))) {
    throw new Error("could not inject snapshot into the app shell");
  }
  return html;
}

function outFile(route) {
  return route === "/" ? path.join(BUILD, "index.html") : path.join(BUILD, ...route.split("/").filter(Boolean), "index.html");
}

async function main() {
  const browserPath = findBrowser();
  if (!browserPath) {
    console.warn("[prerender] No Chrome/Edge found (set CHROME_PATH). Skipping — build stays a plain SPA.");
    return;
  }

  const shellPath = path.join(BUILD, "index.html");
  const shell = fs.readFileSync(shellPath, "utf8");
  if (!shell.includes('<div id="root"></div>')) {
    throw new Error("build/index.html is not a fresh app shell — run `craco build` first");
  }
  // index.js removes [data-prerender] tags on boot, so React's own <title> is the only one.
  fs.writeFileSync(path.join(BUILD, "200.html"), shell.replace("<title>", "<title data-prerender>"));
  shellHtml = shell;

  const server = spawn(process.execPath, [path.join(__dirname, "..", "server.js")], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: "ignore",
  });
  const puppeteer = require("puppeteer-core");
  let browser;
  try {
    await waitForServer(ORIGIN + "/robots.txt");
    browser = await puppeteer.launch({ executablePath: browserPath, headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.evaluateOnNewDocument(() => {
      window.__PRERENDER__ = true;
    });
    // Only our own origin: no analytics, no third-party fonts or embeds in snapshots.
    await page.setRequestInterception(true);
    page.on("request", (req) => (req.url().startsWith(ORIGIN) ? req.continue() : req.abort()));
    page.on("pageerror", (err) => console.warn(`[prerender] page error: ${err.message}`));

    const queue = ["/"];
    const seen = new Set(queue);
    const results = new Map();
    while (queue.length && results.size < MAX_PAGES) {
      const route = queue.shift();
      const snap = await snapshot(page, route);
      if (snap.finalPath !== route) continue; // redirect (e.g. /about -> /about-us)
      results.set(route, render(shell, snap));
      for (const link of snap.links) {
        if (!seen.has(link) && !path.extname(link)) {
          seen.add(link);
          queue.push(link);
        }
      }
    }

    for (const [route, html] of results) {
      const file = outFile(route);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
    }
    console.log(`[prerender] ${results.size} routes: ${[...results.keys()].join(", ")}`);
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
