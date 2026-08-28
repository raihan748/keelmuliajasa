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
  ChevronRight,
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
    <section className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-[#38B6FF] text-slate-900" id="hero">
      
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-white/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 border border-white/80 shadow-soft-sm text-xs font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Jasa Angkutan Sampah, Puing & Kebersihan</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] sm:leading-[1.1]"
            >
              Solusi Bersih & Cepat untuk Angkutan{" "}
              <span className="text-white drop-shadow-sm relative inline-block">
                Sampah & Puing
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-950 font-medium leading-relaxed max-w-2xl"
            >
              Layanan profesional pengangkutan sisa renovasi bangunan, sampah komersial ruko/restoran, residensial perumahan, penebangan pohon, hingga pembersihan lahan kosong di{" "}
              <strong className="text-slate-950 font-bold underline decoration-white/60">Makassar, Gowa, dan Maros</strong>.
            </motion.p>

            {/* Trust Checklist Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-1 xs:grid-cols-3 gap-3 pt-1"
            >
              <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-white/80 shadow-soft-sm text-xs font-bold text-slate-900 hover:scale-[1.02] transition-all">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garansi Bersih Tuntas</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-white/80 shadow-soft-sm text-xs font-bold text-slate-900 hover:scale-[1.02] transition-all">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tenaga Loader K3</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-white/80 shadow-soft-sm text-xs font-bold text-slate-900 hover:scale-[1.02] transition-all">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Invoice & Legalitas CV</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20mau%20konsultasi%20pengangkutan%20sampah%20dan%20pembersihan"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm sm:text-base shadow-soft-md hover:shadow-soft-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current text-emerald-400" />
                <span>Pesan Armada via WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#armada"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base border border-white shadow-soft-sm transition-all"
              >
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Pilihan Armada</span>
              </motion.a>
            </motion.div>

            {/* Counters Stat Bar - Ditegaskan Ulang */}
            <div className="grid grid-cols-3 gap-3.5 sm:gap-4 pt-6 border-t border-white/40">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-white shadow-soft-sm hover:shadow-soft-md text-center transition-all duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                  <AnimatedCounter to={5000} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Ritase Terangkut</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 hidden sm:block">Puing & Sampah</div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-white shadow-soft-sm hover:shadow-soft-md text-center transition-all duration-300 ring-2 ring-blue-500/20">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 font-sans tracking-tight">
                  <AnimatedCounter to={100} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Garansi Bersih</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-blue-600 hidden sm:block">Tuntas & Disapu</div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-white shadow-soft-sm hover:shadow-soft-md text-center transition-all duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                  <AnimatedCounter to={24} suffix="/7" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Siaga Pelayanan</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 hidden sm:block">Respons Cepat</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Booking Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-soft-lg relative"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-50 p-2 rounded-2xl border border-brand-100">
                    <img
                      src="/images/logo-emblem-clean.png"
                      alt="Logo Monogram"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Konsultasi & Estimasi Tarif</h3>
                    <p className="text-xs text-brand-600 font-medium">Respon Cepat Tim Operasional</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Jenis Sampah / Muatan
                  </label>
                  <select
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all cursor-pointer"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Lokasi Titik Muat
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Contoh: Panakkukang / Somba Opu / Maros"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all"
                    />
                  </div>
                </div>

                {/* Fleet Thumbnails Preview */}
                <div className="pt-1">
                  <div className="text-xs font-semibold text-slate-500 mb-2">Armada Siaga:</div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-slate-50 hover:bg-slate-100/80 p-2 rounded-2xl border border-slate-150 flex items-center gap-2.5 transition-all">
                      <img
                        src="/images/fleet/dump-truck-merah.jpg"
                        alt="Dump Truck"
                        className="w-10 h-10 object-cover rounded-xl border border-slate-200"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-800 leading-tight">Dump Truck</div>
                        <div className="text-[10px] text-slate-500 font-medium">Puing/Proyek</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 hover:bg-slate-100/80 p-2 rounded-2xl border border-slate-150 flex items-center gap-2.5 transition-all">
                      <img
                        src="/images/fleet/pickup-l300-bak-tinggi.jpg"
                        alt="Pick Up L300"
                        className="w-10 h-10 object-cover rounded-xl border border-slate-200"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-800 leading-tight">Pick Up L300</div>
                        <div className="text-[10px] text-slate-500 font-medium">Residensial</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="min-h-[46px] w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-soft-sm hover:shadow-glow-brand cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cek Estimasi Biaya & Jadwal (WhatsApp)</span>
                  </motion.button>
                </div>

              </form>

            </motion.div>
          </div>

        </div>

        {/* Scroll-Down Indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#tentang-kami"
            className="inline-flex flex-col items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors group cursor-pointer"
          >
            <span>Eksplor Layanan</span>
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-soft-xs flex items-center justify-center group-hover:border-brand-300 group-hover:text-brand-600 transition-all">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

