import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const NETWORK_STATS = [
  { id: "providers", value: 600, suffix: "+", label: "Trusted IT Providers" },
  { id: "professionals", value: 100, suffix: "K+", label: "Qualified Technology Professionals" },
  { id: "projects", value: 1000, suffix: "+", label: "Successful Projects Delivered", formatter: (v) => `${Math.round(v).toLocaleString()}` },
];

export const Network = () => {
  return (
    <section
      data-testid="network-section"
      id="network"
      className="relative py-24 md:py-32 bg-gradient-to-br from-[#0D1F2D] to-[#06121B] text-white overflow-hidden"
    >
      {/* Decorative glow orbs */}
      <div className="absolute -top-24 left-1/4 w-[560px] h-[560px] rounded-full bg-[#07404B] glow-orb" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-brand-emerald/40 glow-orb" />
      <div className="absolute inset-0 grain-overlay opacity-60" />

      {/* faint diagonal grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-sea">
            The Network Effect
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.03] text-white">
            Our Network. <br className="hidden md:block" />
            <span className="text-brand-pistachio">Your Advantage.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-300 max-w-xl">
            The scale of a global marketplace, filtered through eXceeders&apos; judgment
            and delivery discipline.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {NETWORK_STATS.map((s, i) => (
            <motion.div
              key={s.id}
              data-testid={`network-stat-${s.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative pt-8 md:pt-12"
            >
              {/* top divider */}
              <div className="absolute top-0 left-0 h-px w-16 bg-brand-emerald" />

              <div className="flex items-baseline gap-1">
                <CountUp
                  end={s.value}
                  suffix={s.suffix}
                  duration={2000}
                  testId={`network-stat-value-${s.id}`}
                  className="font-display text-[64px] md:text-[92px] leading-none font-extrabold tracking-tighter text-white tabular-nums"
                />
              </div>
              <p className="mt-4 text-[15px] font-medium text-slate-300 max-w-[240px]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;
