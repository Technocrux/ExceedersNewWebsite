import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { PAGE_META, CALENDLY_URL } from "@/seo/config";
import { aboutPageLd } from "@/seo/jsonld";
import {
  ServicePageShell,
  Section,
  Container,
  SectionHeading,
  ServiceFinalCTA,
  Eyebrow,
} from "@/components/service/ServicePrimitives";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Compass, LifeBuoy, Users, Code2, ArrowRight, Sparkles,
} from "lucide-react";

const CREDIBILITY = [
  { v: "10+ Years", l: "of Gulf IT Experience" },
  { v: "400+", l: "Trusted Technology Providers" },
  { v: "900+", l: "Clients Supported" },
  { v: "One Ecosystem", l: "for IT Leadership & Delivery" },
];

const SOLUTIONS = [
  { id: "cio", to: "/cio-plus", name: "CIO+", tagline: "IT leadership for growing businesses", desc: "Strategic IT leadership, roadmaps, solution selection, and delivery governance.", icon: Compass, color: "#059669" },
  { id: "support", to: "/support-plus", name: "Support Plus", tagline: "Flexible expertise for IT teams", desc: "Flexible IT support and provider access for enterprise IT teams.", icon: LifeBuoy, color: "#07404B" },
  { id: "talent", to: "/talent-plus", name: "Talent Plus", tagline: "Specialized recruitment for IT roles", desc: "Specialized IT recruitment for companies hiring technology professionals.", icon: Users, color: "#43669E" },
  { id: "dev", to: "/dev-plus", name: "Dev Plus", tagline: "Managed development & Agentic AI teams", desc: "Managed teams for custom applications, workflow automation, and Agentic AI.", icon: Code2, color: "#059669" },
];

const VALUES = [
  { title: "Work With Joy", desc: "We bring positive energy, enthusiasm, and purpose to the work we do." },
  { title: "Own It. Make It Happen.", desc: "We take responsibility, act with initiative, and follow through." },
  { title: "Be Different. Be Better.", desc: "We question conventional approaches and continuously look for better ways." },
  { title: "One Team. One Voice.", desc: "We work together with clarity, consistency, and shared accountability." },
  { title: "Win Together", desc: "We build success by creating meaningful value for clients, providers, and team." },
];

export default function AboutUs() {
  const meta = PAGE_META.about;
  return (
    <ServicePageShell testId="about-us-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={aboutPageLd({ name: meta.title, description: meta.description })}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#0D1F2D] via-[#0A1824] to-[#06121B] overflow-hidden">
          <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-[#07404B] glow-orb" />
          <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-brand-emerald/30 glow-orb" />
          <div className="absolute inset-0 grain-overlay opacity-50" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
            <Eyebrow color="text-brand-sea">About eXceeders</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white max-w-4xl mx-auto"
            >
              Technology Expertise, Connected Around Your Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-3xl mx-auto text-[17px] md:text-[18.5px] leading-relaxed text-slate-300"
            >
              eXceeders is a Gulf technology ecosystem that helps businesses access IT leadership, specialized talent, trusted providers, development teams, and managed IT support — connecting the right expertise to make better decisions and deliver stronger outcomes.
            </motion.p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="about-book-consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Credibility Strip */}
        <section className="relative bg-white border-b border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {CREDIBILITY.map((c, i) => (
                <div key={i} className="rounded-2xl bg-gradient-to-br from-brand-pistachio/40 to-brand-sea/20 border border-brand-emerald/10 p-6 text-center">
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">{c.v}</div>
                  <p className="mt-2 text-[13px] font-medium text-slate-700">{c.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story + Founder combined */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <Eyebrow>Our Story</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Built around the power of collective expertise
                </h2>
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-pine to-brand-dark p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-emerald grid place-items-center font-display font-bold">AE</div>
                    <div>
                      <p className="font-semibold text-white">Ahmad El Chayati</p>
                      <p className="text-[13px] text-slate-300">Founder &amp; General Manager, eXceeders</p>
                    </div>
                  </div>
                  <p className="mt-5 text-[14.5px] italic text-slate-200 leading-relaxed">
                    &ldquo;Technology creates greater value when the right expertise works together around a clear business goal.&rdquo;
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4 text-[15.5px] leading-relaxed text-slate-700">
                <p>
                  Technology initiatives often involve multiple providers, consultants, recruiters, developers, and support teams. Managing them separately can create delays, unclear responsibilities, and unnecessary risk.
                </p>
                <p>eXceeders was built to make this easier.</p>
                <p>
                  We connect businesses with the right technology expertise and provide the coordination needed to move from planning and selection to implementation, hiring, development, and ongoing support.
                </p>
                <p>
                  Our role goes beyond making introductions — we help businesses understand what they need, identify the right specialists, choose suitable engagement models, and maintain clearer accountability throughout delivery.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* What We Do */}
        <Section className="bg-[#F7F9FA]" id="solutions">
          <Container>
            <SectionHeading
              eyebrow="What We Do"
              title="Multiple technology capabilities through one trusted ecosystem"
              subtitle="Whether you need strategic IT direction, specialized talent, development capacity, or technical support — eXceeders helps you access the right expertise and engagement model."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
              {SOLUTIONS.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <Link
                    to={s.to}
                    data-testid={`about-solution-${s.id}`}
                    className="group block rounded-3xl bg-white border border-slate-200/70 p-7 md:p-8 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: s.color }}>
                          {s.tagline}
                        </p>
                        <h3 className="mt-2 font-display text-[22px] md:text-[26px] font-bold text-brand-dark leading-tight">
                          {s.name}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${s.color}14` }}>
                        <s.icon className="w-5 h-5" style={{ color: s.color }} strokeWidth={1.75} />
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{s.desc}</p>
                    <span
                      className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold group-hover:gap-3 transition-all"
                      style={{ color: s.color }}
                    >
                      Explore {s.name} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Values / Culture */}
        <Section className="bg-gradient-to-br from-[#0D1F2D] to-[#06121B] text-white overflow-hidden relative">
          <div className="absolute inset-0 grain-overlay opacity-40" />
          <div className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-[#07404B] glow-orb" />
          <div className="absolute -bottom-24 -right-16 w-[420px] h-[420px] rounded-full bg-brand-emerald/30 glow-orb" />
          <Container>
            <SectionHeading
              invert
              eyebrow="Our Culture"
              title="Technology is delivered by people"
              subtitle="Strong technology delivery depends on more than expertise — it also requires ownership, collaboration, and genuine commitment to the customer."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-emerald/15 grid place-items-center">
                    <Sparkles className="w-4.5 h-4.5 text-brand-sea" />
                  </div>
                  <h3 className="mt-5 font-display text-[15.5px] font-bold text-white leading-tight">{v.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Strategy, talent, development, support — trusted"
          title="Bring the right technology expertise into your business"
          subtitle="Tell us what you're trying to achieve, where you're facing challenges, or what expertise you need. We'll help you identify the right solution, specialists, or delivery model."
        />
      </main>
      <Footer />
    </ServicePageShell>
  );
}
