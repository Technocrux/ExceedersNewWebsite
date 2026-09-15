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
  CheckCircle2, Wallet, CreditCard, Layers, Network, Building2,
  ClipboardCheck, ShieldCheck, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  "Reduce support costs",
  "Replace multiple support contracts with one agreement",
  "Eliminate the complexity of coordinating providers",
  "Improve technology availability and resilience",
];

const CAPABILITIES = [
  {
    title: "We Simplify Your Support",
    desc: "Bring multiple technologies and providers under one managed agreement.",
    icon: Layers,
  },
  {
    title: "We Manage Every Provider",
    desc: "Coordinate incidents, ownership, and escalations from start to resolution.",
    icon: Network,
  },
  {
    title: "We Make Support Spend More Flexible",
    desc: "Use pay-as-you-go or prepaid credits across supported technologies.",
    icon: Wallet,
  },
];

const SOLUTION = [
  {
    title: "Unified Support Agreement",
    desc: "We replace multiple vendor contracts with one managed agreement covering your entire technology environment.",
    icon: ClipboardCheck,
  },
  {
    title: "Multi-Provider Coordination",
    desc: "A dedicated Technology Assurance Team acts as your single point of contact, managing every provider and coordinating incidents from report to resolution.",
    icon: Network,
  },
  {
    title: "Flexible Consumption Model",
    desc: "Instead of fixed annual contracts, you consume support credits where you need them most, so nothing goes underutilized.",
    icon: CreditCard,
  },
  {
    title: "Continuous Assurance",
    desc: "We monitor service performance and SLAs across all providers and continuously optimize support quality, availability, and cost.",
    icon: ShieldCheck,
  },
];

const PRICING_MODELS = [
  {
    title: "Pay-As-You-Go",
    desc: "Access support when needed and pay based on consumption.",
    bestWhen: "Support needs are occasional or hard to forecast.",
    details: [
      { label: "Billed", value: "Monthly, on actual usage" },
      { label: "Commitment", value: "None" },
      { label: "Unit rate", value: "Standard" },
    ],
  },
  {
    title: "Prepaid Credits",
    desc: "Purchase support credits in advance and use them across supported technologies as your needs change.",
    bestWhen: "You expect steady demand and want a predictable budget line.",
    details: [
      { label: "Billed", value: "Upfront, drawn down as used" },
      { label: "Commitment", value: "Credit pack" },
      { label: "Unit rate", value: "Discounted", accent: true },
    ],
    highlight: true,
    badge: "Better Value At Volume",
  },
];

const CHALLENGES = [
  "Too many contracts and renewals to manage",
  "Unclear ownership when issues happen",
  "Time lost chasing providers and escalations",
  "Higher costs from underused support contracts",
  "Limited visibility across providers and spending",
];

const HOW_WE_DO_IT = [
  "Assess your technology landscape",
  "Identify and onboard a primary and secondary support provider for every technology in your environment",
  "Establish a centralized Service Desk",
  "Coordinate incidents across all providers",
  "Monitor service performance and SLAs",
  "Continuously optimize support quality, availability, resilience, and cost",
];

const FAQS = [
  {
    q: "Do we need to cancel our existing technology providers?",
    a: "No. We work with your existing providers and coordinate all support activities on your behalf.",
  },
  {
    q: "Can we use one support balance across multiple technologies?",
    a: "Yes. Support Plus Assurance allows you to consume your support credits across supported technologies instead of being locked into separate vendor contracts.",
  },
  {
    q: "What happens if one provider cannot resolve an issue?",
    a: "Because we maintain a network of qualified technology partners, we can engage alternative providers when required, reducing dependency on a single vendor.",
  },
  {
    q: "Is pricing based on subscriptions or incidents?",
    a: "Support Plus Assurance uses a consumption-based model, allowing you to choose either pay-as-you-go or prepaid credits, giving you maximum flexibility while reducing wasted support spending.",
  },
];

export default function AssurancePlus() {
  const meta = PAGE_META.cioAssurance;
  return (
    <ServicePageShell testId="assurance-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "cioAssurance",
            name: "Assurance+ — Unified Multi-Provider Technology Support",
            serviceType: "Managed Multi-Provider Support",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="ASSURANCE PLUS · For Multi-Technology Environments"
          title={
            <>
              One Agreement.
              <br />
              Every Provider Managed.
            </>
          }
          subtitle="We consolidate support across your technology providers into one managed agreement, giving you faster resolution, lower costs, and one accountable team."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
          testId="assurance-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations seeking to simplify multi-vendor IT management.
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
                      <Wallet className="w-4.5 h-4.5 text-brand-pine" />
                      <span className="text-[14px] font-semibold text-brand-dark">Pay-As-You-Go Support</span>
                    </div>
                    <span className="text-[13px] font-medium text-slate-400">or</span>
                    <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-brand-emerald/20 px-4 py-2.5 shadow-sm shadow-slate-900/5">
                      <CreditCard className="w-4.5 h-4.5 text-brand-pine" />
                      <span className="text-[14px] font-semibold text-brand-dark">Prepaid Support Credits</span>
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
              title="Unified Support, Zero Complexity"
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
              data-testid="assurance-proof-stat"
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl bg-white border border-slate-200/70 p-7 md:p-8"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#EAEDC0" }}>
                <Building2 className="w-6 h-6 text-brand-emerald" strokeWidth={1.9} />
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark tabular-nums">
                  <CountUpNumber to={200} />+
                </p>
                <p className="mt-1 text-[14px] font-semibold text-slate-700">Organizations Supported</p>
                <p className="mt-1 text-[13.5px] text-slate-500">Enterprise and government environments supported across complex technology ecosystems.</p>
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
                  Managing Multiple Technology Providers Is Expensive
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] font-semibold text-brand-dark">
                  Working with multiple providers often means:
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
              title={
                <>
                  Your Central Technology Support
                  <br />
                  Management Team
                </>
              }
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    Pricing
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Transparent Consumption-Based Pricing
                </h2>
              </div>
              <div className="lg:flex lg:justify-end">
                <p className="text-[16px] leading-relaxed text-slate-600 lg:max-w-md">
                  Instead of maintaining separate fixed support contracts for every technology, Assurance+ gives you one flexible support model across your supported environment.
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="assurance-pricing-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
              >
                Request a Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              {PRICING_MODELS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`assurance-pricing-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`relative flex flex-col rounded-2xl border p-7 ${
                    p.highlight
                      ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] border-transparent"
                      : "bg-[#F7F9FA] border-slate-200/70"
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-7 rounded-full bg-brand-emerald text-white text-[10.5px] font-semibold uppercase tracking-[0.08em] px-3 py-1">
                      {p.badge}
                    </span>
                  )}

                  <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${p.highlight ? "text-brand-sea" : "text-slate-500"}`}>
                    Model {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className={`mt-2 font-display text-[19px] font-bold ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                    {p.title}
                  </p>
                  <p className={`mt-2 text-[13.5px] leading-relaxed ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {p.desc}
                  </p>

                  <div className={`mt-5 pt-4 border-t ${p.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">Best When</p>
                    <p className={`mt-1.5 text-[13.5px] leading-relaxed font-medium ${p.highlight ? "text-slate-200" : "text-slate-700"}`}>
                      {p.bestWhen}
                    </p>
                  </div>

                  <div className={`mt-5 pt-4 border-t space-y-2.5 flex-1 ${p.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    {p.details.map((d) => (
                      <div key={d.label} className="flex items-center justify-between gap-3 text-[13px]">
                        <span className={p.highlight ? "text-slate-300" : "text-slate-500"}>{d.label}</span>
                        <span
                          className={`font-semibold ${
                            d.accent
                              ? p.highlight ? "text-brand-sea" : "text-brand-emerald"
                              : p.highlight ? "text-white" : "text-brand-dark"
                          }`}
                        >
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-[13.5px] text-slate-500">
              Pricing depends on your technology environment, support requirements, and expected consumption.
            </p>
          </Container>
        </Section>

        {/* How We Do It */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>How We Do It</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                A Clear Path To Unified Support.
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
          title={
            <>
              Stop Managing Vendors.
              <br />
              Start Managing Your Business.
            </>
          }
          subtitle="Replace multiple support contracts with one managed agreement that simplifies operations, reduces costs, and keeps your technology running reliably."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Assurance+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`assurance-faq-${i + 1}`} />
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
