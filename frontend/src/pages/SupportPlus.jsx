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
  FileText, Layers, Repeat, ShieldCheck, CheckCircle2, ArrowRight,
  Cloud, Database, Network, Activity, Code2, Server, Building2, Sparkles,
} from "lucide-react";

const HERO_SNAPSHOT = [
  { icon: FileText, title: "One managed agreement" },
  { icon: Layers, title: "Multiple technologies" },
  { icon: Repeat, title: "Flexible usage" },
  { icon: ShieldCheck, title: "One accountability" },
];

const PAIN = [
  "Multiple support agreements with different contracts, providers, and renewal terms.",
  "High fixed costs — you pay for support even when services aren't fully used.",
  "Too much coordination effort chasing vendors instead of business priorities.",
  "Difficult access to specialized services, enhancements, and small tasks.",
];

const PROOF = [
  { v: "400+", l: "Vetted providers across technologies" },
  { v: "No Expiry", l: "Unused credits stay available" },
  { v: "Credit-Based", l: "Use credits only when approved" },
  { v: "On Demand", l: "Consume based on actual IT demand" },
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

const PLANS = [
  { name: "Starter", price: "€10,000", tagline: "For occasional support needs and small technical requests." },
  { name: "Growth", price: "€15,000", tagline: "For recurring support needs across multiple technologies.", highlight: true },
  { name: "Enterprise", price: "€30,000", tagline: "For higher-volume support, complex environments, and project-based needs." },
];

const PROCESS = [
  { title: "Share your requirement", desc: "Submit the support need, technology, urgency, and expected outcome." },
  { title: "We match the expertise", desc: "eXceeders assesses the request and identifies the right provider from the marketplace." },
  { title: "Access expert delivery", desc: "Your team receives support from trusted providers with the required capability." },
  { title: "Track & manage", desc: "Requests are coordinated, followed up, and monitored to ensure completion." },
];

const CASES = [
  { name: "Credit Oman", quote: "It significantly improved our overall IT efficiency.", impact: "Improved IT efficiency, faster support access, reduced operational delays." },
  { name: "Orbitas Limited", quote: "IT Support Plus helped us realize a cost reduction of 5–10%.", impact: "Better cost control, flexible support usage, measurable project savings." },
  { name: "beIN Media Group", quote: "We confidently recommend IT Support Plus.", impact: "Faster access to technical expertise, improved infrastructure support." },
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
          subtitle="One managed agreement to cover multiple technologies, coordinate providers, and consume services based on actual utilization — reducing cost, saving time, and improving visibility."
          cta="Book A Call"
          ctaHref={CALENDLY_URL}
          testId="support-hero"
          visualSlot={
            <div className="grid grid-cols-2 gap-3">
              {HERO_SNAPSHOT.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-emerald/20 flex items-center justify-center">
                    <item.icon className="w-4.5 h-4.5 text-brand-sea" strokeWidth={1.8} />
                  </div>
                  <p className="mt-3 text-[13.5px] font-semibold text-white leading-snug">{item.title}</p>
                </motion.div>
              ))}
            </div>
          }
        />

        {/* Problem + Solution combined */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>The Problem</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Is IT support becoming costly and difficult to manage?
                </h2>
                <ul className="mt-8 space-y-4">
                  {PAIN.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold text-[12px] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-[15px] leading-relaxed text-slate-700">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <Eyebrow>The Solution</Eyebrow>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  One managed agreement. Multiple IT support needs.
                </h3>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Support Plus gives your organization one managed agreement to cover multiple technologies, providers, and service needs through eXceeders — consuming support, enhancements, small projects, subscriptions, licenses, and specialist resources based on actual utilization.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {PROOF.map((p, i) => (
                    <div key={i} className="rounded-2xl bg-gradient-to-br from-brand-pistachio/40 to-brand-sea/20 border border-brand-emerald/10 p-5">
                      <div className="font-display text-2xl md:text-3xl font-extrabold text-brand-dark leading-tight">{p.v}</div>
                      <p className="mt-1 text-[12.5px] font-medium text-slate-700 leading-snug">{p.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Technology Stack — compact grid */}
        <Section className="bg-[#F7F9FA]">
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
                  className="rounded-2xl bg-white border border-slate-200 p-5 hover:border-brand-emerald/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center">
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
            <SectionHeading
              eyebrow="Flexible Support Plans"
              title="Choose how you want to use IT Support Plus."
              subtitle="Available through two engagement models: pay-as-you-go for maximum flexibility, or prepaid plans for organizations with recurring support needs."
            />

            {/* Pay-as-you-go */}
            <div className="mt-12 rounded-3xl bg-gradient-to-br from-brand-pistachio/30 to-white border border-slate-200 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <Eyebrow>Model 01</Eyebrow>
                <h3 className="mt-3 font-display text-2xl md:text-[26px] font-bold text-brand-dark">Pay-as-you-go</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  For companies seeking maximum flexibility — pay only upon successful delivery, with no upfront payments.
                </p>
              </div>
              <ul className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "No upfront payment required",
                  "Pay only upon successful delivery",
                  "Ideal for ad hoc or unpredictable needs",
                  "Test the service before committing",
                ].map((it, k) => (
                  <li key={k} className="flex items-start gap-2 text-[14.5px] text-slate-700">
                    <CheckCircle2 className="w-4.5 h-4.5 mt-0.5 text-brand-emerald shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prepaid Plans */}
            <div className="mt-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-emerald">Model 02</p>
              <h3 className="mt-2 font-display text-2xl md:text-[26px] font-bold text-brand-dark">Prepaid Support Plans</h3>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {PLANS.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative rounded-3xl border p-8 ${
                      p.highlight
                        ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] text-white border-transparent shadow-2xl shadow-emerald-900/20 lg:-translate-y-2"
                        : "bg-white text-brand-dark border-slate-200"
                    }`}
                    data-testid={`support-plan-${p.name.toLowerCase()}`}
                  >
                    {p.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-emerald text-white text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
                    <h4 className="font-display text-2xl font-bold">{p.name}</h4>
                    <div className="mt-4 font-display text-5xl font-extrabold tabular-nums">{p.price}</div>
                    <p className={`mt-4 text-[14px] leading-relaxed ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>{p.tagline}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-[13px] text-slate-500 italic">Note: 1 ESP = €10. Credits are consumed based on actual service usage.</p>
            </div>
          </Container>
        </Section>

        {/* How It Works */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <SectionHeading eyebrow="How IT Support Plus Works" title="A simple process to access support faster." />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROCESS.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl bg-white border border-slate-200 p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald text-white flex items-center justify-center font-display font-bold">{i + 1}</div>
                  <h3 className="mt-5 font-display text-[17px] font-bold text-brand-dark">{w.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{w.desc}</p>
                </motion.div>
              ))}
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
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {CASES.map((c) => (
                <motion.article
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col"
                  data-testid={`support-case-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-emerald">{c.name}</p>
                  <p className="mt-3 font-display text-[16.5px] font-semibold text-brand-dark leading-snug">&ldquo;{c.quote}&rdquo;</p>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-slate-600 flex-1">{c.impact}</p>
                </motion.article>
              ))}
            </div>
            <p className="mt-8 text-[13.5px] text-slate-500 max-w-3xl">
              Trusted by ADNOC, Oman Arab Bank, Central Bank of Oman, DFM, beIN, Oman Insurance, Dubai Customs, Dubai Municipality, Al Masraf, Tasheel Finance, Kuwait Finance House, and more.
            </p>
          </Container>
        </Section>

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

        <ServiceFinalCTA
          eyebrow="Ready to simplify support"
          title="Simplify IT support through one managed agreement."
          subtitle="Reduce cost, save time, improve visibility, and access everything you need through one point of accountability."
        />
      </main>
      <Footer />
    </ServicePageShell>
  );
}
