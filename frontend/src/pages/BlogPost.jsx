import { useParams, useSearchParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { blogPostingLd } from "@/seo/jsonld";
import { Section, Container } from "@/components/service/ServicePrimitives";
import { getBlogPost } from "@/data/blogPosts";

// Per-language page chrome. A post opts into a language via `translations.<lang>`.
const LANGS = {
  en: { label: "English", dir: "ltr", locale: "en-US", ogLocale: "en_US", back: "Back to Resources" },
  ar: { label: "العربية", dir: "rtl", locale: "ar-u-nu-latn", ogLocale: "ar_AR", back: "العودة إلى المصادر" },
};

const formatDate = (iso, locale) =>
  new Date(iso).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });

// Renders `**bold**` spans inside block text.
const RichText = ({ text }) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-brand-dark">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );

const Block = ({ block }) => {
  if (block.type === "h2") {
    return (
      <h2 className="mt-10 font-display text-[22px] md:text-[24px] font-bold text-brand-dark tracking-tight">
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="mt-8 font-display text-[18px] md:text-[19px] font-bold text-brand-dark tracking-tight">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 space-y-2 list-disc ps-5">
        {block.items.map((item) => (
          <li key={item} className="text-[16px] leading-relaxed text-slate-700">
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="mt-4 space-y-2 list-decimal ps-5">
        {block.items.map((item) => (
          <li key={item} className="text-[16px] leading-relaxed text-slate-700">
            <RichText text={item} />
          </li>
        ))}
      </ol>
    );
  }
  if (block.type === "link") {
    return (
      <p className="mt-4 text-[16px] leading-[1.75] text-slate-700">
        <RichText text={block.text} />{" "}
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-emerald underline decoration-brand-emerald/30 underline-offset-2 hover:decoration-brand-emerald transition-colors"
        >
          {block.linkText}
        </a>
      </p>
    );
  }
  if (block.type === "cta") {
    return (
      <p className="mt-5">
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-brand-emerald underline decoration-brand-emerald/30 underline-offset-2 hover:decoration-brand-emerald transition-colors"
        >
          {block.linkText}
        </a>
      </p>
    );
  }
  return (
    <p className="mt-4 text-[16px] leading-[1.75] text-slate-700">
      <RichText text={block.text} />
    </p>
  );
};

export default function BlogPost() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/resources" replace />;
  }

  const path = `/resources/blog/${post.slug}`;
  const langs = ["en", ...Object.keys(post.translations || {})];
  const lang = langs.includes(searchParams.get("lang")) ? searchParams.get("lang") : "en";
  const ui = LANGS[lang];
  const content = lang === "en" ? post : { ...post, ...post.translations[lang] };

  return (
    <div className="min-h-screen bg-white" data-testid="blog-post-page">
      <SEO
        title={`${content.title} | eXceeders`}
        description={content.excerpt}
        path={path}
        robots="index, follow"
        ogType="article"
        ogLocale={ui.ogLocale}
        jsonLd={blogPostingLd({
          path,
          title: content.title,
          description: content.excerpt,
          datePublished: post.date,
        })}
      />
      <Header />
      <main>
        <Section className="bg-white pt-28 md:pt-32">
          <Container>
            <div className="max-w-3xl mx-auto" dir={ui.dir} lang={lang}>
              <div className="flex items-center justify-between gap-4">
                <Link
                  to={post.kind === "guide" ? "/resources?tab=guide" : "/resources"}
                  data-testid="blog-back-link"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-500 hover:text-brand-emerald transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  {ui.back}
                </Link>

                {langs.length > 1 && (
                  <div
                    className="inline-flex rounded-full border border-slate-200 p-0.5 text-[13px] font-semibold"
                    data-testid="blog-lang-switch"
                  >
                    {langs.map((code) => (
                      <Link
                        key={code}
                        to={code === "en" ? path : `${path}?lang=${code}`}
                        replace
                        lang={code}
                        aria-current={code === lang ? "true" : undefined}
                        data-testid={`blog-lang-${code}`}
                        className={`rounded-full px-3.5 py-1 transition-colors ${
                          code === lang ? "bg-brand-emerald text-white" : "text-slate-500 hover:text-brand-emerald"
                        }`}
                      >
                        {LANGS[code].label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-emerald">
                {content.category}
              </p>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-[44px] font-extrabold text-brand-dark leading-[1.1] tracking-tight">
                {content.title}
              </h1>

              <div className="mt-6 flex items-center gap-5 text-[13.5px] text-slate-500 pb-8 border-b border-slate-200">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date, ui.locale)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {content.readTime}
                </span>
              </div>

              <article data-testid="blog-post-body">
                {content.body.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </article>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
