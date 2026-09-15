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
  CountUpNumber,
} from "@/components/service/ServicePrimitives";
import { motion } from "framer-motion";
import {
  CheckCircle2, Bot, Workflow, RefreshCcw, Search, GitMerge, TrendingUp,
  Zap, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  "Reduce repetitive manual work",
  "Standardize business outputs and quality",
  "Generate real business value from AI, not just novelty",
  "Reduce operational cost",
];

const CAPABILITIES = [
  {
    title: "We Automate Repetitive Work",
    desc: "Build intelligent workflows that save time and reduce manual effort.",
    icon: Workflow,
  },
  {
    title: "We Build AI Around Your Business",
    desc: "Design AI agents around your processes, rules, and standards.",
    icon: Bot,
  },
  {
    title: "We Keep Your AI Improving",
    desc: "Continuously optimize performance as your business evolves.",
    icon: RefreshCcw,
  },
];

const SOLUTION = [
  {
    title: "AI Opportunity Assessment",
    desc: "We identify the repetitive, time-consuming processes where AI creates measurable value.",
    icon: Search,
  },
  {
    title: "Agentic AI Development",
    desc: "We design and build dedicated AI solutions for your business, not another standalone tool.",
    icon: Bot,
  },
  {
    title: "AI Process Integration",
    desc: "Solutions apply your business rules and generate standardized outputs aligned to your company standards.",
    icon: GitMerge,
  },
  {
    title: "Continuous AI Optimization",
    desc: "As your business evolves, we keep improving performance and expanding capability.",
    icon: TrendingUp,
  },
];

const CHALLENGES = [
  "Finding the right AI expertise",
  "Connecting AI with existing systems",
  "Turning business rules into working AI processes",
  "Building AI agents that fit real operations",
  "Maintaining and improving AI performance over time",
];

const HOW_WE_DO_IT = [
  "Assess business processes",
  "Identify repetitive work",
  "Design Agentic AI solutions",
  "Build and deploy AI within Digital Workspaces",
  "Integrate with business systems and AI models",
  "Train users",
  "Continuously optimize AI performance and business outcomes",
];

const PRICE_DRIVERS = [
  { title: "Process complexity", desc: "Decision points, exceptions and approvals the agent must handle.", badge: "Largest Driver" },
  { title: "Integrations", desc: "How many systems the agent reads from and writes back to.", badge: "Moderate" },
  { title: "Business process automated", desc: "Volume, risk and how much oversight the outcome requires.", badge: "Moderate" },
];

const INCLUDED_IN_EVERY_AGENT = [
  "Process assessment",
  "AI workflow design",
  "Build and deployment",
  "Continuous optimization",
];

const FAQS = [
  {
    q: "What is an Agentic AI?",
    a: "An intelligent digital worker that performs business tasks, follows defined workflows, and produces standardized outputs based on your requirements.",
  },
  {
    q: "Do you just deploy existing AI tools?",
    a: "No — we design and build AI solutions around your business processes, not another standalone application.",
  },
  {
    q: "Can the AI work with multiple AI providers?",
    a: "Yes, our solutions can use multiple AI models while delivering one standardized output.",
  },
  {
    q: "How long does deployment take?",
    a: "Most Agentic AI solutions are designed and deployed within a few weeks, depending on complexity.",
  },
];

export default function AIPlus() {
  const meta = PAGE_META.cioAI;
  return (
    <ServicePageShell testId="ai-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "cioAI",
            name: "AI+ — Agentic AI Development for Growing SMEs",
            serviceType: "Agentic AI Development",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="AI PLUS · FOR GROWING SMEs, 20–200 EMPLOYEES"
          title={
            <>
              AI Isn&apos;t the Strategy.
              <br />
              It&apos;s the Engine.
            </>
          }
          subtitle="We identify the business processes worth automating, then build the Agentic AI that runs them."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
          testId="ai-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Ideal for organizations seeking real AI productivity and automated workflows.
                </h2>
              </div>

              <div className="lg:col-span-7 rounded-3xl bg-[#F7F9FA] border border-slate-200/70 p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                  Why It's Good
                </p>
                <ul className="mt-4 space-y-3">
                  {WHY_GOOD.map((w) => (
                    <li key={w} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="text-[14.5px] leading-relaxed text-slate-700">{w}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-slate-200/70">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                    Engagement Models
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-brand-emerald/20 px-4 py-2.5 shadow-sm shadow-slate-900/5">
                      <Search className="w-4.5 h-4.5 text-brand-pine" />
                      <span className="text-[14px] font-semibold text-brand-dark">AI Opportunity Assessment</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                    <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-brand-emerald/20 px-4 py-2.5 shadow-sm shadow-slate-900/5">
                      <Bot className="w-4.5 h-4.5 text-brand-pine" />
                      <span className="text-[14px] font-semibold text-brand-dark">Agentic AI Development &amp; Deployment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Proof & Capabilities */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <SectionHeading
              eyebrow="Proof & Capabilities"
              title="From AI Capability to Business Results."
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {CAPABILITIES.map((c) => (
                <FeatureCard key={c.title} icon={c.icon} title={c.title} description={c.desc} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              data-testid="ai-proof-stat"
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl bg-white border border-slate-200/70 p-7 md:p-8"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#D7EBC7" }}>
                <Zap className="w-6 h-6 text-[#07404B]" strokeWidth={1.9} />
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark tabular-nums">
                  <CountUpNumber to={60} />%
                </p>
                <p className="mt-1 text-[14px] font-semibold text-slate-700">Faster Candidate Screening</p>
                <p className="mt-1 text-[13.5px] text-slate-500">Achieved by using AI to automate candidate matching and initial screening.</p>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* The Challenge */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  AI Tools Alone Won't Transform Your Business
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Building Agentic AI takes more than choosing the right tool.
                </p>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] font-semibold text-brand-dark">
                  Businesses often struggle with:
                </p>
                <ul className="mt-5 space-y-4">
                  {CHALLENGES.map((c, i) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold text-[12px] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-[15px] leading-relaxed text-slate-700">{c}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Solution */}
        <Section className="bg-[#F7F9FA]" id="our-solution">
          <Container>
            <SectionHeading
              eyebrow="Our Solution"
              title="Your AI Transformation Partner"
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
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-brand-emerald" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                  Pricing
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Transparent Pricing
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                One business process at a time, priced per AI agent — so you know the cost of each automation before it starts.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              {/* Engagement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-gradient-to-br from-[#07404B] to-[#0D1F2D] p-7 md:p-8 flex flex-col"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sea">Engagement</p>
                <p className="mt-2 font-display text-[22px] font-bold text-white leading-snug">
                  Agentic AI Development &amp; Deployment
                </p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="font-display text-[30px] font-extrabold leading-tight text-white">
                    USD 2,000–4,000
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">
                    per AI agent, covering build and deployment
                  </p>
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="ai-pricing-cta"
                  className="group mt-7 w-fit inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Request a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* What Moves The Number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl bg-[#F7F9FA] border border-slate-200/70 p-7 md:p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 pb-5 border-b border-slate-200/70">
                  What Moves The Number
                </p>
                <div>
                  {PRICE_DRIVERS.map((d, i) => (
                    <div
                      key={d.title}
                      className={`flex items-start justify-between gap-4 py-4 ${
                        i < PRICE_DRIVERS.length - 1 ? "border-b border-slate-200/70" : ""
                      }`}
                    >
                      <div>
                        <p className="font-display text-[15px] font-bold text-brand-dark">{d.title}</p>
                        <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{d.desc}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-brand-emerald/30 text-brand-emerald text-[10.5px] font-semibold uppercase tracking-[0.06em] px-3 py-1">
                        {d.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 pt-5 border-t border-slate-200/70 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Included In Every Agent
                </p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {INCLUDED_IN_EVERY_AGENT.map((item, i) => (
                    <div key={item}>
                      <p className="text-[11px] font-bold text-brand-emerald">{String(i + 1).padStart(2, "0")}</p>
                      <p className="mt-1 text-[13px] font-semibold text-brand-dark leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* How We Do It */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>How We Do It</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                A Clear Path From Idea To AI In Production.
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
                    <p className="mt-4 pr-4 text-[14px] leading-snug font-medium text-brand-dark">
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
          title="Start Building AI That Works for Your Business"
          subtitle="Stop experimenting with disconnected AI tools. Let AI+ design and deploy intelligent agents that automate your processes and deliver consistent, high-quality outcomes."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about AI+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`ai-faq-${i + 1}`} />
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
