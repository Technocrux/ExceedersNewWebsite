import React from "react";
import ReactDOM from "react-dom/client";
import { matchRoutes } from "react-router-dom";
import "@/index.css";
import App, { PAGE_ROUTES } from "@/App";

// Load the current route's page chunk before the first render so React replaces the
// prerendered HTML with the real page directly (no blank Suspense fallback in between).
const match = matchRoutes(PAGE_ROUTES, window.location.pathname)?.[0]?.route;
const ready = match?.Page.preload ? match.Page.preload().catch(() => {}) : Promise.resolve();

ready.then(() => {
  // Prerendered <title>/<meta>/<link> tags (scripts/prerender.js) are for crawlers and the
  // first paint; React re-adds its own when it renders, so drop these to avoid duplicates.
  document.head.querySelectorAll("[data-prerender]").forEach((el) => el.remove());
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
