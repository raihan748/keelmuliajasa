"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, PhoneCall, Truck, Calculator, ChevronLeft, ChevronRight, Zap, Sparkles } from "lucide-react";

export const SideActionDock: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after 300px scroll
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="fixed right-0 top-1/3 -translate-y-1/2 z-40 hidden md:flex items-center pointer-events-auto"
        >
          {/* Collapse Toggle Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="bg-neo-yellow text-black p-1.5 rounded-l-xl border-t-2 border-b-2 border-l-2 border-black shadow-neo-sm hover:bg-neo-yellow-hover transition-transform cursor-pointer"
            aria-label={collapsed ? "Buka Menu Aksi Cepat" : "Tutup Menu Aksi Cepat"}
          >
            {collapsed ? (
              <ChevronLeft className="w-5 h-5 stroke-[3]" />
            ) : (
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            )}
          </button>

          {/* Action Dock Panel */}
          {!collapsed && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border-2 border-black rounded-l-2xl p-3 shadow-neo-xl flex flex-col gap-2.5 max-w-[200px]"
            >
              {/* Online Status Pill */}
              <div className="flex items-center gap-2 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-300 text-[10px] font-black text-emerald-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span className="truncate">Admin Siaga 24 Jam</span>
              </div>

              {/* Instant WhatsApp Dispatch */}
              <a
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20butuh%20pengangkutan%20sampah%2Fpuing%20secepatnya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-neo-emerald hover:bg-neo-emerald-dark text-black p-2.5 rounded-xl border-2 border-black shadow-neo-sm font-black text-xs transition-all hover:-translate-x-1"
              >
                <div className="w-7 h-7 rounded-lg bg-black text-neo-emerald flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 group-hover:animate-bounce" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-black leading-tight">Panggil Armada</div>
                  <div className="text-[9px] font-bold text-slate-900">Respon &lt; 5 mnt</div>
                </div>
              </a>

              {/* Quick Calculator Shortcut */}
              <a
                href="#kalkulator"
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 p-2.5 rounded-xl border-2 border-black shadow-neo-sm font-black text-xs transition-all hover:-translate-x-1"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-black flex items-center justify-center shrink-0 text-blue-600">
                  <Calculator className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-black leading-tight">Cek Tarif Cepat</div>
                  <div className="text-[9px] text-slate-500 font-bold">Simulasi Gratis</div>
                </div>
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:+6282396193473"
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 p-2.5 rounded-xl border-2 border-black shadow-neo-sm font-black text-xs transition-all hover:-translate-x-1"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-black flex items-center justify-center shrink-0 text-amber-600">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-black leading-tight">Hotline Telepon</div>
                  <div className="text-[9px] text-slate-500 font-bold">0823-9619-3473</div>
                </div>
              </a>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
