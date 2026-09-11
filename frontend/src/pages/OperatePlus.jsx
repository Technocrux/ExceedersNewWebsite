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
  Monitor, Bot, AlertTriangle, HelpCircle, BarChart3, ArrowRight, Info,
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
    icon: UserCog,
  },
  {
    title: "Governance That Doesn't Slip",
    desc: "Charters, plans, approvals, risks, and decisions stay current through the whole project, not just at kickoff.",
    icon: ShieldCheck,
  },
  {
    title: "Reporting You Don't Chase",
    desc: "Dashboards and status updates get built and sent, so \"what's the latest\" isn't a question someone has to answer manually.",
    icon: BarChart3,
  },
  {
    title: "Risk Flagged Early",
    desc: "Dependencies and approvals are watched continuously, so issues get raised while they're still small.",
    icon: AlertTriangle,
  },
  {
    title: "PlanneXe (Optional)",
    desc: "One platform for planning and reporting, instead of five tools and a shared drive nobody trusts.",
    icon: Monitor,
  },
];

const PRICING = [
  {
    label: "Dedicated ProjectOps Specialist",
    price: "USD 4,000",
    unit: "per resource, per month",
    icon: UserCog,
  },
  {
    label: "ProjectOps + PlanneXe Platform",
    price: "USD 1,000",
    unit: "per project, per month",
    icon: Monitor,
  },
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
                  Organizations with internal Project Managers that need stronger governance, reporting, and project execution without growing their PMO.
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
                    How You Engage
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
              eyebrow="Proof"
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
              <div className="lg:col-span-5">
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Somewhere Along the Way, Your PM Became an Admin
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Projects grow, and so does the paperwork. Someone has to own it, so it falls to the Project Manager, the person who should be leading the customer instead.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="space-y-3">
                  {CHALLENGE_QUESTIONS.map((q) => (
                    <li key={q} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/60 border border-red-100">
                      <HelpCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-[14.5px] leading-relaxed text-slate-700">{q}</p>
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
            <SectionHeading
              eyebrow="Our Solution"
              title="We Take the Operational Load Off Your PM's Desk"
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
              {SOLUTION.map((s) => (
                <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.desc} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section className="bg-white" id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title="Straightforward Pricing, Scaled to What You Need"
            />
            <div className="mt-12 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PRICING.map((p) => (
                <div
                  key={p.label}
                  data-testid={`operate-pricing-${p.label.toLowerCase().replace(/\s+/g, "-").replace(/\+/g, "plus")}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#D7EBC7" }}>
                    <p.icon className="w-6 h-6 text-[#07404B]" strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 text-[14.5px] font-semibold text-slate-700">{p.label}</p>
                  <p className="mt-2 font-display text-2xl font-extrabold text-brand-emerald">{p.price}</p>
                  <p className="text-[13px] text-slate-500">{p.unit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="operate-pricing-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Book a ProjectOps Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-10 max-w-2xl mx-auto flex items-start gap-3 rounded-2xl bg-amber-50 border border-amber-200 p-5">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[13.5px] leading-relaxed text-amber-900">
                <span className="font-semibold">Heads up:</span> certified ProjectOps Specialists are in high demand. New engagements typically take 3 to 4 months to start.
              </p>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Give Your Project Managers Their Time Back"
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
