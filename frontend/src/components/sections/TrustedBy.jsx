const LOGOS = [
  { name: "Xpertier", src: "/assets/clients/xpertier.png" },
  { name: "Webville", src: "/assets/clients/webville.png" },
  { name: "Vibes", src: "/assets/clients/vibes.png" },
  { name: "The Executive Council", src: "/assets/clients/executive-council.png" },
  { name: "ITON IT Solutions", src: "/assets/clients/iton.png" },
  { name: "Inovola", src: "/assets/clients/inovola.png" },
  { name: "Infosys", src: "/assets/clients/infosys.png" },
  { name: "DynaPro", src: "/assets/clients/dynapro.png" },
  { name: "Brihteja", src: "/assets/clients/brihteja.png" },
  { name: "beIN Sports", src: "/assets/clients/bein.png" },
  { name: "Bapco", src: "/assets/clients/bapco.png" },
  { name: "adtech", src: "/assets/clients/adtech.png" },
  { name: "ADNOC", src: "/assets/clients/adnoc.png" },
  { name: "Abu Dhabi Police", src: "/assets/clients/abu-dhabi-police.png" },
];

const LogoBadge = ({ name, src }) => (
  <div
    data-testid={`trusted-logo-${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
    className="shrink-0 flex items-center justify-center px-8 md:px-12 py-3"
  >
    <img
      src={src}
      alt={`${name} — trusted eXceeders client`}
      loading="lazy"
      draggable={false}
      className="h-8 md:h-10 w-auto max-w-[180px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 select-none"
    />
  </div>
);

export const TrustedBy = () => {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section
      data-testid="trusted-by-section"
      className="relative bg-white border-y border-slate-100 py-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Trusted By Leading Businesses &amp; IT Providers
        </p>

        <div className="mt-8 relative mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-2">
            {doubled.map((logo, i) => (
              <LogoBadge key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
