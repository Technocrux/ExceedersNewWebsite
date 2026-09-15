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
  FeatureCard,
  FAQItem,
  ServiceFinalCTA,
  Eyebrow,
} from "@/components/service/ServicePrimitives";
import { motion } from "framer-motion";
import {
  Clock, ShieldCheck, Eye, ClipboardList, TrendingDown, UserCog, Users,
  Monitor, Bot, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  { label: "More Time for Delivery", icon: Clock },
  { label: "Stronger Project Governance", icon: ShieldCheck },
  { label: "Clearer Executive Visibility", icon: Eye },
  { label: "Better Project Traceability", icon: ClipboardList },
  { label: "Less PMO Overhead", icon: TrendingDown },
];

const ENGAGE_MODELS = [
  { label: "Dedicated ProjectOps Specialist", icon: UserCog },
  { label: "ProjectOps Team as a Service", icon: Users },
  { label: "Optional PlanneXe Project Platform", icon: Monitor },
];

const PROOF = [
  {
    title: "Embedded in Your Project Team",
    desc: "ProjectOps becomes part of your governance structure, not an occasional external check in.",
    icon: Users,
  },
  {
    title: "Continuous Project Control",
    desc: "Planning, reporting, documentation, risks, and compliance stay maintained throughout delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Digitally Enabled",
    desc: "ProjectOps can be supported by our AI powered digital workspace and PlanneXe to centralize project information and improve traceability.",
    icon: Bot,
  },
];

const CHALLENGE_QUESTIONS = [
  "Do you know where every project stands right now?",
  "Are decisions documented, or sitting in someone's inbox?",
  "Do risks surface early, or only after they've cost you time?",
];

const SOLUTION = [
  {
    title: "Dedicated ProjectOps Specialist",
    desc: "One person joins your team and owns governance, planning, reporting, and compliance, so it's someone's job, not everyone's afterthought.",
  },
  {
    title: "Governance That Doesn't Slip",
    desc: "Charters, plans, approvals, risks, and decisions stay current through the whole project, not just at kickoff.",
  },
  {
    title: "Reporting You Don't Chase",
    desc: "Dashboards and status updates get built and sent, so \"what's the latest\" isn't a question someone has to answer manually.",
  },
  {
    title: "Risk Flagged Early",
    desc: "Dependencies and approvals are watched continuously, so issues get raised while they're still small.",
  },
  {
    title: "PlanneXe (Optional)",
    desc: "One platform for planning and reporting, instead of five tools and a shared drive nobody trusts.",
  },
];

const PRICING = [
  {
    category: "People",
    label: "Dedicated ProjectOps Specialist",
    price: "USD 4,000",
    unit: "per resource, per month",
    desc: "Scales with the number of specialists embedded in your team.",
  },
  {
    category: "Platform",
    label: "ProjectOps + PlanneXe Platform",
    price: "USD 1,000",
    unit: "per project, per month",
    desc: "Scales with the number of active projects under management.",
    highlight: true,
  },
];

const HOW_WE_DO_IT = [
  "Assign a dedicated ProjectOps Specialist",
  "Establish project governance",
  "Manage planning, reporting, documentation, risks, approvals, and compliance",
  "Operate project ceremonies",
  "Generate executive dashboards and reports",
  "Continuously monitor project health and proactively escalate risks",
];

const FAQS = [
  {
    q: "What does the ProjectOps Specialist do?",
    a: "The specialist manages project operations, governance, planning, reporting, documentation, compliance, risks, and project records while becoming part of your project governance team.",
  },
  {
    q: "Does ProjectOps replace the Project Manager?",
    a: "No. The Project Manager remains responsible for customer engagement, leadership, delivery, and decision-making. ProjectOps provides the operational support that enables them to be more effective.",
  },
  {
    q: "Can one ProjectOps Specialist support multiple projects?",
    a: "Yes. Depending on project size and complexity, one specialist can support multiple projects simultaneously.",
  },
  {
    q: "Do we need our own project management tool?",
    a: "No. If required, the ProjectOps team can operate using the PlanneXe platform, allowing projects to start immediately without depending on customer-provided tools.",
  },
];

export default function OperatePlus() {
  const meta = PAGE_META.projectOperate;
  return (
    <ServicePageShell testId="operate-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "projectOperate",
            name: "Operate+ — ProjectOps Governance & Reporting Support",
            serviceType: "Managed Project Operations",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="OPERATE PLUS · Operational Support For Project Managers"
          title={
            <>
              Focus on Delivering Projects.
              <br />
              We&apos;ll Handle the Operations.
            </>
          }
          subtitle="Operate+ handles governance, reporting, and project operations so your PMs can focus on delivery."
          cta="Book a ProjectOps Assessment"
          ctaHref={CALENDLY_URL}
          testId="operate-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations scaling project performance and governance without growing their PMO.
                </h2>
              </div>

              <div className="lg:col-span-7 rounded-3xl bg-[#F7F9FA] border border-slate-200/70 p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                  Why It's Good
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WHY_GOOD.map((w) => (
                    <li key={w.label} className="flex items-center gap-2.5">
                      <w.icon className="w-4.5 h-4.5 text-brand-emerald shrink-0" />
                      <span className="text-[14.5px] leading-relaxed text-slate-700">{w.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-slate-200/70">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                    Engagement Models
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {ENGAGE_MODELS.map((m) => (
                      <div
                        key={m.label}
                        className="inline-flex items-center gap-2.5 rounded-full bg-white border border-brand-emerald/20 px-4 py-2.5 shadow-sm shadow-slate-900/5"
                      >
                        <m.icon className="w-4.5 h-4.5 text-brand-pine" />
                        <span className="text-[14px] font-semibold text-brand-dark">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Proof */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <SectionHeading
              eyebrow="Proof & Capabilities"
              title="Proven Through Gulf Project Delivery"
              subtitle="Organizations using our ProjectOps approach reported higher project success rates, stronger governance, and significantly better project traceability."
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROOF.map((p) => (
                <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.desc} />
              ))}
            </div>
          </Container>
        </Section>

        {/* The Challenge */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Somewhere Along the Way, Your PM Became an Admin
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Projects grow, and so does the paperwork. Someone has to own it, so it falls to the Project Manager, the person who should be leading the customer instead.
                </p>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] font-semibold text-brand-dark">
                  Ask yourself:
                </p>
                <ul className="mt-5 space-y-4">
                  {CHALLENGE_QUESTIONS.map((q, i) => (
                    <li key={q} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold text-[12px] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-[15px] leading-relaxed text-slate-700">{q}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[15px] font-semibold text-brand-dark">
                  It's not a people problem. It's a job that was never assigned.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Solution */}
        <Section className="bg-[#F7F9FA]" id="our-solution">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-6">
              <div className="lg:col-start-1 lg:col-span-4 lg:row-start-1">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    Our Solution
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  We Take the Operational Load Off Your PM's Desk
                </h2>
              </div>

              {[SOLUTION[1], SOLUTION[2]].map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`h-full flex flex-col rounded-2xl bg-white border border-slate-200/70 p-6 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all lg:row-start-1 ${
                    i === 0 ? "lg:col-start-5 lg:col-span-4 accent-glow-right" : "lg:col-start-9 lg:col-span-4 accent-glow-top-right"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    <p className="font-display text-[16px] font-bold text-brand-dark leading-tight">{s.title}</p>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">{s.desc}</p>
                </motion.div>
              ))}

              {[SOLUTION[0], SOLUTION[3], SOLUTION[4]].map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.12 + i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`h-full flex flex-col rounded-2xl bg-white border border-slate-200/70 p-6 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all lg:row-start-2 ${
                    i === 0 ? "lg:col-start-1 lg:col-span-4 accent-glow-corner" : i === 1 ? "lg:col-start-5 lg:col-span-4 accent-glow-bottom" : "lg:col-start-9 lg:col-span-4 accent-glow-bottom-right"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    <p className="font-display text-[16px] font-bold text-brand-dark leading-tight">{s.title}</p>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section className="bg-white" id="pricing">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              <div className="lg:col-span-6">
                <Eyebrow>Pricing</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Straightforward Pricing, Scaled to What You Need
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-slate-600">
                  Take a dedicated specialist, the platform, or both — you pay per resource and per project, so the cost scales with the work rather than a fixed contract.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="operate-pricing-cta"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Book a ProjectOps Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRICING.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    data-testid={`operate-pricing-${p.label.toLowerCase().replace(/\s+/g, "-").replace(/\+/g, "plus")}`}
                    className={`rounded-2xl border p-6 flex flex-col ${
                      p.highlight
                        ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] border-transparent"
                        : "bg-[#F7F9FA] border-slate-200/70"
                    }`}
                  >
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${p.highlight ? "text-brand-sea" : "text-slate-500"}`}>
                      {p.category}
                    </p>
                    <p className={`mt-2 font-display text-[17px] font-bold leading-snug ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                      {p.label}
                    </p>

                    <div className={`mt-5 pt-4 border-t ${p.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                      <p className={`font-display text-[22px] font-extrabold leading-tight ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                        {p.price}
                      </p>
                      <p className={`mt-1 text-[12px] ${p.highlight ? "text-slate-400" : "text-slate-500"}`}>
                        {p.unit}
                      </p>
                    </div>

                    <p className={`mt-5 pt-4 border-t text-[13px] leading-relaxed flex-1 ${p.highlight ? "border-white/10 text-slate-300" : "border-slate-200/70 text-slate-600"}`}>
                      {p.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/70 flex items-start gap-3">
              <span className="shrink-0 rounded-full border border-amber-300 bg-amber-50 text-amber-700 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5">
                Lead Time
              </span>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Certified ProjectOps Specialists are in high demand — new engagements typically take{" "}
                <span className="font-semibold text-brand-dark">3 to 4 months</span> to start.
              </p>
            </div>
          </Container>
        </Section>

        {/* How We Do It */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>How We Do It</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                A Clear Path From Assignment To Ongoing Oversight.
              </h2>
            </div>
            <div className="mt-14 flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-0">
              {HOW_WE_DO_IT.map((step, i) => {
                const isLast = i === HOW_WE_DO_IT.length - 1;
                return (
                  <div key={step} className="relative flex-1">
                    {!isLast && (
                      <div className="hidden sm:block absolute top-4 left-8 right-0 h-0 border-t-2 border-dashed border-slate-300" />
                    )}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 400, damping: 22, delay: i * 0.08 }}
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0 ${
                        isLast ? "bg-brand-dark" : "bg-brand-emerald"
                      }`}
                    >
                      {i + 1}
                    </motion.div>
                    <p className="mt-4 pr-4 text-[13.5px] leading-snug font-medium text-brand-dark">
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title={
            <>
              Give Your Project Managers
              <br />
              Their Time Back
            </>
          }
          subtitle="Stop letting admin work eat into delivery. Let Operate+ handle governance, reporting, and compliance while your team gets projects done."
          cta="Book a ProjectOps Assessment"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Operate+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`operate-faq-${i + 1}`} />
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
