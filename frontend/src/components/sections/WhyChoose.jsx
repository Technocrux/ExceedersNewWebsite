import { motion } from "framer-motion";
import { TrendingDown, Target, ShieldCheck } from "lucide-react";
import CountUp from "@/components/CountUp";

const STATS = [
  {
    id: "cost",
    label: "Cost Reduction",
    value: 30,
    suffix: "%",
    Icon: TrendingDown,
    color: "#059669",
    tint: "bg-brand-emerald/10",
    title: "30% Cost Reduction",
    desc: "Achieve significant savings with access to competitively priced IT services and recruitment, ensuring you maximize value without sacrificing quality.",
  },
  {
    id: "match",
    label: "Match Guaranteed",
    value: 90,
    suffix: "%",
    Icon: Target,
    color: "#43669E",
    tint: "bg-[#43669E]/10",
    title: "90% Match Guaranteed",
    desc: "Say goodbye to the endless search. Our platform instantly matches you with the right IT providers and talent, guaranteeing a solution is always available when you need it.",
  },
  {
    id: "satisfaction",
    label: "Satisfaction Rate",
    value: 99,
    suffix: "%",
    Icon: ShieldCheck,
    color: "#07404B",
    tint: "bg-brand-pine/10",
    title: "99% Satisfaction Rate",
    desc: "Depend on our marketplace for consistent, high-quality service delivery. We ensure every solution meets your standards and helps your business thrive.",
  },
];

export const WhyChoose = () => {
  return (
    <section
      data-testid="why-choose-section"
      id="why"
      className="relative bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-emerald">
            Why eXceeders
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark leading-[1.05]">
            Why Businesses Choose eXceeders
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            Businesses don&apos;t need more technology. They need the right partner
            to manage it. eXceeders guides your digital transformation and
            ensures every service, decision, and outcome drives your success.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((s, i) => (
            <motion.article
              key={s.id}
              data-testid={`stat-card-${s.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200/70 hover:border-brand-emerald/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${s.tint} flex items-center justify-center`}>
                <s.Icon className="w-6 h-6" style={{ color: s.color }} />
              </div>

              <div className="mt-8 flex items-baseline">
                <CountUp
                  end={s.value}
                  suffix={s.suffix}
                  duration={1600}
                  testId={`stat-value-${s.id}`}
                  className="font-display text-6xl md:text-7xl font-extrabold tracking-tight text-brand-dark tabular-nums"
                />
              </div>

              <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em]" style={{ color: s.color }}>
                {s.label}
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                {s.desc}
              </p>

              {/* Corner accent */}
              <div
                className="absolute -top-px right-6 h-[3px] w-16 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: s.color }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
