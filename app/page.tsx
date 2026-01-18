import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatIsByteCare } from "@/components/what-is-bytecare";
import { AIMonitoring } from "@/components/ai-monitoring";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { WhyChoose } from "@/components/why-choose";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatIsByteCare />
      <AIMonitoring />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <Footer />
    </main>
  );
}
