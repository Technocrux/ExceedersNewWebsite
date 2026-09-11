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
  GraduationCap, HelpCircle, ArrowRight,
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
    price: "USD 4,000 to USD 6,000",
    unit: "per successful hire",
    desc: "Build long-term internal Project Management capability with carefully selected permanent talent.",
    icon: UserPlus,
  },
  {
    name: "Contract Staffing",
    price: "Cost + 10%",
    unit: "",
    desc: "Bring in experienced Project Managers for defined periods, projects, or transformation initiatives.",
    icon: FileText,
  },
  {
    name: "Managed Resources",
    price: "Cost + 20%",
    unit: "",
    desc: "Access Project Managers with additional support from our Project Operations capability.",
    icon: Users,
  },
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
          subtitle="We recruit, assess, train, and support IT Project Managers before and after placement, so they lead successful technology projects from day one instead of learning on the job."
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
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CHALLENGE_QUESTIONS.map((q) => (
                    <li key={q} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/60 border border-red-100">
                      <HelpCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-[14.5px] leading-relaxed text-slate-700">{q}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[15px] font-semibold text-brand-dark">
                  Finding out after they join is expensive. Hire+ helps you know before you hire.
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
            <SectionHeading
              eyebrow="Pricing"
              title="Choose the Hiring Model That Works for You"
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
                  data-testid={`hire-pricing-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7 flex flex-col hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#C7D3EC" }}>
                    <p.icon className="w-6 h-6 text-[#43669E]" strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 font-display text-[19px] font-bold text-brand-dark">{p.name}</p>
                  <p className="mt-2 font-display text-2xl font-extrabold text-brand-emerald">
                    {p.price}
                    {p.unit && <span className="text-[14px] font-semibold text-slate-500"> {p.unit}</span>}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600 flex-1">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 max-w-2xl mx-auto text-center">
              <p className="text-[15px] font-semibold text-brand-dark">
                Need multiple Project Managers or a tailored model?
              </p>
              <p className="mt-1 text-[14.5px] text-slate-600">
                Talk to us about your project requirements.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hire-pricing-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Get a Recruitment Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
