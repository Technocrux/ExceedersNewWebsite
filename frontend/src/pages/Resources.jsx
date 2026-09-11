import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { PAGE_META } from "@/seo/config";
import { webPageLd } from "@/seo/jsonld";
import { Section, Container, Eyebrow } from "@/components/service/ServicePrimitives";
import { BLOG_POSTS } from "@/data/blogPosts";

const TABS = [{ id: "blog", label: "Blog" }];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function Resources() {
  const meta = PAGE_META.resources;
  const [activeTab, setActiveTab] = useState("blog");

  return (
    <div className="min-h-screen bg-white" data-testid="resources-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={webPageLd({ key: "resources", name: meta.title, description: meta.description })}
      />
      <Header />
      <main>
        <section
          data-testid="resources-hero"
          className="relative pt-28 md:pt-32 pb-14 md:pb-20 bg-white overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 dot-pattern opacity-70" />
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-pistachio glow-orb" />

          <Container>
            <Eyebrow>Resources</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-brand-dark leading-[1.05]">
              Insights on IT Strategy, Hiring &amp; Delivery
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-600">
              Practical guidance from the eXceeders team on managed IT, technology hiring, project delivery, and digital transformation.
            </p>
          </Container>
        </section>

        <Section className="bg-white">
          <Container>
            {/* Tab bar */}
            <div className="flex items-center gap-2 border-b border-slate-200" role="tablist" aria-label="Resource categories">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  data-testid={`resources-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-3 text-[14.5px] font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "text-brand-emerald"
                      : "text-slate-500 hover:text-brand-dark"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="resources-tab-underline"
                      className="absolute left-0 right-0 -bottom-px h-[2px] bg-brand-emerald rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {activeTab === "blog" && (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="resources-blog-grid">
                {BLOG_POSTS.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <Link
                      to={`/resources/blog/${post.slug}`}
                      data-testid={`blog-card-${post.slug}`}
                      className="group flex flex-col h-full rounded-2xl bg-white border border-slate-200/70 p-7 hover:border-brand-emerald/30 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-brand-pistachio/50 flex items-center justify-center">
                        <Newspaper className="w-5 h-5 text-brand-emerald" strokeWidth={1.9} />
                      </div>
                      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-emerald">
                        {post.category}
                      </p>
                      <h3 className="mt-2 font-display text-[19px] font-bold text-brand-dark leading-tight group-hover:text-brand-emerald transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-slate-600 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-4 text-[12.5px] text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-emerald group-hover:gap-3 transition-all">
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
