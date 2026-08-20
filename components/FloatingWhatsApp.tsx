"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      <div
        className={`mr-3 bg-slate-900 text-white px-3.5 py-2 rounded-xl text-xs font-extrabold shadow-2xl border border-slate-700 pointer-events-none transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
      >
        <span>Pesan Armada Keel Mulia Jasa 🚚</span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20tanya%20layanan%20angkutan%20sampah%2Fpuing"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border-2 border-white/20"
        aria-label="Chat WhatsApp CV Keel Mulia Jasa"
      >
        {/* Active Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-slate-950 rounded-full text-[10px] font-black flex items-center justify-center border-2 border-white animate-pulse-badge">
          1
        </span>
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </div>
  );
};
