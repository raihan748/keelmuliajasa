"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, CheckCircle2, MapPin, Sparkles, X } from "lucide-react";

export const LiveActivityToast: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  const activities = [
    {
      title: "Armada Dump Truck Selesai Angkut",
      location: "Panakkukang, Makassar",
      time: "2 menit lalu",
      icon: Truck,
      color: "bg-amber-500 text-black",
    },
    {
      title: "Kontrak Retribusi Baru Aktif",
      location: "Pattallassang, Kab. Gowa",
      time: "Baru saja",
      icon: CheckCircle2,
      color: "bg-emerald-500 text-white",
    },
    {
      title: "Evakuasi Puing Renovasi Selesai",
      location: "Mandai, Maros",
      time: "8 menit lalu",
      icon: Sparkles,
      color: "bg-blue-500 text-white",
    },
  ];

  useEffect(() => {
    // Show after scrolling 400px
    const handleScroll = () => {
      if (window.scrollY > 400 && !closed) {
        setVisible(true);
      } else if (window.scrollY <= 400) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closed]);

  useEffect(() => {
    if (!visible || closed) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [visible, closed, activities.length]);

  if (closed || !visible) return null;

  const current = activities[index];
  const Icon = current.icon;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 z-40 max-w-[280px] sm:max-w-xs pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="bg-white border-2 border-black rounded-2xl p-3 shadow-neo-lg flex items-center gap-3 relative"
        >
          <div className={`w-9 h-9 rounded-xl border-2 border-black flex items-center justify-center shrink-0 shadow-neo-sm ${current.color}`}>
            <Icon className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-1 text-[10px] font-black text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Aktivitas Lapangan</span>
              <span>•</span>
              <span>{current.time}</span>
            </div>
            <h5 className="font-black text-xs text-slate-900 leading-tight truncate">
              {current.title}
            </h5>
            <div className="flex items-center gap-1 text-[10px] text-amber-600 font-bold">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{current.location}</span>
            </div>
          </div>

          <button
            onClick={() => setClosed(true)}
            className="absolute top-2 right-2 text-slate-400 hover:text-black p-0.5 rounded cursor-pointer"
            aria-label="Tutup Notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
