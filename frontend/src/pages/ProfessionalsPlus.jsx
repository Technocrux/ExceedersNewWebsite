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
} from "@/components/service/ServicePrimitives";
import { motion } from "framer-motion";
import {
  Zap, ClipboardCheck, Globe, Wallet, Award, UserCheck, Building2,
  ArrowRight, Briefcase,
} from "lucide-react";

const WHY_GOOD = [
  { label: "Faster, More Relevant Shortlists", icon: Zap },
  { label: "Technically Screened Candidates", icon: ClipboardCheck },
  { label: "Global IT Talent Access", icon: Globe },
  { label: "Pay Only When You Hire", icon: Wallet },
];

const PROOF = [
  { Icon: Award, to: 10, suffix: "+", label: "Years of IT Recruitment Experience", accent: "#8B5CA8", iconBg: "#E6D6EC" },
  { Icon: UserCheck, to: 200, suffix: "+", label: "IT Professionals Placed Annually", accent: "#43669E", iconBg: "#C7D3EC" },
  { Icon: Building2, to: 100, suffix: "+", label: "Organizations Served", accent: "#059669", iconBg: "#C6E5DE" },
];

const CHALLENGES = [
  "Too many irrelevant CVs",
  "Slow hiring cycles",
  "Limited technical screening",
  "Candidates who look right on paper but do not fit the role",
  "Too much time spent filtering and validating candidates yourself",
];

const SOLUTION = [
  {
    title: "Specialized IT Recruiters",
    desc: "Consultants who understand the roles they're filling, not generalists guessing at requirements.",
  },
  {
    title: "AI-Powered Matching",
    desc: "Finds the right candidates out of thousands, in a fraction of the time a manual search takes.",
  },
  {
    title: "Technical Screening",
    desc: "Every shortlisted candidate is tested for skill, experience, and fit before they reach your inbox.",
  },
  {
    title: "Global Talent Network",
    desc: "Access to qualified professionals well beyond your local market.",
  },
  {
    title: "Interim Coverage & Replacements",
    desc: "If a role sits open or someone leaves, a staffing partner can step in so your project doesn't stall.",
  },
];

const PRICING_NOTES = [
  "You only pay once someone's hired",
  "Volume discounts available for multiple similar roles",
];

const HOW_WE_DO_IT = [
  "Understand your hiring needs",
  "Source candidates through our AI platform and partner ecosystem",
  "Technically assess and shortlist the best talent",
  "Manage the recruitment process through onboarding",
  "Provide temporary staffing when needed",
];

const FAQS = [
  {
    q: "What roles can Professionals+ recruit?",
    a: "We recruit software engineers, cloud, cybersecurity, infrastructure, AI, ERP, project managers, IT support, IT sales, account managers, and other technology professionals.",
  },
  {
    q: "How are candidates screened?",
    a: "Every candidate is technically assessed, experience-validated, and evaluated for cultural fit before being shortlisted.",
  },
  {
    q: "Do you only recruit within the GCC?",
    a: "No. We source IT professionals globally while supporting organizations across the GCC.",
  },
  {
    q: "What if we need a replacement?",
    a: "If your employee leaves, we can quickly arrange a qualified temporary replacement through our partner network while you recruit a permanent hire. This is offered as a paid staffing service.",
  },
];

export default function ProfessionalsPlus() {
  const meta = PAGE_META.talentProfessionals;
  return (
    <ServicePageShell testId="professionals-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "talentProfessionals",
            name: "Professionals+ — Hire Vetted IT Professionals Faster",
            serviceType: "IT Professional Recruitment",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="PROFESSIONALS PLUS · For Organizations Hiring IT Professionals"
          title={
            <>
              Hire The Right IT Talent.
              <br />
              Faster.
            </>
          }
          subtitle="Specialized recruiters and technical screening help you reach qualified IT professionals faster, without wasting time on the wrong candidates."
          cta="Request Qualified Candidates"
          ctaHref={CALENDLY_URL}
          testId="professionals-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations hiring permanent IT professionals.
                </h2>
              </div>

              <div className="lg:col-span-7 rounded-3xl bg-[#F7F9FA] border border-slate-200/70 p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                  Why It's Good
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WHY_GOOD.map((w) => (
                    <li key={w.label} className="flex items-center gap-2.5">
                      <w.icon className="w-4.5 h-4.5 text-brand-emerald shrink-0" />
                      <span className="text-[14.5px] leading-relaxed text-slate-700">{w.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald shrink-0">
                    Engagement Models
                  </p>
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-brand-emerald/20 px-4 py-2.5 shadow-sm shadow-slate-900/5 w-fit">
                    <Briefcase className="w-4.5 h-4.5 text-brand-pine" />
                    <span className="text-[14.5px] font-semibold text-brand-dark">Pay Per Hire</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Proof */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="max-w-3xl">
              <Eyebrow>Proof & Capabilities</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Specialized Technology Recruitment
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                Professionals+ brings together specialized IT recruiters, recruitment technology, technical screening, and a global talent network built around technology hiring.
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
                  data-testid={`professionals-proof-stat-${i + 1}`}
                  className="rounded-2xl bg-white border border-brand-emerald/10 p-6"
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
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Technology Hiring Needs More Than CV Matching
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] font-semibold text-brand-dark">
                  Hiring becomes harder when you face:
                </p>
                <ul className="mt-5 space-y-4">
                  {CHALLENGES.map((c, i) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold text-[12px] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-[15px] leading-relaxed text-slate-700">{c}</p>
                    </li>
                  ))}
                </ul>
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
                  IT Recruitment Built Around Candidate Quality
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
        <Section className="bg-white" id="pricing">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[32px] bg-gradient-to-br from-[#07404B] via-[#0D1F2D] to-[#06121B] px-8 md:px-14 py-14 md:py-16 overflow-hidden"
            >
              <div className="absolute -top-20 -right-16 w-[360px] h-[360px] rounded-full bg-brand-emerald/40 glow-orb" />
              <div className="absolute -bottom-20 -left-16 w-[300px] h-[300px] rounded-full bg-brand-sea/40 glow-orb" />
              <div className="absolute inset-0 grain-overlay opacity-40" />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                <div className="lg:col-span-6">
                  <Eyebrow color="text-brand-sea">Pricing</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Simple.
                    <br />
                    Pay on Success.
                  </h2>
                  <p className="mt-5 text-[16px] leading-relaxed text-slate-300 max-w-md">
                    No retainer, no search fee. We source and vet permanent IT talent, and the fee falls due only when you hire.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="professionals-pricing-cta"
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                  >
                    Start Hiring Today
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-7 md:p-8 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sea">
                      Permanent IT Hire
                    </p>
                    <p className="mt-3 font-display text-[32px] font-extrabold leading-tight text-white">
                      USD 3,000
                    </p>
                    <p className="mt-1 text-[14px] text-slate-400">per successful placement</p>

                    <ul className="mt-6 pt-6 border-t border-white/10 space-y-3">
                      {PRICING_NOTES.map((n, i) => (
                        <li key={n} className="flex items-start gap-3">
                          <span className="text-[11px] font-bold text-brand-sea shrink-0 mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[14px] leading-relaxed text-slate-200">{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* How We Do It */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>How We Do It</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                A Clear Path From Brief To Hire.
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
                    <p className="mt-4 pr-4 text-[13.5px] leading-snug font-medium text-brand-dark">
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
              <span className="block text-3xl sm:text-4xl md:text-5xl">Great IT Talent Is Out There.</span>
              <span className="block mt-1">We&apos;ll Find It.</span>
            </>
          }
          subtitle={
            <>
              Stop spending time on candidates who are not right for the role.
              <br />
              Get technically screened IT professionals and a recruitment process designed to get you to the best hire faster.
            </>
          }
          cta="Request Qualified Candidates"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Professionals+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`professionals-faq-${i + 1}`} />
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
