/**
 * Production static server for Azure App Service (Linux, Node).
 * Replaces `pm2 serve` to add gzip/brotli compression, long-lived caching
 * for content-hashed assets, and SPA fallback for react-router routes.
 *
 * Startup command on Azure:  node server.js
 * Serves the built SPA from ./build (CRA/craco output).
 */
const path = require("path");
const express = require("express");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 8080;
const BUILD_DIR = path.join(__dirname, "build");

// Gzip/brotli text responses (JS, CSS, HTML, JSON, SVG).
app.use(compression());

// Content-hashed assets (…/static/js/main.<hash>.js) are immutable — cache a year.
app.use(
  "/static",
  express.static(path.join(BUILD_DIR, "static"), {
    immutable: true,
    maxAge: "1y",
  })
);

// Everything else in build/: short cache, must-revalidate (index.html, favicon, robots, sitemap).
app.use(
  express.static(BUILD_DIR, {
    maxAge: "1h",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith("index.html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

// SPA fallback: serve index.html for client-side routes (/cio-plus, /about-us, …).
app.get("*", (_req, res) => {
  res.sendFile(path.join(BUILD_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`eXceeders SPA server listening on :${PORT}`);
});
