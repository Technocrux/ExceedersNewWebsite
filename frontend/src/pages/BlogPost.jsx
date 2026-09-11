import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { CALENDLY_URL } from "@/seo/config";
import { blogPostingLd } from "@/seo/jsonld";
import { Section, Container, ServiceFinalCTA } from "@/components/service/ServicePrimitives";
import { getBlogPost } from "@/data/blogPosts";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const Block = ({ block }) => {
  if (block.type === "h2") {
    return (
      <h2 className="mt-10 font-display text-[22px] md:text-[24px] font-bold text-brand-dark tracking-tight">
        {block.text}
      </h2>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 space-y-2 list-disc pl-5">
        {block.items.map((item) => (
          <li key={item} className="text-[16px] leading-relaxed text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="mt-4 space-y-2 list-decimal pl-5">
        {block.items.map((item) => (
          <li key={item} className="text-[16px] leading-relaxed text-slate-700">
            {item}
          </li>
        ))}
      </ol>
    );
  }
  if (block.type === "link") {
    return (
      <p className="mt-4 text-[16px] leading-[1.75] text-slate-700">
        {block.text}{" "}
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
  return (
    <p className="mt-4 text-[16px] leading-[1.75] text-slate-700">{block.text}</p>
  );
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/resources" replace />;
  }

  const path = `/resources/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-white" data-testid="blog-post-page">
      <SEO
        title={`${post.title} | eXceeders`}
        description={post.excerpt}
        path={path}
        robots="index, follow"
        ogType="article"
        jsonLd={blogPostingLd({
          path,
          title: post.title,
          description: post.excerpt,
          datePublished: post.date,
        })}
      />
      <Header />
      <main>
        <Section className="bg-white pt-28 md:pt-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <Link
                to="/resources"
                data-testid="blog-back-link"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-500 hover:text-brand-emerald transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </Link>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-emerald">
                {post.category}
              </p>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-[44px] font-extrabold text-brand-dark leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              <div className="mt-6 flex items-center gap-5 text-[13.5px] text-slate-500 pb-8 border-b border-slate-200">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <article data-testid="blog-post-body">
                {post.body.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </article>
            </div>
          </Container>
        </Section>

        <ServiceFinalCTA
          eyebrow="Hiring the right IT talent"
          title="Reduce the uncertainty in your next IT hire."
          subtitle="Professionals+ combines specialized IT recruiters, AI-powered matching, and technical screening to help you hire qualified professionals faster."
          cta="Request Qualified Candidates"
          ctaHref={CALENDLY_URL}
        />
      </main>
      <Footer />
    </div>
  );
}
