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
  Code2, Bot, Server, Users, ArrowRight, CheckCircle2, Lock,
} from "lucide-react";

const CHALLENGES = [
  "High recruitment and development costs",
  "Difficulty finding the right technical expertise",
  "Unclear requirements and changing scope",
  "Poor alignment between business and dev teams",
  "AI projects that never move beyond experimentation",
  "Overdependence on separate suppliers and freelancers",
];

const CUSTOM_APPS = [
  "Internal business systems",
  "Customer & supplier portals",
  "Mobile applications",
  "Workflow automation platforms",
  "Digital products",
  "Legacy system modernization",
];

const AGENT_EXAMPLES = [
  "Reviewing and organizing documents",
  "Managing internal requests",
  "Supporting customer service teams",
  "Preparing reports and recommendations",
  "Retrieving info from multiple systems",
  "Automating multi-step business processes",
];

const AI_INFRA = [
  "Private AI architecture",
  "Internal knowledge assistants",
  "Secure access to business data",
  "Role-based permissions",
  "Governance and usage controls",
  "Monitoring and performance management",
];

const TEAM = [
  "Product Owner Proxy", "Project Manager / Scrum Master", "Solution Architect",
  "AI Engineers", "Backend Developers", "Frontend Developers",
  "Mobile Developers", "UX / UI Specialists", "DevOps Engineers",
  "QA Engineers", "Security & Performance",
];

const PROCESS = [
  { n: 1, title: "Understand", desc: "We map your business problem, users, systems, and expected outcomes." },
  { n: 2, title: "Define", desc: "We shape the solution, confirm scope, and build a clear roadmap." },
  { n: 3, title: "Build", desc: "Our managed team designs, develops, integrates, and tests through structured phases." },
  { n: 4, title: "Launch & Improve", desc: "We support controlled launch, measure performance, and improve continuously." },
];

const PACKAGES = [
  {
    name: "Dev Plus Discovery",
    tagline: "For businesses that need to define what to build before development begins.",
    features: ["Business & technical discovery", "Requirements definition", "Solution concept & architecture", "MVP scope & roadmap", "Team structure & estimates"],
    model: "Fixed assessment fee",
    cta: "Start with Discovery",
  },
  {
    name: "Dev Plus Build",
    tagline: "For businesses ready to develop a custom application or Agentic AI solution.",
    features: ["Managed development team", "Product & project management", "Solution architecture", "UX / UI design", "Software or AI development", "DevOps & QA", "Launch preparation"],
    model: "Project-based or monthly managed team",
    cta: "Discuss Your Project",
    highlight: true,
  },
  {
    name: "Dev Plus Scale",
    tagline: "For businesses with an existing product that need ongoing development.",
    features: ["Dedicated or flexible capacity", "New features & improvements", "AI workflow expansion", "System integrations", "Ongoing QA & security", "Monthly progress reporting"],
    model: "Monthly managed team",
    cta: "Build Your Team",
  },
];

const COMPARISON = [
  ["You manage the developers", "eXceeders manages the complete team"],
  ["Limited project oversight", "Structured project and delivery management"],
  ["Access mainly to developers", "Product, AI, UX, DevOps, QA, and security expertise"],
  ["You manage the infrastructure", "Development environments are managed for you"],
  ["Responsibility is fragmented", "One accountable delivery partner"],
  ["Quality depends on individuals", "Structured quality assurance and review"],
];

const FAQS = [
  { q: "What types of applications can Dev Plus build?", a: "Dev Plus can build internal business systems, portals, mobile applications, workflow solutions, management platforms, integrations, digital products, and other custom software based on your requirements." },
  { q: "What is an Agentic AI workflow?", a: "An Agentic AI workflow uses AI agents to complete tasks, interact with systems, retrieve information, and coordinate multiple steps within a business process. Unlike a basic chatbot, an AI agent may take actions and support the execution of defined workflows." },
  { q: "Can you build a private AI environment?", a: "Yes. Dev Plus can help design secure internal AI infrastructure based on your data, governance, security, access, and integration requirements." },
  { q: "Who manages the development team?", a: "eXceeders manages the team, project structure, delivery process, progress tracking, and technical coordination. Your team remains involved in business decisions and approvals without needing to manage technical resources day to day." },
  { q: "How is pricing calculated?", a: "Pricing depends on the scope, team structure, technical complexity, expected timeline, and engagement model. After an initial assessment, we provide a recommended setup and a clear commercial proposal." },
];

export default function DevPlus() {
  const meta = PAGE_META.dev;
  return (
    <ServicePageShell testId="dev-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "dev",
            name: "Dev Plus — Custom Software and AI Development",
            serviceType: "Software & AI Development",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Dev Plus | Managed Software and AI Development"
          title="Build the software and AI capabilities your business needs"
          subtitle="A fully managed team to build custom applications, Agentic AI workflows, and secure internal AI infrastructure — from planning and architecture to development, testing, and delivery."
          cta="Discuss Your Project"
          ctaHref={CALENDLY_URL}
          testId="dev-hero"
          visualSlot={
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code2, label: "Custom Apps" },
                { icon: Bot, label: "Agentic AI" },
                { icon: Server, label: "AI Infrastructure" },
                { icon: Users, label: "Managed Team" },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-emerald/20 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-brand-sea" strokeWidth={1.8} />
                  </div>
                  <p className="mt-4 text-[14px] font-semibold text-white">{c.label}</p>
                </motion.div>
              ))}
            </div>
          }
        />

        {/* Challenge — compact */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Building the right technology takes more than hiring developers.
                </h2>
                <p className="mt-5 text-[15.5px] leading-relaxed text-slate-600">
                  Many software and AI initiatives become expensive, delayed, or disconnected from actual business goals. A development team alone isn&apos;t enough — successful delivery also needs product direction, architecture, DevOps, testing, security, and ongoing oversight.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3">
                {CHALLENGES.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-red-50 text-red-500 flex items-center justify-center font-bold text-[12px] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[14px] text-slate-700 leading-snug">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* What Dev Plus Delivers */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <SectionHeading
              eyebrow="What Dev Plus Delivers"
              title="Everything you need to move from concept to working technology"
            />

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Custom Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl bg-white border border-slate-200 p-8"
                data-testid="dev-delivers-custom"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-brand-emerald" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-[22px] font-bold text-brand-dark">Custom Applications</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                  Software designed around your workflows, users, and business objectives.
                </p>
                <ul className="mt-5 space-y-2">
                  {CUSTOM_APPS.map((it, k) => (
                    <li key={k} className="flex items-start gap-2 text-[13.5px] text-slate-700">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-emerald shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Agentic AI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-3xl bg-gradient-to-br from-[#07404B] to-[#0D1F2D] text-white border border-transparent shadow-2xl shadow-emerald-900/10 p-8 lg:-translate-y-3"
                data-testid="dev-delivers-agentic"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-emerald/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-brand-sea" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-[22px] font-bold">Agentic AI Workflows</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-300">
                  AI agents that complete tasks, coordinate steps, and support business operations.
                </p>
                <ul className="mt-5 space-y-2">
                  {AGENT_EXAMPLES.map((it, k) => (
                    <li key={k} className="flex items-start gap-2 text-[13.5px] text-slate-200">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-sea shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* AI Infrastructure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="rounded-3xl bg-white border border-slate-200 p-8"
                data-testid="dev-delivers-infrastructure"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-brand-emerald" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-[22px] font-bold text-brand-dark">Secure Internal AI Infrastructure</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                  A controlled environment for AI while protecting sensitive information.
                </p>
                <ul className="mt-5 space-y-2">
                  {AI_INFRA.map((it, k) => (
                    <li key={k} className="flex items-start gap-2 text-[13.5px] text-slate-700">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-emerald shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Team — compact chip grid */}
            <div className="mt-14 rounded-3xl bg-white border border-slate-200 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <Eyebrow>Your Dev Plus Team</Eyebrow>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-bold text-brand-dark">A fully managed development team</h3>
                </div>
                <p className="text-[13px] text-slate-500 max-w-md">Structure adapts to your project — right expertise, no unnecessary overhead.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {TEAM.map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 rounded-full bg-brand-emerald/5 border border-brand-emerald/15 px-3.5 py-1.5 text-[13px] font-medium text-brand-pine">
                    <Users className="w-3.5 h-3.5 text-brand-emerald" strokeWidth={1.75} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Process */}
        <Section className="bg-white">
          <Container>
            <SectionHeading eyebrow="Our Process" title="From business need to working solution" />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROCESS.map((p) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-slate-50/70 border border-slate-100 p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-emerald text-white flex items-center justify-center font-display font-bold">
                    {p.n}
                  </div>
                  <h3 className="mt-5 font-display text-[18px] font-bold text-brand-dark">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Packages */}
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Choose the Right Starting Point"
              title="Flexible Dev Plus packages based on what you need to achieve"
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PACKAGES.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative rounded-3xl border p-8 flex flex-col ${
                    p.highlight
                      ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] text-white border-transparent shadow-2xl shadow-emerald-900/20 lg:-translate-y-2"
                      : "bg-white text-brand-dark border-slate-200"
                  }`}
                  data-testid={`dev-package-${i}`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-emerald text-white text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className={`mt-3 text-[14px] leading-relaxed ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>{p.tagline}</p>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {p.features.map((f, k) => (
                      <li key={k} className="flex items-start gap-2 text-[14px]">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlight ? "text-brand-sea" : "text-brand-emerald"}`} />
                        <span className={p.highlight ? "text-slate-200" : "text-slate-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-6 pt-5 border-t ${p.highlight ? "border-white/10" : "border-slate-200"}`}>
                    <p className={`text-[11px] uppercase tracking-[0.14em] font-semibold ${p.highlight ? "text-brand-sea" : "text-slate-500"}`}>Pricing model</p>
                    <p className={`mt-1 text-[13.5px] font-semibold ${p.highlight ? "text-white" : "text-brand-dark"}`}>{p.model}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Comparison — compact */}
        <Section className="bg-white">
          <Container>
            <SectionHeading
              eyebrow="More Than Outsourcing"
              title="We manage delivery, not just resources"
              subtitle="Traditional outsourcing gives you developers and leaves you to manage the project. Dev Plus gives you a managed development capability."
            />
            <div className="mt-12 rounded-3xl overflow-hidden border border-slate-200">
              <div className="grid grid-cols-2 divide-x divide-slate-200 bg-slate-50/70">
                <div className="p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Traditional Outsourcing</p>
                </div>
                <div className="p-4 md:p-5 bg-brand-emerald/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-emerald">Dev Plus</p>
                </div>
              </div>
              {COMPARISON.map(([a, b], i) => (
                <div key={i} className={`grid grid-cols-2 divide-x divide-slate-200 ${i % 2 ? "bg-slate-50/40" : "bg-white"}`}>
                  <div className="p-4 md:p-5 text-[14px] text-slate-600">{a}</div>
                  <div className="p-4 md:p-5 text-[14px] font-medium text-brand-dark bg-brand-emerald/[0.03]">{b}</div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section className="bg-[#F7F9FA]" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Dev Plus" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`dev-faq-${i + 1}`} />
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Turn ideas into working software"
          title="Have a software or AI idea you need to bring to life?"
          subtitle="Tell us what you want to build, improve, or automate. We'll help you define the right solution and manage the journey from concept to launch."
        />
      </main>
      <Footer />
    </ServicePageShell>
  );
}
