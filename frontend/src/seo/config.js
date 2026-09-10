/**
 * Central SEO / brand configuration.
 * All canonical, Open Graph, sitemap and structured-data URLs derive from here.
 */

// Final production domain (single source of truth).
export const SITE_URL = "https://www.exceeders.com";

// Organization identity used across JSON-LD.
export const ORG = {
  name: "eXceeders",
  legalName: "eXceeders",
  url: SITE_URL,
  // Served from the app's own /public/assets — absolute URL required for OG/JSON-LD crawlers.
  logo: `${SITE_URL}/assets/brand/logo-white.png`,
  ogImage: `${SITE_URL}/assets/brand/logo-white.png`,
  description:
    "eXceeders is a Gulf technology ecosystem that helps businesses access IT leadership, specialized talent, trusted providers, development teams, and managed IT support.",
  areaServed: "Gulf, Middle East",
  sameAs: [], // Add verified LinkedIn / Twitter / YouTube URLs when available.
};

// Build a fully-qualified URL for a route.
export const absUrl = (path = "/") => {
  if (!path.startsWith("/")) return `${SITE_URL}/${path}`;
  return `${SITE_URL}${path}`;
};

// Per-page metadata registry (single source for title + description + robots).
export const PAGE_META = {
  home: {
    path: "/",
    title: "Managed Digital Transformation Services | eXceeders",
    description:
      "eXceeders connects businesses with the right IT providers and manages every step of digital transformation — strategy, talent, support, and custom development.",
    robots: "index, follow",
  },
  cio: {
    path: "/cio-plus",
    title: "CIO Plus – Managed IT Leadership for SMEs | eXceeders",
    description:
      "CIO Plus is a managed IT department for growing SMEs: strategy, technology selection, provider management and delivery oversight — without hiring a full in-house IT team.",
    robots: "index, follow",
  },
  talent: {
    path: "/talent-plus",
    title: "Talent Plus – Specialized IT Recruitment | eXceeders",
    description:
      "Talent Plus helps companies hire permanent IT, tech sales, presales, and project-management talent with better-matched candidates and success-based placement fees.",
    robots: "index, follow",
  },
  support: {
    path: "/support-plus",
    title: "Support Plus – Flexible Managed IT Support | eXceeders",
    description:
      "One managed agreement covering multiple technologies and providers. Consume IT support, projects, subscriptions and specialist resources based on actual utilization.",
    robots: "index, follow",
  },
  dev: {
    path: "/dev-plus",
    title: "Dev Plus – Custom Software and AI Development | eXceeders",
    description:
      "A fully managed team for custom applications, Agentic AI workflows, and secure internal AI infrastructure — from planning and architecture to development and delivery.",
    robots: "index, follow",
  },
  about: {
    path: "/about-us",
    title: "About eXceeders | Gulf Technology Expertise and IT Ecosystem",
    description:
      "eXceeders is a Gulf technology ecosystem connecting businesses with trusted providers, specialists and delivery teams — one accountable partner across the technology journey.",
    robots: "index, follow",
  },
  project: {
    path: "/project-plus",
    title: "Project Plus | eXceeders",
    description:
      "Project Plus — managed delivery for critical initiatives. Full details will be published soon.",
    robots: "noindex, follow",
  },
};

// Calendly booking URL used by hero CTAs across service pages.
export const CALENDLY_URL =
  "https://calendly.com/batool-hussein-exceeders/30min?back=1&month=2026-07&date=2026-07-19";

// Sitemap: pages included in indexing.
export const SITEMAP_PAGES = ["home", "cio", "talent", "support", "dev", "about"];
