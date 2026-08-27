"use client";

import React, { useState, useEffect } from "react";
import {
  Compass,
  FileText,
  Truck,
  Calculator,
  HelpCircle,
  Camera,
  Layers,
} from "lucide-react";

export const ScrollHUD: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const sections = [
    { id: "hero", label: "Utama" },
    { id: "tentang-kami", label: "Profil" },
    { id: "poster-resmi", label: "Publikasi" },
    { id: "klien-kami", label: "Klien" },
    { id: "layanan", label: "Layanan" },
    { id: "portofolio", label: "Portofolio" },
    { id: "armada", label: "Armada" },
    { id: "kalkulator", label: "Kalkulator" },
    { id: "faq", label: "FAQ" },
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
    <aside
      aria-label="Taskbar Navigasi Kanan"
      className="fixed right-3 sm:right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center pointer-events-auto"
    >
      <div className="bg-white/95 backdrop-blur-md p-2 rounded-3xl border border-slate-200/90 shadow-soft-lg flex flex-col gap-2 items-center">
        
        {/* Scroll % Gauge Badge */}
        <div className="w-8 h-8 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-center justify-center text-[10px] font-bold text-brand-700 font-mono shadow-soft-xs">
          {scrollPercentage}%
        </div>

        <div className="w-5 h-px bg-slate-200" />

        {/* Section Navigation Dots */}
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group relative flex items-center justify-center w-8 h-8 rounded-2xl transition-all cursor-pointer hover:bg-slate-100"
              aria-label={`Navigasi ke ${sec.label}`}
            >
              {/* Active Indicator */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3.5 h-3.5 bg-brand-600 ring-4 ring-brand-100 shadow-soft-xs"
                    : "w-2 h-2 bg-slate-300 group-hover:bg-slate-500"
                }`}
              />

              {/* Tooltip on hover */}
              <div className="absolute right-11 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-2 group-hover:translate-x-0 z-50">
                {sec.label}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

