import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page on every route change.
 * - Disables browser scroll restoration (which otherwise restores the previous scroll position on back/forward).
 * - Temporarily disables smooth scroll so navigation lands at the exact top instantly.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Disable browser's automatic scroll restoration once on mount.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    if (hash) {
      // Navigating to an in-page anchor (e.g. /#ways-we-help) — scroll it
      // into view instead of forcing the page back to the top.
      const raf = window.requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ block: "start" });
        html.style.scrollBehavior = prev || "";
      });
      return () => {
        window.cancelAnimationFrame(raf);
        html.style.scrollBehavior = prev || "";
      };
    }

    // Immediate scroll
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // A second scroll on the next frame to counter any late layout shifts
    // (framer-motion mounts, image loads, etc.)
    const raf1 = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      const raf2 = window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        html.style.scrollBehavior = prev || "";
      });
      // Track inner raf on outer scope for cleanup
      cleanup.raf2 = raf2;
    });

    const cleanup = { raf1, raf2: 0 };
    return () => {
      window.cancelAnimationFrame(cleanup.raf1);
      if (cleanup.raf2) window.cancelAnimationFrame(cleanup.raf2);
      html.style.scrollBehavior = prev || "";
    };
  }, [pathname, hash]);

  return null;
}
