"use client";

import React from "react";
import { motion } from "framer-motion";

export const FluidWavyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Base Gradient Foundation (Purple/Violet to Deep Royal to Sky-Blue Palette like in reference image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4338CA] via-[#3B82F6] to-[#0284C7]" />

      {/* 2. Layered Secondary Violet & Royal Mesh Glows */}
      <div className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#7C3AED]/60 to-[#38B6FF]/40 blur-3xl opacity-80" />
      <div className="absolute top-1/4 -right-24 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#6366F1]/60 to-[#0284C7]/50 blur-3xl opacity-80" />
      <div className="absolute bottom-10 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#312E81]/70 to-[#38B6FF]/50 blur-3xl opacity-85" />

      {/* 3. Halftone Dot Matrix Pattern 1 (Top-Right Cluster as in reference image) */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-60 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2.5px, transparent 2.5px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(circle at 75% 25%, black 50%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at 75% 25%, black 50%, transparent 85%)",
        }}
      />

      {/* 4. Halftone Dot Matrix Pattern 2 (Left Mid-Side Cluster as in reference image) */}
      <div 
        className="absolute top-1/4 -left-12 w-[450px] h-[450px] opacity-50 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2.5px, transparent 2.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at 30% 50%, black 45%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 30% 50%, black 45%, transparent 80%)",
        }}
      />

      {/* 5. Halftone Dot Matrix Pattern 3 (Bottom-Right Cluster) */}
      <div 
        className="absolute bottom-1/6 right-8 w-[420px] h-[420px] opacity-45 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2.5px, transparent 2.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at center, black 45%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 45%, transparent 80%)",
        }}
      />

      {/* 6. Sweeping Organic Flowing Vector Waves (Top to Center - Matching reference curves) */}
      <svg
        className="absolute top-0 left-0 w-full h-[1100px] object-cover opacity-75 pointer-events-none"
        viewBox="0 0 1440 1100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Deep Violet Flow Wave */}
        <path
          d="M-100 0C320 340 540 -60 920 240C1280 480 1420 140 1600 380V0H-100Z"
          fill="url(#wave-dewa-1)"
        />
        {/* Royal Blue Mid Wave */}
        <path
          d="M-50 280C280 500 640 180 1020 440C1320 640 1460 340 1600 560V0L-50 0V280Z"
          fill="url(#wave-dewa-2)"
          opacity="0.8"
        />
        {/* Vibrant Sky Wave Layer */}
        <path
          d="M0 500C360 720 760 360 1160 640C1380 800 1520 580 1600 740V0L0 0V500Z"
          fill="url(#wave-dewa-3)"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="wave-dewa-1" x1="0" y1="0" x2="1440" y2="1100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#312E81" stopOpacity="0.85" />
            <stop offset="0.4" stopColor="#4F46E5" stopOpacity="0.75" />
            <stop offset="0.8" stopColor="#2563EB" stopOpacity="0.55" />
            <stop offset="1" stopColor="#38B6FF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="wave-dewa-2" x1="0" y1="0" x2="1440" y2="1100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4338CA" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="1" stopColor="#60A5FA" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="wave-dewa-3" x1="0" y1="0" x2="1440" y2="1100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E40AF" stopOpacity="0.7" />
            <stop offset="0.6" stopColor="#38B6FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#BAE6FD" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* 7. Flowing Vector Waves (Center to Bottom Section) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[1500px] object-cover opacity-80 pointer-events-none"
        viewBox="0 0 1440 1500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 640C420 400 740 780 1140 500C1380 340 1520 580 1600 460V1500H0V640Z"
          fill="url(#wave-bot-dewa-1)"
          opacity="0.7"
        />
        <path
          d="M-50 840C360 660 680 980 1080 760C1360 600 1480 840 1600 730V1500H-50V840Z"
          fill="url(#wave-bot-dewa-2)"
          opacity="0.8"
        />
        <path
          d="M0 1060C320 910 620 1160 1020 1000C1300 860 1460 1040 1600 970V1500H0V1060Z"
          fill="url(#wave-bot-dewa-3)"
          opacity="0.9"
        />
        <defs>
          <linearGradient id="wave-bot-dewa-1" x1="0" y1="0" x2="1440" y2="1500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A8A" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#2563EB" stopOpacity="0.65" />
            <stop offset="1" stopColor="#38B6FF" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="wave-bot-dewa-2" x1="0" y1="0" x2="1440" y2="1500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#312E81" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#4338CA" stopOpacity="0.75" />
            <stop offset="1" stopColor="#0284C7" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="wave-bot-dewa-3" x1="0" y1="0" x2="1440" y2="1500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E1B4B" stopOpacity="0.95" />
            <stop offset="0.6" stopColor="#1E40AF" stopOpacity="0.8" />
            <stop offset="1" stopColor="#0369A1" stopOpacity="0.55" />
          </linearGradient>
        </defs>
      </svg>

      {/* 8. Subtle Floating Decorative Geometric Shapes (Crosses & Sparkles like in illustration) */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 left-[15%] text-white/50 text-xl font-black select-none pointer-events-none"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-72 right-[12%] text-white/45 text-2xl font-black select-none pointer-events-none"
      >
        +
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[48%] left-[8%] text-white/40 text-lg font-black select-none pointer-events-none"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[18%] text-white/40 text-2xl font-black select-none pointer-events-none"
      >
        +
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-[30%] w-6 h-6 border-2 border-white/30 rounded-lg select-none pointer-events-none"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[22%] w-8 h-8 border-2 border-white/25 rounded-full select-none pointer-events-none"
      />
    </div>
  );
};
