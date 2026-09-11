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
  ShieldCheck, Scale, Zap, LifeBuoy, ClipboardList, Target, Search,
  Layers, Bot, ClipboardCheck, ArrowRight,
} from "lucide-react";

const WHY_GOOD = [
  { label: "Lowers the risk of picking the wrong system.", icon: ShieldCheck },
  { label: "Compares options on fit, not on sales pitch.", icon: Scale },
  { label: "Gets you to a shortlist faster than researching alone.", icon: Zap },
  { label: "Keeps support going after the software's live.", icon: LifeBuoy },
];

const ENGAGE_STEPS = [
  "Share Your Business Needs",
  "We Define the Requirements",
  "AI Matches the Most Relevant Software",
  "We Evaluate and Compare the Shortlist",
  "You Choose the Best-Fit Solution",
];

const PROOF = [
  { label: "Independent Software Evaluation", icon: ShieldCheck },
  { label: "Requirements Defined Before Selection", icon: ClipboardList },
  { label: "Recommendations Based on Business Fit", icon: Target },
];

const CHALLENGE_PARAGRAPHS = [
  "Every demo looks polished. Every sales deck promises the perfect fit.",
  "The real test is comparing what actually matters: how well a system fits your processes, integrates with your environment, and holds up after implementation.",
  "With too many options and unclear requirements, price or persuasion often becomes the deciding factor.",
  "The cost of the wrong choice shows up later, in low adoption, workarounds, and a system you eventually replace.",
];

const SOLUTION = [
  {
    title: "Requirement Discovery",
    desc: "We document what your business actually needs before a single vendor enters the conversation.",
    icon: Search,
  },
  {
    title: "Software Discovery",
    desc: "We identify solutions that match your functional, technical, and budget requirements, not just the popular names.",
    icon: Layers,
  },
  {
    title: "AI-Powered Matching",
    desc: "Your requirements get checked against available software automatically, filtering out anything that isn't a real fit.",
    icon: Bot,
  },
  {
    title: "Solution Evaluation",
    desc: "We compare the shortlist on functionality, cost, security, and implementation effort, so the decision is based on evidence, not a demo.",
    icon: ClipboardCheck,
  },
  {
    title: "Support+ Assurance (Optional)",
    desc: "Once you've chosen, we stay on for implementation and post-go-live support, so the investment keeps paying off.",
    icon: LifeBuoy,
  },
];

const PRICING = [
  {
    name: "Software Discovery & Recommendation",
    price: "Free of Charge",
    desc: "Requirement discovery, software matching, evaluation, comparison, and recommendation.",
    icon: Layers,
  },
  {
    name: "Support+ Assurance — Optional",
    price: "Consumption-Based",
    desc: "Implementation support, vendor coordination, post-go-live support, and ongoing operational assurance.",
    icon: LifeBuoy,
  },
];

const FAQS = [
  {
    q: "What software can you help us find?",
    a: "ERP, CRM, HR, AI, cybersecurity, project management, finance, collaboration, productivity, and other business software solutions.",
  },
  {
    q: "How do you recommend software?",
    a: "We combine structured business discovery, AI-powered matching, and expert evaluation to recommend the software that best fits your business requirements.",
  },
  {
    q: "Are you tied to specific software vendors?",
    a: "No. We remain vendor-neutral and recommend the solution that best meets your business needs.",
  },
  {
    q: "Can you support us after selecting the software?",
    a: "Yes. Through Support+ Assurance, we support software implementation, provide post-implementation support, coordinate with software vendors, and help ensure your solution continues to deliver business value.",
  },
];

export default function SoftwarePlus() {
  const meta = PAGE_META.talentSoftware;
  return (
    <ServicePageShell testId="software-plus-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={[
          serviceLd({
            key: "talentSoftware",
            name: "Software+ — Vendor-Neutral Business Software Recommendations",
            serviceType: "Business Software Selection",
            description: meta.description,
          }),
          faqPageLd(FAQS),
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          eyebrow="SOFTWARE PLUS · FOR ORGANIZATIONS BUYING OR REPLACING BUSINESS SOFTWARE"
          title={
            <>
              We Don&apos;t Sell Software.
              <br />
              We Recommend It.
            </>
          }
          subtitle="We define what your business actually needs, compare the right software options, and help you choose based on fit; not the strongest sales pitch."
          cta="Find the Right Software"
          ctaHref={CALENDLY_URL}
          testId="software-hero"
        />

        {/* Best For */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <Eyebrow>Best For</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Organizations planning to buy, replace, or modernize business software.
                </h2>
              </div>

              <div className="lg:col-span-7 rounded-3xl bg-[#F7F9FA] border border-slate-200/70 p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-emerald">
                  Why It's Good
                </p>
                <ul className="mt-4 space-y-3">
                  {WHY_GOOD.map((w) => (
                    <li key={w.label} className="flex items-start gap-2.5">
                      <w.icon className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
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
                Independent Advice. Powered by Your Goals
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                The result is a more informed software decision and a stronger foundation for adoption, implementation, and long-term value.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROOF.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-brand-emerald/10 p-6"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#C6E5DE" }}>
                    <p.icon className="w-5 h-5 text-brand-emerald" strokeWidth={1.9} />
                  </div>
                  <p className="text-[14.5px] font-semibold text-brand-dark leading-snug">{p.label}</p>
                </div>
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
                Picking Software Is Easy. Picking the Right One Isn't.
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
              title="From Business Need to Final Choice"
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
            <SectionHeading
              eyebrow="Pricing"
              title="Find the Right Software at No Cost"
            />
            <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PRICING.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  data-testid={`software-pricing-${i + 1}`}
                  className="rounded-2xl bg-white border border-slate-200/70 p-7"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#C6E5DE" }}>
                    <p.icon className="w-6 h-6 text-brand-emerald" strokeWidth={1.9} />
                  </div>
                  <p className="mt-5 font-display text-[17px] font-bold text-brand-dark leading-tight">{p.name}</p>
                  <p className="mt-2 font-display text-xl font-extrabold text-brand-emerald">{p.price}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="software-pricing-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Find the Right Software
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Choose Software You Won't Regret"
          subtitle="Stop comparing demos, feature lists, and sales promises. Software+ helps you narrow the market to solutions that fit your requirements; then gives you the clarity to choose the one that makes sense for your business."
          cta="Find the Right Software"
          ctaHref={CALENDLY_URL}
        />

        {/* FAQ */}
        <Section className="bg-white" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title="Common questions about Software+" />
              <div className="mt-10">
                {FAQS.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} testId={`software-faq-${i + 1}`} />
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
