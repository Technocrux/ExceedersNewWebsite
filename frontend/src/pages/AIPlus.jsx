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
                  Organizations that want to use AI to improve productivity, automate repetitive work, and standardize outputs, not just experiment with another AI tool.
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
                    How You Engage
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
            <div className="max-w-3xl">
              <Eyebrow>The Challenge</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                AI Tools Alone Won't Transform Your Business
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
                New AI tools appear every day, but real business value takes more than connecting to an external AI provider.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                Building Agentic AI requires the right AI expertise, development capabilities, system integrations, business rules, and ongoing optimization to turn AI into a working part of your operations.
              </p>
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
            <div className="max-w-2xl mx-auto text-center">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Transparent Pricing
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                We assess your process, design the AI workflow, build and deploy the solution, and continuously optimize its performance. One business process at a time.
              </p>
            </div>

            <div className="mt-12 max-w-md mx-auto rounded-3xl bg-white border border-slate-200/70 overflow-hidden">
              <div className="h-1.5 bg-brand-emerald" />
              <div className="p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center" style={{ backgroundColor: "#D7EBC7" }}>
                  <Bot className="w-6 h-6 text-[#07404B]" strokeWidth={1.9} />
                </div>
                <p className="mt-5 font-display text-[19px] font-bold text-brand-dark">Agentic AI Development &amp; Deployment</p>
                <p className="mt-3 font-display text-3xl font-extrabold text-brand-emerald">
                  USD 2,000–4,000<span className="text-[15px] font-semibold text-slate-500"> per AI agent</span>
                </p>
                <p className="mt-4 text-[13.5px] text-slate-500">
                  Pricing depends on complexity, integrations, and the business process being automated.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="ai-pricing-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Request a Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
