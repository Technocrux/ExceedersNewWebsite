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
  CheckCircle2, LifeBuoy, UserCog, Gauge, ThumbsUp, Settings2, TrendingUp,
  Headset, GraduationCap, Activity, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  "Reduce downtime and improve productivity.",
  "Deliver faster, more reliable employee support.",
  "Increase adoption of business applications.",
  "Improve technology reliability and security.",
  "Reduce IT support costs.",
];

const CAPABILITIES = [
  {
    title: "We Reduce Downtime",
    desc: "Fast, structured support that keeps employees working.",
    icon: Gauge,
  },
  {
    title: "We Improve Adoption",
    desc: "Help employees get more from the applications they use.",
    icon: ThumbsUp,
  },
  {
    title: "We Optimize Your Workplace",
    desc: "Identify recurring issues and improve performance continuously.",
    icon: Settings2,
  },
];

const CHALLENGES = [
  "Supporting a growing number of applications",
  "A single point of IT failure; one person, one risk",
  "The high cost of enterprise-level support",
  "Low adoption, reducing the value of tech investments",
];

const SOLUTION = [
  {
    title: "Digital Enablement Specialist",
    desc: "A dedicated extension of your team for support, coaching, and onboarding.",
    icon: UserCog,
  },
  {
    title: "Service Desk",
    desc: "Every request logged, tracked, escalated, and resolved to defined service levels.",
    icon: Headset,
  },
  {
    title: "User Enablement & Adoption",
    desc: "Coaching that helps employees work better, not just resolve tickets.",
    icon: GraduationCap,
  },
  {
    title: "Continuous Health Check",
    desc: "Regular assessment and recommendations that keep your digital workplace improving.",
    icon: Activity,
  },
];

const PRICING = [
  {
    name: "Productivity Starter",
    desc: "Structured incident-based support with essential advisory services.",
    price: "USD 400",
  },
  {
    name: "Productivity Growth",
    desc: "Greater support capacity, user enablement, and proactive optimization.",
    price: "USD 800",
  },
  {
    name: "Productivity Ultimate",
    desc: "A fully managed service with a dedicated Digital Enablement Specialist.",
    price: "USD 2,000",
  },
];

const FAQS = [
  {
    q: "What does the Digital Enablement Specialist do?",
    a: "Provides end-user support, onboarding, coaching, and continuous guidance to improve productivity.",
  },
  {
    q: "Does the service only resolve support tickets?",
    a: "No, we also coach users, improve adoption, and proactively enhance your digital workplace.",
  },
  {
    q: "Can you support organizations without an internal IT team?",
    a: "Yes, that's exactly what Productivity+ is built for.",
  },
  {
    q: "How do you ensure continuous improvement?",
    a: "Through regular health checks that identify recurring issues and recommend improvements.",
  },
];

export default function ProductivityPlus() {
  const meta = PAGE_META.cioProductivity;
  return (
    <ServicePageShell testId="productivity-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "cioProductivity",
            name: "Productivity+ — Digital Workplace Support for Growing SMEs",
            serviceType: "Managed Digital Workplace Support",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="PRODUCTIVITY PLUS · FOR GROWING SMEs, 20–200 EMPLOYEES"
          title={
            <>
              Keep Your Team Moving.
              <br />
              Keep Your Business Growing.
            </>
          }
          subtitle="Productivity+ provides structured end-user support, workplace administration, and productivity optimization, keeping your employees productive while your digital workplace runs efficiently."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
          testId="productivity-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations that don't have their own IT team and want professional, structured end-user support for their digital workplace.
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
                      <LifeBuoy className="w-4.5 h-4.5 text-brand-pine" />
                      <span className="text-[14px] font-semibold text-brand-dark">Incident-Based Support</span>
                    </div>
                    <span className="text-[13px] font-medium text-slate-400">or</span>
                    <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-brand-emerald/20 px-4 py-2.5 shadow-sm shadow-slate-900/5">
                      <UserCog className="w-4.5 h-4.5 text-brand-pine" />
                      <span className="text-[14px] font-semibold text-brand-dark">Managed Digital Enablement Specialist</span>
                    </div>
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
              title="Built to Keep Your Employees Productive"
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
              data-testid="productivity-proof-stat"
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl bg-white border border-slate-200/70 p-7 md:p-8"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#C7D3EC" }}>
                <TrendingUp className="w-6 h-6 text-[#43669E]" strokeWidth={1.9} />
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark tabular-nums">
                  <CountUpNumber to={15} />–<CountUpNumber to={20} />%
                </p>
                <p className="mt-1 text-[14px] font-semibold text-slate-700">Productivity Improvement</p>
                <p className="mt-1 text-[13.5px] text-slate-500">Reported through reduced downtime, better adoption, and faster support.</p>
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
                  Managing the Modern Digital Workplace Is Increasingly Complex
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  The average organization relies on 20+ business applications to run daily operations.
                </p>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] font-semibold text-brand-dark">
                  Organizations commonly struggle with:
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
              title="Your Complete Digital Workplace Support Team"
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
              eyebrow="Pricing & Capabilities"
              title="Flexible Plans That Grow With Your Business"
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICING.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`productivity-pricing-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7 flex flex-col hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                >
                  <p className="font-display text-[19px] font-bold text-brand-dark">{p.name}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600 flex-1">{p.desc}</p>
                  <p className="mt-6 font-display text-3xl font-extrabold text-brand-emerald">
                    {p.price}<span className="text-[15px] font-semibold text-slate-500">/month</span>
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-center text-[13px] text-slate-500">
              Commercial Terms: Annual contract · Two-month cancellation notice · Additional incidents charged per package
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="productivity-pricing-cta"
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
          title="Keep Your Employees Focused on Their Work"
          subtitle="Technology should empower your workforce, not slow it down. Let Productivity+ manage support and optimization while your team focuses on growing the business."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Productivity+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`productivity-faq-${i + 1}`} />
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
