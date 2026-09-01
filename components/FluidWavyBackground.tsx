"use client";

import React from "react";
import { motion } from "framer-motion";

export const FluidWavyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Base Gradient Foundation (Purple-Blue to Sky-Blue Palette like in reference image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4338CA] via-[#2563EB] to-[#38B6FF]" />

      {/* 2. Layered Secondary Violet & Royal Mesh Glows */}
      <div className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#38B6FF]/30 blur-3xl opacity-75" />
      <div className="absolute top-1/3 -right-24 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#6366F1]/45 to-[#0284C7]/35 blur-3xl opacity-70" />
      <div className="absolute bottom-10 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#312E81]/50 to-[#38B6FF]/40 blur-3xl opacity-80" />

      {/* 3. Halftone Dot Matrix Pattern 1 (Top-Right Cluster as in reference image) */}
      <div 
        className="absolute top-0 right-0 w-[480px] h-[480px] opacity-40"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(circle at 75% 25%, black 45%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 75% 25%, black 45%, transparent 80%)",
        }}
      />

      {/* 4. Halftone Dot Matrix Pattern 2 (Left Mid-Side Cluster as in reference image) */}
      <div 
        className="absolute top-1/4 -left-16 w-[420px] h-[420px] opacity-35"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2.2px, transparent 2.2px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(circle at 30% 50%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 30% 50%, black 40%, transparent 80%)",
        }}
      />

      {/* 5. Halftone Dot Matrix Pattern 3 (Bottom-Right Cluster) */}
      <div 
        className="absolute bottom-1/6 right-10 w-[400px] h-[400px] opacity-30"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
        }}
      />

      {/* 6. Sweeping Organic Flowing Vector Waves (Top to Center - Matching reference curves) */}
      <svg
        className="absolute top-0 left-0 w-full h-[1000px] object-cover opacity-60 pointer-events-none"
        viewBox="0 0 1440 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Deep Violet Flow Wave */}
        <path
          d="M-100 0C320 320 540 -60 920 220C1280 460 1420 120 1600 360V0H-100Z"
          fill="url(#wave-dewa-1)"
        />
        {/* Royal Blue Mid Wave */}
        <path
          d="M-50 260C280 480 640 160 1020 420C1320 620 1460 320 1600 540V0L-50 0V260Z"
          fill="url(#wave-dewa-2)"
          opacity="0.65"
        />
        {/* Vibrant Sky Wave Layer */}
        <path
          d="M0 480C360 690 760 340 1160 620C1380 780 1520 560 1600 720V0L0 0V480Z"
          fill="url(#wave-dewa-3)"
          opacity="0.45"
        />
        <defs>
          <linearGradient id="wave-dewa-1" x1="0" y1="0" x2="1440" y2="1000" gradientUnits="userSpaceOnUse">
            <stop stopColor="#312E81" stopOpacity="0.75" />
            <stop offset="0.4" stopColor="#4F46E5" stopOpacity="0.6" />
            <stop offset="0.8" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="1" stopColor="#38B6FF" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="wave-dewa-2" x1="0" y1="0" x2="1440" y2="1000" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4338CA" stopOpacity="0.65" />
            <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.45" />
            <stop offset="1" stopColor="#60A5FA" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wave-dewa-3" x1="0" y1="0" x2="1440" y2="1000" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E40AF" stopOpacity="0.55" />
            <stop offset="0.6" stopColor="#38B6FF" stopOpacity="0.35" />
            <stop offset="1" stopColor="#BAE6FD" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* 7. Flowing Vector Waves (Center to Bottom Section) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[1400px] object-cover opacity-65 pointer-events-none"
        viewBox="0 0 1440 1400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 620C420 380 740 760 1140 480C1380 320 1520 560 1600 440V1400H0V620Z"
          fill="url(#wave-bot-dewa-1)"
          opacity="0.55"
        />
        <path
          d="M-50 820C360 640 680 960 1080 740C1360 580 1480 820 1600 710V1400H-50V820Z"
          fill="url(#wave-bot-dewa-2)"
          opacity="0.65"
        />
        <path
          d="M0 1040C320 890 620 1140 1020 980C1300 840 1460 1020 1600 950V1400H0V1040Z"
          fill="url(#wave-bot-dewa-3)"
          opacity="0.75"
        />
        <defs>
          <linearGradient id="wave-bot-dewa-1" x1="0" y1="0" x2="1440" y2="1400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A8A" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="1" stopColor="#38B6FF" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="wave-bot-dewa-2" x1="0" y1="0" x2="1440" y2="1400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#312E81" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#4338CA" stopOpacity="0.6" />
            <stop offset="1" stopColor="#0284C7" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="wave-bot-dewa-3" x1="0" y1="0" x2="1440" y2="1400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E1B4B" stopOpacity="0.85" />
            <stop offset="0.6" stopColor="#1E40AF" stopOpacity="0.65" />
            <stop offset="1" stopColor="#0369A1" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* 8. Subtle Floating Decorative Geometric Shapes (Crosses & Sparkles like in illustration) */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 left-[15%] text-white/40 text-xl font-black select-none pointer-events-none"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-72 right-[12%] text-white/35 text-2xl font-black select-none pointer-events-none"
      >
        +
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[48%] left-[8%] text-white/30 text-lg font-black select-none pointer-events-none"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[18%] text-white/30 text-2xl font-black select-none pointer-events-none"
      >
        +
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-[30%] w-6 h-6 border-2 border-white/25 rounded-lg select-none pointer-events-none"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[22%] w-8 h-8 border-2 border-white/20 rounded-full select-none pointer-events-none"
      />
    </div>
  );
};
