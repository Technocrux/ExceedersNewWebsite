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
  DifferenceMeansSection,
} from "@/components/service/ServicePrimitives";
import { motion } from "framer-motion";
import {
  Award, FolderCheck, Building2, Palette, Bot, Zap, Users, ClipboardList,
  RefreshCcw, ArrowRight, ShieldCheck, CheckCircle2, Star,
} from "lucide-react";

const PROOF = [
  { Icon: Award, to: 10, suffix: "+", label: "Years of Enterprise Software Delivery Experience", accent: "#059669", iconBg: "#C6E5DE" },
  { Icon: FolderCheck, to: 1000, suffix: "+", label: "Business Applications Delivered", accent: "#43669E", iconBg: "#C7D3EC" },
  { Icon: Building2, to: 900, suffix: "+", label: "Gulf Customers", accent: "#07404B", iconBg: "#D7EBC7" },
];

const WHAT_IT_MEANS = [
  {
    title: "Faster delivery",
    Icon: Zap,
  },
  {
    title: "Lower project risk",
    Icon: ShieldCheck,
  },
  {
    title: "Software your teams adopt",
    Icon: Bot,
  },
];

const CODE_LINES = [
  [{ t: "import", c: "text-purple-400" }, { t: " { Agent }", c: "text-slate-200" }, { t: " from", c: "text-purple-400" }, { t: " 'exceeders/ai'", c: "text-emerald-400" }, { t: ";", c: "text-slate-500" }],
  [{ t: "", c: "" }],
  [{ t: "const", c: "text-purple-400" }, { t: " workflow", c: "text-sky-300" }, { t: " = ", c: "text-slate-400" }, { t: "new", c: "text-purple-400" }, { t: " Agent", c: "text-amber-300" }, { t: "({", c: "text-slate-400" }],
  [{ t: "  task", c: "text-sky-200" }, { t: ": ", c: "text-slate-400" }, { t: "'Automate invoice review'", c: "text-emerald-400" }, { t: ",", c: "text-slate-500" }],
  [{ t: "  trigger", c: "text-sky-200" }, { t: ": ", c: "text-slate-400" }, { t: "'on_upload'", c: "text-emerald-400" }, { t: ",", c: "text-slate-500" }],
  [{ t: "});", c: "text-slate-400" }],
  [{ t: "", c: "" }],
  [{ t: "workflow", c: "text-sky-300" }, { t: ".", c: "text-slate-400" }, { t: "deploy", c: "text-amber-300" }, { t: "();", c: "text-slate-400" }],
];

const CHALLENGES = [
  "Knowing where AI can create real value",
  "Turning business needs into the right solution",
  "Finding the right AI and software specialists",
  "Coordinating different teams and providers",
  "Keeping delivery on time and at the right quality",
];

const SOLUTION_HIGHLIGHTS = [
  "AI and business logic designed together",
  "Specialists matched to each delivery need",
  "Managed delivery with clear quality and governance",
];

const HOW_IT_STARTS = [
  {
    title: "Understand & Design",
    desc: "Define the need, users, processes, and AI opportunities.",
  },
  {
    title: "Architect & Build",
    desc: "Design the solution, bring in the right specialists, and build.",
  },
  {
    title: "Deliver & Improve",
    desc: "Manage quality, launch, adoption, and improvement.",
  },
];

const DISCIPLINES = [
  {
    name: "Design Systems and UX",
    tagline: "Create Experiences That Work Together.",
    desc: "Build consistent, intuitive, and scalable experiences through reusable design standards.",
    icon: Palette,
  },
  {
    name: "AI-Native Solution Architecture",
    tagline: "Build Intelligence In, Not On.",
    desc: "Design applications with AI built into the core process from day one, including assistants, automation, AI agents, and predictive capabilities.",
    icon: Bot,
  },
  {
    name: "AI-Assisted Agile Delivery",
    tagline: "Move Faster Without Losing Control.",
    desc: "Combine AI-assisted development, Agile delivery, and modern engineering to accelerate delivery while protecting quality and security.",
    icon: Zap,
  },
  {
    name: "Specialist Delivery Teams",
    tagline: "Put the Right Expert on Every Part.",
    desc: "Bring together specialists across UX, architecture, development, AI, integrations, QA, DevOps, and security.",
    icon: Users,
  },
  {
    name: "ProjectOps Governance",
    tagline: "Keep Every Part of Delivery Aligned.",
    desc: "Manage sprints, providers, quality, risks, dependencies, and reporting through one structured delivery model.",
    icon: ClipboardList,
  },
  {
    name: "Continuous Improvement",
    tagline: "Keep Creating Value After Launch.",
    desc: "Support releases, enhancements, user feedback, and evolving business needs.",
    icon: RefreshCcw,
  },
];

const ENGAGEMENT_MODELS = [
  {
    label: "Fixed Price",
    bestWhen: "Scope and outcome are clear before work starts.",
    youPay: "One agreed price per milestone",
    overrunRisk: "Carried by us",
  },
  {
    label: "Time & Material",
    bestWhen: "Priorities will shift as the work reveals them.",
    youPay: "Rate card against hours delivered",
    overrunRisk: "Shared, capped per sprint",
  },
  {
    label: "Dedicated Delivery Team",
    bestWhen: "You need standing capability, not a one-off project.",
    youPay: "Monthly per named team member",
    overrunRisk: "Yours, with full roadmap control",
    highlight: true,
    badge: "For Ongoing Programmes",
  },
];

const FAQS = [
  {
    q: "Can Dev Plus build AI-native business applications?",
    a: "Yes. We design and build business applications where AI is embedded into the core solution, enabling intelligent automation, AI assistants, decision support, predictive insights, and AI-powered business processes.",
  },
  {
    q: "Do you develop the software yourselves?",
    a: "Dev Plus manages the complete delivery while assembling specialist software companies best suited for each discipline, ensuring every part of your solution is delivered by experts.",
  },
  {
    q: "Why use multiple specialist providers instead of one software company?",
    a: "Different providers excel in different areas. By selecting specialists for AI engineering, UX, development, integrations, DevOps, and quality assurance, we build a stronger and more capable delivery team.",
  },
  {
    q: "How do you ensure the solution meets our business needs?",
    a: "Every project starts with our Service Design methodology, where we define business processes, service journeys, personas, user stories, AI opportunities, and acceptance criteria before development begins. This ensures the delivery team builds the right AI-native business application from day one.",
  },
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
            name: "Dev Plus — Managed AI-Native Software & Agentic AI Development",
            serviceType: "Managed AI-Native Software Development",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="DEV PLUS · Managed AI-Native Software & Agentic AI Development"
          title={
            <>
              Built Right.
              <br />
              Built Fast.
              <br />
              Built AI-Native.
            </>
          }
          subtitle="A fully managed development team that designs, builds, and evolves AI-native applications, Agentic AI workflows, and secure internal AI solutions from architecture to delivery."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
          testId="dev-hero"
          parallax
        />

        {/* Proof & Value */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                The Track Record Behind Every Build.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                Dev Plus pairs enterprise software delivery experience with a growing ecosystem of vetted specialist providers across UX, AI engineering, architecture, and development.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PROOF.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`dev-proof-stat-${i + 1}`}
                  className="rounded-2xl bg-gradient-to-br from-brand-pistachio/40 to-brand-sea/20 border border-brand-emerald/10 p-6"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: p.iconBg }}
                  >
                    <p.Icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={1.9} />
                  </div>
                  <div className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark tabular-nums">
                    <CountUpNumber to={p.to} />
                    {p.suffix}
                  </div>
                  <p className="mt-1.5 text-[13.5px] font-medium text-slate-700 leading-snug">{p.label}</p>
                </motion.div>
              ))}
            </div>

            {/* What This Means For You */}
            <div className="relative mt-14 rounded-3xl bg-gradient-to-br from-[#07404B] to-[#0D1F2D] p-8 md:p-10 overflow-hidden">
              <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-brand-emerald/25 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-10 w-56 h-56 rounded-full bg-brand-sea/10 blur-3xl pointer-events-none" />
              <div className="relative flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-emerald/15 border border-brand-emerald/25 flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 text-brand-sea" fill="currentColor" strokeWidth={0} />
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-sea">
                  What This Means For You
                </p>
              </div>
              <div className="relative mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {WHAT_IT_MEANS.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] hover:border-brand-emerald/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-emerald/15 border border-brand-emerald/25 flex items-center justify-center">
                      <item.Icon className="w-5 h-5 text-brand-sea" strokeWidth={1.9} />
                    </div>
                    <p className="mt-4 font-display text-[16.5px] font-bold text-white leading-snug">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* The Challenge / The Solution */}
        <Section className="bg-[#F7F9FA]" texture>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12">
              {/* The Challenge */}
              <div>
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Turning AI Ideas Into Working Solutions Is Hard
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Are you facing any of these challenges?
                </p>
                <ul className="mt-8 space-y-5">
                  {CHALLENGES.map((c, i) => (
                    <motion.li
                      key={c}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-3.5 pb-5 border-b border-slate-200/70 last:border-b-0 last:pb-0"
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ type: "spring", stiffness: 400, damping: 20, delay: i * 0.06 + 0.1 }}
                        className="w-7 h-7 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold text-[12px] shrink-0"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.div>
                      <p className="text-[15px] leading-relaxed text-slate-700 pt-0.5">{c}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* The Solution */}
              <div className="lg:pl-4 lg:border-l lg:border-slate-200/70">
                <Eyebrow>The Solution</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  From Business Need To AI-Native Solution
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Dev+ brings together solution design, AI-native architecture, specialist delivery teams, and ProjectOps to build intelligent business applications from start to finish.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 rounded-2xl bg-gradient-to-br from-brand-emerald/5 to-brand-sea/10 border border-brand-emerald/15 p-6 md:p-7"
                >
                  <ul className="space-y-4">
                    {SOLUTION_HIGHLIGHTS.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" strokeWidth={2} />
                        <p className="text-[14.5px] font-medium leading-relaxed text-brand-dark">{h}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="mt-9">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    How It Starts
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {HOW_IT_STARTS.map((s, i) => (
                      <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="border-t-2 border-brand-emerald pt-3"
                      >
                        <p className="flex items-baseline gap-1.5">
                          <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ type: "spring", stiffness: 400, damping: 20, delay: i * 0.08 + 0.15 }}
                            className="inline-block text-[11px] font-bold text-brand-emerald"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </motion.span>
                          <span className="font-display text-[14.5px] font-bold text-brand-dark">
                            {s.title}
                          </span>
                        </p>
                        <p className="mt-1.5 text-[12.5px] leading-snug text-slate-500">
                          {s.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="dev-solution-cta"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Discuss Your Development Needs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* What Dev Plus Provides */}
        <Section className="bg-white" id="capabilities">
          <Container>
            <SectionHeading
              eyebrow="What Dev Plus Provides"
              title={
                <>
                  Six Disciplines.
                  <br />
                  One Accountable Delivery.
                </>
              }
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DISCIPLINES.map((d) => (
                <FeatureCard key={d.name} icon={d.icon} testId={`dev-discipline-${d.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-emerald">
                    {d.name}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-brand-dark tracking-tight leading-tight">
                    {d.tagline}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                    {d.desc}
                  </p>
                </FeatureCard>
              ))}
            </div>
          </Container>
        </Section>

        {/* Why We Are Different / What This Means For You */}
        <DifferenceMeansSection
          testId="dev-difference"
          eyebrow="The Dev Plus Difference"
          title={
            <>
              Launch Is the Milestone.
              <br />
              Value Is Our Destination.
            </>
          }
          subtitle={
            <>
              Most software companies use one team across every discipline, with AI often added later.
              <br />
              <br />
              Dev+ brings in the right specialists, designs AI into the solution from day one, manages delivery through ProjectOps, and stays accountable from discovery to adoption.
            </>
          }
          rightSlot={
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-[380px]">
                {/* Laptop screen */}
                <div className="rounded-t-lg bg-[#1a1a24] border-[6px] border-b-0 border-[#26263a] overflow-hidden shadow-2xl shadow-black/50">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#20202e]">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[9px] text-slate-400">agent.ts</span>
                  </div>
                  <div className="p-4 font-mono text-[10.5px] leading-relaxed min-h-[220px]">
                    {CODE_LINES.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.09 }}
                        className="flex gap-3"
                      >
                        <span className="text-slate-600 select-none w-4 text-right shrink-0">{i + 1}</span>
                        <span>
                          {line.map((tok, ti) => (
                            <span key={ti} className={tok.c}>{tok.t}</span>
                          ))}
                          {i === CODE_LINES.length - 1 && (
                            <motion.span
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              className="inline-block w-1.5 h-3 bg-brand-emerald ml-1 align-middle"
                            />
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Laptop base */}
                <div className="h-2.5 rounded-b-lg bg-gradient-to-b from-[#3a3a4a] to-[#1a1a24] relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-14 h-1 rounded-b-sm bg-[#20202e]" />
                </div>
              </div>
            </motion.div>
          }
        />

        {/* Engagement Models */}
        <Section className="bg-white" id="pricing">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Engagement Models</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Engage the Way That Works for You.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                We start with your business, not the build. Then we assemble the right specialists, including AI engineers where your solution calls for them, and stay accountable, start to finish.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {ENGAGEMENT_MODELS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`dev-engagement-model-${m.label.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                  className={`relative rounded-2xl border p-7 transition-shadow ${
                    m.highlight
                      ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] border-transparent md:-translate-y-2"
                      : "bg-[#F7F9FA] border-slate-200/70 hover:shadow-lg hover:shadow-slate-900/5"
                  }`}
                >
                  {m.badge && (
                    <span className="absolute -top-3 left-7 rounded-full bg-brand-emerald text-white text-[10.5px] font-semibold uppercase tracking-[0.08em] px-3 py-1">
                      {m.badge}
                    </span>
                  )}
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${m.highlight ? "text-brand-sea" : "text-slate-500"}`}>
                    Model {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className={`mt-2 font-display text-[19px] font-bold ${m.highlight ? "text-white" : "text-brand-dark"}`}>
                    {m.label}
                  </p>

                  <div className={`mt-5 pt-4 border-t ${m.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">Best When</p>
                    <p className={`mt-1.5 text-[13.5px] leading-relaxed font-medium ${m.highlight ? "text-slate-200" : "text-slate-700"}`}>
                      {m.bestWhen}
                    </p>
                  </div>
                  <div className={`mt-4 pt-4 border-t ${m.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">You Pay</p>
                    <p className={`mt-1.5 text-[13.5px] leading-relaxed font-medium ${m.highlight ? "text-slate-200" : "text-slate-700"}`}>
                      {m.youPay}
                    </p>
                  </div>
                  <div className={`mt-4 pt-4 border-t ${m.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">Overrun Risk</p>
                    <p className={`mt-1.5 text-[13.5px] leading-relaxed font-medium ${m.highlight ? "text-slate-200" : "text-slate-700"}`}>
                      {m.overrunRisk}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/70 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p className="text-[13.5px] text-slate-500 max-w-xl">
                Not sure which fits? A free assessment ends with a recommended model and an indicative range — no commitment.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="dev-engagement-cta"
                className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
              >
                Book a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Turn Your Business Vision into Reality"
          subtitle="Tell us what you want to build, automate, or make intelligent. We'll help you define the right AI-native solution and manage the journey from concept to launch."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
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
      </main>
      <Footer />
    </ServicePageShell>
  );
}
