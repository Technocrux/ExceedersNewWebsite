import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { PAGE_META } from "@/seo/config";
import { webPageLd } from "@/seo/jsonld";

export default function ComingSoon({ title = "Coming Soon", tagline = "", metaKey = "project" }) {
  const meta = PAGE_META[metaKey];
  return (
    <div className="min-h-screen bg-white flex flex-col" data-testid="coming-soon-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={webPageLd({ key: metaKey, name: meta.title, description: meta.description })}
      />
      <Header />
      <main className="flex-1 flex items-center justify-center py-32 relative overflow-hidden">
        {/* ambient background */}
        <div className="absolute inset-0 -z-10 dot-pattern opacity-60" />
        <div className="absolute top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-pistachio glow-orb" />
        <div className="absolute -bottom-24 right-0 w-[520px] h-[520px] rounded-full bg-brand-sea glow-orb" />

        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-emerald/25 bg-brand-emerald/5 px-3.5 py-1.5"
          >
            <Clock className="w-3.5 h-3.5 text-brand-emerald" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-emerald">
              Page Coming Soon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl md:text-7xl font-extrabold tracking-tight text-brand-dark leading-[1.03]"
          >
            {title}
          </motion.h1>

          {tagline && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-[18px] text-slate-600 max-w-xl mx-auto"
            >
              {tagline}
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            We&apos;re carefully crafting this page. The full breakdown of what
            eXceeders delivers under <span className="font-semibold text-brand-dark">{title}</span> will
            be published here shortly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/"
              data-testid="coming-soon-back-home"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-[14.5px] font-semibold text-brand-dark hover:border-brand-emerald hover:text-brand-emerald transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
