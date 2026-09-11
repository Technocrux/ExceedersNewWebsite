import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Users, LifeBuoy, Code2, ClipboardList } from "lucide-react";

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
    iconBg: "#C6E5DE",
  },
  {
    id: "talent",
    label: "For Growing Businesses",
    name: "Talent Plus",
    title: "I need the right IT talent.",
    desc: "Find the right IT professionals, service providers, or software solutions through one trusted platform.",
    cta: "Explore Talent Plus",
    to: "/talent-plus",
    Icon: Users,
    accent: "#43669E",
    tint: "from-[#43669E]/10 to-[#C6E5DE]/40",
    iconBg: "#E6D6EC",
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
    iconBg: "#D7EBC7",
  },
  {
    id: "dev",
    label: "For Innovative Businesses",
    name: "Dev Plus",
    title: "I need to build AI-native business applications.",
    desc: "Design, build, and continuously enhance intelligent business applications through Service Design, AI-assisted development, and specialist delivery teams.",
    cta: "Explore Dev Plus",
    to: "/dev-plus",
    Icon: Code2,
    accent: "#059669",
    tint: "from-brand-sea/30 to-brand-emerald/12",
    iconBg: "#EAEDC0",
  },
  {
    id: "project",
    label: "For Organizations Delivering IT Projects",
    name: "Project Plus",
    title: "I need my IT projects to succeed.",
    desc: "Build, strengthen, or extend your project delivery capability with qualified IT Project Managers, proven methodologies, and managed ProjectOps support.",
    cta: "Explore Project Plus",
    href: "https://explore.exceeders.com/project-plus",
    Icon: ClipboardList,
    accent: "#43669E",
    tint: "from-[#43669E]/10 to-[#C7D3EC]/40",
    iconBg: "#C7D3EC",
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
            Five managed offerings, one accountable partner. Pick the outcome you
            need — we assemble the right providers, talent, and delivery.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => {
            const isLast = i === SERVICES.length - 1;
            const CardInner = isLast ? (
              <>
                {/* soft gradient wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.tint} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative md:flex md:items-start md:gap-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: s.iconBg }}
                  >
                    <s.Icon className="w-6 h-6" style={{ color: s.accent }} />
                  </div>

                  <div className="mt-6 md:mt-0 md:w-64 md:shrink-0">
                    <span
                      className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: s.accent }}
                    >
                      {s.label}
                    </span>
                    <p className="mt-1 text-[13px] font-semibold text-slate-500">
                      {s.name}
                    </p>
                    <h3 className="mt-3 font-display text-[22px] leading-[1.15] font-bold text-brand-dark tracking-tight">
                      {s.title}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 md:flex-1">
                    <p className="text-[15.5px] leading-relaxed text-slate-600">
                      {s.desc}
                    </p>

                    <span
                      className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold group-hover:gap-3 transition-all"
                      style={{ color: s.accent }}
                    >
                      {s.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
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
                      style={{ backgroundColor: s.iconBg }}
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
              </>
            );
            const cardClassName =
              "group relative block h-full rounded-3xl bg-white border border-slate-200/70 p-8 md:p-10 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all overflow-hidden";

            return (
              <motion.div
                key={s.id}
                className={isLast ? "md:col-span-2" : ""}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              >
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`service-card-${s.id}`}
                    className={cardClassName}
                  >
                    {CardInner}
                  </a>
                ) : (
                  <Link
                    to={s.to}
                    data-testid={`service-card-${s.id}`}
                    className={cardClassName}
                  >
                    {CardInner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WaysWeHelp;
