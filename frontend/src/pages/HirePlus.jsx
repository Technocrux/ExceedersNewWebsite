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
  CheckCircle2, UserPlus, FileText, Users, Bot, ClipboardCheck, LifeBuoy,
  GraduationCap, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  "Recruit Project Managers with proven delivery capability, not just credentials.",
  "Reduce hiring risk through structured assessment.",
  "Shorten onboarding and time to productivity.",
  "Strengthen your internal Project Management capability.",
];

const ENGAGE_MODELS = [
  { label: "Direct Hire", icon: UserPlus },
  { label: "Contract-Based", icon: FileText },
  { label: "Managed Resources", icon: Users },
];

const PROOF = [
  {
    title: "AI-Powered Matching",
    desc: "Better alignment between candidate and project",
    icon: Bot,
  },
  {
    title: "Method 3-Pulse Assessment",
    desc: "Practical project delivery capability evaluated",
    icon: ClipboardCheck,
  },
  {
    title: "30-Day Support",
    desc: "Operational guidance after eligible placements",
    icon: LifeBuoy,
  },
];

const CHALLENGE_QUESTIONS = [
  "Can they manage difficult stakeholders?",
  "Control scope and risk?",
  "Coordinate multiple technology providers?",
  "Turn requirements into execution?",
];

const SOLUTION = [
  {
    title: "AI-Powered Talent Matching",
    desc: "Candidates are matched based on industry, technology domain, project type, methodology, and leadership style.",
    icon: Bot,
  },
  {
    title: "Method 3-Pulse Capability Assessment",
    desc: "Structured assessments and expert interviews evaluate real project delivery capability, not just experience.",
    icon: ClipboardCheck,
  },
  {
    title: "Pre-Deployment Training",
    desc: "Where gaps exist, selected candidates receive targeted training before joining your organization.",
    icon: GraduationCap,
  },
  {
    title: "30-Day Operational Support",
    desc: "Our Project Operations team coaches new hires through their first month for a faster, smoother transition.",
    icon: LifeBuoy,
  },
];

const PRICING = [
  {
    name: "Permanent Recruitment",
    price: "USD 4,000–6,000",
    unit: "per successful placement",
    desc: "Build long-term internal Project Management capability with carefully selected permanent talent.",
  },
  {
    name: "Contract Staffing",
    price: "Cost + 10%",
    unit: "service fee",
    desc: "Bring in experienced Project Managers for defined periods, projects, or transformation initiatives.",
  },
  {
    name: "Managed Resources",
    price: "Cost + 20%",
    unit: "service fee",
    desc: "Access Project Managers with additional support from our Project Operations capability.",
    highlight: true,
  },
];

const HOW_WE_DO_IT = [
  "Source candidates",
  "AI-powered matching",
  "Method 3-Pulse capability assessment",
  "Expert interviews",
  "Pre-deployment training (if required)",
  "Placement",
  "30-day operational support",
];

const FAQS = [
  {
    q: "How do you assess candidates?",
    a: "Through AI-powered profiling, structured interviews, and the Method 3 Talent Assessment framework.",
  },
  {
    q: "Can candidates be trained before joining?",
    a: "Yes. Our Method 3 Talent Academy provides targeted capability development before deployment.",
  },
  {
    q: "Do you provide support after placement?",
    a: "Yes. Every eligible placement includes 30 days of Project Operations support to accelerate onboarding and reduce delivery risk.",
  },
  {
    q: "What hiring models do you offer?",
    a: "Permanent recruitment, contract staffing, managed resources, and recruitment packages with training and operational support.",
  },
];

export default function HirePlus() {
  const meta = PAGE_META.projectHire;
  return (
    <ServicePageShell testId="hire-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "projectHire",
            name: "Hire+ — Vetted IT Project Manager Recruitment",
            serviceType: "IT Project Manager Recruitment",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="HIRE PLUS · For Organizations Building IT Project Teams"
          title="Hire Project Managers Ready to Deliver Results"
          subtitle="We recruit, assess, train, and support IT Project Managers before and after placement."
          subtitleClassName="mt-6 max-w-3xl md:max-w-none md:whitespace-nowrap text-[18px] md:text-[21px] leading-relaxed text-slate-200"
          cta="Request Vetted Candidates"
          ctaHref={CALENDLY_URL}
          testId="hire-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations looking to build or expand their internal IT Project Management team.
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
              title="More Than A Decade of Specialized Technology Recruitment"
              subtitle="Trusted by multinational organizations for technology and digital transformation recruitment, backed by a deeper approach to Project Manager selection."
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
                  A Great CV Can Still Be the Wrong Project Manager
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Experience, certifications, and interviews only tell part of the story. Successful project delivery depends on more.
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[15px] font-semibold text-brand-dark">
                  Finding out after they join is expensive. Ask before you hire:
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
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Solution */}
        <Section className="bg-[#F7F9FA]" id="our-solution">
          <Container>
            <SectionHeading
              eyebrow="Our Solution"
              title="Recruitment Built Around Project Success"
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
                  Choose the Hiring Model That Works for You
                </h2>
              </div>
              <div className="lg:flex lg:justify-end">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hire-pricing-cta"
                  className="group mt-6 lg:mt-0 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Get a Recruitment Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRICING.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`hire-pricing-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`relative flex flex-col rounded-2xl border p-7 transition-shadow ${
                    p.highlight
                      ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] border-transparent md:-translate-y-2"
                      : "bg-[#F7F9FA] border-slate-200/70 hover:shadow-lg hover:shadow-slate-900/5"
                  }`}
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${p.highlight ? "text-brand-sea" : "text-slate-500"}`}>
                    Model {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className={`mt-2 font-display text-[19px] font-bold ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                    {p.name}
                  </p>

                  <div className={`mt-5 pt-4 border-t ${p.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    <p className={`font-display text-[24px] font-extrabold leading-tight ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                      {p.price}
                    </p>
                    {p.unit && (
                      <p className={`mt-1 text-[12.5px] ${p.highlight ? "text-slate-400" : "text-slate-500"}`}>
                        {p.unit === "per successful placement" ? (
                          <>per successful&nbsp;placement</>
                        ) : (
                          p.unit
                        )}
                      </p>
                    )}
                  </div>

                  <p className={`mt-5 pt-4 border-t text-[13.5px] leading-relaxed flex-1 ${p.highlight ? "border-white/10 text-slate-300" : "border-slate-200/70 text-slate-600"}`}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/70 flex flex-wrap items-center gap-x-2 gap-y-1">
              <p className="text-[15px] font-semibold text-brand-dark">
                Need multiple Project Managers or a tailored model?
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-emerald hover:gap-2.5 transition-all"
              >
                Talk to us about your project requirements
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Container>
        </Section>

        {/* How We Do It */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>How We Do It</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                A Clear Path To The Right Project Manager.
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
          title="Your Next Project Starts With the Right Project Manager"
          subtitle="Reduce hiring risk and start with Project Managers who have been matched, assessed, and prepared for the work ahead."
          cta="Request Vetted Candidates"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Hire+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`hire-faq-${i + 1}`} />
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
