"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Zap, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export const NeoMarquee: React.FC = () => {
  const tickerItems = [
    { text: "Armada Dump Truck & Pick Up Siaga 24/7", icon: Truck },
    { text: "Pengangkutan Sampah & Puing Bersih Tuntas", icon: Sparkles },
    { text: "Wilayah Makassar, Gowa & Maros", icon: MapPin },
    { text: "Respon Kilat WhatsApp 0823-9619-3473", icon: Zap },
    { text: "Tim Loader Profesional & Standar K3", icon: ShieldCheck },
    { text: "Legalitas CV Resmi & Invoice B2B", icon: CheckCircle2 },
  ];

  return (
    <div className="bg-[#38B6FF] text-white border-y border-[#209BE3] py-3.5 overflow-hidden select-none relative z-20 shadow-soft-xs">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-10 items-center font-medium text-xs sm:text-sm text-white"
      >
        {/* Render multiple times for smooth infinite loop */}
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 shrink-0">
              <span className="w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-soft-xs">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="font-bold text-white tracking-wide">{item.text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 ml-6" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

