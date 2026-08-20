"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Building2, ChevronDown, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const [name, setName] = useState("");
  const [wasteType, setWasteType] = useState("Puing Sisa Bangunan & Proyek");
  const [fleetType, setFleetType] = useState("Dump Truck Merah (Muatan Puing & Berat)");
  const [location, setLocation] = useState("");

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customer = name.trim() || "Calon Klien";
    const loc = location.trim() || "Wilayah Operasional";

    const msg = `Halo *CV. Keel Mulia Jasa*, saya *${customer}* ingin menanyakan / memesan armada angkutan sampah:\n\n` +
      `📦 *Jenis Sampah/Material:* ${wasteType}\n` +
      `🚛 *Kebutuhan Armada:* ${fleetType}\n` +
      `📍 *Lokasi Pengangkutan:* ${loc}\n\n` +
      `Mohon info estimasi biaya, ketersediaan jadwal, dan prosedur pengangkutannya. Terima kasih!`;

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-neo-bg bg-neo-grid text-white pt-12 pb-24 lg:pt-16 lg:pb-32 border-b-2 border-black">
      
      {/* Neo Accent Shapes in background */}
      <div className="absolute top-10 -left-20 w-80 h-80 bg-neo-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-neo-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            
            {/* Neobrutalism Sticker Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neo-yellow text-black text-xs sm:text-sm font-black border-2 border-black shadow-neo-sm mb-6 uppercase tracking-wider"
            >
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              <span>CV. KEEL MULIA JASA • OFFICIAL WASTE LOGISTICS</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.12] tracking-tight mb-6">
              Mitra Terpercaya <br className="hidden sm:inline" />
              <span className="bg-neo-emerald text-black px-2 py-0.5 rounded-lg inline-block border-2 border-black shadow-neo-sm mt-1 mb-1">
                Pengangkutan Sampah
              </span>{" "}
              & Puing Proyek
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8 max-w-xl">
              Solusi cepat, bersih, dan berizin resmi untuk pengangkutan sampah residensial, limbah komersial kantor/ruko/resto, puing konstruksi, hingga pembersihan lahan dengan armada dump truck dan pick-up terawat.
            </p>

            {/* Neo Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20mau%20konsultasi%20pengangkutan%20sampah%20dan%20pembersihan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black font-black text-base border-2 border-black shadow-neo hover:shadow-neo-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pesan Armada via WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#armada"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neo-card hover:bg-neo-card2 text-white font-black text-base border-2 border-black shadow-neo transition-all"
              >
                <span>Lihat Foto Armada</span>
                <ArrowRight className="w-4 h-4 text-neo-yellow" />
              </motion.a>
            </div>

            {/* Neobrutalism Fleet Sticker Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-4 rounded-2xl bg-neo-surface border-2 border-black shadow-neo max-w-lg flex items-center gap-4"
            >
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  src="/images/fleet/dump-truck-merah.jpg"
                  alt="Dump Truck CV Keel Mulia Jasa"
                  className="inline-block h-13 w-13 rounded-xl border-2 border-black object-cover shadow-neo-sm"
                />
                <img
                  src="/images/fleet/pickup-l300-bak-tinggi.jpg"
                  alt="Pick Up L300 CV Keel Mulia Jasa"
                  className="inline-block h-13 w-13 rounded-xl border-2 border-black object-cover shadow-neo-sm"
                />
                <img
                  src="/images/fleet/operasional-loading-sampah.jpg"
                  alt="Operasional CV Keel Mulia Jasa"
                  className="inline-block h-13 w-13 rounded-xl border-2 border-black object-cover shadow-neo-sm"
                />
              </div>
              <div className="text-xs">
                <div className="font-black text-neo-yellow flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Foto Asli Armada Lapangan
                </div>
                <div className="text-slate-300 font-semibold mt-0.5">Dump Truck & Pick Up Milik Sendiri</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Neobrutalist Quick Booking Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            
            <div className="bg-neo-surface border-2 border-black rounded-3xl p-6 sm:p-8 shadow-neo-xl relative z-10">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-black">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-neo-yellow text-black flex items-center justify-center border-2 border-black shadow-neo-sm">
                    <Truck className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-black text-base sm:text-lg text-white">Booking Armada Kilat</h3>
                    <p className="text-[11px] text-slate-400 font-semibold">Respon langsung dalam hitungan menit</p>
                  </div>
                </div>
                <span className="text-[10px] font-black bg-neo-emerald text-black border-2 border-black px-2.5 py-1 rounded-md shadow-neo-sm uppercase">
                  Siap Kirim
                </span>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-200 mb-1.5 uppercase tracking-wide">
                    Nama Anda / Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Bpk. Hendra / PT. Sejahtera"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neo-bg border-2 border-black text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-200 mb-1.5 uppercase tracking-wide">
                    Jenis Sampah / Muatan
                  </label>
                  <select
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neo-bg border-2 border-black text-white text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                  >
                    <option value="Puing Sisa Bangunan & Proyek">Puing Sisa Bangunan, Semen & Proyek Renovasi</option>
                    <option value="Sampah Komersial Restoran / Kafe / Ruko">Sampah Komersial Restoran / Kafe / Ruko / Kantor</option>
                    <option value="Sampah Rumah Tangga / Perumahan">Sampah Rumah Tangga / Kompleks Perumahan</option>
                    <option value="Penebangan Pohon & Ranting Kayu">Penebangan Pohon, Batang & Ranting Kayu</option>
                    <option value="Sampah Timbunan & Pembersihan Lahan">Sampah Timbunan & Pembersihan Lahan Kosong</option>
                    <option value="Sampah Pasca Acara / Event Besar">Sampah Pasca Acara / Event / Konser</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-200 mb-1.5 uppercase tracking-wide">
                    Pilihan Unit Armada
                  </label>
                  <select
                    value={fleetType}
                    onChange={(e) => setFleetType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neo-bg border-2 border-black text-white text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                  >
                    <option value="Dump Truck Merah (Muatan Puing & Berat)">Dump Truck Merah (Puing, Batu & Muatan Berat)</option>
                    <option value="Pick Up L300 Bak Rangka Tinggi">Pick Up L300 Bak Rangka Tinggi (Sampah Resto/Ruko/Dahan)</option>
                    <option value="Armada Pemukiman & Kompleks">Armada Pemukiman & Kompleks Perumahan</option>
                    <option value="Paket Armada + Tim Loader Lengkap">Paket Lengkap: Armada + Tenaga Loader</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-200 mb-1.5 uppercase tracking-wide">
                    Lokasi / Alamat Pengangkutan
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Contoh: Jl. Sultan Alauddin, Makassar / Gowa"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neo-bg border-2 border-black text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-neo-yellow hover:bg-neo-yellow-hover text-black font-black text-sm border-2 border-black shadow-neo hover:shadow-neo-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Kirim Rincian ke WhatsApp Admin</span>
                </motion.button>
              </form>

              <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-[11px] text-slate-300 font-bold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neo-emerald" />
                  Tanpa Biaya Tersembunyi
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-neo-cyan" />
                  Bisa Invoice Perusahaan
                </span>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Smooth Scroll-To-Action Cue */}
        <div className="mt-14 text-center">
          <a
            href="#tentang-kami"
            className="inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-neo-yellow transition-colors group cursor-pointer"
          >
            <span className="text-[11px] font-black tracking-widest uppercase bg-neo-surface px-3 py-1 rounded-md border-2 border-black shadow-neo-sm">
              Scroll untuk Profil & Layanan
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-8 rounded-full bg-neo-surface border-2 border-black shadow-neo-sm flex items-center justify-center group-hover:border-neo-yellow mt-1"
            >
              <ChevronDown className="w-4 h-4 text-neo-yellow stroke-[2.5]" />
            </motion.div>
          </a>
        </div>

      </div>
    </section>
  );
};
