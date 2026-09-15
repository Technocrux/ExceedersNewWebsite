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
  UserCheck, Handshake, Layers, ArrowRight, Users, TrendingUp, Target, ShieldCheck, RefreshCw, CheckCircle2,
  Star, Briefcase, DollarSign, MapPin, Calendar, User,
} from "lucide-react";

const PROOF = [
  { Icon: Handshake, to: 600, suffix: "+", label: "Vetted Providers", accent: "#8B5CA8", iconBg: "#E6D6EC" },
  { Icon: Users, to: 100, suffix: "K+", label: "Qualified IT Professionals", accent: "#43669E", iconBg: "#C7D3EC" },
  { Icon: TrendingUp, from: 60, to: 70, isRange: true, suffix: "%", label: "Higher Project Success Rates", accent: "#059669", iconBg: "#C6E5DE" },
];

const WHAT_IT_MEANS = [
  {
    title: "Better technology decisions",
    Icon: Target,
  },
  {
    title: "Lower delivery risk",
    Icon: ShieldCheck,
  },
  {
    title: "Stronger business continuity",
    Icon: RefreshCw,
  },
];

const JOB_LISTINGS = [
  { title: "Full Stack Developer", location: "United Arab Emirates", date: "9 Sep, 2026" },
  { title: "Power BI Developer — MIS & Banking Analytics", location: "Bahrain", date: "10 Sep, 2026" },
  { title: ".Net Developer", location: "United Arab Emirates", date: "11 Sep, 2026" },
];

const CHALLENGES = [
  "Finding the right IT professionals",
  "Finding trusted IT providers",
  "Choosing the right software",
  "Managing each need separately",
  "Making fast, confident decisions",
];

const SOLUTION_HIGHLIGHTS = [
  "Vetted IT professionals for your team",
  "Trusted IT providers matched to your needs",
  "Proven software that fits your business",
];

const HOW_IT_STARTS = [
  {
    title: "Assess",
    desc: "People, provider, and software needs.",
  },
  {
    title: "Match",
    desc: "Start with Professional+, IT Provider+, Software+, or combine them.",
  },
  {
    title: "Select & Engage",
    desc: "Choose the right fit and move forward faster.",
  },
];

const CAPABILITIES = [
  {
    slug: "professional-plus",
    name: "Professionals+",
    positioning: "Hire Qualified IT Talent",
    desc: "Hire qualified IT professionals through specialized recruiters and AI-powered matching.",
    to: "/talent-plus/professional-plus",
    Icon: UserCheck,
    accent: "#8B5CA8",
    iconBg: "#E6D6EC",
  },
  {
    slug: "it-provider-plus",
    name: "IT Provider+",
    positioning: "Engage Trusted Technology Providers",
    desc: "Engage vetted service providers for projects, managed services, or outsourcing.",
    to: "/talent-plus/provider-plus",
    Icon: Handshake,
    accent: "#43669E",
    iconBg: "#C7D3EC",
  },
  {
    slug: "software-plus",
    name: "Software+",
    positioning: "Find the Right Business Software",
    desc: "Select the right business software through vendor-neutral, structured evaluation.",
    to: "/talent-plus/software-plus",
    Icon: Layers,
    accent: "#059669",
    iconBg: "#C6E5DE",
  },
];

const PRICING = [
  {
    slug: "professional-plus",
    name: "Professionals+",
    desc: "Permanent IT hire, sourced and vetted for your team.",
    priceMain: "USD 3,000",
    priceUnit: "per successful placement",
    features: [
      "Paid only after a successful placement",
      "Volume discounts for multiple similar roles",
      "Temporary replacement priced separately",
    ],
    cta: "Discuss a Role",
  },
  {
    slug: "it-provider-plus",
    name: "IT Provider+",
    desc: "Provider search and selection, matched to your scope.",
    priceMain: "No Fee",
    priceUnit: "search and selection included",
    features: [
      "Access to 600+ vetted providers",
      "Commercial terms negotiated on your behalf",
      { text: "Optional ProjectOps support", tag: "USD 2,000/mo" },
    ],
    cta: "Start a Provider Search",
    highlight: true,
    badge: "Most Clients Start Here",
  },
  {
    slug: "software-plus",
    name: "Software+",
    desc: "Software discovery and recommendation for your stack.",
    priceMain: "No Fee",
    priceUnit: "discovery and recommendation included",
    features: [
      "Licensing reviewed against actual usage",
      "Renewals tracked and renegotiated",
      { text: "Optional Support+ assurance", tag: "Usage-based" },
    ],
    cta: "Review Your Stack",
  },
];

const FAQS = [
  {
    q: "What can Talent Plus help us acquire?",
    a: "Talent Plus helps organizations hire qualified IT professionals, engage trusted technology providers, and identify suitable business software through one integrated ecosystem.",
  },
  {
    q: "How do we know which service we need?",
    a: "You do not need to decide before contacting us. We first understand your requirement, then recommend whether it is best addressed through a professional, provider, software solution, or combination.",
  },
  {
    q: "What technology roles can Professionals+ recruit?",
    a: "We recruit software engineers, cloud specialists, cybersecurity professionals, infrastructure experts, AI specialists, ERP consultants, project managers, IT support professionals, technology sales professionals, and other IT roles.",
  },
  {
    q: "What services can IT Provider+ help us source?",
    a: "We can source providers for software development, AI, cloud, cybersecurity, ERP, infrastructure, managed services, outsourcing, implementation, and other technology initiatives.",
  },
  {
    q: "What software can Software+ help us find?",
    a: "We support the selection of ERP, CRM, HR, finance, AI, cybersecurity, project management, collaboration, productivity, and other business software.",
  },
  {
    q: "How are professionals and providers evaluated?",
    a: "We combine AI-powered matching with specialist evaluation. Options are reviewed based on technical capability, experience, industry knowledge, availability, capacity, and overall business fit.",
  },
  {
    q: "Are your software recommendations vendor-neutral?",
    a: "Yes. Recommendations are based on your functional, technical, integration, security, scalability, and budget requirements—not simply on a preferred product.",
  },
  {
    q: "Can you support us after the selection?",
    a: "Yes. Depending on the service, you can add temporary replacement staffing, ProjectOps governance, implementation coordination, vendor management, or Support+ Assurance.",
  },
  {
    q: "What happens if a hired professional becomes unavailable?",
    a: "We can help arrange a qualified temporary replacement through our staffing partner network while you recruit a permanent professional. This is provided as a separate paid service.",
  },
  {
    q: "Do we pay to search for a provider or software solution?",
    a: "Provider search and software discovery are offered without a search fee. Optional services such as ProjectOps, replacement staffing, implementation support, and Support+ Assurance are priced separately.",
  },
];

export default function TalentPlus() {
  const meta = PAGE_META.talent;
  return (
    <ServicePageShell testId="talent-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "talent",
            name: "Talent Plus — Vetted IT Recruitment, Providers & Software",
            serviceType: "IT Talent, Provider & Software Sourcing",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="TALENT PLUS · Vetted IT Recruitment & Scaling"
          title={
            <>
              More Than Hiring.
              <br />
              The Full IT Capability.
            </>
          }
          subtitle="The right IT talent, providers, and software. Faster access, lower risk."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
          testId="talent-hero"
          parallax
        />

        {/* Proof & Value */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Regional Experience.
                <br />
                Proven Talent Delivery.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                Talent Plus combines specialist technology recruitment experience with a growing ecosystem of vetted IT providers and software partners.
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
                  data-testid={`talent-proof-stat-${i + 1}`}
                  className="rounded-2xl bg-gradient-to-br from-brand-pistachio/40 to-brand-sea/20 border border-brand-emerald/10 p-6"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: p.iconBg }}
                  >
                    <p.Icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={1.9} />
                  </div>
                  <div className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-brand-dark tabular-nums">
                    {p.isRange ? (
                      <>
                        <CountUpNumber to={p.from} />–<CountUpNumber to={p.to} />
                        {p.suffix}
                      </>
                    ) : (
                      <>
                        <CountUpNumber to={p.to} />
                        {p.suffix}
                      </>
                    )}
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
                  Finding The Right IT Capability Is Getting Harder
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
                  One Place For The IT Capability You Need
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Talent+ gives you:
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
                  data-testid="talent-solution-cta"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Find the Right IT Capability
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* What Talent Plus Provides */}
        <Section className="bg-white" id="capabilities">
          <Container>
            <SectionHeading
              eyebrow="What Talent Plus Provides"
              title={
                <>
                  One Ecosystem.
                  <br />
                  Three Ways To Scale.
                </>
              }
              subtitle={
                <>
                  Most organizations default to hiring, even when a service or software would solve it faster, cheaper, or better.
                  <br />
                  <br />
                  Talent Plus helps you find the right answer, in one place.
                </>
              }
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
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
                  data-testid={`talent-capability-${c.slug}`}
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
                    to={c.to || `/talent-plus#${c.slug}`}
                    data-testid={`talent-capability-cta-${c.slug}`}
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

        {/* Why We Are Different / What This Means For You */}
        <DifferenceMeansSection
          testId="talent-difference"
          eyebrow="The Talent Plus Difference"
          title={
            <>
              One Destination.
              <br />
              Every Path Covered.
            </>
          }
          subtitle={
            <>
              No more managing disconnected recruiters, provider brokers, and software vendors.
              <br />
              <br />
              Talent Plus brings expert guidance and AI-powered matching together in one place.
            </>
          }
          rightSlot={
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white shadow-2xl shadow-black/40 overflow-hidden p-5"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-[15px] font-bold text-brand-dark">Open Roles</p>
                <span className="text-[10.5px] font-semibold text-brand-emerald">View all</span>
              </div>
              <div className="mt-4 flex flex-col gap-2.5">
                {JOB_LISTINGS.slice(0, 2).map((j, i) => (
                  <motion.div
                    key={j.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl bg-[#F7F9FA] border border-slate-100 p-3.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-[#C7D3EC] flex items-center justify-center shrink-0">
                        <User className="w-3.5 h-3.5 text-[#43669E]" />
                      </div>
                      <p className="text-[12.5px] font-bold text-brand-dark leading-snug">{j.title}</p>
                    </div>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9.5px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-2.5 h-2.5" /> Onsite
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-2.5 h-2.5" /> Confidential
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" /> {j.location}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[9.5px] text-slate-400">
                        <Calendar className="w-2.5 h-2.5" /> {j.date}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 text-[9px] font-medium text-slate-500 px-2 py-0.5">
                        Individual
                      </span>
                    </div>
                  </motion.div>
                ))}
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
                  Pay For The Outcome,
                  <br />
                  Not The Search.
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-slate-600">
                  No retainers to start. You pay when a role is filled or when you choose ongoing support.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="talent-pricing-cta"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                >
                  Request a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRICING.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`talent-pricing-${p.slug}`}
                  className={`relative flex flex-col rounded-2xl border p-7 ${
                    p.highlight
                      ? "bg-gradient-to-br from-[#07404B] to-[#0D1F2D] border-transparent md:-translate-y-2"
                      : "bg-white border-slate-200/70 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-7 rounded-full bg-brand-emerald text-white text-[10.5px] font-semibold uppercase tracking-[0.08em] px-3 py-1">
                      {p.badge}
                    </span>
                  )}

                  <p className={`font-display text-[17px] font-bold ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                    {p.name}
                  </p>
                  <p className={`mt-2 text-[13px] leading-relaxed ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {p.desc}
                  </p>

                  <div className={`mt-6 pt-5 border-t ${p.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    <p className={`font-display text-[26px] font-extrabold leading-tight ${p.highlight ? "text-white" : "text-brand-dark"}`}>
                      {p.priceMain}
                    </p>
                    <p className={`mt-1 text-[12px] ${p.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      {p.priceUnit}
                    </p>
                  </div>

                  <ul className={`mt-6 pt-5 border-t space-y-3 flex-1 ${p.highlight ? "border-white/10" : "border-slate-200/70"}`}>
                    {p.features.map((f, k) => {
                      const isTagged = typeof f !== "string";
                      return (
                        <li key={k} className="flex items-start justify-between gap-2 text-[13px] leading-relaxed">
                          <span className={p.highlight ? "text-slate-300" : "text-slate-600"}>
                            {isTagged ? f.text : f}
                          </span>
                          {isTagged && (
                            <span className={`shrink-0 font-semibold ${p.highlight ? "text-brand-sea" : "text-brand-emerald"}`}>
                              {f.tag}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`talent-pricing-cta-${p.slug}`}
                    className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-[14px] font-semibold hover:scale-[1.03] transition-all ${
                      p.highlight
                        ? "bg-brand-emerald text-white hover:bg-brand-emerald-hover"
                        : "border border-slate-200/70 text-brand-dark hover:border-brand-emerald/40"
                    }`}
                  >
                    {p.cta}
                  </a>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-[13.5px] text-slate-500">
              Commercial terms may vary depending on scope, complexity, volume, and optional support services.
            </p>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title={
            <>
              Stop Searching.
              <br />
              Start Scaling.
            </>
          }
          subtitle="Talent Plus helps you secure the capability your business needs with greater speed, confidence, and less risk."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common Questions About Talent Plus" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`talent-faq-${i + 1}`} />
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
