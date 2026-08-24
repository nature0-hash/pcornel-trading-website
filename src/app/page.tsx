import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { RateTicker } from "@/components/site/rate-ticker";
import { TrustBadges } from "@/components/site/trust-badges";
import { HowItWorks } from "@/components/site/how-it-works";
import { FeaturedCards } from "@/components/site/featured-cards";
import { Gallery } from "@/components/site/gallery";
import { About } from "@/components/site/about";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Terms } from "@/components/site/terms";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EA]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RateTicker />
        <TrustBadges />
        <HowItWorks />
        <FeaturedCards />
        <Gallery />
        <About />
        <Faq />
        <Contact />
        <Terms />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
