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
  cioAdvisory: {
    path: "/cio-plus/advisory-plus",
    title: "Advisory+ – Strategic Tech Leadership for Growing SMEs | eXceeders",
    description:
      "Advisory+ gives 20–200 employee SMEs a managed IT department: technology strategy, provider management, project delivery, and continuous business alignment.",
    robots: "index, follow",
  },
  cioProductivity: {
    path: "/cio-plus/productivity-plus",
    title: "Productivity+ – Digital Workplace Support for Growing SMEs | eXceeders",
    description:
      "Productivity+ provides structured end-user support, workplace administration, and productivity optimization for 20–200 employee organizations without an internal IT team.",
    robots: "index, follow",
  },
  cioAI: {
    path: "/cio-plus/ai-plus",
    title: "AI+ – Agentic AI Development for Growing SMEs | eXceeders",
    description:
      "AI+ identifies the business processes worth automating, then designs and builds dedicated Agentic AI solutions that run them — for 20–200 employee organizations.",
    robots: "index, follow",
  },
  cioAssurance: {
    path: "/cio-plus/assurance-plus",
    title: "Assurance+ – Unified Multi-Provider Technology Support | eXceeders",
    description:
      "Assurance+ consolidates support across your technology providers into one managed agreement, with pay-as-you-go or prepaid consumption-based pricing.",
    robots: "index, follow",
  },
  talentProfessionals: {
    path: "/talent-plus/professional-plus",
    title: "Professionals+ – Hire Vetted IT Professionals Faster | eXceeders",
    description:
      "Professionals+ combines specialized IT recruiters, AI-powered matching, and technical screening to help organizations hire qualified IT professionals faster, pay only on success.",
    robots: "index, follow",
  },
  talentProvider: {
    path: "/talent-plus/provider-plus",
    title: "IT Provider+ – Pre-Screened Technology Providers | eXceeders",
    description:
      "IT Provider+ defines your requirements, sources qualified providers from a vetted ecosystem, and delivers a technically evaluated shortlist, free of charge, with optional ProjectOps governance.",
    robots: "index, follow",
  },
  talentSoftware: {
    path: "/talent-plus/software-plus",
    title: "Software+ – Vendor-Neutral Business Software Recommendations | eXceeders",
    description:
      "Software+ defines what your business actually needs, compares the right software options with AI-powered matching, and helps you choose based on fit, not the strongest sales pitch.",
    robots: "index, follow",
  },
  talent: {
    path: "/talent-plus",
    title: "Talent Plus – Vetted IT Recruitment, Providers & Software | eXceeders",
    description:
      "Talent Plus matches your business with the right IT capability — permanent talent, trusted technology providers, and vendor-neutral software recommendations, in one ecosystem.",
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
    title: "Dev Plus – Managed AI-Native Software & Agentic AI Development | eXceeders",
    description:
      "Dev Plus is a fully managed team that designs, builds, and evolves AI-native business applications, Agentic AI workflows, and secure internal AI infrastructure — from planning to delivery.",
    robots: "index, follow",
  },
  about: {
    path: "/about-us",
    title: "About eXceeders | Gulf Technology Expertise and IT Ecosystem",
    description:
      "eXceeders is a Gulf technology ecosystem connecting businesses with trusted providers, specialists and delivery teams — one accountable partner across the technology journey.",
    robots: "index, follow",
  },
  projectHire: {
    path: "/project-plus/hire-plus",
    title: "Hire+ – Vetted IT Project Manager Recruitment | eXceeders",
    description:
      "Hire+ recruits, assesses, trains, and supports IT Project Managers before and after placement, so they lead successful technology projects from day one.",
    robots: "index, follow",
  },
  projectEnable: {
    path: "/project-plus/enable-plus",
    title: "Enable+ – Method 3-Pulse Project Delivery Training | eXceeders",
    description:
      "Enable+ gives internal IT Project Management teams the Method 3-Pulse playbook, hands-on training, and optional PlanneXe platform to deliver technology projects consistently.",
    robots: "index, follow",
  },
  projectOperate: {
    path: "/project-plus/operate-plus",
    title: "Operate+ – ProjectOps Governance & Reporting Support | eXceeders",
    description:
      "Operate+ provides dedicated ProjectOps specialists who handle governance, planning, reporting, and compliance, so your Project Managers can focus on delivery.",
    robots: "index, follow",
  },
  project: {
    path: "/project-plus",
    title: "Project Plus – IT Project Delivery Capability as a Service | eXceeders",
    description:
      "Project Plus combines vetted Project Managers, proven delivery methodology, and dedicated ProjectOps to help organizations consistently deliver successful technology projects.",
    robots: "index, follow",
  },
  resources: {
    path: "/resources",
    title: "Resources & Blog | eXceeders",
    description:
      "Practical insights on IT strategy, technology hiring, project delivery, and digital transformation from the eXceeders team.",
    robots: "index, follow",
  },
};

// Calendly booking URL used by hero CTAs across service pages.
export const CALENDLY_URL =
  "https://calendly.com/batool-hussein-exceeders/30min?back=1&month=2026-07&date=2026-07-19";

// Sitemap: pages included in indexing.
export const SITEMAP_PAGES = ["home", "cio", "project", "talent", "support", "dev", "about"];
