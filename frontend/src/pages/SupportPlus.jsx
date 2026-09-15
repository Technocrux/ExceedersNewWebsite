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
  DifferenceMeansSection,
} from "@/components/service/ServicePrimitives";
import { motion } from "framer-motion";
import { LOGOS, LogoBadge } from "@/components/sections/TrustedBy";
import {
  ArrowRight,
  Cloud, Database, Network, Activity, Code2, Server, Building2, Sparkles,
  Handshake, Zap, ShieldCheck, Star, TrendingDown, Quote,
} from "lucide-react";

const PAIN = [
  "Multiple support agreements with different contracts, providers, and renewal terms.",
  "High fixed costs; you pay for support even when services aren't fully used.",
  "Too much coordination effort chasing vendors instead of business priorities.",
  "Difficult access to specialized services, enhancements, and small tasks.",
];

const PROOF_CAPABILITIES = [
  { title: "400+ Vetted Providers", desc: "Access trusted specialists across every core technology.", icon: Handshake },
  { title: "Credit-Based Flexibility", desc: "Consume support only when you need it; unused credits don't expire.", icon: Zap },
  { title: "One Point of Accountability", desc: "eXceeders coordinates every provider, contract, and request.", icon: ShieldCheck },
];

const WHAT_IT_MEANS = [
  { title: "Lower total cost of support", Icon: TrendingDown },
  { title: "Faster access to expertise", Icon: Zap },
  { title: "Simpler vendor management", Icon: ShieldCheck },
];

const PROVIDER_NETWORK = [
  { initials: "IS", name: "Info-Sys", desc: "Global leader in next-generation digital services and consulting.", tags: ["AI and Machine Learning", "IT Consulting"], bg: "#0E2A31", color: "#FFFFFF" },
  { initials: "SA", name: "SAPient", desc: "UAE-based team of certified infrastructure specialists.", tags: ["Infrastructure and Cloud", "IT Consulting"], bg: "#17A67B", color: "#FFFFFF" },
  { initials: "CDN", name: "CDN Solutions", desc: "App development company rooted in enterprise software delivery.", tags: ["Programming and Development", "Web Technologies"], bg: "#DCEAE6", color: "#0F7F5E" },
  { initials: "TR", name: "Tricent", desc: "Governs file sharing across Microsoft 365 and Google Workspace.", tags: ["Cybersecurity", "Software"], bg: "#E6F0FB", color: "#1D5BA6" },
];

const TECH = [
  { icon: Server, name: "Infrastructure", examples: "Microsoft Directory Services, Configuration Manager, Virtualization" },
  { icon: Cloud, name: "Cloud & Microsoft 365", examples: "Azure, M365, Defender, Dynamics 365" },
  { icon: Building2, name: "Business Applications", examples: "SAP, SuccessFactors, SharePoint, Power Apps" },
  { icon: Activity, name: "BI & Data", examples: "Power BI, SSIS, SSAS, Microsoft Fabric, Qlik" },
  { icon: Database, name: "Databases & Backup", examples: "Oracle, SQL Server, PostgreSQL, MongoDB, Veeam" },
  { icon: Network, name: "Networks & Security", examples: "Cisco, Fortinet, Juniper, SD-WAN, Firewalls" },
  { icon: Sparkles, name: "Monitoring & Performance", examples: "Dynatrace, DEM, Cloud Infrastructure Monitoring" },
  { icon: Code2, name: "Software & Web Development", examples: ".NET, Laravel, Django, Node.js, React, Angular" },
];

const MODEL_01_FEATURES = [
  { title: "No upfront cost", desc: "Pay on delivery." },
  { title: "Ad hoc ready", desc: "For unpredictable needs." },
  { title: "No commitment", desc: "Test before you scale." },
];

const PLANS = [
  { name: "Starter", price: "€10,000", credits: "1,000 ESP credits", tagline: "Occasional support needs and small technical requests." },
  { name: "Growth", price: "€15,000", credits: "1,650 ESP credits · 10% bonus", tagline: "Recurring support across multiple technologies.", highlight: true },
  { name: "Enterprise", price: "€30,000", credits: "3,450 ESP credits · 15% bonus", tagline: "Higher-volume support, complex environments and projects." },
];

const PROCESS = [
  { title: "Share your requirement", desc: "Submit the support need, technology, urgency, and expected outcome." },
  { title: "We match the expertise", desc: "eXceeders assesses the request and identifies the right provider from the marketplace." },
  { title: "Access expert delivery", desc: "Your team receives support from trusted providers with the required capability." },
  { title: "Track & manage", desc: "Requests are coordinated, followed up, and monitored to ensure completion." },
];

const CASES = [
  { name: "Credit Oman", quote: "It significantly improved our overall IT efficiency.", impact: "Improved IT efficiency, faster support access, reduced operational delays.", accent: "#059669", tint: "#C6E5DE" },
  { name: "Orbitas Limited", quote: "IT Support Plus helped us realize a cost reduction of 5–10%.", impact: "Better cost control, flexible support usage, measurable project savings.", accent: "#43669E", tint: "#C7D3EC" },
  { name: "beIN Media Group", quote: "We confidently recommend IT Support Plus.", impact: "Faster access to technical expertise, improved infrastructure support.", accent: "#07404B", tint: "#D7EBC7" },
];

const FAQS = [
  { q: "What is IT Support Plus?", a: "IT Support Plus is a flexible IT support agreement that gives enterprise IT teams access to trusted providers and technical specialists across multiple technologies and support needs." },
  { q: "Does IT Support Plus replace our internal IT team?", a: "No. IT Support Plus is designed to extend and support your internal IT team, not replace it." },
  { q: "What types of requests can it support?", a: "Application issues, infrastructure requirements, cloud and platform support, troubleshooting, project support, migrations, upgrades, escalations, and specialized technical requests." },
  { q: "How is IT Support Plus different from CIO+?", a: "CIO+ focuses on IT leadership, strategy, roadmap, and governance. IT Support Plus focuses on flexible technical support and extra delivery capacity for organizations that already have internal IT teams." },
];

export default function SupportPlus() {
  const meta = PAGE_META.support;
  return (
    <ServicePageShell testId="support-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "support",
            name: "Support Plus — Flexible Managed IT Support",
            serviceType: "Managed IT Support",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="IT Support Plus for Enterprises"
          title="Simplify IT Support Under One Managed Agreement."
          subtitle="Cover multiple technologies, coordinate providers, and use services based on actual needs, while reducing cost, saving time, and improving visibility."
          cta="Book A Call"
          ctaHref={CALENDLY_URL}
          testId="support-hero"
          parallax
        />

        {/* Proof & Capabilities */}
        <Section className="bg-white">
          <Container>
            <SectionHeading
              eyebrow="Proof & Capabilities"
              title="A Support Model Built On Flexibility And Trust"
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROOF_CAPABILITIES.map((p) => (
                <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.desc} />
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

            {/* Trusted By logos */}
            <div className="mt-12 relative mask-fade-x overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-2">
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <LogoBadge key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Problem + Solution combined */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Is IT support becoming costly and difficult to manage?
                </h2>
                <ul className="mt-8 space-y-4">
                  {PAIN.map((p, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-3"
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
                      <p className="text-[15px] leading-relaxed text-slate-700">{p}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <Eyebrow>The Solution</Eyebrow>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  One managed agreement. Multiple IT support needs.
                </h3>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Support+ gives you one managed agreement for multiple technologies, providers, and IT needs; from support and projects to trainings, subscriptions, and specialist resources, based on actual usage.
                </p>

                <div className="mt-9">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    How It Starts
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-5">
                    {PROCESS.map((s, i) => (
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
              </div>
            </div>
          </Container>
        </Section>

        {/* Why We Are Different */}
        <DifferenceMeansSection
          testId="support-difference"
          eyebrow="The Support Plus Difference"
          title="One Agreement. Every Provider."
          subtitle="Most support contracts lock you into a single vendor. Support+ gives you one agreement across our entire provider network."
          tags={["Infrastructure & Cloud", "Cybersecurity", "Business Applications", "Data & Analytics"]}
          quoteTitle="One managed agreement. Every specialist you need."
          quoteDesc="Access our full network of vetted technology providers through a single point of accountability, no separate contracts to negotiate."
          rightSlot={
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white shadow-2xl shadow-black/40 overflow-hidden p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Exceeders&apos; Network</p>
              <div className="mt-3 grid grid-cols-2 gap-3" style={{ perspective: "1400px" }}>
                {PROVIDER_NETWORK.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, rotateX: 22, y: 20, scale: 0.94 }}
                    whileInView={{ opacity: 1, rotateX: 8, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: 0.08 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                    whileHover={{ rotateX: 0, scale: 1.03 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="rounded-2xl border border-slate-100 bg-white p-3"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[9px] font-bold shrink-0"
                        style={{ backgroundColor: p.bg, color: p.color }}
                      >
                        {p.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-[#102B26] truncate">{p.name}</p>
                        <p className="text-[7.5px] text-slate-400">Exceeders&apos; Network</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[9px] leading-snug text-slate-500 line-clamp-2">{p.desc}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[7px] font-medium text-[#3F5A55] bg-[#F2F6F5] border border-[#E6ECEB] rounded px-1.5 py-0.5 truncate max-w-[90px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          }
        />

        {/* Technology Stack — compact grid */}
        <Section className="bg-[#F7F9FA]" texture>
          <Container>
            <SectionHeading
              eyebrow="Technologies Covered"
              title="Support across the technologies enterprises actually run."
              subtitle="Browse the main technology areas. If your requirement isn't listed, submit a request and we'll match you with the right provider."
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {TECH.map((t) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl bg-white border border-slate-200 p-5 hover:border-brand-emerald/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <t.icon className="w-5 h-5 text-brand-emerald" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-[16px] font-bold text-brand-dark leading-tight">{t.name}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500">{t.examples}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Plans */}
        <Section className="bg-white" id="pricing">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    Flexible Support Plans
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Choose How You Want To Use IT Support Plus.
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-slate-600">
                  Two engagement models: pay-as-you-go for maximum flexibility, or prepaid credits for recurring support needs.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="support-plans-cta"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Book A Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Model 01 — Pay-as-you-go */}
            <div className="mt-14 rounded-2xl bg-[#F7F9FA] border border-slate-200/70 p-7 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Model 01</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-brand-dark">Pay-as-you-go</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">
                    Maximum flexibility — no upfront payment, pay only on successful delivery.
                  </p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                  {MODEL_01_FEATURES.map((f) => (
                    <div key={f.title} className="py-3 sm:py-0 sm:px-6 first:sm:pl-0">
                      <p className="font-display text-[15px] font-bold text-brand-dark">{f.title}</p>
                      <p className="mt-1 text-[13px] text-slate-500">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Model 02 — Prepaid Plans */}
            <div className="mt-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Model 02</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-brand-dark">Prepaid Support Plans</h3>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                {PLANS.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className={`relative rounded-2xl border p-7 transition-shadow ${
                      p.highlight
                        ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] border-transparent"
                        : "bg-white border-slate-200/70 hover:shadow-lg hover:shadow-slate-900/5"
                    }`}
                    data-testid={`support-plan-${p.name.toLowerCase()}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className={`font-display text-[17px] font-bold ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                        {p.name}
                      </p>
                      {p.highlight && (
                        <span className="rounded-full bg-brand-emerald text-white text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 shrink-0">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className={`mt-3 text-[13.5px] leading-relaxed ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>
                      {p.tagline}
                    </p>
                    <div className={`mt-6 pt-5 border-t ${p.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                      <p className={`font-display text-[28px] font-extrabold leading-tight tabular-nums ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                        {p.price}
                      </p>
                      <p className={`mt-1 text-[12.5px] ${p.highlight ? "text-slate-400" : "text-slate-500"}`}>
                        {p.credits}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-[13px] text-slate-500">1 ESP = €10 · credits consumed on actual usage</p>
              <a
                href="https://www.exceeders.com/pages/consumption-lb"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="support-consumption-matrix-link"
                className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-brand-emerald transition-colors"
              >
                View the full consumption matrix
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Container>
        </Section>

        {/* Case Studies */}
        <Section className="bg-white">
          <Container>
            <SectionHeading
              eyebrow="Trusted Across the Gulf"
              title="Enterprises reducing complexity and cost with IT Support Plus."
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {CASES.map((c, i) => (
                <motion.article
                  key={c.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative flex flex-col rounded-3xl bg-white border border-slate-200/70 p-7 pt-8 shadow-sm hover:shadow-xl hover:shadow-slate-900/10 transition-all overflow-hidden"
                  data-testid={`support-case-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-40 blur-2xl pointer-events-none"
                    style={{ backgroundColor: c.tint }}
                  />
                  <Quote className="relative w-8 h-8" style={{ color: c.accent }} fill={c.accent} strokeWidth={0} />
                  <p className="relative mt-4 font-display text-[18px] font-semibold text-brand-dark leading-snug">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <p className="relative mt-3 text-[13.5px] leading-relaxed text-slate-600 flex-1">{c.impact}</p>
                  <div className="relative mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                      style={{ backgroundColor: c.tint, color: c.accent }}
                    >
                      {c.name.charAt(0)}
                    </div>
                    <p className="text-[13px] font-semibold text-brand-dark">{c.name}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready to simplify support"
          title={
            <>
              Simpler Support.
              <br />
              Better Control.
            </>
          }
          subtitle="Reduce cost, save time, improve visibility, and access everything you need through one point of accountability."
        />

        {/* FAQ */}
        <Section className="bg-[#F7F9FA]" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about IT Support Plus" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`support-faq-${i + 1}`} />
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
