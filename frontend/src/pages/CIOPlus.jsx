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
  Compass, Route, Layers, ClipboardList, ShieldCheck, GraduationCap,
  LifeBuoy, ArrowRight, Target, Network, CheckCircle2, Sparkles, Quote,
} from "lucide-react";

const HERO_SNAPSHOT = [
  { icon: Compass, title: "IT Leadership" },
  { icon: Route, title: "Roadmap & Planning" },
  { icon: Layers, title: "Tech & Provider Selection" },
  { icon: ShieldCheck, title: "Execution Oversight" },
];

const PROBLEMS = [
  "No clear IT roadmap — you know technology matters, but where to start is unclear.",
  "Disconnected tools and manual workarounds cost your team hours every week.",
  "Every vendor sounds convincing — choosing the right software feels impossible.",
  "IT projects start but never fully land. Quality and adoption are hard to control.",
];

const PROOF = [
  { v: "10+", l: "Years of Gulf enterprise IT experience" },
  { v: "400+", l: "Vetted IT providers" },
  { v: "9", l: "Specialists appointed to your business" },
  { v: "1", l: "Trusted partner end-to-end" },
];

const DELIVERS = [
  { icon: Target, title: "IT Assessment", desc: "Understand your current setup, identify gaps, and set priorities from day one." },
  { icon: Route, title: "IT Strategy & Roadmap", desc: "A practical plan for what to fix, improve, and implement, aligned with your growth goals." },
  { icon: Layers, title: "Technology Selection", desc: "Choose the right systems and tools based on real business needs — no vendor bias." },
  { icon: Network, title: "Provider Selection", desc: "Access trusted providers from our marketplace and choose the right partner per requirement." },
  { icon: ClipboardList, title: "Project Management", desc: "Keep every IT project organized, on track, and accountable from kickoff to delivery." },
  { icon: LifeBuoy, title: "Support & Continuous Improvement", desc: "A dedicated service desk and ongoing performance tracking keep IT running and improving." },
];

const PRICING = [
  {
    name: "Starter", price: "$2K", cadence: "per month",
    tagline: "For small businesses starting their digital transformation journey.",
    features: ["1 Advisory Session per month", "Full IT operations coverage", "Access to 400+ vetted providers", "Dedicated service desk"],
    highlight: false,
  },
  {
    name: "Growth", price: "$3K", cadence: "per month",
    tagline: "For businesses actively scaling up their digital operations.",
    features: ["3 Advisory Sessions per month", "Full IT operations coverage", "Access to 400+ vetted providers", "Dedicated service desk", "50 support tickets included"],
    highlight: true,
  },
  {
    name: "Enterprise", price: "$4K", cadence: "per month",
    tagline: "For organizations with larger or more complex IT requirements.",
    features: ["5 Advisory Sessions per month", "Full IT operations coverage", "Access to 400+ vetted providers", "Dedicated service desk", "Dedicated IT Support resource"],
    highlight: false,
  },
];

const FAQS = [
  { q: "What is CIO as a Service?", a: "CIO as a Service gives your business access to IT leadership and strategic guidance without hiring a full-time CIO. You get an experienced IT team — including a named CIO, project manager, support manager, and more — at a fraction of the cost." },
  { q: "How is CIO+ different from IT support?", a: "IT support fixes problems when they happen. CIO+ prevents them through strategy, roadmap planning, technology selection, provider management, and delivery governance. Proactive leadership, not reactive maintenance." },
  { q: "Do we need an internal IT team to use CIO+?", a: "No. CIO+ is designed for businesses that don't have a full internal IT department. We become your IT department — or we complement a small internal team if you already have one." },
  { q: "How quickly can we get started?", a: "We begin with a free 15-minute IT assessment, then move into structured onboarding. Most clients have a clear IT roadmap within the first 30 days." },
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
            name: "CIO Plus — Managed IT Leadership for SMEs",
            serviceType: "Managed IT Services",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="CIO+ — Chief Information Officer, as a Service"
          title="Focus on growing your business. We'll guide your IT."
          subtitle="CIO+ is a managed IT department for growing SMEs that need IT leadership, technology direction, and delivery oversight — without the cost of building a full in-house IT team."
          cta="Start with a Free IT Assessment"
          ctaHref={CALENDLY_URL}
          testId="cio-hero"
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
                  <p className="mt-3 text-[13.5px] font-semibold text-white">{item.title}</p>
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
                  Your business needs IT direction, not more guesswork.
                </h2>
                <ul className="mt-8 space-y-4">
                  {PROBLEMS.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-500 flex items-center justify-center font-bold text-[12px] shrink-0">
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
                  Your IT department. Fully managed.
                </h3>
                <p className="mt-5 text-[15.5px] leading-relaxed text-slate-600">
                  CIO+ gives you an IT managed department that plans, selects, manages, and improves your technology — just like an internal IT department, but leaner, smarter, and ready from day one.
                </p>
                <p className="mt-4 text-[15px] font-semibold text-brand-emerald">
                  No hiring. No overhead. No guesswork.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {PROOF.map((p, i) => (
                    <div key={i} className="rounded-2xl bg-gradient-to-br from-brand-pistachio/40 to-brand-sea/20 border border-brand-emerald/10 p-5">
                      <div className="font-display text-3xl font-extrabold text-brand-dark tabular-nums">{p.v}</div>
                      <p className="mt-1 text-[12.5px] font-medium text-slate-700 leading-snug">{p.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* What CIO+ Delivers */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <SectionHeading
              eyebrow="What CIO+ Delivers"
              title="Everything your IT department needs to do, we handle it."
              subtitle="CIO+ helps you make better IT decisions, choose the right systems, manage providers, and keep technology moving in the right direction."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DELIVERS.map((d, i) => (
                <FeatureCard key={i} icon={d.icon} title={d.title} description={d.desc} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section className="bg-white" id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title="Simple, transparent pricing. No surprises."
              subtitle="Three plans for different stages of growth, all including a managed IT department and access to 400+ vetted providers."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICING.map((p, i) => (
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
                  data-testid={`cio-pricing-${p.name.toLowerCase()}`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-emerald text-white text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className={`mt-2 text-[14px] ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>{p.tagline}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-extrabold tabular-nums">{p.price}</span>
                    <span className={`text-sm ${p.highlight ? "text-slate-400" : "text-slate-500"}`}>{p.cadence}</span>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f, k) => (
                      <li key={k} className="flex items-start gap-2.5 text-[14.5px]">
                        <CheckCircle2 className={`w-4.5 h-4.5 mt-0.5 shrink-0 ${p.highlight ? "text-brand-sea" : "text-brand-emerald"}`} />
                        <span className={p.highlight ? "text-slate-200" : "text-slate-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* PerfeXe bonus — compact */}
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-brand-pistachio/50 to-brand-sea/30 border border-brand-emerald/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-emerald text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-emerald">Included with every plan</p>
                <p className="mt-2 font-display text-[19px] md:text-[21px] font-bold text-brand-dark leading-tight">
                  Complimentary subscription to the PerfeXe Automation Platform — automate operations in as little as 3 days.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Client story */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <SectionHeading
              eyebrow="Client Story"
              title="What our clients say"
            />

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Attribution / brand card */}
              <div className="lg:col-span-4">
                <div className="h-full rounded-3xl bg-gradient-to-br from-[#07404B] to-[#0D1F2D] p-8 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-emerald/20 glow-orb" />
                  <div className="relative">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sea">Client</p>
                    <p className="mt-3 font-display text-3xl font-extrabold leading-tight">Vibes</p>
                    <p className="mt-2 text-[13.5px] text-slate-300">Staffing &amp; Recruitment</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-brand-emerald grid place-items-center font-bold text-white text-[13px]">BT</div>
                    <div>
                      <p className="text-[14.5px] font-semibold text-white leading-tight">Berthe Tachajian</p>
                      <p className="text-[12.5px] text-slate-400">Founder &amp; Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="lg:col-span-8">
                <div className="relative h-full rounded-3xl bg-white border border-slate-200/70 p-8 md:p-10">
                  <Quote className="absolute top-6 left-6 w-10 h-10 text-brand-emerald/15" strokeWidth={1.5} />
                  <div className="pl-14 md:pl-16">
                    <p className="font-display text-[17px] md:text-[19px] leading-[1.6] text-slate-700">
                      Before CIO+, every technology decision felt like a gamble. We didn&apos;t know which vendors to trust, and our IT projects kept running over budget without clear results. CIO+ gave us a strategy, a roadmap, and someone accountable for every provider we work with. For the first time, IT actually supports our growth instead of holding it back.
                    </p>
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                      <div className="flex -space-x-1">
                        {["#059669", "#43669E", "#07404B"].map((c, i) => (
                          <span key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                      <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">Real result · Real business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about CIO+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`cio-faq-${i + 1}`} />
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title={<>Your business deserves<br/> clear IT direction.</>}
          subtitle="Start with a free 15-minute IT assessment. No commitment — just an honest conversation about where your business stands and what's possible."
        />
      </main>
      <Footer />
    </ServicePageShell>
  );
}
