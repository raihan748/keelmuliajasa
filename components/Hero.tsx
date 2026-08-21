"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Truck,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Hero: React.FC = () => {
  const [wasteType, setWasteType] = useState("Puing Sisa Bangunan & Proyek");
  const [location, setLocation] = useState("");

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loc = location.trim() || "Makassar / Gowa / Maros";
    const msg = `*PERMINTAAN KONSULTASI PENGANGKUTAN SAMPAH*\n` +
      `*CV. KEEL MULIA JASA*\n\n` +
      `📦 *Jenis Sampah/Muatan:* ${wasteType}\n` +
      `📍 *Lokasi Pengangkutan:* ${loc}\n\n` +
      `Mohon info estimasi biaya, ketersediaan jadwal, dan prosedur pengangkutannya. Terima kasih!`;

    const url = `https://wa.me/6282396193473?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-neo-bg bg-neo-grid border-b-2 border-black" id="hero">
      
      {/* Neo Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-neo-yellow/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Dynamic Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Top Sticker Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md bg-neo-yellow text-black border-2 border-black shadow-neo-sm text-[11px] sm:text-xs font-black uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              <span>Jasa Angkutan Sampah & Puing Terpercaya di Sulsel</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.1]"
            >
              Angkut Sampah & Puing Cepat, Bersih Tuntas &{" "}
              <span className="bg-neo-yellow text-black px-2 py-0.5 rounded-lg border-2 border-black shadow-neo inline-block rotate-[-1deg]">
                Terpercaya
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl"
            >
              Layanan profesional pengangkutan puing bangunan, sampah komersial ruko/restoran, residensial perumahan, hingga penebangan pohon dan pembersihan lahan kosong di{" "}
              <strong className="text-slate-900 font-black underline decoration-neo-yellow decoration-4">Makassar, Gowa, dan Maros</strong>.
            </motion.p>

            {/* Trust Checklist Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 pt-1"
            >
              <div className="flex items-center gap-2 bg-emerald-50/90 px-3 py-2.5 rounded-xl border-2 border-black shadow-neo-sm text-xs font-black text-emerald-950 hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Garansi Bersih Tuntas</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50/90 px-3 py-2.5 rounded-xl border-2 border-black shadow-neo-sm text-xs font-black text-amber-950 hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 stroke-[2.5]" />
                <span>Tenaga Loader & Standar K3</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50/90 px-3 py-2.5 rounded-xl border-2 border-black shadow-neo-sm text-xs font-black text-blue-950 hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
                <span>Invoice & Kwitansi Resmi</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-3"
            >
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20mau%20konsultasi%20pengangkutan%20sampah%20dan%20pembersihan"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black font-black text-sm sm:text-base border-2 border-black shadow-neo transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pesan Armada WhatsApp</span>
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.98 }}
                href="#armada"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-black text-sm sm:text-base border-2 border-black shadow-neo transition-all"
              >
                <Truck className="w-5 h-5 text-amber-500" />
                <span>Lihat Foto Armada</span>
              </motion.a>
            </motion.div>

            {/* Animated Counters Stat Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t-2 border-black">
              <div className="bg-white p-2.5 sm:p-3.5 rounded-2xl border-2 border-black shadow-neo-sm text-center">
                <div className="text-lg sm:text-2xl font-black text-amber-500 font-mono">
                  <AnimatedCounter to={5000} suffix="+" />
                </div>
                <div className="text-[9px] sm:text-xs font-black text-slate-700">Ritase Terangkut</div>
              </div>
              <div className="bg-white p-2.5 sm:p-3.5 rounded-2xl border-2 border-black shadow-neo-sm text-center">
                <div className="text-lg sm:text-2xl font-black text-emerald-600 font-mono">
                  <AnimatedCounter to={100} suffix="%" />
                </div>
                <div className="text-[9px] sm:text-xs font-black text-slate-700">Garansi Bersih</div>
              </div>
              <div className="bg-white p-2.5 sm:p-3.5 rounded-2xl border-2 border-black shadow-neo-sm text-center">
                <div className="text-lg sm:text-2xl font-black text-blue-600 font-mono">
                  <AnimatedCounter to={24} suffix="/7" />
                </div>
                <div className="text-[9px] sm:text-xs font-black text-slate-700">Siaga Pelayanan</div>
              </div>
            </div>

          </div>

          {/* Right Column: Neobrutalist Booking Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-2 border-black rounded-3xl p-5 sm:p-8 shadow-neo-xl relative"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <div className="bg-slate-50 p-1.5 rounded-xl border-2 border-black shadow-neo-sm">
                    <img
                      src="/images/logo-emblem-clean.png"
                      alt="Logo Monogram"
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">Konsultasi & Estimasi Cepat</h3>
                    <p className="text-[10px] sm:text-[11px] text-amber-600 font-black">Respon Cepat Tim Operasional</p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 border border-black animate-pulse" />
              </div>

              {/* Form */}
              <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                
                <div>
                  <label className="block text-[11px] sm:text-xs font-black text-slate-800 mb-1 uppercase tracking-wide">
                    Jenis Sampah / Muatan
                  </label>
                  <select
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border-2 border-black text-slate-900 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                  >
                    <option value="Puing Sisa Bangunan & Proyek">Puing Sisa Bangunan & Proyek</option>
                    <option value="Sampah Komersial Kantor / Ruko / Resto">Sampah Komersial Kantor / Ruko / Resto</option>
                    <option value="Sampah Rumah Tangga & Perumahan">Sampah Rumah Tangga & Perumahan</option>
                    <option value="Penebangan Batang & Ranting Pohon">Penebangan Batang & Ranting Pohon</option>
                    <option value="Pembersihan Lahan Kosong">Pembersihan Lahan Kosong</option>
                    <option value="Sewa Dump Truck + Tim Loader">Sewa Dump Truck + Tim Loader</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-black text-slate-800 mb-1 uppercase tracking-wide">
                    Lokasi Titik Muat
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Contoh: Panakkukang / Somba Opu"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border-2 border-black text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                    />
                  </div>
                </div>

                {/* Fleet Thumbnails Preview */}
                <div className="pt-1">
                  <div className="text-[10px] sm:text-[11px] font-black text-slate-600 uppercase mb-1.5">Armada Siaga Hari Ini:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-50 p-1.5 sm:p-2 rounded-xl border-2 border-black shadow-neo-sm flex items-center gap-1.5 sm:gap-2">
                      <img
                        src="/images/fleet/dump-truck-merah.jpg"
                        alt="Dump Truck"
                        className="w-9 h-9 sm:w-10 sm:h-10 object-cover rounded-lg border border-black"
                      />
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-black text-slate-900 leading-tight">Dump Truck</div>
                        <div className="text-[8px] sm:text-[9px] text-amber-600 font-bold">Puing/Proyek</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-1.5 sm:p-2 rounded-xl border-2 border-black shadow-neo-sm flex items-center gap-1.5 sm:gap-2">
                      <img
                        src="/images/fleet/pickup-l300-bak-tinggi.jpg"
                        alt="Pick Up L300"
                        className="w-9 h-9 sm:w-10 sm:h-10 object-cover rounded-lg border border-black"
                      />
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-black text-slate-900 leading-tight">Pick Up L300</div>
                        <div className="text-[8px] sm:text-[9px] text-emerald-600 font-bold">Residensial</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-1.5">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="min-h-[48px] w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neo-yellow hover:bg-neo-yellow-hover text-black font-black text-xs sm:text-sm border-2 border-black shadow-neo cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cek Estimasi Biaya & Jadwal (WA)</span>
                  </motion.button>
                </div>

              </form>

            </motion.div>
          </div>

        </div>

        {/* Interactive Scroll-Down Trigger */}
        <div className="mt-8 sm:mt-14 flex justify-center">
          <a
            href="#tentang-kami"
            className="inline-flex flex-col items-center gap-1.5 text-xs font-black text-slate-600 hover:text-black transition-colors group cursor-pointer"
          >
            <span>Scroll untuk Eksplor</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white border-2 border-black shadow-neo-sm flex items-center justify-center group-hover:bg-neo-yellow group-hover:shadow-neo transition-all animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
