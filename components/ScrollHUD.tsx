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
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col gap-2 pointer-events-auto">
      <div className="bg-white/90 backdrop-blur-md p-2 rounded-full border border-slate-200/80 shadow-soft-md flex flex-col gap-2 items-center">
        
        {/* Scroll % Badge */}
        <div className="text-[10px] font-bold text-slate-500 font-mono py-1 px-0.5">
          {scrollPercentage}%
        </div>

        {/* Section Dots */}
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group relative flex items-center justify-center w-6 h-6 rounded-full transition-all cursor-pointer"
              aria-label={`Scroll to ${sec.label}`}
            >
              {/* Active indicator dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3 h-3 bg-brand-600 ring-4 ring-brand-100"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />

              {/* Tooltip on hover */}
              <div className="absolute right-9 bg-slate-900 text-white text-xs font-medium px-2.5 py-1 rounded-lg shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-1 group-hover:translate-x-0">
                {sec.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

