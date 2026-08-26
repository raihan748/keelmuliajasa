"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30 hidden sm:flex items-center">
      {/* Tooltip */}
      <div
        className={`mr-3 bg-slate-900 text-white px-3.5 py-2 rounded-xl text-xs font-medium shadow-soft-lg pointer-events-none transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
      >
        <span>Konsultasi Cepat via WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20tanya%20layanan%20angkutan%20sampah%2Fpuing"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-soft-lg hover:shadow-glow-brand hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Chat WhatsApp CV Keel Mulia Jasa"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />

        {/* Online Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
        
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};

