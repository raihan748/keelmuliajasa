import React from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyBottomAction } from "@/components/StickyBottomAction";
import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { AboutCompany } from "@/components/AboutCompany";
import { PosterSection } from "@/components/PosterSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { FleetSection } from "@/components/FleetSection";
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
    <main className="min-h-screen flex flex-col bg-neo-bg text-white">
      <ScrollProgress />
      <TopBanner />
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutCompany />
      <PosterSection />
      <ClientsSection />
      <ServicesSection />
      <PortfolioSection />
      <FleetSection />
      <WhyChooseUs />
      <CalculatorSection />
      <HowItWorks />
      <CoverageSection />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
      <Footer />
      <StickyBottomAction />
      <FloatingWhatsApp />
    </main>
  );
}
