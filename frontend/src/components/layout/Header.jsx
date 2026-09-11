import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Menu, X, ExternalLink, ChevronDown, ArrowRight,
  Compass, ClipboardList, Users, LifeBuoy, Code2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/assets/brand/logo-white.png";

// Solutions with defined package offerings.
const SOLUTIONS_MAIN = [
  {
    id: "cio",
    name: "CIO+",
    to: "/cio-plus",
    positioning: "Technology leadership, productivity, AI, automation, and assurance.",
    Icon: Compass,
    iconBg: "#C6E5DE",
    accent: "#059669",
    packages: [
      { label: "Advisory+", to: "/cio-plus/advisory-plus" },
      { label: "Productivity+", to: "/cio-plus/productivity-plus" },
      { label: "AI+", to: "/cio-plus/ai-plus" },
      { label: "Assurance+", to: "/cio-plus/assurance-plus" },
    ],
  },
  {
    id: "project",
    name: "Project+",
    to: "/project-plus",
    positioning: "Stronger project delivery, governance, and execution.",
    Icon: ClipboardList,
    iconBg: "#C7D3EC",
    accent: "#43669E",
    packages: [
      { label: "Hire+", to: "/project-plus/hire-plus" },
      { label: "Enable+", to: "/project-plus/enable-plus" },
      { label: "Operate+", to: "/project-plus/operate-plus" },
    ],
  },
  {
    id: "talent",
    name: "Talent+",
    to: "/talent-plus",
    positioning: "Find the right people, providers, and software.",
    Icon: Users,
    iconBg: "#E6D6EC",
    accent: "#8B5CA8",
    packages: [
      { label: "Professionals+", to: "/talent-plus/professional-plus" },
      { label: "IT Provider+", to: "/talent-plus#it-provider-plus" },
      { label: "Software+", to: "/talent-plus/software-plus" },
    ],
  },
];

// Solutions without packages yet — shown in a secondary row.
const SOLUTIONS_SECONDARY = [
  {
    id: "support",
    name: "Support+",
    to: "/support-plus",
    positioning: "Flexible multi-technology support through one agreement.",
    Icon: LifeBuoy,
    iconBg: "#D7EBC7",
    accent: "#07404B",
  },
  {
    id: "dev",
    name: "Dev+",
    to: "/dev-plus",
    positioning: "Managed AI-native software & agentic AI development.",
    Icon: Code2,
    iconBg: "#EAEDC0",
    accent: "#059669",
  },
];

const ALL_SOLUTIONS = [...SOLUTIONS_MAIN, ...SOLUTIONS_SECONDARY];

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Resources", to: "/resources" },
  { label: "About Us", to: "/about-us" },
];

const SolutionColumn = ({ solution, testIdPrefix }) => (
  <div>
    <Link
      to={solution.to}
      data-testid={`${testIdPrefix}-${solution.id}`}
      className="group flex flex-col items-start"
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
        style={{ backgroundColor: solution.iconBg }}
      >
        <solution.Icon className="w-5 h-5" style={{ color: solution.accent }} />
      </div>
      <p className="mt-3 font-display text-[16px] font-bold text-brand-dark tracking-tight group-hover:text-brand-emerald transition-colors">
        {solution.name}
      </p>
      <p className="mt-1 text-[13px] leading-snug text-slate-500">
        {solution.positioning}
      </p>
    </Link>
    {solution.packages && (
      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
        {solution.packages.map((pkg) => (
          <li key={pkg.label}>
            <Link
              to={pkg.to}
              data-testid={`${testIdPrefix}-${solution.id}-${pkg.label.toLowerCase().replace(/\+/g, "-plus")}`}
              className="text-[13.5px] text-slate-600 hover:text-brand-emerald transition-colors"
            >
              {pkg.label}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const SolutionsMegaMenu = ({ testIdPrefix }) => (
  <div className="w-[720px] max-w-[88vw] rounded-3xl bg-white border border-slate-200/70 shadow-2xl shadow-slate-900/10 overflow-hidden">
    <div className="p-8">
      <div className="grid grid-cols-3 gap-8">
        {SOLUTIONS_MAIN.map((s) => (
          <SolutionColumn key={s.id} solution={s} testIdPrefix={testIdPrefix} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
        {SOLUTIONS_SECONDARY.map((s) => (
          <SolutionColumn key={s.id} solution={s} testIdPrefix={testIdPrefix} />
        ))}
      </div>
    </div>

    <Link
      to="/#ways-we-help"
      data-testid={`${testIdPrefix}-view-all`}
      className="group flex items-center justify-between bg-[#F7F9FA] px-8 py-5 hover:bg-brand-pistachio/30 transition-colors"
    >
      <span className="text-[14px] font-semibold text-brand-dark">
        Explore all solutions
      </span>
      <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-emerald">
        View all solutions
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  </div>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  const isSolutionsActive = ALL_SOLUTIONS.some((s) => location.pathname === s.to);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };
  const scheduleCloseSolutions = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_0_rgba(13,31,45,0.04)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" data-testid="header-logo-link" className="flex items-center gap-2 shrink-0">
            <img
              src={LOGO_URL}
              alt="eXceeders — Managed IT & Digital Transformation"
              className="h-7 md:h-8 w-auto select-none"
              draggable={false}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            <NavLink
              to="/"
              end
              data-testid="nav-link-home"
              className={({ isActive }) =>
                `relative px-3 xl:px-4 py-2 rounded-full text-[13.5px] xl:text-[14.5px] font-medium transition-colors whitespace-nowrap ${
                  isActive ? "text-brand-emerald" : "text-slate-600 hover:text-brand-dark"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-brand-emerald"
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* Solutions — mega menu */}
            <div
              className="relative"
              onMouseEnter={openSolutions}
              onMouseLeave={scheduleCloseSolutions}
            >
              <button
                type="button"
                data-testid="nav-link-solutions"
                aria-expanded={solutionsOpen}
                onClick={() => setSolutionsOpen((v) => !v)}
                className={`relative inline-flex items-center gap-1 px-3 xl:px-4 py-2 rounded-full text-[13.5px] xl:text-[14.5px] font-medium transition-colors whitespace-nowrap ${
                  isSolutionsActive || solutionsOpen
                    ? "text-brand-emerald"
                    : "text-slate-600 hover:text-brand-dark"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                />
                {isSolutionsActive && !solutionsOpen && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-brand-emerald"
                  />
                )}
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
                  >
                    <SolutionsMegaMenu testIdPrefix="mega-menu" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_ITEMS.filter((item) => item.to !== "/").map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `relative px-3 xl:px-4 py-2 rounded-full text-[13.5px] xl:text-[14.5px] font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-brand-emerald"
                      : "text-slate-600 hover:text-brand-dark"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-brand-emerald"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.exceeders.com/pages/home"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-marketplace-cta"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-emerald px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(5,150,105,0.6)] transition-all hover:bg-brand-emerald-hover hover:shadow-[0_12px_28px_-8px_rgba(5,150,105,0.75)] hover:-translate-y-0.5"
            >
              Marketplace Site
              <ExternalLink className="w-4 h-4 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            data-testid="mobile-menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white text-brand-dark"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg max-h-[calc(100vh-72px)] overflow-y-auto"
            data-testid="mobile-nav-drawer"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              <NavLink
                to="/"
                end
                data-testid="mobile-nav-link-home"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                    isActive ? "bg-brand-pistachio/50 text-brand-pine" : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Solutions — collapsible */}
              <button
                type="button"
                data-testid="mobile-nav-link-solutions"
                aria-expanded={mobileSolutionsOpen}
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                  isSolutionsActive ? "bg-brand-pistachio/50 text-brand-pine" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-2"
                  >
                    {ALL_SOLUTIONS.map((s) => (
                      <NavLink
                        key={s.id}
                        to={s.to}
                        data-testid={`mobile-nav-link-solutions-${s.id}`}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-2.5 rounded-xl text-[14.5px] font-medium transition-colors ${
                            isActive ? "text-brand-emerald" : "text-slate-600 hover:bg-slate-50"
                          }`
                        }
                      >
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: s.iconBg }}
                        >
                          <s.Icon className="w-4 h-4" style={{ color: s.accent }} />
                        </span>
                        {s.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {NAV_ITEMS.filter((item) => item.to !== "/").map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-brand-pistachio/50 text-brand-pine"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="https://www.exceeders.com/pages/home"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-marketplace-cta"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-emerald px-5 py-3 text-sm font-semibold text-white"
              >
                Marketplace Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
