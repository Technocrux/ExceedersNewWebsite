import "@/App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { organizationLd, websiteLd } from "@/seo/jsonld";
import Home from "@/pages/Home";

const CIOPlus = lazy(() => import("@/pages/CIOPlus"));
const AdvisoryPlus = lazy(() => import("@/pages/AdvisoryPlus"));
const ProductivityPlus = lazy(() => import("@/pages/ProductivityPlus"));
const AIPlus = lazy(() => import("@/pages/AIPlus"));
const AssurancePlus = lazy(() => import("@/pages/AssurancePlus"));
const ProjectPlus = lazy(() => import("@/pages/ProjectPlus"));
const HirePlus = lazy(() => import("@/pages/HirePlus"));
const EnablePlus = lazy(() => import("@/pages/EnablePlus"));
const OperatePlus = lazy(() => import("@/pages/OperatePlus"));
const ProfessionalsPlus = lazy(() => import("@/pages/ProfessionalsPlus"));
const ProviderPlus = lazy(() => import("@/pages/ProviderPlus"));
const SoftwarePlus = lazy(() => import("@/pages/SoftwarePlus"));
const TalentPlus = lazy(() => import("@/pages/TalentPlus"));
const SupportPlus = lazy(() => import("@/pages/SupportPlus"));
const DevPlus = lazy(() => import("@/pages/DevPlus"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Resources = lazy(() => import("@/pages/Resources"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
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
                <Route path="/" element={<Home />} />
                <Route path="/cio-plus" element={<CIOPlus />} />
                <Route path="/cio-plus/advisory-plus" element={<AdvisoryPlus />} />
                <Route path="/cio-plus/productivity-plus" element={<ProductivityPlus />} />
                <Route path="/cio-plus/ai-plus" element={<AIPlus />} />
                <Route path="/cio-plus/assurance-plus" element={<AssurancePlus />} />
                <Route path="/talent-plus" element={<TalentPlus />} />
                <Route path="/talent-plus/professional-plus" element={<ProfessionalsPlus />} />
                <Route path="/talent-plus/provider-plus" element={<ProviderPlus />} />
                <Route path="/talent-plus/software-plus" element={<SoftwarePlus />} />
                <Route path="/support-plus" element={<SupportPlus />} />
                <Route path="/dev-plus" element={<DevPlus />} />
                <Route path="/about-us" element={<AboutUs />} />
                {/* Backwards-compat redirect: legacy /about -> /about-us */}
                <Route path="/about" element={<Navigate to="/about-us" replace />} />
                <Route path="/project-plus" element={<ProjectPlus />} />
                <Route path="/project-plus/hire-plus" element={<HirePlus />} />
                <Route path="/project-plus/enable-plus" element={<EnablePlus />} />
                <Route path="/project-plus/operate-plus" element={<OperatePlus />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/blog/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster position="bottom-right" richColors closeButton />
        </div>
      </HelmetProvider>
    </MotionConfig>
  );
}

export default App;
