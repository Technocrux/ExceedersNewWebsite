import { Link } from "react-router-dom";
import { Linkedin, Youtube, Mail, Phone, ArrowUpRight } from "lucide-react";

const LOGO_URL = "/assets/brand/logo-dark.png";

const FooterCol = ({ title, children }) => (
  <div>
    <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sea/80 mb-4">
      {title}
    </h4>
    <ul className="space-y-2.5">{children}</ul>
  </div>
);

const FLink = ({ to, children, testId, external = false }) =>
  external ? (
    <li>
      <a
        href={to}
        data-testid={testId}
        className="text-[14px] text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
      >
        {children}
        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </a>
    </li>
  ) : (
    <li>
      <Link
        to={to}
        data-testid={testId}
        className="text-[14px] text-slate-300 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#06121B] text-slate-300 overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full bg-[#07404B] glow-orb" />
      <div className="absolute -bottom-40 -right-16 w-[420px] h-[420px] rounded-full bg-brand-emerald/40 glow-orb" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img src={LOGO_URL} alt="eXceeders" className="h-10 md:h-12 w-auto select-none" draggable={false} />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
              The smarter way to deliver digital transformation. eXceeders connects
              businesses with the right IT providers and manages every engagement
              with proven project delivery methods.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/10511926" },
                { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@exceedersIT" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-testid={`social-${label.toLowerCase()}`}
                  className="w-10 h-10 rounded-full border border-slate-700/70 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-emerald hover:bg-brand-emerald/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <FooterCol title="Company">
              <FLink to="/" testId="footer-link-home">Home</FLink>
              <FLink to="/about-us" testId="footer-link-about">About Us</FLink>
            </FooterCol>
          </div>

          <div className="lg:col-span-2">
            <FooterCol title="Services">
              <FLink to="/cio-plus" testId="footer-link-cio">CIO Plus</FLink>
              <FLink to="/talent-plus" testId="footer-link-talent">Talent Plus</FLink>
              <FLink to="/support-plus" testId="footer-link-support">Support Plus</FLink>
              <FLink to="/dev-plus" testId="footer-link-dev">Dev Plus</FLink>
              <FLink to="/project-plus" testId="footer-link-project">Project Plus</FLink>
            </FooterCol>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <FooterCol title="Contact">
              <li className="text-[14px] text-slate-400 flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-sea" />
                <a
                  href="mailto:info@exceeders.com"
                  data-testid="footer-contact-email"
                  className="hover:text-white transition-colors"
                >
                  info@exceeders.com
                </a>
              </li>
              <li className="text-[14px] text-slate-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-sea" />
                <span data-testid="footer-contact-phone" className="text-slate-500">Phone: TBC</span>
              </li>
            </FooterCol>

            <div className="mt-8">
              <a
                href="https://calendly.com/batool-hussein-exceeders/30min?back=1&month=2026-07&date=2026-07-19"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-book-consultation-cta"
                className="inline-flex items-center gap-2 rounded-full bg-brand-emerald px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-emerald-hover transition-colors"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] text-slate-500">
            © {year} eXceeders. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.exceeders.com/pages/home" target="_blank" rel="noopener noreferrer" data-testid="footer-privacy" className="text-[13px] text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="https://www.exceeders.com/pages/home" target="_blank" rel="noopener noreferrer" data-testid="footer-terms" className="text-[13px] text-slate-500 hover:text-slate-300 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
