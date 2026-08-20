"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Zap, Sparkles, MapPin } from "lucide-react";

export const NeoMarquee: React.FC = () => {
  const tickerItems = [
    { text: "ARMADA DUMP TRUCK & PICK UP SIAGA 24/7", icon: Truck, color: "text-neo-yellow" },
    { text: "PEMBUANGAN 100% LEGAL KE TPA RESMI", icon: ShieldCheck, color: "text-neo-emerald" },
    { text: "MELAYANI MAKASSAR, GOWA & MAROS", icon: MapPin, color: "text-neo-cyan" },
    { text: "RESPON KILAT WHATSAPP 0823-9619-3473", icon: Zap, color: "text-neo-yellow" },
    { text: "TERSEDIA TIM LOADER LENGKAP & APD K3", icon: Sparkles, color: "text-neo-red" },
  ];

  return (
    <div className="bg-neo-yellow text-black border-y-2 border-black py-3 overflow-hidden select-none relative z-20 shadow-neo">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-8 items-center font-black text-xs sm:text-sm uppercase tracking-wider"
      >
        {/* Render twice for seamless infinite looping */}
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 shrink-0">
              <span className="w-6 h-6 rounded-md bg-black text-neo-yellow flex items-center justify-center border border-black shadow-neo-sm">
                <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>{item.text}</span>
              <span className="text-black font-black text-base ml-4">★</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
