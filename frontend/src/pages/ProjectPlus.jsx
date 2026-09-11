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
  ClipboardList, ArrowRight, CheckCircle2, Layers,
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
          subtitle="Build a project delivery capability that consistently delivers successful technology and digital transformation projects, through the right people, the right methodology, and the right operational support."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
          testId="project-hero"
        />

        {/* Proof & Value */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Proven delivery experience. Measurable outcomes.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                Over a decade delivering technology and digital transformation projects across the Gulf, now available to your organization through recruitment, enablement, and project operations.
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
          </Container>
        </Section>

        {/* The Challenge / The Solution */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12">
              {/* The Challenge */}
              <div>
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Projects Get Harder to Deliver as You Grow
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  As your project portfolio grows, delivery gets harder to manage without the right people, method, and oversight.
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
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold text-[12px] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-[15px] leading-relaxed text-slate-700 pt-0.5">{c}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* The Solution */}
              <div className="lg:pl-4 lg:border-l lg:border-slate-200/70">
                <Eyebrow>The Solution</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Better Project Delivery.
                  <br />
                  From Start to Finish.
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
                          <span className="text-[11px] font-bold text-brand-emerald">
                            {String(i + 1).padStart(2, "0")}
                          </span>
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
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
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
                  Three Ways to Strengthen It.
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
          subtitle="Consultants leave you with reports. Agencies leave you with CVs. Project Plus builds your actual delivery capability giving you total control, clear visibility, and predictable results."
          meansItems={WHAT_IT_MEANS}
        />

        {/* Pricing */}
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title={
                <>
                  Stronger Governance.
                  <br />
                  Better Visibility.
                  <br />
                  Higher Project Success.
                </>
              }
              subtitle="Choose the engagement model that gives you the right balance of capability, flexibility, and delivery confidence."
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: p.iconBg }}
                  >
                    <p.Icon className="w-6 h-6" style={{ color: p.accent }} strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 font-display text-[19px] font-bold text-brand-dark">{p.name}</p>
                  <ul className="mt-4 space-y-2.5">
                    {p.models.map((m) => (
                      <li key={m} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4.5 h-4.5 shrink-0 mt-0.5" style={{ color: p.accent }} />
                        <span className="text-[14px] leading-relaxed text-slate-700">{m}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl mx-auto text-center text-[13.5px] text-slate-500">
              Commercial models can be purchased individually or combined into a tailored Project Plus engagement aligned to your delivery gap and initiative scale.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="project-pricing-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Request a Tailored Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Build the Capability to Deliver With Confidence."
          subtitle="Improve project success rates, reduce delivery delays, enforce governance, and scale initiatives with confidence, without building a complete internal PMO."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Project Plus" />
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
