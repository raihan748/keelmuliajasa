"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Neo Tooltip */}
      <div
        className={`mr-3 bg-neo-yellow text-black px-3.5 py-2 rounded-xl text-xs font-black shadow-neo border-2 border-black pointer-events-none transition-all duration-200 uppercase tracking-wide ${
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
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-neo-emerald hover:bg-neo-emerald-dark text-black flex items-center justify-center border-2 border-black shadow-neo-lg hover:-translate-y-1 hover:shadow-neo-xl transition-all duration-200 cursor-pointer"
        aria-label="Chat WhatsApp CV Keel Mulia Jasa"
      >
        {/* Active Badge */}
        <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-neo-yellow text-black rounded-full text-[11px] font-black flex items-center justify-center border-2 border-black shadow-neo-sm animate-pulse-badge">
          1
        </span>
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </div>
  );
};
