/**
 * Production static server for Azure App Service (Linux, Node).
 * Replaces `pm2 serve` to add gzip/brotli compression, long-lived caching
 * for content-hashed assets, real 404s for missing files, and SPA fallback
 * for react-router routes.
 *
 * Zero dependencies (Node built-ins only) so it runs from a bare `build/` upload:
 * `yarn build` copies this file into build/, and the App Service startup command is
 *
 *     node server.js
 *
 * Locally (from frontend/) `node server.js` serves ./build.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const zlib = require("zlib");

const PORT = process.env.PORT || 8080;
const ROOT = fs.existsSync(path.join(__dirname, "index.html"))
  ? __dirname
  : path.join(__dirname, "build");
// scripts/prerender.js writes per-route HTML (index.html is the prerendered home page) and
// keeps the bare app shell as 200.html for routes that have no prerendered file.
const SHELL = fs.existsSync(path.join(ROOT, "200.html"))
  ? path.join(ROOT, "200.html")
  : path.join(ROOT, "index.html");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};
const COMPRESSIBLE = new Set([".html", ".js", ".css", ".json", ".map", ".txt", ".md", ".xml", ".svg"]);

// Files are immutable for the lifetime of a deployment, so compressed bodies are cached in memory.
const cache = new Map();

function cacheControl(urlPath, file) {
  if (file.endsWith(".html")) return "no-cache"; // incl. /cio-plus -> cio-plus/index.html
  if (urlPath.startsWith("/static/")) return "public, max-age=31536000, immutable"; // content-hashed
  // Fonts and images are not content-hashed: when replacing one, give it a new filename.
  if (urlPath.startsWith("/fonts/") || urlPath.startsWith("/assets/")) return "public, max-age=31536000";
  return "public, max-age=3600";
}

function pickEncoding(req, ext) {
  if (!COMPRESSIBLE.has(ext)) return null;
  const accept = req.headers["accept-encoding"] || "";
  if (/\bbr\b/.test(accept)) return "br";
  if (/\bgzip\b/.test(accept)) return "gzip";
  return null;
}

function body(file, stat, encoding) {
  const key = `${file}|${stat.mtimeMs}|${encoding || "identity"}`;
  let buf = cache.get(key);
  if (!buf) {
    const raw = fs.readFileSync(file);
    if (encoding === "br") {
      buf = zlib.brotliCompressSync(raw, {
        params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11, [zlib.constants.BROTLI_PARAM_SIZE_HINT]: raw.length },
      });
    } else if (encoding === "gzip") {
      buf = zlib.gzipSync(raw, { level: 9 });
    } else {
      buf = raw;
    }
    cache.set(key, buf);
  }
  return buf;
}

function send(req, res, file, stat, urlPath, status = 200) {
  const ext = path.extname(file).toLowerCase();
  const encoding = pickEncoding(req, ext);
  const etag = `W/"${stat.size.toString(16)}-${Math.floor(stat.mtimeMs).toString(16)}"`;

  res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
  res.setHeader("Cache-Control", cacheControl(urlPath, file));
  res.setHeader("ETag", etag);
  res.setHeader("X-Content-Type-Options", "nosniff");
  if (COMPRESSIBLE.has(ext)) res.setHeader("Vary", "Accept-Encoding");

  if (status === 200 && req.headers["if-none-match"] === etag) {
    res.statusCode = 304;
    return res.end();
  }

  const buf = body(file, stat, encoding);
  if (encoding) res.setHeader("Content-Encoding", encoding);
  res.setHeader("Content-Length", buf.length);
  res.statusCode = status;
  res.end(req.method === "HEAD" ? undefined : buf);
}

function resolveFile(urlPath) {
  const file = path.normalize(path.join(ROOT, urlPath));
  if (!file.startsWith(ROOT + path.sep) || file === __filename || file === path.join(ROOT, "200.html")) {
    return null; // traversal, this script, or the shell (only served as the fallback)
  }
  try {
    const stat = fs.statSync(file);
    if (stat.isFile()) return { file, stat };
    if (stat.isDirectory()) {
      const index = path.join(file, "index.html");
      const s = fs.statSync(index);
      if (s.isFile()) return { file: index, stat: s };
    }
  } catch {
    // not found
  }
  return null;
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    return res.end();
  }

  let urlPath;
  try {
    urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400);
    return res.end();
  }

  const hit = resolveFile(urlPath);
  if (hit) return send(req, res, hit.file, hit.stat, urlPath);

  // Missing file (has an extension, or lives under /.well-known/ or /static/): real 404,
  // never the SPA shell — crawlers and agents must not get HTML for robots.txt, llms.txt, etc.
  const last = urlPath.split("/").pop();
  if (last.includes(".") || urlPath.startsWith("/.well-known/") || urlPath.startsWith("/static/")) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" });
    return res.end("Not found");
  }

  // Client-side route without a prerendered file: serve the SPA shell.
  send(req, res, SHELL, fs.statSync(SHELL), urlPath);
});

// Pre-compress every text asset in the background so no visitor waits on brotli level 11.
function warmCache(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      warmCache(file);
    } else if (COMPRESSIBLE.has(path.extname(file).toLowerCase()) && !file.endsWith(".map")) {
      const stat = fs.statSync(file);
      body(file, stat, "br");
      body(file, stat, "gzip");
    }
  }
}

server.listen(PORT, () => {
  console.log(`eXceeders SPA server listening on :${PORT} (serving ${ROOT})`);
  setImmediate(() => {
    try {
      warmCache(ROOT);
    } catch (err) {
      console.warn("compression warm-up failed:", err.message);
    }
  });
});
