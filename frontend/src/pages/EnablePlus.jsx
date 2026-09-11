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
  CheckCircle2, BookOpen, Monitor, UserCog, Handshake, Workflow, Target,
  ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  "Turns project knowledge into consistent execution.",
  "Standardizes governance, tracking, and decision-making across every project.",
  "Reduces delays and communication gaps.",
  "Builds a single source of truth for every project.",
];

const ENGAGE_MODELS = [
  { label: "Method 3-Pulse Playbook & Training", icon: BookOpen },
  { label: "Method 3-Pulse Training & PlanneXe Platform", icon: Monitor },
  { label: "Optional Project Management Coaching", icon: UserCog },
];

const PROOF = [
  {
    title: "Built for Multi-Party Projects",
    desc: "Manage customers, providers, consultants, and internal teams more effectively.",
    icon: Handshake,
  },
  {
    title: "Works With Your Existing Methodology",
    desc: "Strengthen the practical application of Agile, Waterfall, and hybrid delivery.",
    icon: Workflow,
  },
  {
    title: "Designed for Real Execution",
    desc: "Move beyond theory with practical guidance, tools, and operational support.",
    icon: Target,
  },
];

const CHALLENGE_PARAGRAPHS = [
  "Agile, Waterfall, and certifications provide the foundation.",
  "The real challenge begins when several teams, providers, requirements, risks, decisions, and deadlines have to move together.",
  "That is where project delivery often starts to break down.",
  "The result is more delays, more escalation, and less confidence in project delivery.",
];

const SOLUTION = [
  {
    name: "Method 3-Pulse Playbook",
    desc: "A step-by-step guide for managing technology projects from initiation to closure in real, multi-party environments, not a generic framework.",
    icon: BookOpen,
  },
  {
    name: "Method 3-Pulse Training",
    desc: "Hands-on training that turns the playbook into habit, so every Project Manager applies it the same way, on every project.",
    icon: UserCog,
  },
  {
    name: "PlanneXe Platform (Optional)",
    desc: "One platform to centralize planning, collaboration, governance, decisions, and tracking, so nothing lives in scattered emails and spreadsheets.",
    icon: Monitor,
  },
];

const PRICING = [
  {
    name: "Method 3-Pulse Playbook + One-Week Training",
    price: "USD 5,000",
    desc: "Give your Project Management team the practical methodology, playbook, and hands-on training needed to improve how technology projects are delivered.",
    cta: "Start With Method 3-Pulse",
    icon: BookOpen,
  },
  {
    name: "Method 3-Pulse Training + PlanneXe",
    price: "USD 5,000 + USD 100 per created project",
    desc: "Combine training with a digital project environment that helps your team apply and standardize Method 3-Pulse across active projects.",
    cta: "Enable Your Team",
    icon: Monitor,
  },
  {
    name: "Project Management Coaching",
    price: "USD 1,000 per project per month",
    desc: "Add ongoing operational coaching while your Project Managers apply the methodology on live projects.",
    icon: UserCog,
  },
];

const FAQS = [
  {
    q: "Does Method 3-Pulse replace Agile or Waterfall?",
    a: "No. Method 3-Pulse complements Agile, Waterfall, and hybrid approaches by showing Project Managers how to apply them effectively in real-world, multi-party technology projects.",
  },
  {
    q: "Do we need to use PlanneXe?",
    a: "No. The Method 3-Pulse Playbook and training can be adopted independently. PlanneXe is available as an optional platform to digitize your project delivery process.",
  },
  {
    q: "What does the Playbook include?",
    a: "It includes practical guidelines, templates, governance processes, reporting standards, and best practices for managing technology projects from initiation to closure.",
  },
  {
    q: "Can the training be customized?",
    a: "Yes. The training can be tailored to your organization's project environment, governance model, and delivery maturity.",
  },
];

export default function EnablePlus() {
  const meta = PAGE_META.projectEnable;
  return (
    <ServicePageShell testId="enable-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "projectEnable",
            name: "Enable+ — Method 3-Pulse Project Delivery Training",
            serviceType: "Project Management Training & Enablement",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="ENABLE PLUS · For Internal IT Project Management Teams"
          title="Turn Project Managers Into Stronger Project Leaders"
          subtitle="Give your team a practical project delivery method, hands-on training, and the tools to manage complex technology projects with greater control, consistency, and confidence."
          cta="Book A Free Consultation"
          ctaHref={CALENDLY_URL}
          testId="enable-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations with an existing IT Project Management team that want to improve delivery performance and create a consistent way of managing technology projects.
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
              title="Method Built on Delivery, Not Theory"
              subtitle="Method 3-Pulse was developed from hands-on experience managing complex technology and digital transformation projects across the Gulf."
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
            <div className="max-w-3xl">
              <Eyebrow>The Challenge</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Knowing a Methodology Isn't the Same as Managing the Project
              </h2>
              {CHALLENGE_PARAGRAPHS.map((p) => (
                <p key={p} className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </Section>

        {/* Our Solution */}
        <Section className="bg-[#F7F9FA]" id="our-solution">
          <Container>
            <SectionHeading
              eyebrow="Our Solution"
              title="Give Every Project Manager a Better Way to Deliver"
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {SOLUTION.map((s) => (
                <FeatureCard key={s.name} icon={s.icon} title={s.name} description={s.desc} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section className="bg-white" id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title="Simple, Transparent Pricing"
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
                  data-testid={`enable-pricing-${i + 1}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7 flex flex-col hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#C6E5DE" }}>
                    <p.icon className="w-6 h-6 text-brand-emerald" strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 font-display text-[17px] font-bold text-brand-dark leading-tight">{p.name}</p>
                  <p className="mt-3 font-display text-xl font-extrabold text-brand-emerald">{p.price}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600 flex-1">{p.desc}</p>
                  {p.cta && (
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`enable-pricing-cta-${i + 1}`}
                      className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-emerald hover:gap-3 transition-all"
                    >
                      {p.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 max-w-2xl mx-auto text-center">
              <p className="text-[15px] font-semibold text-brand-dark">
                Need to enable a larger Project Management team?
              </p>
              <p className="mt-1 text-[14.5px] text-slate-600">
                Talk to us about a tailored program.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="enable-pricing-main-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Get an Enablement Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Better Project Delivery Starts With a Better Way of Working"
          subtitle="Give your team the playbook, training, and tools to deliver technology projects consistently, project after project."
          cta="Book a Capability Assessment"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Enable+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`enable-faq-${i + 1}`} />
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
