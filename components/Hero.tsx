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
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-neo-bg bg-neo-grid border-b-2 border-black" id="hero">
      
      {/* Neo Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-neo-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Dynamic Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Sticker Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-neo-yellow text-black border-2 border-black shadow-neo-sm text-xs font-black uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 stroke-[2.5]" />
              <span>Jasa Angkutan Sampah & Puing Terpercaya di Sulsel</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Angkut Sampah & Puing Cepat, Bersih Tuntas ke{" "}
              <span className="bg-neo-yellow text-black px-2 py-0.5 rounded-md border-2 border-black shadow-neo-sm inline-block rotate-[-1deg]">
                TPA Resmi
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl"
            >
              Layanan profesional pengangkutan puing bangunan, sampah komersial ruko/restoran, residensial perumahan, hingga penebangan pohon dan pembersihan lahan kosong di{" "}
              <strong className="text-neo-yellow font-black">Makassar, Gowa, dan Maros</strong>.
            </motion.p>

            {/* Trust Checklist Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1"
            >
              <div className="flex items-center gap-2 bg-neo-surface p-2.5 rounded-xl border-2 border-black shadow-neo-sm text-xs font-bold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-neo-emerald shrink-0 stroke-[2.5]" />
                <span>100% Legal TPA</span>
              </div>
              <div className="flex items-center gap-2 bg-neo-surface p-2.5 rounded-xl border-2 border-black shadow-neo-sm text-xs font-bold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-neo-yellow shrink-0 stroke-[2.5]" />
                <span>Tim Loader K3</span>
              </div>
              <div className="flex items-center gap-2 bg-neo-surface p-2.5 rounded-xl border-2 border-black shadow-neo-sm text-xs font-bold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-neo-cyan shrink-0 stroke-[2.5]" />
                <span>Invoice / Dokumen B2B</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-3"
            >
              <motion.a
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20mau%20konsultasi%20pengangkutan%20sampah%20dan%20pembersihan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black font-black text-base border-2 border-black shadow-neo hover:shadow-neo-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pesan Armada WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                whileTap={{ scale: 0.97 }}
                href="#armada"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neo-surface hover:bg-neo-card text-white font-black text-base border-2 border-black shadow-neo hover:shadow-neo-lg transition-all"
              >
                <Truck className="w-5 h-5 text-neo-yellow" />
                <span>Lihat Foto Armada</span>
              </motion.a>
            </motion.div>

            {/* Animated Counters Stat Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-black">
              <div className="bg-neo-surface p-3 rounded-2xl border-2 border-black shadow-neo-sm text-center">
                <div className="text-xl sm:text-2xl font-black text-neo-yellow">
                  <AnimatedCounter to={5000} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-300">Ritase Terangkut</div>
              </div>
              <div className="bg-neo-surface p-3 rounded-2xl border-2 border-black shadow-neo-sm text-center">
                <div className="text-xl sm:text-2xl font-black text-neo-emerald">
                  <AnimatedCounter to={100} suffix="%" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-300">TPA Berizin Resmi</div>
              </div>
              <div className="bg-neo-surface p-3 rounded-2xl border-2 border-black shadow-neo-sm text-center">
                <div className="text-xl sm:text-2xl font-black text-neo-cyan">
                  <AnimatedCounter to={24} suffix="/7" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-300">Siaga Pelayanan</div>
              </div>
            </div>

          </div>

          {/* Right Column: Neobrutalist Booking Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neo-surface border-2 border-black rounded-3xl p-6 sm:p-8 shadow-neo-xl relative"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-black">
                <div className="flex items-center gap-2.5">
                  <div className="bg-neo-card p-2 rounded-xl border-2 border-black shadow-neo-sm">
                    <img
                      src="/images/logo-emblem-clean.png"
                      alt="Logo Monogram"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-base">Konsultasi & Estimasi Cepat</h3>
                    <p className="text-[11px] text-neo-yellow font-black">Respon Cepat Tim Operasional</p>
                  </div>
                </div>
                <span className="w-3 h-3 rounded-full bg-neo-emerald border border-black animate-pulse" />
              </div>

              {/* Form */}
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-black text-slate-300 mb-1.5 uppercase tracking-wide">
                    Jenis Sampah / Muatan
                  </label>
                  <select
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neo-bg border-2 border-black text-white text-xs sm:text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
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
                  <label className="block text-xs font-black text-slate-300 mb-1.5 uppercase tracking-wide">
                    Lokasi Titik Muat
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-neo-yellow absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Contoh: Panakkukang / Somba Opu"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-neo-bg border-2 border-black text-white placeholder-slate-500 text-xs sm:text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                    />
                  </div>
                </div>

                {/* Fleet Thumbnails Preview */}
                <div className="pt-1">
                  <div className="text-[11px] font-black text-slate-400 uppercase mb-2">Armada Siaga Hari Ini:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-neo-bg p-2 rounded-xl border border-slate-700 flex items-center gap-2">
                      <img
                        src="/images/fleet/dump-truck-merah.jpg"
                        alt="Dump Truck"
                        className="w-10 h-10 object-cover rounded-lg border border-black"
                      />
                      <div>
                        <div className="text-[11px] font-black text-white">Dump Truck</div>
                        <div className="text-[9px] text-neo-yellow font-bold">Puing & Muatan Berat</div>
                      </div>
                    </div>

                    <div className="bg-neo-bg p-2 rounded-xl border border-slate-700 flex items-center gap-2">
                      <img
                        src="/images/fleet/pickup-l300-bak-tinggi.jpg"
                        alt="Pick Up L300"
                        className="w-10 h-10 object-cover rounded-lg border border-black"
                      />
                      <div>
                        <div className="text-[11px] font-black text-white">Pick Up L300</div>
                        <div className="text-[9px] text-neo-emerald font-bold">Ruko & Residensial</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neo-yellow hover:bg-neo-yellow-hover text-black font-black text-sm border-2 border-black shadow-neo hover:shadow-neo-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cek Estimasi Biaya & Jadwal via WA</span>
                  </motion.button>
                </div>

              </form>

            </motion.div>
          </div>

        </div>

        {/* Interactive Scroll-Down Trigger */}
        <div className="mt-14 flex justify-center">
          <a
            href="#tentang-kami"
            className="inline-flex flex-col items-center gap-2 text-xs font-black text-slate-400 hover:text-neo-yellow transition-colors group cursor-pointer"
          >
            <span>Scroll untuk Eksplor Profil & Bukti Lapangan</span>
            <div className="w-8 h-8 rounded-xl bg-neo-surface border-2 border-black shadow-neo-sm flex items-center justify-center group-hover:bg-neo-yellow group-hover:text-black group-hover:shadow-neo transition-all animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
