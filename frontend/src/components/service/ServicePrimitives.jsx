import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

/** Animated count-up number, triggers once when scrolled into view. */
export const CountUpNumber = ({ from = 0, to, duration = 1.4, decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;
    const tick = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (to - from) * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to, duration]);

  const formatted = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();

  return <span ref={ref}>{formatted}</span>;
};

/** Wrapper for full-width sections with consistent padding */
export const Section = ({ children, className = "", id, dataTestid }) => (
  <section
    id={id}
    data-testid={dataTestid}
    className={`relative py-20 md:py-28 ${className}`}
  >
    {children}
  </section>
);

/** Container: max-width and horizontal padding */
export const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-10 ${className}`}>{children}</div>
);

/** Small uppercase eyebrow / overline label */
export const Eyebrow = ({ children, color = "text-brand-emerald" }) => (
  <p
    className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${color}`}
  >
    {children}
  </p>
);

/** Section heading (eyebrow + H2 + optional subtitle) */
export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <Eyebrow color={invert ? "text-brand-sea" : "text-brand-emerald"}>
        {eyebrow}
      </Eyebrow>
    )}
    <h2
      className={`mt-4 font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        invert ? "text-white" : "text-brand-dark"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`mt-5 text-[17px] leading-relaxed ${
          invert ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

/** Service page hero (dark background). Optional visual right slot. */
export const ServiceHero = ({
  eyebrow,
  title,
  subtitle,
  cta,
  ctaHref,
  onCtaClick,
  visualSlot,
  testId,
  titleClassName = "text-4xl md:text-5xl lg:text-[57px]",
}) => {
  const CtaTag = ctaHref ? "a" : "button";
  const ctaProps = ctaHref
    ? { href: ctaHref, target: "_blank", rel: "noopener noreferrer" }
    : { type: "button", onClick: onCtaClick };

  return (
    <section
      data-testid={testId || "service-hero"}
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#0D1F2D] via-[#0A1824] to-[#06121B] overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-[#07404B] glow-orb" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-brand-emerald/30 glow-orb" />
      <div className="absolute inset-0 grain-overlay opacity-50" />
      {/* Faint grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div
          className={`grid grid-cols-1 ${
            visualSlot ? "lg:grid-cols-12 gap-12" : ""
          } items-center`}
        >
          <div className={visualSlot ? "lg:col-span-7" : "max-w-5xl"}>
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-sea"
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className={`mt-4 font-display ${titleClassName} font-extrabold tracking-tight leading-[1.02] text-white`}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 max-w-3xl text-[18px] md:text-[21px] leading-relaxed text-slate-200"
              >
                {subtitle}
              </motion.p>
            )}
            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-9"
              >
                <CtaTag
                  {...ctaProps}
                  data-testid="service-hero-cta"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
                >
                  {cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </CtaTag>
              </motion.div>
            )}
          </div>

          {visualSlot && <div className="lg:col-span-5">{visualSlot}</div>}
        </div>
      </div>
    </section>
  );
};

/**
 * Dark split section pairing "why we're different" narrative content
 * with a "what this means for you" benefit card.
 */
export const DifferenceMeansSection = ({
  eyebrow,
  title,
  subtitle,
  tags,
  quoteTitle,
  quoteDesc,
  meansEyebrow = "What This Means For You",
  meansItems,
  testId,
}) => (
  <Section
    className="bg-gradient-to-br from-[#07404B] to-[#0D1F2D] relative overflow-hidden"
    dataTestid={testId}
  >
    <div className="absolute -top-20 -right-16 w-[360px] h-[360px] rounded-full bg-brand-emerald/30 glow-orb" />
    <div className="absolute -bottom-20 -left-16 w-[320px] h-[320px] rounded-full bg-brand-sea/20 glow-orb" />
    <Container>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        <div className="lg:pr-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-brand-sea" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-sea">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-[17px] leading-relaxed text-slate-200">
              {subtitle}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="mt-10 flex flex-col items-start gap-3">
              {[tags.filter((_, i) => i % 2 === 0), tags.filter((_, i) => i % 2 === 1)]
                .reduce((rows, col) => {
                  col.forEach((tag, i) => {
                    rows[i] = rows[i] || [];
                    rows[i].push(tag);
                  });
                  return rows;
                }, [])
                .map((row, ri) => (
                  <div key={ri} className="flex items-start gap-3">
                    {row.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13.5px] font-medium text-slate-100 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
            </div>
          )}
          {(quoteTitle || quoteDesc) && (
            <div className="mt-8 border-l-2 border-brand-emerald pl-5">
              {quoteTitle && (
                <p className="font-display text-[20px] md:text-[23px] font-extrabold leading-snug text-white">
                  {quoteTitle}
                </p>
              )}
              {quoteDesc && (
                <p className="mt-2 text-[14px] md:text-[15px] font-medium text-slate-300">
                  {quoteDesc}
                </p>
              )}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8"
        >
          <p className="pb-5 border-b border-white/10 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-sea">
            {meansEyebrow}
          </p>
          <div className="flex-1 flex flex-col justify-center">
            {meansItems.map((item, i) => (
              <div
                key={item.title}
                className={`flex items-center gap-4 py-4 ${
                  i !== meansItems.length - 1 ? "border-b border-white/10" : "pb-0"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/25 flex items-center justify-center shrink-0">
                  <item.Icon className="w-[18px] h-[18px] text-brand-sea" strokeWidth={1.9} />
                </div>
                <p className="font-display text-[16px] font-bold text-white leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  </Section>
);

/** Consistent card with icon */
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  accent = "#059669",
  testId,
  children,
}) => (
  <motion.div
    data-testid={testId}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="group relative h-full rounded-2xl bg-white border border-slate-200/70 p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 hover:border-brand-emerald/30 transition-all"
  >
    {Icon && (
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${accent}14` }}
      >
        <Icon className="w-6 h-6" style={{ color: accent }} strokeWidth={1.75} />
      </div>
    )}
    {title && (
      <h3 className="mt-6 font-display text-xl md:text-[22px] font-bold text-brand-dark tracking-tight leading-tight">
        {title}
      </h3>
    )}
    {description && (
      <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
        {description}
      </p>
    )}
    {children}
  </motion.div>
);

/** Numbered step for process sections */
export const NumberedStep = ({ n, title, description, testId }) => (
  <motion.div
    data-testid={testId}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="relative pl-16"
  >
    <div className="absolute left-0 top-0 w-11 h-11 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center font-display text-[15px] font-bold text-brand-emerald">
      {String(n).padStart(2, "0")}
    </div>
    <h4 className="font-display text-[19px] font-bold text-brand-dark tracking-tight">
      {title}
    </h4>
    {description && (
      <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
        {description}
      </p>
    )}
  </motion.div>
);

/** Simple final CTA band shared across service pages */
export const ServiceFinalCTA = ({ eyebrow, title, subtitle, cta, ctaHref, secondaryCta, secondaryCtaHref }) => (
  <Section className="bg-white">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[32px] bg-gradient-to-br from-[#07404B] via-[#0D1F2D] to-[#06121B] px-8 md:px-16 py-16 md:py-20 overflow-hidden"
      >
        <div className="absolute -top-20 -right-16 w-[360px] h-[360px] rounded-full bg-brand-emerald/40 glow-orb" />
        <div className="absolute -bottom-20 -left-16 w-[340px] h-[340px] rounded-full bg-brand-sea/40 glow-orb" />
        <div className="absolute inset-0 grain-overlay opacity-40" />

        <div className="relative max-w-3xl">
          {eyebrow && <Eyebrow color="text-brand-sea">{eyebrow}</Eyebrow>}
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-300">
              {subtitle}
            </p>
          )}
          {(cta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {cta && (
                ctaHref ? (
                  <a
                    href={ctaHref}
                    data-testid="service-final-cta-primary"
                    target={ctaHref.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
                  >
                    {cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button
                    type="button"
                    data-testid="service-final-cta-primary"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(5,150,105,0.6)] hover:bg-brand-emerald-hover hover:-translate-y-0.5 transition-all"
                  >
                    {cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )
              )}
              {secondaryCta && (
                <a
                  href={secondaryCtaHref || "#"}
                  data-testid="service-final-cta-secondary"
                  target={secondaryCtaHref && secondaryCtaHref.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white hover:text-brand-dark transition-colors"
                >
                  {secondaryCta}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </Container>
  </Section>
);

/** Accordion (FAQ) */
export const FAQItem = ({ q, a, index, testId }) => {
  return (
    <details
      data-testid={testId}
      className="group border-b border-slate-200 py-6 open:pb-8 transition-all"
    >
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
        <span className="font-display text-[17px] md:text-[18px] font-semibold text-brand-dark leading-snug">
          {q}
        </span>
        <span className="shrink-0 mt-1 w-8 h-8 rounded-full bg-slate-100 group-open:bg-brand-emerald group-open:text-white text-brand-dark flex items-center justify-center font-bold text-lg transition-colors">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      {a && (
        <p className="mt-4 text-[15px] leading-relaxed text-slate-600 pr-12">
          {a}
        </p>
      )}
    </details>
  );
};

/** Page-scoped layout wrapper (imports header + footer expected in caller) */
export const ServicePageShell = ({ children, testId }) => (
  <div className="min-h-screen bg-white" data-testid={testId}>
    {children}
  </div>
);
