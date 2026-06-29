import { WaitlistProvider } from "@/context/WaitlistContext";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { WaitingList } from "./WaitingList";

export function LandingPage() {
  return (
    <WaitlistProvider>
      <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <WaitingList />
        <Footer />
      </main>
    </WaitlistProvider>
  );
}