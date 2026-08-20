"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calculator, PhoneCall, ChevronUp } from "lucide-react";

export const StickyBottomAction: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
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
          className="fixed bottom-5 left-0 right-0 z-40 px-4 pointer-events-none"
        >
          <div className="max-w-xl mx-auto bg-neo-surface border-2 border-black rounded-2xl p-2.5 sm:p-3 shadow-neo-lg pointer-events-auto flex items-center justify-between gap-2.5">
            
            {/* Brand Logo / Info */}
            <div className="flex items-center gap-2.5 pl-1 hidden sm:flex">
              <div className="bg-neo-card p-1 rounded-lg border-2 border-black shadow-neo-sm">
                <img
                  src="/images/logo-emblem-clean.png"
                  alt="Keel Mulia Jasa"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black text-white leading-tight">CV. Keel Mulia Jasa</div>
                <div className="text-[10px] text-neo-yellow font-black">Siaga Armada 24/7</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              
              <a
                href="#kalkulator"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neo-card hover:bg-neo-card2 text-slate-200 text-xs font-black border-2 border-black shadow-neo-sm hover:-translate-y-0.5 transition-all"
              >
                <Calculator className="w-3.5 h-3.5 text-neo-yellow" />
                <span className="hidden xs:inline">Hitung</span> Tarif
              </a>

              <a
                href="tel:+6281234567890"
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-neo-card hover:bg-neo-card2 text-slate-200 border-2 border-black shadow-neo-sm hover:-translate-y-0.5 transition-all"
                title="Telepon Hotline"
              >
                <PhoneCall className="w-4 h-4 text-neo-emerald" />
              </a>

              <a
                href="https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20pengangkutan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black text-xs sm:text-sm font-black border-2 border-black shadow-neo hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pesan Armada (WA)</span>
              </a>

              <button
                onClick={scrollToTop}
                className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-xl bg-neo-card hover:bg-neo-card2 text-slate-300 border-2 border-black shadow-neo-sm transition-all cursor-pointer"
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
