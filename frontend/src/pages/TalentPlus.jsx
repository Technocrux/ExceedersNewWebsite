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
  Search, ClipboardCheck, UserCheck, ArrowRight,
  Users, Briefcase, Handshake, Sparkles, Wallet, Timer, TrendingUp,
} from "lucide-react";

const HERO_SNAPSHOT = [
  { icon: Users, title: "Specialized IT hiring", desc: "Technical, sales, presales & project roles" },
  { icon: UserCheck, title: "Better-fit shortlists", desc: "Candidates matched to your requirements" },
  { icon: ClipboardCheck, title: "Screened before interviews", desc: "Profiles reviewed before they reach you" },
];

const PROCESS = [
  { n: "01", title: "Define the role", desc: "We clarify skills, experience, and business context before sourcing." },
  { n: "02", title: "Match & screen", desc: "Candidates are matched against the role and reviewed before reaching you." },
  { n: "03", title: "Shortlist faster", desc: "You receive stronger, more relevant profiles — not endless irrelevant CVs." },
  { n: "04", title: "Support to placement", desc: "We coordinate the hiring process and support replacement terms when applicable." },
];

const ROLES = [
  { icon: Sparkles, title: "Technical Roles", desc: "Software, cloud, cybersecurity, infrastructure, ERP, data, and IT operations." },
  { icon: Briefcase, title: "Commercial IT Roles", desc: "IT sales, account managers, business development, and presales profiles." },
  { icon: ClipboardCheck, title: "Delivery Roles", desc: "Project managers, program managers, PMO, delivery leads, and implementation coordinators." },
  { icon: Handshake, title: "Partner Ecosystem Roles", desc: "Hard-to-find specialists sourced through eXceeders' trusted provider network." },
];

const FAQS = [
  { q: "What types of roles can Talent Plus support?", a: "Talent Plus supports permanent hiring for technical IT roles, IT sales and presales roles, project management, delivery, PMO, and specialized technology profiles." },
  { q: "Do we pay before hiring?", a: "No. Talent Plus uses a success-based model, so you start without upfront recruitment fees and pay after a successful placement." },
  { q: "What happens if a candidate leaves shortly after joining?", a: "Replacement support is provided based on the agreed terms for the role and placement." },
  { q: "Can Talent Plus help with hard-to-find roles?", a: "Yes. eXceeders can support hard-to-find technology roles through specialized recruitment and access to its trusted technology network." },
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
            name: "Talent Plus — Specialized IT Recruitment",
            serviceType: "IT Recruitment",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Talent Plus for IT Hiring"
          title="Hire better IT talent, faster."
          subtitle="Talent Plus helps companies hire permanent IT, tech sales, presales, and project management talent — with better-matched candidates and a more focused hiring process."
          cta="Get Started"
          ctaHref={CALENDLY_URL}
          testId="talent-hero"
          visualSlot={
            <div className="grid grid-cols-1 gap-3">
              {HERO_SNAPSHOT.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 md:p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-brand-sea" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-[13px] text-slate-400 leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          }
        />

        {/* Challenge — compact */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <Eyebrow>The IT Hiring Challenge</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Traditional recruitment slows down IT hiring.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-4 text-[15.5px] leading-relaxed text-slate-700">
                <p>Hiring technology talent is not the same as hiring for general roles. HR teams receive too many CVs that look relevant on paper but don&apos;t match the actual technical requirements.</p>
                <p>The result: long screening cycles, delayed interviews, candidate drop-off, and missed hiring timelines.</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Solution / Process */}
        <Section className="bg-[#F7F9FA]">
          <Container>
            <SectionHeading
              eyebrow="How Talent Plus Works"
              title="A focused hiring process for technology roles."
              subtitle="Specialized recruitment, AI-assisted matching, candidate screening, and access to a trusted technology talent network — from vacancy to shortlist faster."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative rounded-2xl bg-white border border-slate-200 p-6"
                  data-testid={`talent-step-${i + 1}`}
                >
                  <div className="font-display text-2xl font-bold text-brand-emerald tabular-nums">{p.n}</div>
                  <h3 className="mt-4 font-display text-[19px] font-bold text-brand-dark leading-tight">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Roles Covered */}
        <Section className="bg-white">
          <Container>
            <SectionHeading
              eyebrow="Roles Covered"
              title="Technology roles across technical, sales, and delivery teams."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ROLES.map((r, i) => (
                <FeatureCard key={r.title} icon={r.icon} title={r.title} description={r.desc} testId={`talent-role-${i + 1}`} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section className="bg-[#F7F9FA]" id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title="Success-based hiring with no upfront fee."
              subtitle="Post your vacancy and start the hiring process without upfront recruitment fees. You only pay after a successful placement."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Wallet, title: "€3,000 flat fee per hire", desc: "One clear placement fee for successful IT hires." },
                { icon: Timer, title: "Pay on placement", desc: "No upfront fees. You only pay after the right candidate is successfully placed." },
                { icon: TrendingUp, title: "Bulk hiring discounts", desc: "Hiring multiple candidates? We offer discounts for similar or high-volume IT roles." },
              ].map((p, i) => (
                <FeatureCard key={i} icon={p.icon} title={p.title} description={p.desc} testId={`talent-pricing-${i}`} />
              ))}
            </div>
            <p className="mt-8 text-center text-[13px] text-slate-500 italic">
              Note: Final terms may vary based on role complexity, location, urgency, and hiring volume.
            </p>
          </Container>
        </Section>

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

        <ServiceFinalCTA
          eyebrow="Start hiring"
          title="Ready to hire better-fit IT talent?"
          subtitle="Post your vacancy or book a short consultation to discuss your hiring needs."
        />
      </main>
      <Footer />
    </ServicePageShell>
  );
}
