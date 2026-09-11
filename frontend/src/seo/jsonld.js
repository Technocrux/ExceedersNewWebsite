import { ORG, absUrl, PAGE_META } from "@/seo/config";

/** ---------- Reusable JSON-LD builders ---------- */

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG.name,
  legalName: ORG.legalName,
  url: ORG.url,
  logo: ORG.logo,
  description: ORG.description,
  areaServed: ORG.areaServed,
  sameAs: ORG.sameAs,
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: ORG.name,
  url: ORG.url,
  publisher: { "@type": "Organization", name: ORG.name, url: ORG.url, logo: ORG.logo },
});

export const webPageLd = ({ key, name, description }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url: absUrl(PAGE_META[key].path),
  isPartOf: { "@type": "WebSite", name: ORG.name, url: ORG.url },
});

export const aboutPageLd = ({ name, description }) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name,
  description,
  url: absUrl(PAGE_META.about.path),
  about: { "@type": "Organization", name: ORG.name, url: ORG.url },
});

/**
 * Service structured data.
 * @param path key in PAGE_META (cio | talent | support | dev)
 * @param name Human-readable service name
 * @param description Service description
 * @param serviceType Category label
 */
export const serviceLd = ({ key, name, description, serviceType }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType,
  description,
  url: absUrl(PAGE_META[key].path),
  provider: { "@type": "Organization", name: ORG.name, url: ORG.url, logo: ORG.logo },
  areaServed: ORG.areaServed,
});

/**
 * Blog post structured data.
 * @param path Full route path of the post (e.g. "/resources/blog/my-post")
 * @param title Post title
 * @param description Post excerpt/summary
 * @param datePublished ISO date string (e.g. "2026-09-11")
 */
export const blogPostingLd = ({ path, title, description, datePublished }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished,
  url: absUrl(path),
  author: { "@type": "Organization", name: ORG.name, url: ORG.url },
  publisher: { "@type": "Organization", name: ORG.name, url: ORG.url, logo: ORG.logo },
  mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(path) },
});

/**
 * FAQ structured data. Only pass this on pages with visible FAQ Q/A pairs.
 * @param items Array of {q, a}
 */
export const faqPageLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});
