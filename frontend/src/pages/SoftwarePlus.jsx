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
} from "@/components/service/ServicePrimitives";
import { motion } from "framer-motion";
import {
  ShieldCheck, Scale, Zap, LifeBuoy, Target, Sparkles, TrendingUp, Layers, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  { label: "Lowers the risk of picking the wrong system.", icon: ShieldCheck },
  { label: "Compares options on fit, not on sales pitch.", icon: Scale },
  { label: "Gets you to a shortlist faster than researching alone.", icon: Zap },
  { label: "Keeps support going after the software's live.", icon: LifeBuoy },
];

const ENGAGE_MODELS = [
  { label: "Software Discovery & Recommendation", icon: Layers },
  { label: "Support+ Assurance", icon: LifeBuoy },
];

const PROOF_CAPABILITIES = [
  { title: "Higher Adoption", desc: "Choose solutions users actually accept.", icon: TrendingUp },
  { title: "Faster Acceptance", desc: "Reduce friction during rollout.", icon: Zap },
  { title: "Better Business Fit", desc: "Select the right solution from the start.", icon: Target },
];

const PROOF = [
  { title: "Independent Guidance", desc: "No vendor bias.", icon: ShieldCheck },
  { title: "Business-Fit Evaluation", desc: "Recommendations based on your needs.", icon: Target },
  { title: "Smarter Software Decisions", desc: "Choose with more confidence.", icon: Sparkles },
];

const CHALLENGES = [
  "Compare too many similar options",
  "Define the right business requirements",
  "Check fit with your existing systems",
  "Look beyond price and sales promises",
  "Avoid low adoption and costly replacements",
];

const SOLUTION = [
  {
    title: "Requirement Discovery",
    desc: "We document what your business actually needs before a single vendor enters the conversation.",
  },
  {
    title: "Software Discovery",
    desc: "We identify solutions that match your functional, technical, and budget requirements, not just the popular names.",
  },
  {
    title: "AI-Powered Matching",
    desc: "Your requirements get checked against available software automatically, filtering out anything that isn't a real fit.",
  },
  {
    title: "Solution Evaluation",
    desc: "We compare the shortlist on functionality, cost, security, and implementation effort, so the decision is based on evidence, not a demo.",
  },
  {
    title: "Support+ Assurance (Optional)",
    desc: "Once you've chosen, we stay on for implementation and post-go-live support, so the investment keeps paying off.",
  },
];

const PRICING = [
  {
    category: "Included",
    name: "Software Discovery & Recommendation",
    price: "Free of Charge",
    unit: "included in the engagement",
    desc: "Requirement discovery, software matching, evaluation, comparison, and recommendation.",
    highlight: true,
  },
  {
    category: "Optional Add-On",
    name: "Support+ Assurance",
    price: "Consumption-Based",
    unit: "priced on what you use",
    desc: "Implementation support, vendor coordination, post-go-live support, and ongoing operational assurance.",
  },
];

const HOW_WE_DO_IT = [
  "Understand your business processes",
  "Document your requirements",
  "Identify suitable software solutions",
  "Use AI to match and shortlist the best options",
  "Evaluate each solution objectively",
  "Recommend the best fit",
  "Continue supporting implementation and operational success through Support+ Assurance",
];

const FAQS = [
  {
    q: "What software can you help us find?",
    a: "ERP, CRM, HR, AI, cybersecurity, project management, finance, collaboration, productivity, and other business software solutions.",
  },
  {
    q: "How do you recommend software?",
    a: "We combine structured business discovery, AI-powered matching, and expert evaluation to recommend the software that best fits your business requirements.",
  },
  {
    q: "Are you tied to specific software vendors?",
    a: "No. We remain vendor-neutral and recommend the solution that best meets your business needs.",
  },
  {
    q: "Can you support us after selecting the software?",
    a: "Yes. Through Support+ Assurance, we support software implementation, provide post-implementation support, coordinate with software vendors, and help ensure your solution continues to deliver business value.",
  },
];

export default function SoftwarePlus() {
  const meta = PAGE_META.talentSoftware;
  return (
    <ServicePageShell testId="software-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "talentSoftware",
            name: "Software+ — Vendor-Neutral Business Software Recommendations",
            serviceType: "Business Software Selection",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="SOFTWARE PLUS · FOR ORGANIZATIONS BUYING OR REPLACING BUSINESS SOFTWARE"
          title={
            <>
              We Don&apos;t Sell Software.
              <br />
              We Recommend It.
            </>
          }
          subtitle="We define what your business actually needs, compare the right software options, and help you choose based on fit; not the strongest sales pitch."
          cta="Find the Right Software"
          ctaHref={CALENDLY_URL}
          testId="software-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations planning to buy, replace, or modernize business software.
                </h2>
              </div>

              <div className="lg:col-span-7 rounded-3xl bg-[#F7F9FA] border border-slate-200/70 p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                  Why It's Good
                </p>
                <ul className="mt-4 space-y-3">
                  {WHY_GOOD.map((w) => (
                    <li key={w.label} className="flex items-start gap-2.5">
                      <w.icon className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
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

        {/* Proof & Capabilities */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <SectionHeading
              eyebrow="Proof & Capabilities"
              title={
                <>
                  Better Software Decisions.
                  <br />
                  Better Business Outcomes.
                </>
              }
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-5">
              {PROOF_CAPABILITIES.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="h-full flex flex-col rounded-2xl bg-white border border-brand-emerald/10 p-6"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#C6E5DE" }}>
                    <p.icon className="w-5 h-5 text-brand-emerald" strokeWidth={1.9} />
                  </div>
                  <p className="mt-5 font-display text-[16px] font-bold text-brand-dark leading-tight">{p.title}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Trust & Credibility */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <Eyebrow>Trust & Credibility</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Technology Experts. Independent Advice.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-5">
              {PROOF.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="h-full flex flex-col rounded-2xl bg-[#F7F9FA] border border-brand-emerald/10 p-6"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#C6E5DE" }}>
                    <p.icon className="w-5 h-5 text-brand-emerald" strokeWidth={1.9} />
                  </div>
                  <p className="mt-5 font-display text-[16px] font-bold text-brand-dark leading-tight">{p.title}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* The Challenge */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Picking Software Is Easy. Picking the Right One Isn't.
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] font-semibold text-brand-dark">
                  Choosing software gets difficult when you need to:
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
        <Section className="bg-white" id="our-solution">
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
                  From Business Need to Final Choice
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
                  className={`h-full flex flex-col rounded-2xl bg-[#F7F9FA] border border-slate-200/70 p-6 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all lg:row-start-1 ${
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
                  className={`h-full flex flex-col rounded-2xl bg-[#F7F9FA] border border-slate-200/70 p-6 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all lg:row-start-2 ${
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
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    Pricing
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Find the Right Software at No Cost
                </h2>
              </div>
              <div className="lg:flex lg:justify-end">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="software-pricing-cta"
                  className="group mt-6 lg:mt-0 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Find the Right Software
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-6">
              {PRICING.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`software-pricing-${i + 1}`}
                  className={`h-full flex flex-col rounded-2xl border p-7 ${
                    p.highlight
                      ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] border-transparent"
                      : "bg-white border-slate-200/70"
                  }`}
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${p.highlight ? "text-brand-sea" : "text-slate-500"}`}>
                    {p.category}
                  </p>
                  <p className={`mt-2 font-display text-[18px] font-bold leading-snug ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                    {p.name}
                  </p>

                  <div className={`mt-5 pt-4 border-t ${p.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    <p className={`font-display text-[22px] font-extrabold leading-tight ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                      {p.price}
                    </p>
                    <p className={`mt-1 text-[12px] ${p.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      {p.unit}
                    </p>
                  </div>

                  <p className={`mt-5 pt-4 border-t text-[13.5px] leading-relaxed flex-1 ${p.highlight ? "border-white/10 text-slate-300" : "border-slate-200/70 text-slate-600"}`}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* How We Do It */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>How We Do It</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                A Clear Path From Need To Decision.
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
                    <p className="mt-4 pr-4 text-[13px] leading-snug font-medium text-brand-dark">
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
          title="Choose Software You Won't Regret"
          subtitle={
            <>
              Stop comparing demos, feature lists, and sales promises.
              <br />
              Software+ helps you narrow the market to solutions that fit your requirements; then gives you the clarity to choose the one that makes sense for your business.
            </>
          }
          cta="Find the Right Software"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Software+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`software-faq-${i + 1}`} />
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
