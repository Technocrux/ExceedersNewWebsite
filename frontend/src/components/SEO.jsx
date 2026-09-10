import { Helmet } from "react-helmet-async";
import { ORG, absUrl } from "@/seo/config";

/**
 * Renders page-level SEO tags (title, description, canonical, robots,
 * Open Graph, Twitter, and any structured-data JSON-LD passed in).
 *
 * Props:
 *  - title, description, path, robots
 *  - jsonLd: object | array of objects → serialized as one or more <script type="application/ld+json">
 *  - image: fully-qualified OG image URL (optional; defaults to org OG image)
 *  - ogType: "website" | "article" | ... (default "website")
 */
export default function SEO({
  title,
  description,
  path = "/",
  robots = "index, follow",
  jsonLd,
  image = ORG.ogImage,
  ogType = "website",
}) {
  const url = absUrl(path);
  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={ORG.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdArray.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
