"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  PhoneCall,
  Calculator,
  Truck,
  Instagram,
  ArrowUp,
  ShieldCheck,
} from "lucide-react";

export const LeftTaskbar: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Taskbar Pintasan Kiri"
      className="fixed left-3 sm:left-4 xl:left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center pointer-events-auto"
    >
      <div className="bg-white/95 backdrop-blur-md p-2 rounded-3xl border border-slate-200/90 shadow-soft-lg flex flex-col gap-2.5 items-center">
        
        {/* Company Mini Badge */}
        <div className="group relative flex items-center justify-center">
          <div className="w-9 h-9 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-700 shadow-soft-xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="absolute left-12 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-x-2 group-hover:translate-x-0 z-50">
            CV. Keel Mulia Jasa (Resmi & Berizin TPA)
          </div>
        </div>

        <div className="w-6 h-px bg-slate-200" />

        {/* WhatsApp Fast Action */}
        <a
          href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20konsultasi%20pengangkutan%20sampah%2Fpuing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-9 h-9 rounded-2xl bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white transition-all duration-200 shadow-soft-xs"
          aria-label="Pesan via WhatsApp"
        >
          <MessageCircle className="w-4.5 h-4.5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
          <div className="absolute left-12 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-x-2 group-hover:translate-x-0 z-50">
            WhatsApp Cepat (0823-9619-3473)
          </div>
        </a>

        {/* Phone Call Hotline */}
        <a
          href="tel:+6282396193473"
          className="group relative flex items-center justify-center w-9 h-9 rounded-2xl bg-slate-100 hover:bg-slate-900 text-slate-700 hover:text-white transition-all duration-200"
          aria-label="Telepon Hotline"
        >
          <PhoneCall className="w-4.5 h-4.5" />
          <div className="absolute left-12 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-x-2 group-hover:translate-x-0 z-50">
            Hotline Langsung
          </div>
        </a>

        {/* Calculator Estimator */}
        <button
          onClick={() => scrollToElement("kalkulator")}
          className="group relative flex items-center justify-center w-9 h-9 rounded-2xl bg-slate-100 hover:bg-brand-600 text-slate-700 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label="Hitung Estimasi Biaya"
        >
          <Calculator className="w-4.5 h-4.5" />
          <div className="absolute left-12 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-x-2 group-hover:translate-x-0 z-50">
            Hitung Estimasi Biaya & Volume
          </div>
        </button>

        {/* Fleet Section Shortcut */}
        <button
          onClick={() => scrollToElement("armada")}
          className="group relative flex items-center justify-center w-9 h-9 rounded-2xl bg-slate-100 hover:bg-brand-600 text-slate-700 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label="Pilihan Armada Dump Truck & Pick Up"
        >
          <Truck className="w-4.5 h-4.5" />
          <div className="absolute left-12 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-x-2 group-hover:translate-x-0 z-50">
            Pilihan Armada (Dump Truck & Pick Up)
          </div>
        </button>

        {/* Instagram Profile */}
        <a
          href="https://instagram.com/cv.keelmuliajasa"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-9 h-9 rounded-2xl bg-pink-50 hover:bg-pink-600 text-pink-600 hover:text-white transition-all duration-200"
          aria-label="Instagram CV. Keel Mulia Jasa"
        >
          <Instagram className="w-4.5 h-4.5" />
          <div className="absolute left-12 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-x-2 group-hover:translate-x-0 z-50">
            Instagram: @cv.keelmuliajasa
          </div>
        </a>

        {/* Scroll To Top Action (visible when scrolled) */}
        {showScrollTop && (
          <>
            <div className="w-6 h-px bg-slate-200" />
            <button
              onClick={scrollToTop}
              className="group relative flex items-center justify-center w-9 h-9 rounded-2xl bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white transition-all duration-200 cursor-pointer shadow-soft-xs"
              aria-label="Kembali ke Atas"
            >
              <ArrowUp className="w-4.5 h-4.5" />
              <div className="absolute left-12 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-x-2 group-hover:translate-x-0 z-50">
                Kembali ke Atas
              </div>
            </button>
          </>
        )}

      </div>
    </aside>
  );
};
