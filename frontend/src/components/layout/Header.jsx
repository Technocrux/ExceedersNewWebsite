import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/assets/brand/logo-white.png";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "CIO Plus", to: "/cio-plus" },
  { label: "Talent Plus", to: "/talent-plus" },
  { label: "Support Plus", to: "/support-plus" },
  { label: "Dev Plus", to: "/dev-plus" },
  { label: "Project Plus", to: "/project-plus" },
  { label: "About Us", to: "/about-us" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
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
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg"
            data-testid="mobile-nav-drawer"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
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
