import React from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LeftTaskbar } from "@/components/LeftTaskbar";
import { ScrollHUD } from "@/components/ScrollHUD";
import { StickyBottomAction } from "@/components/StickyBottomAction";
import { NeoMarquee } from "@/components/NeoMarquee";
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
    <main className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900 relative overflow-x-hidden">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />
      
      {/* Left Floating Action Dock / Taskbar */}
      <LeftTaskbar />

      {/* Right Floating Scroll-Spy Navigator Taskbar */}
      <ScrollHUD />

      {/* Top Banner & Navigation */}
      <TopBanner />
      <Navbar />

      {/* Hero with Animated Counters & Quick Calculator */}
      <Hero />

      {/* Running Marquee Ticker 1 */}
      <NeoMarquee />

      {/* Stats & Trust Bar */}
      <TrustBar />

      {/* Company Profile & Mission */}
      <AboutCompany />

      {/* Official Poster with Lightbox */}
      <PosterSection />

      {/* Real Customer Logos & B2B Partners */}
      <ClientsSection />

      {/* 8 Core Services Grid */}
      <ServicesSection />

      {/* Interactive Draggable Before & After + K3 Field Portfolio */}
      <PortfolioSection />

      {/* Real Fleet Photos & 4 Company Profile Commitments */}
      <FleetSection />

      {/* Advantages & Client Matrix */}
      <WhyChooseUs />

      {/* Interactive Volume Simulator & Booking Form */}
      <CalculatorSection />

      {/* SOP 4 Steps */}
      <HowItWorks />

      {/* Operational Coverage */}
      <CoverageSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Running Marquee Ticker 2 */}
      <NeoMarquee />

      {/* FAQ */}
      <FaqSection />

      {/* High Impact Final CTA Banner */}
      <CtaBanner />

      {/* Footer */}
      <Footer />

      {/* Scroll-Triggered Sticky Action Bottom Bar */}
      <StickyBottomAction />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
