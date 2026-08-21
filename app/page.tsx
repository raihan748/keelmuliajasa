import React from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollHUD } from "@/components/ScrollHUD";
import { SideActionDock } from "@/components/SideActionDock";
import { LiveActivityToast } from "@/components/LiveActivityToast";
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
    <main className="min-h-screen flex flex-col bg-neo-bg text-slate-900 selection:bg-neo-yellow selection:text-black relative overflow-x-hidden">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />
      
      {/* Right Floating Scroll-Spy Navigator HUD */}
      <ScrollHUD />

      {/* Floating Side Action Dock (Slide in from Right) */}
      <SideActionDock />

      {/* Live Activity Social Proof Toast (Slide in from Left) */}
      <LiveActivityToast />

      {/* Top Banner & Navigation */}
      <TopBanner />
      <Navbar />

      {/* Hero with Animated Counters & 3D Cards */}
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
