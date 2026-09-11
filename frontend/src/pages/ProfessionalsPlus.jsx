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
  Zap, ClipboardCheck, Globe, Wallet, Award, UserCheck, Building2, Users,
  Bot, LifeBuoy, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  { label: "Faster, More Relevant Shortlists", icon: Zap },
  { label: "Technically Screened Candidates", icon: ClipboardCheck },
  { label: "Global IT Talent Access", icon: Globe },
  { label: "Pay Only When You Hire", icon: Wallet },
];

const ENGAGE_STEPS = [
  "Register on the eXceeders Marketplace",
  "Complete Your Company Profile",
  "Post Your Vacancy",
  "We Manage the Recruitment Process",
];

const PROOF = [
  { Icon: Award, to: 10, suffix: "+", label: "Years of IT Recruitment Experience", accent: "#8B5CA8", iconBg: "#E6D6EC" },
  { Icon: UserCheck, to: 200, suffix: "+", label: "IT Professionals Placed Annually", accent: "#43669E", iconBg: "#C7D3EC" },
  { Icon: Building2, to: 100, suffix: "+", label: "Organizations Served", accent: "#059669", iconBg: "#C6E5DE" },
];

const CHALLENGE_PARAGRAPHS = [
  "Work with a general recruiter, and you may get a stack of CVs that look right on paper but don't hold up when it comes to the actual role.",
  "Sound familiar? Slow hiring cycles. Too many irrelevant CVs. Limited technical screening before the interview.",
  "You end up doing the recruiter's job for them.",
];

const SOLUTION = [
  {
    title: "Specialized IT Recruiters",
    desc: "Consultants who understand the roles they're filling, not generalists guessing at requirements.",
    icon: Users,
  },
  {
    title: "AI-Powered Matching",
    desc: "Finds the right candidates out of thousands, in a fraction of the time a manual search takes.",
    icon: Bot,
  },
  {
    title: "Technical Screening",
    desc: "Every shortlisted candidate is tested for skill, experience, and fit before they reach your inbox.",
    icon: ClipboardCheck,
  },
  {
    title: "Global Talent Network",
    desc: "Access to qualified professionals well beyond your local market.",
    icon: Globe,
  },
  {
    title: "Interim Coverage & Replacements",
    desc: "If a role sits open or someone leaves, a staffing partner can step in so your project doesn't stall.",
    icon: LifeBuoy,
  },
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
                  Organizations hiring permanent IT professionals, from a single specialist to complete technology teams.
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

                <div className="mt-7 pt-6 border-t border-slate-200/70">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                    How You Engage
                  </p>
                  <ol className="mt-4 space-y-3">
                    {ENGAGE_STEPS.map((s, i) => (
                      <li key={s} className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-brand-emerald text-white flex items-center justify-center text-[12px] font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-[14.5px] font-medium text-brand-dark">{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Proof */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <div className="max-w-3xl">
              <Eyebrow>Proof</Eyebrow>
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
            <div className="max-w-3xl">
              <Eyebrow>The Challenge</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Technology Hiring Needs More Than CV Matching
              </h2>
              {CHALLENGE_PARAGRAPHS.map((p) => (
                <p key={p} className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </Section>

        {/* Our Solution */}
        <Section className="bg-[#F7F9FA]" id="our-solution">
          <Container>
            <SectionHeading
              eyebrow="Our Solution"
              title="IT Recruitment Built Around Candidate Quality"
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SOLUTION.map((s) => (
                <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.desc} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section className="bg-white" id="pricing">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Simple. Pay on Success.
              </h2>
            </div>

            <div className="mt-12 max-w-md mx-auto rounded-3xl bg-white border border-slate-200/70 overflow-hidden">
              <div className="h-1.5 bg-brand-emerald" />
              <div className="p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center" style={{ backgroundColor: "#E6D6EC" }}>
                  <UserCheck className="w-6 h-6 text-[#8B5CA8]" strokeWidth={1.9} />
                </div>
                <p className="mt-5 font-display text-[19px] font-bold text-brand-dark">Permanent IT Hire</p>
                <p className="mt-3 font-display text-4xl font-extrabold text-brand-emerald">
                  USD 3,000<span className="text-[16px] font-semibold text-slate-500"> per successful placement</span>
                </p>
                <ul className="mt-5 space-y-2 text-left">
                  <li className="text-[13.5px] text-slate-600">• You only pay once someone's hired</li>
                  <li className="text-[13.5px] text-slate-600">• Volume discounts available for multiple similar roles</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="professionals-pricing-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Start Hiring Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
          subtitle="Stop spending time on candidates who are not right for the role. Get technically screened IT professionals and a recruitment process designed to get you to the best hire faster."
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
