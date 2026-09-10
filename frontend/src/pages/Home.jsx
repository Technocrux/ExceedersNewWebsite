import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { PAGE_META } from "@/seo/config";
import { webPageLd } from "@/seo/jsonld";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import WhyChoose from "@/components/sections/WhyChoose";
import WaysWeHelp from "@/components/sections/WaysWeHelp";
import WhyOurModel from "@/components/sections/WhyOurModel";
import Network from "@/components/sections/Network";
import WhoElse from "@/components/sections/WhoElse";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  const meta = PAGE_META.home;
  return (
    <div className="min-h-screen bg-white" data-testid="home-page">
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        robots={meta.robots}
        jsonLd={webPageLd({ key: "home", name: meta.title, description: meta.description })}
      />
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <WhyChoose />
        <WaysWeHelp />
        <WhyOurModel />
        <Network />
        <WhoElse />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
