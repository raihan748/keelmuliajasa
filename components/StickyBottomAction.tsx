"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calculator, PhoneCall, ChevronUp } from "lucide-react";

export const StickyBottomAction: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
          className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 px-3 sm:px-4 pointer-events-none"
        >
          <div className="max-w-md sm:max-w-lg mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full p-2 sm:p-2.5 shadow-soft-xl pointer-events-auto flex items-center justify-between gap-2">
            
            {/* Brand Logo / Info */}
            <div className="flex items-center gap-2 pl-2 hidden sm:flex">
              <div className="bg-brand-50 p-1 rounded-full border border-brand-100">
                <img
                  src="/images/logo-emblem-clean.png"
                  alt="Keel Mulia Jasa"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800 leading-tight">CV. Keel Mulia Jasa</div>
                <div className="text-[10px] text-brand-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Siaga 24/7
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              
              {/* Calculator Quick Jump */}
              <a
                href="#kalkulator"
                className="min-h-[40px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all"
              >
                <Calculator className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span>Simulasi</span>
              </a>

              {/* Call Hotline */}
              <a
                href="tel:+6282396193473"
                className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
                title="Telepon Hotline"
                aria-label="Telepon Hotline"
              >
                <PhoneCall className="w-4 h-4 text-slate-600" />
              </a>

              {/* Primary WhatsApp Action */}
              <a
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20pengangkutan"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-semibold shadow-soft-sm hover:shadow-glow-brand transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Pesan WhatsApp</span>
              </a>

              {/* Scroll Top Button (Desktop) */}
              <button
                onClick={scrollToTop}
                className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all cursor-pointer"
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

