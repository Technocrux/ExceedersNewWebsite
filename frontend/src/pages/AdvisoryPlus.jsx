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
  CheckCircle2, Route, TrendingUp, Rocket,
  Briefcase, TrendingDown, ArrowRight, ShieldCheck,
} from "lucide-react";

const WHY_GOOD = [
  "Grow through better use of technology",
  "Avoid costly technology investment mistakes",
  "One accountable team instead of managing it yourself",
];

const CAPABILITIES = [
  {
    title: "We Build Technology Roadmaps",
    desc: "Align technology priorities and investments with your business goals.",
    icon: Route,
  },
  {
    title: "We Guide Technology Investments",
    desc: "Choose the right solutions and providers with less risk and wasted spend.",
    icon: TrendingUp,
  },
  {
    title: "We Lead Transformation Delivery",
    desc: "Manage execution, coordinate providers, and keep technology on track.",
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
  },
  {
    title: "Digital Service Design",
    desc: "We map business and customer journeys into structured digital services that can be effectively implemented.",
  },
  {
    title: "Continuous Business and Technology Alignment",
    desc: "We continuously review priorities and investments to keep technology aligned with your evolving business needs.",
  },
  {
    title: "Provider Management",
    desc: "We evaluate technologies, select the right providers, manage engagements, and maintain accountability.",
  },
  {
    title: "IT Project Management",
    desc: "We oversee technology projects from planning through implementation to ensure successful delivery.",
  },
];

const MONTHLY_INCLUDES = [
  { title: "Digital Transformation Strategy", desc: "Align technology with your business goals through a practical roadmap." },
  { title: "Digital Service Design", desc: "Map business and customer journeys into structured digital services." },
  { title: "Provider Management", desc: "Evaluate, select, and manage the right technology providers." },
  { title: "IT Project Management", desc: "Oversee technology projects from planning to successful delivery." },
  { title: "Continuous Alignment", desc: "Continuously align technology with your evolving business needs." },
];

const HOW_WE_DO_IT = [
  "Understand your business objectives",
  "Develop your digital transformation roadmap",
  "Design digital services",
  "Select and manage technology providers",
  "Govern implementation",
  "Continuously optimize technology to support business growth",
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
                  Organizations that need an experienced IT&nbsp;department.
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

                <div className="mt-7 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald shrink-0">
                    Engagement Models
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
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-6">
              <div className="lg:col-start-1 lg:col-span-4 lg:row-start-1">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    Our Solution
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Your Complete Managed IT Department
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
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-brand-emerald" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                  Pricing &amp; Capabilities
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Simple, Predictable Monthly Pricing.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                A dedicated multidisciplinary technology team supports your organization through one monthly engagement — no per-ticket billing, no surprise invoices.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              {/* One Plan */}
              <div className="rounded-2xl bg-gradient-to-br from-[#07404B] to-[#0D1F2D] p-7 md:p-8 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sea">One Plan</p>
                <p className="mt-2 font-display text-[22px] font-bold text-white">Managed IT Department</p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="font-display text-[34px] font-extrabold leading-tight text-white">
                    USD 3,000<span className="text-[16px] font-semibold text-slate-400"> / month</span>
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">
                    Flat fee, billed monthly.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <p className="text-[13.5px] text-slate-300">Compared to hiring in-house</p>
                  <p className="text-[13.5px] font-semibold text-brand-sea">20–30% less</p>
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="advisory-pricing-cta"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover transition-all"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* What's Included */}
              <div className="rounded-2xl bg-white border border-slate-200/70 p-7 md:p-8 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-emerald pb-5 border-b border-slate-200/70">
                  What The Monthly Fee Covers
                </p>
                <div className="mt-6 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <ul className="space-y-3.5">
                    {MONTHLY_INCLUDES.map((m) => (
                      <li key={m.title} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0" strokeWidth={2} />
                        <span className="text-[14px] font-semibold text-brand-dark">{m.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="hidden sm:flex items-center justify-center h-full">
                    <motion.div
                      animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.05, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-emerald/10 to-brand-sea/20 border border-brand-emerald/15 flex items-center justify-center"
                    >
                      <ShieldCheck className="w-12 h-12 text-brand-emerald" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* How We Do It */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>How We Do It</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                A Clear Path From Strategy To Impact.
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
