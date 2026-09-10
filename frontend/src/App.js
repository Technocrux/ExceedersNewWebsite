import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { organizationLd, websiteLd } from "@/seo/jsonld";
import Home from "@/pages/Home";
import CIOPlus from "@/pages/CIOPlus";
import TalentPlus from "@/pages/TalentPlus";
import SupportPlus from "@/pages/SupportPlus";
import DevPlus from "@/pages/DevPlus";
import AboutUs from "@/pages/AboutUs";
import ComingSoon from "@/pages/ComingSoon";

function App() {
  return (
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
            <Route path="/talent-plus" element={<TalentPlus />} />
            <Route path="/support-plus" element={<SupportPlus />} />
            <Route path="/dev-plus" element={<DevPlus />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* Backwards-compat redirect: legacy /about -> /about-us */}
            <Route path="/about" element={<Navigate to="/about-us" replace />} />
            <Route
              path="/project-plus"
              element={
                <ComingSoon
                  title="Project Plus"
                  tagline="Managed delivery for critical initiatives."
                />
              }
            />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" richColors closeButton />
      </div>
    </HelmetProvider>
  );
}

export default App;
