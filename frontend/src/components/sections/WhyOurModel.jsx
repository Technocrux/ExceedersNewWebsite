import { motion } from "framer-motion";
import { Search, Handshake, ClipboardCheck, LineChart } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    desc: "We map your business need, current stack, and desired outcome.",
    Icon: Search,
  },
  {
    n: "02",
    title: "Match",
    desc: "We connect you with the right provider or talent from our network.",
    Icon: Handshake,
  },
  {
    n: "03",
    title: "Manage",
    desc: "We manage delivery end-to-end using proven project methods.",
    Icon: ClipboardCheck,
  },
  {
    n: "04",
    title: "Measure",
    desc: "We track outcomes and iterate until success is guaranteed.",
    Icon: LineChart,
  },
];

export const WhyOurModel = () => {
  return (
    <section
      data-testid="why-our-model-section"
      id="model"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-emerald">
            The Model
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark leading-[1.05]">
            Why Our Model Wins
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            eXceeders combines the reach of an IT marketplace with the
            accountability of managed delivery. We understand your business,
            connect you with the right IT providers, and manage every engagement
            using proven project management methods to ensure successful
            outcomes.
          </p>
        </div>

        {/* Process timeline */}
        <div className="mt-16 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-[46px] left-[6%] right-[6%] h-px"
            aria-hidden="true"
          >
            <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
              <motion.line
                x1="0"
                y1="4"
                x2="100"
                y2="4"
                stroke="#059669"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                data-testid={`process-step-${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-0">
                  <div className="relative shrink-0">
                    {/* Node */}
                    <div className="relative w-[92px] h-[92px] rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-[0_10px_30px_-15px_rgba(13,31,45,0.25)]">
                      <step.Icon className="w-8 h-8 text-brand-emerald" strokeWidth={1.75} />
                      <span className="absolute -top-2 -right-2 text-[10px] font-bold text-white bg-brand-dark rounded-full h-6 w-6 flex items-center justify-center">
                        {step.n}
                      </span>
                    </div>
                  </div>

                  <div className="md:mt-6">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-brand-dark tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed max-w-[240px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOurModel;
