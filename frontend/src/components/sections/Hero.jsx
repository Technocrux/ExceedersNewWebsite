import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import NetworkDiagram from "@/components/NetworkDiagram";

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      id="hero"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-white"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-70" />
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-pistachio glow-orb" />
      <div className="absolute top-40 right-0 w-[520px] h-[520px] rounded-full bg-brand-sea glow-orb" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-emerald/5 px-3.5 py-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-brand-emerald" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-emerald">
                Managed IT · Marketplace · Delivery
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-[40px] sm:text-5xl lg:text-[62px] leading-[1.02] tracking-tight font-extrabold text-brand-dark"
            >
              The Smarter Way to
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Deliver </span>
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-brand-emerald to-brand-pine">
                  Digital Transformation
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-[17px] md:text-[18px] leading-relaxed text-slate-600"
            >
              We connect you with the right IT providers and manage every step of
              your digital transformation — from strategy and talent to support,
              development, and delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://calendly.com/batool-hussein-exceeders/30min?back=1&month=2026-07&date=2026-07-19"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-primary-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.55)] transition-all hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-10px_rgba(5,150,105,0.7)]"
              >
                Start Your Digital Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Trust snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {["#059669", "#43669E", "#07404B", "#9ED3CE"].map((c, i) => (
                  <span
                    key={i}
                    className="w-8 h-8 rounded-full ring-2 ring-white"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <p className="text-[13px] text-slate-500 leading-snug">
                Trusted by <span className="font-semibold text-brand-dark">600+ providers</span>{" "}
                &amp; <span className="font-semibold text-brand-dark">100K+ professionals</span>
              </p>
            </motion.div>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            >
              <NetworkDiagram />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
