"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calculator, PhoneCall, ChevronUp } from "lucide-react";

export const StickyBottomAction: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-2.5 sm:bottom-5 left-0 right-0 z-40 px-3 sm:px-4 pointer-events-none"
        >
          <div className="max-w-xl mx-auto bg-white border-2 border-black rounded-2xl p-2 sm:p-3 shadow-neo-lg pointer-events-auto flex items-center justify-between gap-1.5 sm:gap-2.5">
            
            {/* Brand Logo / Info (Hidden on very small mobile to give maximum room to action buttons) */}
            <div className="flex items-center gap-2 pl-1 hidden sm:flex">
              <div className="bg-slate-50 p-1 rounded-lg border-2 border-black shadow-neo-sm">
                <img
                  src="/images/logo-emblem-clean.png"
                  alt="Keel Mulia Jasa"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black text-slate-900 leading-tight">CV. Keel Mulia Jasa</div>
                <div className="text-[10px] text-amber-600 font-black">Siaga Armada 24/7</div>
              </div>
            </div>

            {/* Mobile Actions: Optimized for Thumb Reachability */}
            <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-between sm:justify-end">
              
              {/* Calculator Quick Jump */}
              <a
                href="#kalkulator"
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-900 text-xs font-black border-2 border-black shadow-neo-sm transition-all"
              >
                <Calculator className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Hitung Tarif</span>
              </a>

              {/* Call Hotline */}
              <a
                href="tel:+6282396193473"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-slate-100 active:bg-slate-200 text-slate-900 border-2 border-black shadow-neo-sm transition-all"
                title="Telepon Hotline"
                aria-label="Telepon Hotline"
              >
                <PhoneCall className="w-4.5 h-4.5 text-emerald-600" />
              </a>

              {/* Primary WhatsApp Action */}
              <a
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20pengangkutan"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl bg-neo-emerald active:bg-neo-emerald-dark text-black text-xs sm:text-sm font-black border-2 border-black shadow-neo transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Pesan WA</span>
              </a>

              {/* Scroll Top Button (Desktop) */}
              <button
                onClick={scrollToTop}
                className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border-2 border-black shadow-neo-sm transition-all cursor-pointer"
                title="Kembali ke Atas"
                aria-label="Scroll to top"
              >
                <ChevronUp className="w-4 h-4" />
              </button>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
