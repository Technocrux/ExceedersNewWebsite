import { lazy, useState } from "react";

/**
 * React.lazy() with a `preload()` hook. Once preloaded, the page renders synchronously
 * instead of suspending — index.js preloads the current route's page before the first
 * render so the prerendered HTML is replaced by the real page, never by a blank
 * Suspense fallback.
 */
export default function lazyPage(load) {
  let Loaded = null;
  const remember = (mod) => {
    Loaded = mod.default;
    return mod;
  };
  const Lazy = lazy(() => load().then(remember));

  function Page(props) {
    // Pick once per mount: switching from <Lazy> to <Loaded> later would remount the page.
    const [Component] = useState(() => Loaded || Lazy);
    return <Component {...props} />;
  }
  Page.preload = () => (Loaded ? Promise.resolve() : load().then(remember));
  return Page;
}
