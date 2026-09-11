import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { organizationLd, websiteLd } from "@/seo/jsonld";
import Home from "@/pages/Home";
import CIOPlus from "@/pages/CIOPlus";
import AdvisoryPlus from "@/pages/AdvisoryPlus";
import ProductivityPlus from "@/pages/ProductivityPlus";
import AIPlus from "@/pages/AIPlus";
import AssurancePlus from "@/pages/AssurancePlus";
import ProjectPlus from "@/pages/ProjectPlus";
import HirePlus from "@/pages/HirePlus";
import EnablePlus from "@/pages/EnablePlus";
import OperatePlus from "@/pages/OperatePlus";
import ProfessionalsPlus from "@/pages/ProfessionalsPlus";
import SoftwarePlus from "@/pages/SoftwarePlus";
import TalentPlus from "@/pages/TalentPlus";
import SupportPlus from "@/pages/SupportPlus";
import DevPlus from "@/pages/DevPlus";
import AboutUs from "@/pages/AboutUs";
import Resources from "@/pages/Resources";
import BlogPost from "@/pages/BlogPost";

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cio-plus" element={<CIOPlus />} />
              <Route path="/cio-plus/advisory-plus" element={<AdvisoryPlus />} />
              <Route path="/cio-plus/productivity-plus" element={<ProductivityPlus />} />
              <Route path="/cio-plus/ai-plus" element={<AIPlus />} />
              <Route path="/cio-plus/assurance-plus" element={<AssurancePlus />} />
              <Route path="/talent-plus" element={<TalentPlus />} />
              <Route path="/talent-plus/professional-plus" element={<ProfessionalsPlus />} />
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
            </Routes>
          </BrowserRouter>
          <Toaster position="bottom-right" richColors closeButton />
        </div>
      </HelmetProvider>
    </MotionConfig>
  );
}

export default App;
