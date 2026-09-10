import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Users, LifeBuoy, Code2 } from "lucide-react";

const SERVICES = [
  {
    id: "cio",
    label: "For Small and Medium Companies",
    name: "CIO Plus",
    title: "I need IT guidance for my business.",
    desc: "Gain strategic IT leadership and digital transformation guidance without the cost of building an internal IT department.",
    cta: "Explore CIO Plus",
    to: "/cio-plus",
    Icon: Compass,
    accent: "#059669",
    tint: "from-brand-emerald/12 to-brand-pistachio/40",
  },
  {
    id: "talent",
    label: "For Growing Businesses",
    name: "Talent Plus",
    title: "I need the right IT talent.",
    desc: "Find and hire specialized IT professionals faster through our trusted recruitment network.",
    cta: "Explore Talent Plus",
    to: "/talent-plus",
    Icon: Users,
    accent: "#43669E",
    tint: "from-[#43669E]/10 to-[#C6E5DE]/40",
  },
  {
    id: "support",
    label: "For Enterprises",
    name: "Support Plus",
    title: "I need flexible IT support.",
    desc: "Access on-demand IT expertise across multiple technologies through one managed service agreement.",
    cta: "Explore Support Plus",
    to: "/support-plus",
    Icon: LifeBuoy,
    accent: "#07404B",
    tint: "from-brand-pine/10 to-brand-sea/30",
  },
  {
    id: "dev",
    label: "For Innovative Businesses",
    name: "Dev Plus",
    title: "I need to build custom software and AI.",
    desc: "Build bespoke applications and Agentic AI with managed development teams tailored to your business.",
    cta: "Explore Dev Plus",
    to: "/dev-plus",
    Icon: Code2,
    accent: "#059669",
    tint: "from-brand-sea/30 to-brand-emerald/12",
  },
];

export const WaysWeHelp = () => {
  return (
    <section
      data-testid="ways-we-help-section"
      id="ways-we-help"
      className="relative py-24 md:py-32 bg-[#F7F9FA]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-emerald">
              Services
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark leading-[1.05]">
              Ways We Help
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-slate-600">
            Four managed offerings, one accountable partner. Pick the outcome you
            need — we assemble the right providers, talent, and delivery.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            >
              <Link
                to={s.to}
                data-testid={`service-card-${s.id}`}
                className="group relative block h-full rounded-3xl bg-white border border-slate-200/70 p-8 md:p-10 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all overflow-hidden"
              >
                {/* soft gradient wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.tint} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span
                        className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: s.accent }}
                      >
                        {s.label}
                      </span>
                      <p className="mt-1 text-[13px] font-semibold text-slate-500">
                        {s.name}
                      </p>
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${s.accent}14` }}
                    >
                      <s.Icon className="w-6 h-6" style={{ color: s.accent }} />
                    </div>
                  </div>

                  <h3 className="mt-8 font-display text-[26px] md:text-[30px] leading-[1.15] font-bold text-brand-dark tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-slate-600">
                    {s.desc}
                  </p>

                  <span
                    className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold group-hover:gap-3 transition-all"
                    style={{ color: s.accent }}
                  >
                    {s.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysWeHelp;
