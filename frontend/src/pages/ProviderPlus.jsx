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
} from "@/components/service/ServicePrimitives";
import { motion } from "framer-motion";
import {
  CheckCircle2, Search, ClipboardList, Award, Building2, UserCheck, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  "Cuts vendor selection risk before you ever get on a call",
  "Gets you to qualified providers faster than sourcing on your own",
  "Compares providers on capability, not just price",
  "Adds delivery governance later if you need it",
];

const ENGAGE_MODELS = [
  { label: "IT Provider Search & Selection", icon: Search },
  { label: "ProjectOps", icon: ClipboardList },
];

const PROOF = [
  { Icon: Award, to: 20, suffix: "+", unit: "Years", desc: "Recruitment experience", accent: "#8B5CA8", iconBg: "#E6D6EC" },
  { Icon: Building2, to: 100, suffix: "+", unit: "Organizations", desc: "Served across the region", accent: "#43669E", iconBg: "#C7D3EC" },
  { Icon: UserCheck, to: 200, suffix: "+", unit: "IT Professionals", desc: "Placed annually", accent: "#059669", iconBg: "#C6E5DE" },
];

const CHALLENGES = [
  "Unclear requirements",
  "Too many similar-looking providers",
  "No easy way to compare capability",
  "Picking on price because you can't compare much else",
];

const SOLUTION = [
  {
    title: "Requirement Discovery",
    desc: "We define your actual scope and requirements before anything goes to market, so providers respond to a clear brief instead of guessing.",
  },
  {
    title: "Provider Sourcing",
    desc: "Your opportunity goes out across a vetted provider ecosystem, not a public listing anyone can answer.",
  },
  {
    title: "AI-Powered Matching",
    desc: "Capabilities, certifications, and experience get checked against your requirement automatically, so the wrong providers get filtered out before your team sees them.",
  },
  {
    title: "Technical Evaluation",
    desc: "Our specialists review the shortlist technically before it lands on your desk.",
  },
  {
    title: "ProjectOps (Optional)",
    desc: "Once you've picked a provider, our ProjectOps team can stay on to keep planning, governance, and reporting on track.",
  },
];

const HOW_WE_DO_IT = [
  "Understand your business needs",
  "Document clear requirements",
  "Publish them across our provider ecosystem",
  "Use AI to identify the best matches",
  "Perform technical evaluations",
  "Present a qualified shortlist",
  "Optionally support delivery through ProjectOps",
];

const FAQS = [
  {
    q: "What services can you help us source?",
    a: "Software development, AI, cloud, cybersecurity, ERP, managed services, IT outsourcing, infrastructure, digital transformation, and other technology services.",
  },
  {
    q: "How do you select providers?",
    a: "We combine AI-powered matching with technical evaluation to shortlist the providers that best fit your business and technical requirements.",
  },
  {
    q: "Can you help define our requirements?",
    a: "Yes. We use a structured service design approach to document clear requirements before publishing your opportunity.",
  },
  {
    q: "Can you support the project after selecting the provider?",
    a: "Yes. Our optional ProjectOps service provides governance, reporting, planning, and delivery oversight to help ensure successful delivery.",
  },
];

export default function ProviderPlus() {
  const meta = PAGE_META.talentProvider;
  return (
    <ServicePageShell testId="provider-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "talentProvider",
            name: "IT Provider+ — Provider Search & Selection",
            serviceType: "Technology Provider Sourcing",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="IT PROVIDER PLUS · For Organizations Sourcing Technology Partners"
          title={
            <>
              Pre-Screened Providers.
              <br />
              Ready to Talk.
            </>
          }
          subtitle="We define your requirements, source qualified providers, and evaluate the strongest options, so you spend less time comparing pitches and more time choosing with confidence."
          cta="Find an IT Provider"
          ctaHref={CALENDLY_URL}
          testId="provider-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Businesses outsourcing key technology initiatives; from software and cloud to AI and ERP.
                </h2>
              </div>

              <div className="lg:col-span-7 rounded-3xl bg-[#F7F9FA] border border-slate-200/70 p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                  Why It's Good
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WHY_GOOD.map((w) => (
                    <li key={w} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-emerald shrink-0 mt-0.5" />
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
              title={
                <>
                  Specialized IT Recruitment.
                  <br />
                  Proven Across the GCC.
                </>
              }
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PROOF.map((p, i) => (
                <motion.div
                  key={p.unit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`provider-proof-stat-${i + 1}`}
                  className="rounded-2xl bg-white border border-brand-emerald/10 p-6"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: p.iconBg }}
                  >
                    <p.Icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={1.9} />
                  </div>
                  <div className="mt-5 font-display text-2xl md:text-3xl font-extrabold text-brand-dark tabular-nums">
                    <CountUpNumber to={p.to} />
                    {p.suffix} {p.unit}
                  </div>
                  <p className="mt-1.5 text-[13.5px] font-medium text-slate-600 leading-snug">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* The Challenge */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Finding a Provider Is Easy. Finding the Right One Isn't.
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Every provider's pitch sounds the same. You send out a requirement, five providers respond, and every proposal claims the same expertise and the same "perfect fit."
                </p>
              </div>
              <div className="lg:col-span-6">
                <ul className="space-y-4">
                  {CHALLENGES.map((c, i) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold text-[12px] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-[15px] leading-relaxed text-slate-700">{c}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[15px] font-semibold text-brand-dark">
                  Most of that risk shows up after the provider's already been picked.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Solution */}
        <Section className="bg-[#F7F9FA]" id="our-solution">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-6">
              <div className="lg:col-start-1 lg:col-span-4 lg:row-start-1">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-emerald" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                    Our Solution
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  A Process That Filters Before You Choose
                </h2>
              </div>

              {[SOLUTION[1], SOLUTION[2]].map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`h-full flex flex-col rounded-2xl bg-white border border-slate-200/70 p-6 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all lg:row-start-1 ${
                    i === 0 ? "lg:col-start-5 lg:col-span-4 accent-glow-right" : "lg:col-start-9 lg:col-span-4 accent-glow-top-right"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    <p className="font-display text-[16px] font-bold text-brand-dark leading-tight">{s.title}</p>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">{s.desc}</p>
                </motion.div>
              ))}

              {[SOLUTION[0], SOLUTION[3], SOLUTION[4]].map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.12 + i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`h-full flex flex-col rounded-2xl bg-white border border-slate-200/70 p-6 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all lg:row-start-2 ${
                    i === 0 ? "lg:col-start-1 lg:col-span-4 accent-glow-corner" : i === 1 ? "lg:col-start-5 lg:col-span-4 accent-glow-bottom" : "lg:col-start-9 lg:col-span-4 accent-glow-bottom-right"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    <p className="font-display text-[16px] font-bold text-brand-dark leading-tight">{s.title}</p>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-brand-emerald" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-emerald">
                  Pricing
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Find Your IT Provider at No Cost
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              {/* IT Provider Search & Selection */}
              <div className="rounded-2xl bg-gradient-to-br from-[#07404B] to-[#0D1F2D] p-7 md:p-8 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sea">Primary Service</p>
                <p className="mt-2 font-display text-[22px] font-bold text-white">IT Provider Search &amp; Selection</p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="font-display text-[34px] font-extrabold leading-tight text-white">
                    Free of Charge
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">
                    Requirement preparation, provider sourcing, evaluation, and qualified shortlist.
                  </p>
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="provider-pricing-cta"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover transition-all"
                >
                  Find an IT Provider
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* ProjectOps — Optional */}
              <div className="rounded-2xl bg-white border border-slate-200/70 p-7 md:p-8 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-emerald">Optional Add-On</p>
                <p className="mt-2 font-display text-[22px] font-bold text-brand-dark">ProjectOps</p>

                <div className="mt-6 pt-5 border-t border-slate-200/70">
                  <p className="font-display text-[34px] font-extrabold leading-tight text-brand-dark">
                    USD 2,000<span className="text-[16px] font-semibold text-slate-500"> / month</span>
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                    Additional governance, reporting, planning, and delivery oversight.
                  </p>
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="provider-pricing-cta-projectops"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/70 px-6 py-3.5 text-[15px] font-semibold text-brand-dark hover:border-brand-emerald/40 transition-all"
                >
                  Ask About ProjectOps
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* How We Do It */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>How We Do It</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                A Clear Path From Brief To Shortlist.
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
                    <p className="mt-4 pr-4 text-[13px] leading-snug font-medium text-brand-dark">
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
          title={
            <>
              Great IT Talent Is Out There.
              <br />
              We&apos;ll Find It.
            </>
          }
          subtitle="IT Provider+ helps you narrow the field to qualified providers, so you can choose with greater confidence and move your project forward faster."
          cta="Find an IT Provider"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about IT Provider+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`provider-faq-${i + 1}`} />
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
