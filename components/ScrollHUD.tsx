"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  Compass,
  FileText,
  Truck,
  Calculator,
  MessageCircle,
  HelpCircle,
  Camera,
  Layers,
} from "lucide-react";

export const ScrollHUD: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const sections = [
    { id: "hero", label: "Utama", icon: Layers },
    { id: "tentang-kami", label: "Profil", icon: FileText },
    { id: "poster-resmi", label: "Poster", icon: Compass },
    { id: "klien-kami", label: "Klien", icon: Compass },
    { id: "layanan", label: "Layanan", icon: Layers },
    { id: "portofolio", label: "Portofolio", icon: Camera },
    { id: "armada", label: "Armada", icon: Truck },
    { id: "kalkulator", label: "Kalkulator", icon: Calculator },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.round((window.scrollY / (totalHeight || 1)) * 100);
      setScrollPercentage(Math.min(100, Math.max(0, progress)));

      // Detect current section
      const sectionElements = sections.map((sec) => document.getElementById(sec.id));
      const scrollPos = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Right-Side Scroll Navigator HUD (Desktop) */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2 pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl border-2 border-black shadow-neo-lg flex flex-col gap-1.5 items-center">
          
          {/* Scroll % Badge */}
          <div className="bg-slate-100 px-2 py-1 rounded-lg border-2 border-black text-[10px] font-black text-slate-900 mb-1 font-mono shadow-neo-sm">
            {scrollPercentage}%
          </div>

          {/* Section Dots */}
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all cursor-pointer"
                aria-label={`Scroll to ${sec.label}`}
              >
                {/* Active indicator dot/icon */}
                <div
                  className={`w-3.5 h-3.5 rounded-md border-2 border-black transition-all ${
                    isActive
                      ? "bg-neo-yellow scale-125 shadow-neo-sm"
                      : "bg-slate-200 hover:bg-slate-400"
                  }`}
                />

                {/* Tooltip on hover */}
                <div className="absolute right-10 bg-neo-yellow text-black text-xs font-black px-2.5 py-1 rounded-md border-2 border-black shadow-neo-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {sec.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
