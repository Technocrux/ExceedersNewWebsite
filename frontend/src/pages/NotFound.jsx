import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Compass } from "lucide-react";

const QUICK_LINKS = [
  { label: "CIO+", desc: "IT leadership & strategy", to: "/cio-plus" },
  { label: "Talent+", desc: "Providers, professionals & software", to: "/talent-plus" },
  { label: "Support+", desc: "Flexible multi-technology support", to: "/support-plus" },
  { label: "Dev+", desc: "Managed development & Agentic AI", to: "/dev-plus" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Page Not Found | eXceeders"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
        robots="noindex, follow"
      />
      <Header />
      <main className="flex-1 relative bg-gradient-to-br from-[#0D1F2D] via-[#0A1824] to-[#06121B] overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-[#07404B] glow-orb" />
        <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-brand-emerald/30 glow-orb" />
        <div className="absolute inset-0 grain-overlay opacity-50" />
        <div className="absolute inset-0 dot-pattern opacity-[0.15] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10"
          >
            <Compass className="w-7 h-7 text-brand-sea" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-sea"
          >
            Error 404
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white"
          >
            This page took a wrong turn.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-xl mx-auto text-[16px] md:text-[17px] leading-relaxed text-slate-300"
          >
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/"
              data-testid="404-home-link"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
            >
              <Home className="w-4 h-4" />
              Back to Homepage
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
          >
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`404-quick-link-${l.label.toLowerCase().replace(/\+/g, "-plus")}`}
                className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <p className="font-display text-[16px] font-bold text-white group-hover:text-brand-sea transition-colors">
                  {l.label}
                </p>
                <p className="mt-1 text-[13.5px] text-slate-400">{l.desc}</p>
              </Link>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
