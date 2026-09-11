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
  RefreshCcw, Receipt, Clock, UserCog, ArrowRight, ShieldCheck,
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
    desc: "Design applications where AI is embedded into the core business process from day one — intelligent assistants, workflow automation, AI agents, and predictive capabilities built into the experience, not layered on afterward.",
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
  { label: "Fixed Price", icon: Receipt },
  { label: "Time & Material", icon: Clock },
  { label: "Dedicated Delivery Team", icon: UserCog },
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
          subtitle="A fully managed team that designs, builds, and evolves AI-native business applications, Agentic AI workflows, and secure internal AI infrastructure — from planning and architecture to development, testing, and delivery."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
          testId="dev-hero"
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
          </Container>
        </Section>

        {/* The Challenge */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="max-w-3xl">
              <Eyebrow>The Challenge</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Most Business Applications Fail Before Launch.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
                Organizations often focus on technology and development before designing the right intelligent business solution and assembling the right team around it.
              </p>
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
              Launch is the Milestone.
              <br />
              Value is Our Destination.
            </>
          }
          subtitle="Most software companies bring one team and stretch it across every discipline — with AI often bolted on as an afterthought. We assemble the right specialists for each discipline, design AI into the solution from day one, govern the entire engagement through ProjectOps, and stay the single accountable partner — from discovery to adoption."
          meansItems={WHAT_IT_MEANS}
        />

        {/* Engagement Models */}
        <Section className="bg-white" id="pricing">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <Eyebrow>Engagement Models</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Engage the Way That Works for You.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                We start with your business, not the build. Then we assemble the right specialists, including AI engineers where your solution calls for them, and stay accountable, start to finish, through the model that fits how you want to work with us.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {ENGAGEMENT_MODELS.map((m) => (
                <div
                  key={m.label}
                  data-testid={`dev-engagement-model-${m.label.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#F7F9FA] border border-slate-200/70 px-5 py-3"
                >
                  <m.icon className="w-4.5 h-4.5 text-brand-emerald" />
                  <span className="text-[14.5px] font-semibold text-brand-dark">{m.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl mx-auto text-center text-[13.5px] text-slate-500">
              Commercial models are tailored to your project scope, complexity, AI requirements, and preferred delivery approach.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="dev-engagement-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Book A Free Assessment
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
