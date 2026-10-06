import "@/App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { LazyMotion, MotionConfig } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import { organizationLd, websiteLd } from "@/seo/jsonld";
import Home from "@/pages/Home";
import lazyPage from "@/lib/lazyPage";

const CIOPlus = lazyPage(() => import("@/pages/CIOPlus"));
const AdvisoryPlus = lazyPage(() => import("@/pages/AdvisoryPlus"));
const ProductivityPlus = lazyPage(() => import("@/pages/ProductivityPlus"));
const AIPlus = lazyPage(() => import("@/pages/AIPlus"));
const AssurancePlus = lazyPage(() => import("@/pages/AssurancePlus"));
const ProjectPlus = lazyPage(() => import("@/pages/ProjectPlus"));
const HirePlus = lazyPage(() => import("@/pages/HirePlus"));
const EnablePlus = lazyPage(() => import("@/pages/EnablePlus"));
const OperatePlus = lazyPage(() => import("@/pages/OperatePlus"));
const ProfessionalsPlus = lazyPage(() => import("@/pages/ProfessionalsPlus"));
const ProviderPlus = lazyPage(() => import("@/pages/ProviderPlus"));
const SoftwarePlus = lazyPage(() => import("@/pages/SoftwarePlus"));
const TalentPlus = lazyPage(() => import("@/pages/TalentPlus"));
const SupportPlus = lazyPage(() => import("@/pages/SupportPlus"));
const DevPlus = lazyPage(() => import("@/pages/DevPlus"));
const AboutUs = lazyPage(() => import("@/pages/AboutUs"));
const Resources = lazyPage(() => import("@/pages/Resources"));
const BlogPost = lazyPage(() => import("@/pages/BlogPost"));
const NotFound = lazyPage(() => import("@/pages/NotFound"));

// Route table: rendered by <App> and used by index.js to preload the current page.
export const PAGE_ROUTES = [
  { path: "/", Page: Home },
  { path: "/cio-plus", Page: CIOPlus },
  { path: "/cio-plus/advisory-plus", Page: AdvisoryPlus },
  { path: "/cio-plus/productivity-plus", Page: ProductivityPlus },
  { path: "/cio-plus/ai-plus", Page: AIPlus },
  { path: "/cio-plus/assurance-plus", Page: AssurancePlus },
  { path: "/talent-plus", Page: TalentPlus },
  { path: "/talent-plus/professional-plus", Page: ProfessionalsPlus },
  { path: "/talent-plus/provider-plus", Page: ProviderPlus },
  { path: "/talent-plus/software-plus", Page: SoftwarePlus },
  { path: "/support-plus", Page: SupportPlus },
  { path: "/dev-plus", Page: DevPlus },
  { path: "/about-us", Page: AboutUs },
  { path: "/project-plus", Page: ProjectPlus },
  { path: "/project-plus/hire-plus", Page: HirePlus },
  { path: "/project-plus/enable-plus", Page: EnablePlus },
  { path: "/project-plus/operate-plus", Page: OperatePlus },
  { path: "/resources", Page: Resources },
  { path: "/resources/blog/:slug", Page: BlogPost },
  { path: "*", Page: NotFound },
];

// The prerender script (scripts/prerender.js) sets __PRERENDER__ so the motion features never
// load: snapshots then capture every animated element in its `initial` state, exactly what
// the client renders first, so taking over the prerendered HTML causes no visual jump.
const loadMotionFeatures = () =>
  window.__PRERENDER__
    ? new Promise(() => {})
    : import("@/lib/motionFeatures").then((mod) => mod.default);

function App() {
  return (
    // Components import the lightweight `m` (aliased as `motion`); LazyMotion fetches the
    // animation features as a separate chunk after first render. `strict` throws if a full
    // `motion` import sneaks back in and re-bloats the main bundle.
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <HelmetProvider>
          <div className="App font-sans">
            {/* Global JSON-LD (Organization + WebSite) */}
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify(organizationLd())}
              </script>
              <script type="application/ld+json">
                {JSON.stringify(websiteLd())}
              </script>
            </Helmet>

            <BrowserRouter>
              <ScrollToTop />
              <Suspense fallback={<div className="min-h-screen bg-white" />}>
                <Routes>
                  {/* Backwards-compat redirect: legacy /about -> /about-us */}
                  <Route path="/about" element={<Navigate to="/about-us" replace />} />
                  {PAGE_ROUTES.map(({ path, Page }) => (
                    <Route key={path} path={path} element={<Page />} />
                  ))}
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        </HelmetProvider>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
