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
  CountUpNumber,
  DifferenceMeansSection,
} from "@/components/service/ServicePrimitives";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Compass, Users, Bot, ShieldCheck, ArrowRight, TrendingDown, FolderCheck, Building2, CheckCircle2, Zap, Layers,
  Star, Menu, Plus, Search, Sparkles, Newspaper, ShoppingBag, ClipboardList, Calendar, User,
} from "lucide-react";

const PROOF = [
  { Icon: FolderCheck, from: 0, to: 1000, suffix: "+", label: "Successful Projects", accent: "#059669", iconBg: "#C6E5DE" },
  { Icon: Building2, from: 0, to: 600, suffix: "+", label: "Vetted Technology Providers", accent: "#43669E", iconBg: "#C7D3EC" },
  { Icon: TrendingDown, from: 20, to: 30, suffix: "%", rangeFrom: 20, label: "Technology Costs Reduced", accent: "#07404B", iconBg: "#D7EBC7" },
];

const WHAT_IT_MEANS = [
  {
    title: "Higher operational efficiency",
    Icon: Zap,
  },
  {
    title: "Lower cost and risk",
    Icon: ShieldCheck,
  },
  {
    title: "Simpler technology management",
    Icon: Layers,
  },
];

const PLATFORM_REQUESTS = [
  { category: "Employee Contract Signing", title: "Employee Contract Signing", by: "Nadia Karim", date: "8 Sep 2026", ref: "NUM21698", status: "Pending", accent: "#17A67B" },
  { category: "Employee Services", title: "Employee Letters Inquiry", by: "Omar Haddad", date: "10 Sep 2026", ref: "NUM21697", status: "Approved", accent: "#17A67B" },
  { category: "Employee Services", title: "Insurance Inquiry", by: "Sara Nassif", date: "12 Sep 2026", ref: "NUM21701", status: "In review", accent: "#4EBC96" },
];

const STATUS_STYLES = {
  Pending: { bg: "#FFF5E6", text: "#8A5A10", dot: "#D9932B" },
  Approved: { bg: "#E8F7F1", text: "#0F7F5E", dot: "#17A67B" },
  "In review": { bg: "#F1F5F4", text: "#3F5A55", dot: "#4EBC96" },
};

const CHALLENGES = [
  "Choosing the right technology",
  "Setting up new systems without slowing work",
  "Keeping technology secure and running well",
  "Avoiding the cost of a full IT department",
  "Managing too many IT providers",
];

const SOLUTION_HIGHLIGHTS = [
  "No hiring, onboarding, or managing an internal IT team",
  "No overhead of running an IT department yourself",
  "No juggling multiple providers and contracts",
];

const CAPABILITIES = [
  {
    slug: "advisory-plus",
    name: "Advisory+",
    positioning: "Executive Technology Leadership",
    desc: "Get CIO-level guidance to build your IT roadmap, choose the right software, plan your IT budget, and make sure your technology actually supports your business goals.",
    shortDesc: "Executive technology leadership — strategy, roadmap and governance.",
    price: "USD 3,000/month",
    priceMain: "USD 3,000",
    priceUnit: "per month",
    to: "/cio-plus/advisory-plus",
    Icon: Compass,
    accent: "#059669",
    iconBg: "#C6E5DE",
  },
  {
    slug: "productivity-plus",
    name: "Productivity+",
    positioning: "Day-to-Day Staff Support",
    desc: "Keep your team moving with fast IT support, workplace administration, and enablement so your staff actually uses the tools you pay for.",
    shortDesc: "Day-to-day staff support across the digital workplace.",
    price: "From USD 400/month",
    priceMain: "From USD 400",
    priceUnit: "per month",
    to: "/cio-plus/productivity-plus",
    Icon: Users,
    accent: "#43669E",
    iconBg: "#C7D3EC",
  },
  {
    slug: "ai-plus",
    name: "AI+",
    positioning: "Agentic AI & Smart Process Automation",
    desc: "Turn slow, repetitive manual tasks into automated workflows that get work done faster, with fewer human errors.",
    shortDesc: "Agentic AI and smart process automation, built and run for you.",
    price: "USD 2,000–4,000 per AI agent",
    priceMain: "USD 2–4k",
    priceUnit: "per AI agent",
    to: "/cio-plus/ai-plus",
    Icon: Bot,
    accent: "#07404B",
    iconBg: "#D7EBC7",
  },
  {
    slug: "assurance-plus",
    name: "Assurance+",
    positioning: "Vendor Management & Accountability",
    desc: "Replace multiple support agreements with one managed service. Access hundreds of technologies and providers while reducing costs and downtime.",
    shortDesc: "Vendor management and accountability across your providers.",
    price: "Pay as you go or prepaid credits",
    priceMain: "Flexible",
    priceUnit: "or prepaid credits",
    to: "/cio-plus/assurance-plus",
    Icon: ShieldCheck,
    accent: "#059669",
    iconBg: "#EAEDC0",
  },
];

const HOW_IT_STARTS = [
  {
    title: "Assess",
    desc: "Priorities, environment, and roadmap.",
  },
  {
    title: "Activate",
    desc: "Start with one service, expand later.",
  },
  {
    title: "Govern",
    desc: "Measure performance, improve continuously.",
  },
];

const FAQS = [
  {
    q: "What is CIO Plus?",
    a: "CIO Plus is Technology Leadership as a Service. It gives growing businesses executive IT leadership, employee support, AI automation, and technology assurance through one managed partnership, instead of building and running an internal IT department.",
  },
  {
    q: "Do we need all four services?",
    a: "No. You can start with the service that addresses your immediate priority and add other capabilities as your business needs evolve.",
  },
  {
    q: "Do we still need an internal IT team?",
    a: "Not necessarily. CIO Plus can operate as your managed technology capability or complement an existing employee or IT team.",
  },
  {
    q: "How is CIO Plus different from traditional IT support?",
    a: "Traditional IT support usually focuses on resolving technical issues. CIO Plus combines technology leadership, employee productivity, AI automation, provider management, and ongoing technology improvement.",
  },
  {
    q: "Can you work with our existing providers?",
    a: "Yes. We can coordinate your current providers, manage responsibilities and escalations, assess their performance, and introduce additional expertise when required.",
  },
  {
    q: "Can you digitize our manual processes?",
    a: "Yes. We identify high-value processes and create structured digital workflows for requests, approvals, notifications, tracking, and reporting.",
  },
  {
    q: "How do we get started?",
    a: "We begin with a consultation to understand your priorities, current environment, and immediate challenges. We then recommend the most suitable CIO Plus starting point.",
  },
];

export default function CIOPlus() {
  const meta = PAGE_META.cio;
  return (
    <ServicePageShell testId="cio-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "cio",
            name: "CIO Plus — Managed Services for Growing Companies",
            serviceType: "Managed IT Services",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="CIO PLUS · Technology Leadership as a Service"
          title={
            <>
              Grow Your Business.
              <br />
              We&apos;ll Manage Your Technology.
            </>
          }
          titleClassName="text-5xl md:text-6xl lg:text-[66px]"
          subtitle="Your digital transformation, managed from roadmap to everyday adoption, so your business operates smarter, adapts faster, and competes with confidence."
          cta="Book a Free Consultation"
          ctaHref={CALENDLY_URL}
          testId="cio-hero"
          parallax
        />

        {/* Proof & Main Value */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl xl:max-w-none">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Enterprise Power. Built for You.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                More than a decade of Gulf enterprise and government IT experience, now delivered to growing businesses without the cost of building an internal IT department.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PROOF.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`cio-proof-stat-${i + 1}`}
                  className="group cursor-default rounded-2xl bg-gradient-to-br from-brand-pistachio/40 to-brand-sea/20 border border-brand-emerald/10 p-7 transition-shadow hover:shadow-xl hover:shadow-brand-emerald/10 hover:border-brand-emerald/30"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: p.iconBg }}
                  >
                    <p.Icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={1.75} />
                  </div>
                  <div className="mt-5 font-display text-5xl md:text-6xl font-extrabold text-brand-dark tabular-nums leading-none">
                    {p.rangeFrom ? (
                      <>
                        <CountUpNumber to={p.rangeFrom} />–<CountUpNumber to={p.to} />
                        {p.suffix}
                      </>
                    ) : (
                      <>
                        <CountUpNumber from={p.from} to={p.to} />
                        {p.suffix}
                      </>
                    )}
                  </div>
                  <p className="mt-3 text-[14px] font-medium text-slate-700 leading-snug">{p.label}</p>
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
                  Technology Gets Harder To Manage As You Grow
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
                  Your IT Department.
                  <br />
                  Fully Managed.
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  CIO+ gives you a fully managed IT department that plans, selects, manages, and improves your technology.
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
                  data-testid="cio-solution-cta"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* What CIO Plus Provides */}
        <Section className="bg-white" id="capabilities">
          <Container>
            <SectionHeading
              eyebrow="What CIO Plus Provides"
              title={
                <>
                  One Partnership.
                  <br />
                  Four Connected Capabilities.
                </>
              }
              subtitle="Start with the solution your business needs today, or combine capabilities to build a complete managed technology function."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
              {CAPABILITIES.map((c) => (
                <motion.div
                  key={c.slug}
                  id={c.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="group scroll-mt-28 rounded-2xl bg-white border border-slate-200/70 p-8 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                  data-testid={`cio-capability-${c.slug}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: c.iconBg }}
                  >
                    <c.Icon className="w-6 h-6" style={{ color: c.accent }} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-xl md:text-[22px] font-bold text-brand-dark tracking-tight leading-tight">
                    {c.name} <span className="text-slate-400 font-medium">|</span> {c.positioning}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {c.desc}
                  </p>
                  <Link
                    to={c.to || `/cio-plus#${c.slug}`}
                    data-testid={`cio-capability-cta-${c.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-emerald hover:gap-3 transition-all"
                  >
                    Explore {c.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Why We Are Different */}
        <DifferenceMeansSection
          testId="cio-difference"
          eyebrow="The CIO Plus Difference"
          title="Everything Connected."
          subtitle="Most IT companies specialize in one area. CIO+ brings everything together."
          tags={["Strategic Advisory", "Digital Workplace Productivity", "Agentic AI", "Multi-Vendor Assurance"]}
          quoteTitle="One managed capability. One trusted partner."
          quoteDesc="Powered by our Digital Workspace Platform, your technology, workflows, providers, and service performance are managed in one place."
          rightSlot={
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              {/* Phone frame */}
              <div className="relative w-[210px] shrink-0 rounded-[34px] p-[5px] shadow-2xl shadow-black/50" style={{ background: "linear-gradient(160deg, #2c3a3b 0%, #0e1b1c 55%, #29383a 100%)" }}>
                <div className="relative w-full h-[448px] rounded-[29px] overflow-hidden bg-[#f6f8f8] flex flex-col">
                  {/* Dynamic island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[52px] h-4 rounded-full bg-[#0b1516] z-10" />

                  {/* Green header */}
                  <div className="relative shrink-0 rounded-b-[16px]" style={{ background: "linear-gradient(160deg, #17A67B 0%, #13946D 100%)" }}>
                    <div className="flex items-center justify-between px-3.5 pt-2 text-white text-[9px] font-semibold">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex items-end gap-[1.5px] h-[9px]">
                          <span className="w-[2px] h-[35%] bg-white rounded-sm" />
                          <span className="w-[2px] h-[55%] bg-white rounded-sm" />
                          <span className="w-[2px] h-[75%] bg-white rounded-sm" />
                          <span className="w-[2px] h-[100%] bg-white rounded-sm" />
                        </div>
                        <div className="w-3.5 h-2 border border-white/75 rounded-[2px] relative">
                          <div className="absolute inset-[1px] bg-white rounded-[1px] w-[70%]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 px-3.5 pt-2 pb-3">
                      <img
                        src="/assets/brand/exceeders-mark.png"
                        alt=""
                        className="w-5 h-5 shrink-0"
                        style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }}
                      />
                      <p className="font-display text-white text-[13.5px] font-bold">Requests</p>
                      <div className="w-[22px] h-[22px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="shrink-0 flex px-3 bg-white border-b border-slate-100">
                    <span className="flex-1 text-center pt-2.5 pb-2 text-[10px] font-medium text-slate-500">Actions</span>
                    <span className="flex-1 text-center pt-2.5 pb-2 text-[10px] font-medium text-slate-500">Mine</span>
                    <span className="flex-1 text-center pt-2.5 pb-2 text-[10px] font-bold text-[#17A67B] border-b-2 border-[#17A67B] -mb-px">All</span>
                  </div>

                  <div className="shrink-0 px-3.5 pt-2.5 pb-1.5 bg-[#f6f8f8]">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex items-center gap-1.5 bg-white border border-slate-200 rounded-[10px] px-2.5 py-2">
                        <Search className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                        <span className="text-[9.5px] text-slate-500">Search</span>
                      </div>
                      <div className="w-[30px] h-[30px] rounded-[10px] bg-white border border-slate-200 flex items-center justify-center shrink-0">
                        <Menu className="w-3 h-3 text-slate-600" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-[9px] text-slate-500">
                      <motion.span
                        animate={{ opacity: [1, 0.35, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-[#17A67B] shrink-0"
                      />
                      17,063 requests · 3 need you
                    </div>
                  </div>

                  {/* Request list */}
                  <div className="relative flex-1 px-3.5 pb-3 bg-[#f6f8f8] flex flex-col gap-1.5 overflow-hidden">
                    {PLATFORM_REQUESTS.map((r, i) => {
                      const s = STATUS_STYLES[r.status];
                      return (
                        <motion.div
                          key={r.ref}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                          className="relative rounded-xl bg-white border border-slate-100 p-2.5 overflow-hidden"
                        >
                          <span className="absolute left-0 top-0 bottom-0 w-[2.5px]" style={{ backgroundColor: r.accent }} />
                          <p className="text-[7px] font-semibold uppercase tracking-wide text-slate-400 truncate">{r.category}</p>
                          <p className="mt-0.5 text-[10.5px] font-bold text-[#102b26] leading-tight">{r.title}</p>
                          <div className="mt-1.5 flex items-end justify-between gap-2">
                            <p className="text-[8px] text-[#3f5a55] leading-snug">
                              <span className="text-slate-400">By</span> {r.by}
                              <br />
                              <span className="text-slate-400">Ref</span> {r.ref}
                            </p>
                            <span
                              className="shrink-0 inline-flex items-center gap-1 rounded-full text-[7.5px] font-semibold px-1.5 py-[3px]"
                              style={{ backgroundColor: s.bg, color: s.text }}
                            >
                              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: s.dot }} />
                              {r.status}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* FAB */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: 0.7, type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute bottom-2 right-3 w-8 h-8 rounded-[11px] flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#17A67B", boxShadow: "0 10px 20px -8px rgba(23,166,123,.8)" }}
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Bottom tab bar */}
                  <div className="shrink-0 bg-white border-t border-slate-100 px-2 pt-2 pb-1.5">
                    <div className="grid grid-cols-5">
                      {[
                        { label: "News", Icon: Newspaper },
                        { label: "Market", Icon: ShoppingBag },
                        { label: "Requests", Icon: ClipboardList },
                        { label: "Events", Icon: Calendar },
                        { label: "Profile", Icon: User },
                      ].map(({ label, Icon }) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                          <Icon className="w-3 h-3" style={{ color: label === "Requests" ? "#17A67B" : "#5c6f73" }} strokeWidth={label === "Requests" ? 2.3 : 1.8} />
                          <span className="text-[6.5px] font-medium" style={{ color: label === "Requests" ? "#17A67B" : "#5c6f73", fontWeight: label === "Requests" ? 700 : 500 }}>
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="w-16 h-1 rounded-full bg-[#0e1b1c] opacity-25 mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          }
        />

        {/* Pricing */}
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    Pricing
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Flexible Services That Grow With Your Business.
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-slate-600">
                  One mid-level IT hire costs more per year than most CIO Plus engagements. Start with the service that addresses your immediate priority and expand your partnership when your needs evolve.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="cio-pricing-cta"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Request a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CAPABILITIES.map((c, i) => (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  data-testid={`cio-pricing-card-${c.slug}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    <p className="font-display text-[17px] font-bold text-brand-dark tracking-tight">{c.name}</p>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                    {c.shortDesc}
                  </p>
                  <div className="mt-6 pt-5 border-t border-slate-200/70">
                    <p className="font-display text-[21px] font-extrabold text-brand-dark leading-tight">
                      {c.priceMain}
                    </p>
                    <p className="mt-1 text-[12.5px] text-slate-500">{c.priceUnit}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-[13.5px] text-slate-500">
              All engagements are month-to-month.
            </p>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Your Business Deserves Clear IT Direction."
          subtitle="Build a more scalable and profitable business without building a complete internal IT department."
          cta="Book A Free Consultation"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common Questions About CIO Plus" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`cio-faq-${i + 1}`} />
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
