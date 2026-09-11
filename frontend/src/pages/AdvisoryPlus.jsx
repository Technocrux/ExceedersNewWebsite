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
  Compass, CheckCircle2, Route, TrendingUp, Rocket, Layers, Network,
  ClipboardList, RefreshCcw, Briefcase, TrendingDown,
} from "lucide-react";

const WHY_GOOD = [
  "Grow through better use of technology",
  "Avoid costly technology investment mistakes",
  "One accountable team instead of managing it yourself",
];

const CAPABILITIES = [
  {
    title: "We Turn Technology Into Your Growth Roadmap",
    desc: "Align technology priorities and investments with your business goals.",
    icon: Route,
  },
  {
    title: "We Help You Make Better Technology Investments",
    desc: "Choose the right solutions and providers with less risk and wasted spend.",
    icon: TrendingUp,
  },
  {
    title: "We Drive Transformation From Strategy to Results",
    desc: "Lead delivery, manage providers, and keep technology on track.",
    icon: Rocket,
  },
];

const CHALLENGES = [
  "Choose the right technologies for growth",
  "Manage software vendors and IT providers",
  "Deliver projects successfully",
  "Achieve the expected business value",
  "Improve technology after implementation",
];

const SOLUTION = [
  {
    title: "Digital Transformation Strategy",
    desc: "We align technology with your business goals and create a practical roadmap for transformation.",
    icon: Route,
  },
  {
    title: "Digital Service Design",
    desc: "We map business and customer journeys into structured digital services that can be effectively implemented.",
    icon: Layers,
  },
  {
    title: "Provider Management",
    desc: "We evaluate technologies, select the right providers, manage engagements, and maintain accountability.",
    icon: Network,
  },
  {
    title: "IT Project Management",
    desc: "We oversee technology projects from planning through implementation to ensure successful delivery.",
    icon: ClipboardList,
  },
  {
    title: "Continuous Business and Technology Alignment",
    desc: "We continuously review priorities and investments to keep technology aligned with your evolving business needs.",
    icon: RefreshCcw,
  },
];

const FAQS = [
  {
    q: "What does the managed IT department include?",
    a: "It includes digital transformation strategy, digital service design, provider management, project management, and continuous business and technology alignment.",
  },
  {
    q: "Do we need an internal IT department?",
    a: "No. Advisory+ gives you access to experienced technology specialists without hiring a complete internal team.",
  },
  {
    q: "Will you manage our technology providers?",
    a: "Yes. We evaluate, select, coordinate, and manage providers to ensure solutions meet your business requirements and expected outcomes.",
  },
  {
    q: "Can you manage our technology projects?",
    a: "Yes. We oversee projects from planning through implementation, helping ensure successful delivery and measurable business value.",
  },
  {
    q: "How is this different from hiring an IT consultant?",
    a: "A consultant hands you a recommendation and moves on. Advisory+ stays; we lead the strategy, manage the providers, and govern delivery, on an ongoing basis.",
  },
];

export default function AdvisoryPlus() {
  const meta = PAGE_META.cioAdvisory;
  return (
    <ServicePageShell testId="advisory-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "cioAdvisory",
            name: "Advisory+ — Strategic Tech Leadership for Growing SMEs",
            serviceType: "Managed IT Advisory",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="ADVISORY PLUS · FOR GROWING SMEs, 20–200 EMPLOYEES"
          title={
            <>
              Guiding Your Technology Decisions.
              <br />
              Driving Your Business Forward.
            </>
          }
          subtitle="Build a more efficient, scalable, and profitable business through successful digital transformation and better technology decisions."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
          testId="advisory-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations that need an experienced IT department without the cost and complexity of building one internally.
                </h2>
              </div>

              <div className="lg:col-span-7 rounded-3xl bg-[#F7F9FA] border border-slate-200/70 p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                  Why It's Good
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {WHY_GOOD.map((w) => (
                    <li key={w} className="flex sm:flex-col items-start gap-2.5 sm:gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-lg bg-white border border-brand-emerald/15 flex items-center justify-center">
                        <CheckCircle2 className="w-4.5 h-4.5 text-brand-emerald" />
                      </span>
                      <span className="text-[14.5px] leading-relaxed text-slate-700">{w}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald shrink-0">
                    How You Engage
                  </p>
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-brand-emerald/20 px-4 py-2.5 shadow-sm shadow-slate-900/5 w-fit">
                    <Briefcase className="w-4.5 h-4.5 text-brand-pine" />
                    <span className="text-[14.5px] font-semibold text-brand-dark">Managed IT Department</span>
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
              title={
                <>
                  Enterprise Experience.
                  <br />
                  Applied to Your Business.
                </>
              }
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
              data-testid="advisory-proof-stat"
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl bg-white border border-slate-200/70 p-7 md:p-8"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#C6E5DE" }}>
                <TrendingDown className="w-6 h-6 text-brand-emerald" strokeWidth={1.9} />
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark tabular-nums">
                  <CountUpNumber to={20} />%
                </p>
                <p className="mt-1 text-[14px] font-semibold text-slate-700">Cost Saving</p>
                <p className="mt-1 text-[13.5px] text-slate-500">Achieved for a client through an automation project.</p>
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
                  The Strategy Gap Holding Growing Businesses Back
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Technology decisions now require expertise across strategy, selection, implementation, and ongoing improvement.
                </p>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] font-semibold text-brand-dark">
                  Without IT leadership, organizations struggle to:
                </p>
                <ul className="mt-5 space-y-4">
                  {CHALLENGES.map((c, i) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-500 flex items-center justify-center font-bold text-[12px] shrink-0">
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
              title="Your Complete Managed IT Department"
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <Eyebrow>Pricing &amp; Capabilities</Eyebrow>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                A dedicated multidisciplinary technology team supports your organization through one predictable monthly engagement.
              </p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Simple, Predictable Monthly Pricing
              </h2>
            </div>

            <div className="mt-12 max-w-md mx-auto rounded-3xl bg-white border border-slate-200/70 overflow-hidden">
              <div className="h-1.5 bg-brand-emerald" />
              <div className="p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center" style={{ backgroundColor: "#C6E5DE" }}>
                  <Compass className="w-6 h-6 text-brand-emerald" strokeWidth={1.9} />
                </div>
                <p className="mt-5 font-display text-[19px] font-bold text-brand-dark">Managed IT Department</p>
                <p className="mt-3 font-display text-4xl font-extrabold text-brand-emerald">
                  USD 3,000<span className="text-[16px] font-semibold text-slate-500"> / month</span>
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Your Complete IT Department as a Managed Service"
          subtitle="Let an experienced technology team guide your transformation, manage providers, deliver projects, and ensure every technology decision creates business value."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Advisory+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`advisory-faq-${i + 1}`} />
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
