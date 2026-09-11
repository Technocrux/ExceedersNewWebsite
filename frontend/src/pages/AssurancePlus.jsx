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
    icon: Wallet,
  },
  {
    title: "Prepaid Credits",
    desc: "Purchase support credits in advance and use them across supported technologies as your needs change.",
    icon: CreditCard,
  },
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
          subtitle="We consolidate support across your technology providers into one managed agreement, giving you faster resolution, lower costs, and one team accountable for it all."
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
                  Organizations relying on multiple technologies and support providers that want a simpler, more cost-effective way to manage IT support.
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
            <div className="max-w-3xl">
              <Eyebrow>The Challenge</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Managing Multiple Technology Providers Is Expensive
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
                Every new system can bring another provider, support contract, renewal, escalation path, and budget.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                When something goes wrong, your team is left coordinating vendors, chasing ownership, and managing escalations, while fixed support contracts often remain underused and costly.
              </p>
            </div>
          </Container>
        </Section>

        {/* Our Solution */}
        <Section className="bg-[#F7F9FA]" id="our-solution">
          <Container>
            <SectionHeading
              eyebrow="Our Solution"
              title="Your Central Technology Support Management Team"
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
                Transparent Consumption-Based Pricing
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                Instead of maintaining separate fixed support contracts for every technology, Assurance+ gives you one flexible support model across your supported environment.
              </p>
            </div>

            <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PRICING_MODELS.map((p) => (
                <div
                  key={p.title}
                  data-testid={`assurance-pricing-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EAEDC0" }}>
                    <p.icon className="w-6 h-6 text-brand-emerald" strokeWidth={1.9} />
                  </div>
                  <p className="mt-5 font-display text-[19px] font-bold text-brand-dark">{p.title}</p>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl mx-auto text-center text-[13.5px] text-slate-500">
              Pricing depends on your technology environment, support requirements, and expected consumption.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="assurance-pricing-cta"
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
