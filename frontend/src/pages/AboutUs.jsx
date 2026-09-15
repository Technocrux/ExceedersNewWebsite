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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "@/components/CountUp";
import {
  UserPlus, UserCheck, Headphones, Users, Code2, ClipboardList, ArrowRight, Sparkles,
  Calendar, Handshake, Layers, Linkedin,
} from "lucide-react";

const CREDIBILITY = [
  { id: "years", value: 10, suffix: "+", label: "Years", desc: "of Gulf IT experience", Icon: Calendar, color: "#059669", tint: "bg-brand-emerald/10" },
  { id: "providers", value: 400, suffix: "+", label: "Providers", desc: "trusted technology partners", Icon: Handshake, color: "#43669E", tint: "bg-[#43669E]/10" },
  { id: "clients", value: 900, suffix: "+", label: "Clients", desc: "supported across the Gulf", Icon: Users, color: "#07404B", tint: "bg-brand-pine/10" },
  { id: "ecosystem", text: "One Ecosystem", label: "Ecosystem", desc: "for IT leadership & delivery", Icon: Layers, color: "#8B5CA8", tint: "bg-[#8B5CA8]/10" },
];

const SOLUTIONS = [
  { id: "cio", to: "/cio-plus", name: "CIO+", tagline: "IT leadership for growing businesses", desc: "Strategic IT leadership, roadmaps, solution selection, and delivery governance.", icon: UserPlus, color: "#059669", iconBg: "#C6E5DE" },
  { id: "project", to: "/project-plus", name: "Project Plus", tagline: "IT project delivery capability", desc: "The right people, methodology, and operational support to deliver technology projects successfully.", icon: ClipboardList, color: "#43669E", iconBg: "#C7D3EC" },
  { id: "support", to: "/support-plus", name: "Support Plus", tagline: "Flexible expertise for IT teams", desc: "Flexible IT support and provider access for enterprise IT teams.", icon: Headphones, color: "#07404B", iconBg: "#D7EBC7" },
  { id: "talent", to: "/talent-plus", name: "Talent Plus", tagline: "Specialized recruitment for IT roles", desc: "Specialized IT recruitment for companies hiring technology professionals.", icon: UserCheck, color: "#8B5CA8", iconBg: "#E6D6EC" },
  { id: "dev", to: "/dev-plus", name: "Dev Plus", tagline: "Managed development & Agentic AI teams", desc: "Managed teams for custom applications, workflow automation, and Agentic AI.", icon: Code2, color: "#059669", iconBg: "#EAEDC0" },
];

const HERO_CAPABILITIES = [
  { label: "CIO+", tagline: "IT leadership for growing businesses", icon: UserPlus, color: "#059669", iconBg: "#C6E5DE" },
  { label: "Project+", tagline: "IT project delivery capability", icon: ClipboardList, color: "#43669E", iconBg: "#C7D3EC" },
  { label: "Talent+", tagline: "Specialized recruitment for IT roles", icon: UserCheck, color: "#8B5CA8", iconBg: "#E6D6EC" },
  { label: "Support+", tagline: "Flexible expertise for IT teams", icon: Headphones, color: "#07404B", iconBg: "#D7EBC7" },
  { label: "Dev+", tagline: "Managed development & Agentic AI teams", icon: Code2, color: "#059669", iconBg: "#EAEDC0" },
];

function EcosystemSpotlight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_CAPABILITIES.length);
    }, 1900);
    return () => clearInterval(id);
  }, []);

  const active = HERO_CAPABILITIES[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative h-[320px] rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-brand-emerald/20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-[0.08] pointer-events-none" aria-hidden="true" />

      <motion.div
        key={active.label}
        initial={{ opacity: 0, scale: 0.5, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex flex-col items-center text-center px-8"
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ backgroundColor: active.iconBg }}
        >
          <active.icon className="w-7 h-7" style={{ color: active.color }} strokeWidth={1.8} />
        </div>
        <p className="mt-5 font-display text-2xl font-bold text-white">{active.label}</p>
        <p className="mt-2 text-[13.5px] text-slate-300 max-w-[240px] leading-relaxed">{active.tagline}</p>
      </motion.div>

      <div className="relative mt-9 flex items-center gap-2">
        {HERO_CAPABILITIES.map((c, i) => (
          <span
            key={c.label}
            aria-hidden="true"
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === index ? "22px" : "6px",
              backgroundColor: i === index ? active.color : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

const GLOW_POSITIONS = ["accent-glow-corner", "accent-glow-right", "accent-glow-bottom-left", "accent-glow-top-right", "accent-glow-bottom-right"];

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
        <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 bg-gradient-to-br from-[#0D1F2D] via-[#0A1824] to-[#06121B] overflow-hidden">
          <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-[#07404B] glow-orb" />
          <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-brand-emerald/30 glow-orb" />
          <div className="absolute inset-0 grain-overlay opacity-50" />
          <div className="absolute inset-0 dot-pattern opacity-[0.15] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <Eyebrow color="text-brand-sea">About eXceeders</Eyebrow>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white"
                >
                  Technology Expertise, Connected Around Your Business
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-6 max-w-xl text-[17px] md:text-[18.5px] leading-relaxed text-slate-300"
                >
                  eXceeders is a technology ecosystem connecting businesses with the right IT leadership, talent, providers, development teams, and support to make better decisions and achieve stronger outcomes.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="mt-10 flex flex-wrap items-center gap-4"
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="about-book-consultation"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
                  >
                    Book a Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>

              {/* Ecosystem panel */}
              <div className="lg:col-span-5 hidden sm:block">
                <EcosystemSpotlight />
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Strip */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {CREDIBILITY.map((c, i) => (
                <motion.div
                  key={c.id}
                  data-testid={`about-stat-${c.id}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className={`group relative bg-white rounded-2xl p-6 md:p-7 border border-slate-200/70 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all ${GLOW_POSITIONS[i % GLOW_POSITIONS.length]}`}
                >
                  <div className={`w-11 h-11 rounded-xl ${c.tint} flex items-center justify-center`}>
                    <c.Icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>

                  <div className="mt-6 flex items-baseline">
                    {c.text ? (
                      <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-brand-dark">
                        {c.text}
                      </span>
                    ) : (
                      <CountUp
                        end={c.value}
                        suffix={c.suffix}
                        duration={1400}
                        testId={`about-stat-value-${c.id}`}
                        className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-brand-dark tabular-nums"
                      />
                    )}
                  </div>

                  <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: c.color }}>
                    {c.label}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                    {c.desc}
                  </p>

                  <div
                    className="absolute -top-px right-6 h-[3px] w-14 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: c.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story + Founder combined */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-gradient-to-br from-brand-pine to-brand-dark text-white overflow-hidden shadow-xl shadow-slate-900/10">
                  <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-emerald/25 blur-3xl pointer-events-none" />
                  <div className="relative h-72 md:h-80">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <span className="font-display text-2xl font-bold text-white">AE</span>
                      </div>
                    </div>
                    <img
                      src="/assets/team/ahmad-el-chayati.jpg"
                      alt="Ahmad El Chayati, Founder &amp; General Manager of eXceeders"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent" />
                  </div>
                  <div className="relative p-6 md:p-7">
                    <p className="font-semibold text-white">Ahmad El Chayati</p>
                    <p className="text-[13px] text-slate-300">Founder &amp; General Manager, eXceeders</p>
                    <p className="mt-5 text-[14.5px] italic text-slate-200 leading-relaxed">
                      &ldquo;Technology creates greater value when the right expertise works together around a clear business goal.&rdquo;
                    </p>
                    <a
                      href="https://www.linkedin.com/in/ahmadchayati/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="about-founder-linkedin"
                      className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 text-[13px] font-semibold text-white transition-colors w-fit"
                    >
                      <Linkedin className="w-4 h-4" />
                      Follow on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Eyebrow>Our Story</Eyebrow>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                  Built around the power of collective expertise
                </h2>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4 pb-5 border-b border-slate-200/70">
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center">
                      <Sparkles className="w-4.5 h-4.5" />
                    </span>
                    <div>
                      <p className="font-display text-[16px] font-bold text-brand-dark">Why eXceeders was created</p>
                      <p className="mt-2 text-[15.5px] leading-relaxed text-slate-600">
                        Technology initiatives often involve multiple providers, consultants, recruiters, developers, and support teams. Managing them separately can create delays, unclear responsibilities, and unnecessary risk. eXceeders was built to make this easier.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center">
                      <Layers className="w-4.5 h-4.5" />
                    </span>
                    <div>
                      <p className="font-display text-[16px] font-bold text-brand-dark">One connected ecosystem</p>
                      <p className="mt-2 text-[15.5px] leading-relaxed text-slate-600">
                        We connect businesses with the right technology expertise and provide the coordination needed to move from planning and selection to implementation, hiring, development, and ongoing support. Our role goes beyond making introductions — we help businesses understand what they need, identify the right specialists, choose suitable engagement models, and maintain clearer accountability throughout delivery.
                      </p>
                    </div>
                  </div>
                </div>
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
              {SOLUTIONS.map((s, i) => {
                const isLastOdd = i === SOLUTIONS.length - 1 && SOLUTIONS.length % 2 !== 0;
                return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={isLastOdd ? "md:col-span-2" : ""}
                >
                  <Link
                    to={s.to}
                    data-testid={`about-solution-${s.id}`}
                    className={`group block rounded-3xl bg-white border border-slate-200/70 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all ${
                      isLastOdd ? "p-7 md:p-9 md:flex md:items-center md:gap-10" : "p-7 md:p-8"
                    } ${GLOW_POSITIONS[i % GLOW_POSITIONS.length]}`}
                  >
                    <div className={isLastOdd ? "md:flex-1" : ""}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: s.color }}>
                            {s.tagline}
                          </p>
                          <h3 className="mt-2 font-display text-[22px] md:text-[26px] font-bold text-brand-dark leading-tight">
                            {s.name}
                          </h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: s.iconBg }}>
                          <s.icon className="w-5 h-5" style={{ color: s.color }} strokeWidth={1.75} />
                        </div>
                      </div>
                      <p className="mt-4 text-[15px] leading-relaxed text-slate-600 md:max-w-md">{s.desc}</p>
                      <span
                        className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold group-hover:gap-3 transition-all"
                        style={{ color: s.color }}
                      >
                        Explore {s.name} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
              })}
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
