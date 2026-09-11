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
  NumberedStep,
  FAQItem,
  ServiceFinalCTA,
  CountUpNumber,
  DifferenceMeansSection,
} from "@/components/service/ServicePrimitives";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UserCheck, Handshake, Layers, ArrowRight, Users, TrendingUp, Target, ShieldCheck, RefreshCw,
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

const ENGAGE_STEPS = [
  {
    title: "Define the Requirement",
    desc: "We clarify what your organization is trying to achieve, solve, build, or improve.",
  },
  {
    title: "Choose the Right Route",
    desc: "We determine whether you need a professional, service provider, software solution, or a combination.",
  },
  {
    title: "Match and Evaluate",
    desc: "We use AI-powered matching, specialist teams, and our partner ecosystem to source and evaluate relevant options.",
  },
  {
    title: "Engage and Scale",
    desc: "Select the best-fit option and add continuity, governance, or ongoing support services when needed.",
  },
];

const PRICING = [
  {
    slug: "professional-plus",
    name: "Professionals+",
    Icon: UserCheck,
    accent: "#8B5CA8",
    iconBg: "#E6D6EC",
    items: [
      { label: "Permanent IT Hire", price: "USD 3,000 per successful placement" },
    ],
    notes: [
      "Pay only after successful placement.",
      "Volume discounts available for multiple similar roles.",
      "Temporary replacement services priced separately.",
    ],
  },
  {
    slug: "it-provider-plus",
    name: "IT Provider+",
    Icon: Handshake,
    accent: "#43669E",
    iconBg: "#C7D3EC",
    items: [
      { label: "Provider Search and Selection", price: "Free of charge" },
      { label: "Optional ProjectOps Support", price: "USD 2,000 per month" },
    ],
  },
  {
    slug: "software-plus",
    name: "Software+",
    Icon: Layers,
    accent: "#059669",
    iconBg: "#C6E5DE",
    items: [
      { label: "Software Discovery and Recommendation", price: "Free of charge" },
      { label: "Optional Support+ Assurance", price: "Consumption-based pricing" },
    ],
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
          subtitle="We match your business with the right IT capability, from permanent talent and trusted providers to proven software. Faster access. Lower risk. Better decisions."
          cta="Book a Free Assessment"
          ctaHref={CALENDLY_URL}
          testId="talent-hero"
        />

        {/* Proof & Value */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Regional Experience. Proven Talent Delivery.
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
          </Container>
        </Section>

        {/* What Talent Plus Provides */}
        <Section className="bg-[#F7F9FA]" id="capabilities">
          <Container>
            <SectionHeading
              eyebrow="What Talent Plus Provides"
              title={
                <>
                  One Ecosystem.
                  <br />
                  Three Ways to Scale.
                </>
              }
              subtitle="Most organizations default to hiring, even when a service or software would solve it faster, cheaper, or better. Talent Plus helps you find the right answer, in one place."
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
                  className="scroll-mt-28 rounded-2xl bg-white border border-slate-200/70 p-8 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                  data-testid={`talent-capability-${c.slug}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
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
          subtitle="No more managing disconnected recruiters, provider brokers, and software vendors. Talent Plus brings expert guidance and AI-powered matching together in one place."
          meansItems={WHAT_IT_MEANS}
        />

        {/* How To Engage */}
        <Section className="bg-white">
          <Container>
            <SectionHeading
              eyebrow="How To Engage"
              title="From Business Need to Best-Fit Capability."
            />
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
              {ENGAGE_STEPS.map((s, i) => (
                <NumberedStep
                  key={s.title}
                  n={i + 1}
                  title={s.title}
                  description={s.desc}
                  testId={`talent-engage-step-${i + 1}`}
                />
              ))}
            </div>
            <div className="mt-14">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="talent-engage-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Discuss Your Needs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title="Pay for the Outcome, Not the Search."
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICING.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  data-testid={`talent-pricing-${p.slug}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7 flex flex-col hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: p.iconBg }}
                  >
                    <p.Icon className="w-6 h-6" style={{ color: p.accent }} strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 font-display text-[19px] font-bold text-brand-dark">{p.name}</p>

                  <div className="mt-4 space-y-3 flex-1">
                    {p.items.map((it) => (
                      <div key={it.label}>
                        <p className="text-[13.5px] text-slate-600">{it.label}</p>
                        <p className="font-display text-[17px] font-bold" style={{ color: p.accent }}>{it.price}</p>
                      </div>
                    ))}
                  </div>

                  {p.notes && (
                    <ul className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                      {p.notes.map((n) => (
                        <li key={n} className="text-[12.5px] text-slate-500 leading-relaxed">{n}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-center text-[13px] text-slate-500">
              Commercial terms may vary depending on scope, complexity, volume, and optional support services.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="talent-pricing-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Request a Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
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
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Talent Plus" />
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
