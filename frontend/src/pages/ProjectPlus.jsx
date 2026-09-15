import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { PAGE_META, CALENDLY_URL } from "@/seo/config";
import { serviceLd, faqPageLd } from "@/seo/jsonld";
import {
  ServicePageShell,
  ServiceHero,
  Section,
  Container,
  SectionHeading,
  FAQItem,
  ServiceFinalCTA,
  Eyebrow,
  CountUpNumber,
  DifferenceMeansSection,
} from "@/components/service/ServicePrimitives";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FolderCheck, UserCheck, TrendingUp, UserPlus, GraduationCap,
  ClipboardList, ArrowRight, CheckCircle2, Layers, Star,
} from "lucide-react";

const PROOF = [
  { Icon: FolderCheck, from: 0, to: 1000, suffix: "+", label: "Technology Projects Delivered", accent: "#43669E", iconBg: "#C7D3EC" },
  { Icon: UserCheck, from: 0, to: 500, suffix: "+", label: "IT Project Managers Placed", accent: "#07404B", iconBg: "#D7EBC7" },
  { Icon: TrendingUp, rangeFrom: 30, to: 40, suffix: "%", label: "Higher Project Success Rates", accent: "#059669", iconBg: "#EAEDC0" },
];

const WHAT_IT_MEANS = [
  {
    title: "Higher project success rates",
    Icon: TrendingUp,
  },
  {
    title: "Stronger governance",
    Icon: ClipboardList,
  },
  {
    title: "Delivery that scales with you",
    Icon: Layers,
  },
];

const NORTHWIND = {
  title: "Northwind Portal Rollout",
  status: "On track",
  updated: "12 Sep 2026",
  owner: "Karim Doumit",
  type: "External",
  start: "2 Feb 2026",
  due: "30 Nov 2026",
  progress: 50,
};

const REQUIREMENTS = {
  total: 34,
  items: [
    { label: "Open", value: 18, pct: 53, color: "#059669" },
    { label: "In progress", value: 11, pct: 32, color: "#43669E" },
    { label: "Completed", value: 5, pct: 15, color: "#9ED3CE" },
  ],
};

const SPRINTS = {
  total: 13,
  stats: [
    { label: "Not due", value: 10 },
    { label: "Signed", value: 7 },
    { label: "Opened", value: 10 },
    { label: "Issued", value: 10 },
    { label: "Closed", value: 12 },
    { label: "Denied", value: 10 },
  ],
};

const Donut = ({ pct, color, size = 34 }) => {
  const r = (size - 6) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90 shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E5E9E8" strokeWidth="4" />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </svg>
  );
};

const CHALLENGES = [
  "Finding experienced Project Managers",
  "Keeping projects on time and on track",
  "Using a consistent way to deliver projects",
  "Getting clear reporting and visibility",
  "Managing governance and project operations",
];

const SOLUTION_HIGHLIGHTS = [
  "The right Project Managers for your projects",
  "One practical delivery method across projects",
  "Dedicated ProjectOps for governance, reporting, and operations",
];

const HOW_IT_STARTS = [
  {
    title: "Assess",
    desc: "Projects, people, delivery, and governance.",
  },
  {
    title: "Activate",
    desc: "Start with Hire+, Enable+, Operate+, or combine them.",
  },
  {
    title: "Deliver & Improve",
    desc: "Strengthen delivery and improve project performance.",
  },
];

const CAPABILITIES = [
  {
    slug: "hire-plus",
    name: "Hire+",
    positioning: "Vetted IT Project Managers",
    desc: "Recruit Project Managers who are assessed, matched, and ready to lead from day one.",
    bestFor: ["Expanding project teams", "Replacing critical roles", "Supporting new initiatives"],
    to: "/project-plus/hire-plus",
    Icon: UserPlus,
    accent: "#43669E",
    iconBg: "#C7D3EC",
  },
  {
    slug: "enable-plus",
    name: "Enable+",
    positioning: "Delivery Capability & Methodology",
    desc: "Equip your team with Method 3-Pulse, hands-on training, and an optional digital platform to standardize execution.",
    bestFor: ["PMO transformation", "Team development", "Standardizing project delivery"],
    to: "/project-plus/enable-plus",
    Icon: GraduationCap,
    accent: "#059669",
    iconBg: "#C6E5DE",
  },
  {
    slug: "operate-plus",
    name: "Operate+",
    positioning: "Project Operations as a Service",
    desc: "Add a dedicated ProjectOps team for planning, governance, reporting, and delivery oversight.",
    bestFor: ["Multiple concurrent projects", "Overloaded Project Managers", "PMO operational support"],
    to: "/project-plus/operate-plus",
    Icon: ClipboardList,
    accent: "#07404B",
    iconBg: "#D7EBC7",
  },
];

const PRICING = [
  {
    slug: "hire-plus",
    name: "Hire+",
    models: ["Permanent Recruitment", "Contract Staffing", "Managed Resources"],
    accent: "#43669E",
    iconBg: "#C7D3EC",
    Icon: UserPlus,
  },
  {
    slug: "enable-plus",
    name: "Enable+",
    models: ["Method 3-Pulse Playbook & Training", "Training + PlanneXe", "Coaching"],
    accent: "#059669",
    iconBg: "#C6E5DE",
    Icon: GraduationCap,
  },
  {
    slug: "operate-plus",
    name: "Operate+",
    models: ["Dedicated ProjectOps Specialist", "ProjectOps + PlanneXe"],
    accent: "#07404B",
    iconBg: "#D7EBC7",
    Icon: ClipboardList,
  },
];

const FAQS = [
  {
    q: "What is Project Plus?",
    a: "Project Plus is a Project Delivery Capability as a Service. It helps organizations recruit qualified Project Managers, standardize delivery practices, and strengthen governance through dedicated ProjectOps.",
  },
  {
    q: "Do we need all three services?",
    a: "No. Hire+, Enable+, and Operate+ can be purchased independently or combined based on your delivery needs.",
  },
  {
    q: "How are Hire+ candidates assessed?",
    a: "Candidates are evaluated through AI-powered matching, structured interviews, and practical Method 3 capability assessments.",
  },
  {
    q: "Does Method 3-Pulse replace Agile or Waterfall?",
    a: "No. It complements Agile, Waterfall, and hybrid approaches by helping teams apply them effectively in complex technology projects.",
  },
  {
    q: "Does Operate+ replace our Project Managers?",
    a: "No. Project Managers continue leading delivery and stakeholders. ProjectOps manages the operational and governance workload around them.",
  },
  {
    q: "Do we need to use PlanneXe?",
    a: "No. PlanneXe is optional and can be added when you need a centralized workspace for planning, governance, collaboration, and reporting.",
  },
  {
    q: "Can Project Plus support an existing PMO?",
    a: "Yes. It can strengthen an existing PMO through recruitment, team enablement, coaching, or additional ProjectOps capacity.",
  },
];

export default function ProjectPlus() {
  const meta = PAGE_META.project;
  return (
    <ServicePageShell testId="project-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "project",
            name: "Project Plus — IT Project Delivery Capability as a Service",
            serviceType: "Managed Project Delivery",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="PROJECT PLUS · IT Project Delivery Capability"
          title="Turn Technology Investments Into Successful Projects."
          subtitle="Choose the right people, the right methodology, and the right operational support."
          subtitleClassName="mt-6 max-w-3xl md:max-w-none md:whitespace-nowrap text-[18px] md:text-[21px] leading-relaxed text-slate-200"
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
          testId="project-hero"
          parallax
        />

        {/* Proof & Value */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Proven Delivery Experience.
                <br />
                Measurable Outcomes.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                Over a decade delivering technology and digital transformation projects across the Gulf,
                <br />
                now available to your organization through recruitment, enablement, and project operations.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PROOF.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`project-proof-stat-${i + 1}`}
                  className="group cursor-default rounded-2xl bg-gradient-to-br from-brand-pistachio/40 to-brand-sea/20 border border-brand-emerald/10 p-7 transition-shadow hover:shadow-xl hover:shadow-brand-emerald/10 hover:border-brand-emerald/30"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: p.iconBg }}
                  >
                    <p.Icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={1.75} />
                  </div>
                  <div className="mt-5 font-display text-5xl md:text-6xl font-extrabold text-brand-dark tabular-nums leading-none">
                    {p.rangeFrom ? (
                      <>
                        <CountUpNumber to={p.rangeFrom} />–<CountUpNumber to={p.to} />
                        {p.suffix}
                      </>
                    ) : (
                      <>
                        <CountUpNumber from={p.from} to={p.to} />
                        {p.suffix}
                      </>
                    )}
                  </div>
                  <p className="mt-3 text-[14px] font-medium text-slate-700 leading-snug">{p.label}</p>
                </motion.div>
              ))}
            </div>

            {/* What This Means For You */}
            <div className="relative mt-14 rounded-3xl bg-gradient-to-br from-[#07404B] to-[#0D1F2D] p-8 md:p-10 overflow-hidden">
              <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-brand-emerald/25 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-10 w-56 h-56 rounded-full bg-brand-sea/10 blur-3xl pointer-events-none" />
              <div className="relative flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-emerald/15 border border-brand-emerald/25 flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 text-brand-sea" fill="currentColor" strokeWidth={0} />
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-sea">
                  What This Means For You
                </p>
              </div>
              <div className="relative mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {WHAT_IT_MEANS.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] hover:border-brand-emerald/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-emerald/15 border border-brand-emerald/25 flex items-center justify-center">
                      <item.Icon className="w-5 h-5 text-brand-sea" strokeWidth={1.9} />
                    </div>
                    <p className="mt-4 font-display text-[16.5px] font-bold text-white leading-snug">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* The Challenge / The Solution */}
        <Section className="bg-[#F7F9FA]" texture>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12">
              {/* The Challenge */}
              <div>
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Projects Get Harder To Deliver As You Grow
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Are you facing any of these challenges?
                </p>
                <ul className="mt-8 space-y-5">
                  {CHALLENGES.map((c, i) => (
                    <motion.li
                      key={c}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-3.5 pb-5 border-b border-slate-200/70 last:border-b-0 last:pb-0"
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ type: "spring", stiffness: 400, damping: 20, delay: i * 0.06 + 0.1 }}
                        className="w-7 h-7 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold text-[12px] shrink-0"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.div>
                      <p className="text-[15px] leading-relaxed text-slate-700 pt-0.5">{c}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* The Solution */}
              <div className="lg:pl-4 lg:border-l lg:border-slate-200/70">
                <Eyebrow>The Solution</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Better Project Delivery,
                  <br />
                  From Start To Finish.
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Project+ gives you:
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 rounded-2xl bg-gradient-to-br from-brand-emerald/5 to-brand-sea/10 border border-brand-emerald/15 p-6 md:p-7"
                >
                  <ul className="space-y-4">
                    {SOLUTION_HIGHLIGHTS.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" strokeWidth={2} />
                        <p className="text-[14.5px] font-medium leading-relaxed text-brand-dark">{h}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="mt-9">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    How It Starts
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {HOW_IT_STARTS.map((s, i) => (
                      <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="border-t-2 border-brand-emerald pt-3"
                      >
                        <p className="flex items-baseline gap-1.5">
                          <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ type: "spring", stiffness: 400, damping: 20, delay: i * 0.08 + 0.15 }}
                            className="inline-block text-[11px] font-bold text-brand-emerald"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </motion.span>
                          <span className="font-display text-[14.5px] font-bold text-brand-dark">
                            {s.title}
                          </span>
                        </p>
                        <p className="mt-1.5 text-[12.5px] leading-snug text-slate-500">
                          {s.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="project-solution-cta"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Discuss Your Project Needs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* What Project Plus Provides */}
        <Section className="bg-white" id="capabilities">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    What Project Plus Provides
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  One Capability.
                  <br />
                  Three Ways To Strengthen It.
                </h2>
              </div>
              <p className="text-[17px] leading-relaxed text-slate-600">
                Whether you're standing up your first PMO or scaling an existing one, Project Plus combines vetted Project Managers, a proven delivery methodology, and dedicated ProjectOps, so you can strengthen delivery wherever the gap is greatest.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {CAPABILITIES.map((c) => (
                <motion.div
                  key={c.slug}
                  id={c.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="scroll-mt-28 rounded-2xl bg-white border border-slate-200/70 p-7 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                  data-testid={`project-capability-${c.slug}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    <p className="font-display text-[17px] font-bold text-brand-dark tracking-tight">
                      {c.name}
                    </p>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                    {c.desc}
                  </p>
                  <div className="mt-5 pt-5 border-t border-slate-200/70 flex flex-wrap gap-2">
                    {c.bestFor.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-[12.5px] font-medium text-slate-600"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={c.to || `/project-plus#${c.slug}`}
                    data-testid={`project-capability-cta-${c.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-emerald hover:gap-3 transition-all"
                  >
                    Explore {c.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Why We Are Different / What This Means For You */}
        <DifferenceMeansSection
          testId="project-difference"
          eyebrow="The Project Plus Difference"
          title={
            <>
              We Don&apos;t Just Supply Talent.
              <br />
              We Build Delivery Engines.
            </>
          }
          subtitle={
            <>
              Consultants leave you with reports.
              <br />
              <br />
              Agencies leave you with CVs.
              <br />
              <br />
              Project Plus builds your actual delivery capability giving you total control, clear visibility, and predictable results.
            </>
          }
          rightSlot={
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col rounded-3xl bg-white shadow-2xl shadow-black/40 overflow-hidden p-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-[16px] font-bold text-brand-dark leading-tight">{NORTHWIND.title}</p>
                  <div className="mt-1 flex items-center gap-1.5 text-[10.5px] text-slate-500">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-brand-emerald shrink-0"
                    />
                    {NORTHWIND.status} · updated {NORTHWIND.updated}
                  </div>
                </div>
                <span className="shrink-0 inline-flex items-center rounded-lg bg-brand-emerald text-white text-[10.5px] font-semibold px-2.5 py-1.5">
                  Workspace
                </span>
              </div>

              {/* Meta row */}
              <div className="mt-4 grid grid-cols-4 gap-2.5 rounded-xl bg-[#F7F9FA] border border-slate-100 p-3">
                {[["Owner", NORTHWIND.owner], ["Type", NORTHWIND.type], ["Start", NORTHWIND.start], ["Due", NORTHWIND.due]].map(([l, v]) => (
                  <div key={l} className="min-w-0">
                    <p className="text-[8.5px] font-semibold uppercase tracking-wide text-slate-400">{l}</p>
                    <p className="mt-0.5 text-[10.5px] font-semibold text-brand-dark truncate">{v}</p>
                  </div>
                ))}
              </div>
              <div className="mt-2.5 flex items-center gap-3">
                <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: NORTHWIND.progress / 100 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ transformOrigin: "left" }}
                    className="h-full rounded-full bg-brand-emerald"
                  />
                </div>
                <span className="text-[11px] font-bold text-brand-emerald shrink-0">{NORTHWIND.progress}%</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {/* Requirements */}
                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <p className="text-[11px] font-bold text-brand-dark">Requirements</p>
                  <p className="mt-1.5 font-display text-[22px] font-extrabold text-brand-dark leading-none">{REQUIREMENTS.total}</p>
                  <p className="mt-1 text-[9px] text-slate-400">Total requirements</p>
                  <div className="mt-3 flex flex-col gap-2.5">
                    {REQUIREMENTS.items.map((it, i) => (
                      <motion.div
                        key={it.label}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <Donut pct={it.pct} color={it.color} size={26} />
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold text-brand-dark leading-none">{it.pct}%</p>
                          <p className="mt-0.5 text-[9px] text-slate-400 truncate">{it.label} · {it.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Sprints */}
                <div className="rounded-2xl bg-gradient-to-br from-[#07404B] to-[#0D1F2D] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold">Sprints</p>
                    <span className="text-[9px] text-brand-sea">{SPRINTS.total} total</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-y-2.5 gap-x-2">
                    {SPRINTS.stats.map((s, i) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
                      >
                        <p className="font-display text-[15px] font-extrabold leading-none">{s.value}</p>
                        <p className="mt-0.5 text-[8.5px] text-slate-300">{s.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          }
        />

        {/* Pricing */}
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    Pricing
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Stronger Governance.
                  <br />
                  Better Visibility.
                  <br />
                  Higher Project Success.
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-slate-600">
                  Choose the engagement model that gives you the right balance of capability, flexibility, and delivery confidence.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="project-pricing-cta"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Request a Tailored Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PRICING.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`project-pricing-${p.slug}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    <p className="font-display text-[17px] font-bold text-brand-dark tracking-tight">{p.name}</p>
                  </div>
                  <div className="mt-5 pt-5 border-t border-slate-200/70 space-y-2.5">
                    {p.models.map((m) => (
                      <div key={m} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-brand-emerald" />
                        <span className="text-[13.5px] leading-relaxed text-slate-600">{m}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-[13.5px] text-slate-500">
              Commercial models can be purchased individually or combined into a tailored Project Plus engagement aligned to your delivery gap and initiative scale.
            </p>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Build The Capability To Deliver With Confidence."
          subtitle="Improve project success rates, reduce delivery delays, enforce governance, and scale initiatives with confidence, without building a complete internal PMO."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common Questions About Project Plus" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`project-faq-${i + 1}`} />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </ServicePageShell>
  );
}
