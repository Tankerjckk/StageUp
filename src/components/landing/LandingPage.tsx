import { WaitlistProvider } from "@/context/WaitlistContext";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollTracking } from "@/components/analytics/ScrollTracking";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import { FAQ } from "./FAQ";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { WaitingList } from "./WaitingList";

export function LandingPage() {
  return (
    <WaitlistProvider>
      <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">
        <HomeJsonLd />
        <ScrollTracking />
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <WaitingList />
        <Footer />
      </main>
    </WaitlistProvider>
  );
}