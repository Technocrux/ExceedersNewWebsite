import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section
      data-testid="final-cta-section"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] bg-gradient-to-br from-[#07404B] via-[#0D1F2D] to-[#06121B] px-8 md:px-16 py-16 md:py-20 overflow-hidden"
        >
          {/* Decorative orbs */}
          <div className="absolute -top-20 -right-16 w-[380px] h-[380px] rounded-full bg-brand-emerald/40 glow-orb" />
          <div className="absolute -bottom-20 -left-16 w-[360px] h-[360px] rounded-full bg-brand-sea/40 glow-orb" />
          <div className="absolute inset-0 grain-overlay opacity-40" />

          {/* Decorative dots */}
          <svg
            className="absolute top-6 right-6 opacity-40"
            width="120"
            height="60"
            viewBox="0 0 120 60"
            aria-hidden="true"
          >
            {Array.from({ length: 5 }).map((_, r) =>
              Array.from({ length: 10 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={6 + c * 12} cy={6 + r * 12} r={1.2} fill="#9ED3CE" />
              ))
            )}
          </svg>

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-emerald/30 bg-brand-emerald/10 px-3.5 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-sea" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sea">
                Ready when you are
              </span>
            </div>

            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
              Ready to Transform<br />
              Your Business?
            </h2>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-300">
              Whether you need strategic IT leadership, specialized talent,
              managed support, or custom software and AI, eXceeders is here to
              help. Book a free consultation and discover the smartest way to
              deliver your digital transformation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/batool-hussein-exceeders/30min?back=1&month=2026-07&date=2026-07-19"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="final-cta-book-consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-10px_rgba(5,150,105,0.8)] transition-all"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
