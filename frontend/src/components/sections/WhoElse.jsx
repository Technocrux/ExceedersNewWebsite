import { motion } from "framer-motion";
import { Handshake, Store, Briefcase, ArrowUpRight } from "lucide-react";

const AUDIENCES = [
  {
    id: "channel",
    label: "For Channel Partners",
    title: "Partner with Us to Facilitate Innovation",
    desc: "Extend your portfolio with vetted delivery capacity and shared accountability.",
    Icon: Handshake,
    accent: "#059669",
    href: "https://www.exceeders.com/pages/applications/request/submit/1208/0?type=definition&isRecord=0",
  },
  {
    id: "providers",
    label: "For IT Service Providers",
    title: "Expand Your Reach with Our Marketplace",
    desc: "Access qualified demand, keep delivery focus, grow with an accountable partner.",
    Icon: Store,
    accent: "#43669E",
    href: "https://www.exceeders.com/pages/applications/request/submit/1208/0?type=definition&isRecord=0",
  },
  {
    id: "jobseekers",
    label: "For Job Seekers",
    title: "Discover Your Next Career Opportunity",
    desc: "Get matched to specialized IT roles across a curated network of employers.",
    Icon: Briefcase,
    accent: "#07404B",
    href: "https://www.exceeders.com/pages/vacancies?showTab=jobSeeker&selectedTabIndex=0&v_status=1&v_expression=&v_createdOn=&v_search=&v_pageNumber=1&vacancyTab=0&v_vacancyType=&v_contractIds=&v_workTimeIds=&v_countryIds=&v_presenceIds=&v_publishedExpression=&v_publishedOn=&v_displayId=&v_minimumSalary=&v_maximumSalary=&v_experinceIds=&v_areaOfSpecialtyIds=&v_sortBy=Newest&v_vacancyView=card&v_scopeIds=1",
  },
];

export const WhoElse = () => {
  return (
    <section
      data-testid="who-else-section"
      className="relative py-24 md:py-32 bg-[#F7F9FA]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-emerald">
            Beyond End-Client Businesses
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark leading-[1.05]">
            Who Else Can Benefit From Our Services
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCES.map((a, i) => (
            <motion.a
              key={a.id}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`audience-card-${a.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group relative block text-left rounded-3xl bg-white border border-slate-200/70 p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 hover:border-transparent transition-all overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 inset-x-0 h-1 rounded-t-3xl"
                style={{ backgroundColor: a.accent }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${a.accent}14` }}
              >
                <a.Icon className="w-6 h-6" style={{ color: a.accent }} strokeWidth={1.75} />
              </div>

              <p
                className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: a.accent }}
              >
                {a.label}
              </p>

              <h3 className="mt-3 font-display text-[22px] md:text-[24px] font-bold text-brand-dark leading-tight tracking-tight">
                {a.title}
              </h3>

              <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                {a.desc}
              </p>

              <span
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold group-hover:gap-3 transition-all"
                style={{ color: a.accent }}
              >
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoElse;
