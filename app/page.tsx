import React from "react";
import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CalculatorSection } from "@/components/CalculatorSection";
import { HowItWorks } from "@/components/HowItWorks";
import { CoverageSection } from "@/components/CoverageSection";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <TopBanner />
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <CalculatorSection />
      <HowItWorks />
      <CoverageSection />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
