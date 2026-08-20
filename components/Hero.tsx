"use client";

import React, { useState } from "react";
import { Truck, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Building2 } from "lucide-react";

export const Hero: React.FC = () => {
  const [name, setName] = useState("");
  const [wasteType, setWasteType] = useState("Puing Sisa Bangunan & Proyek");
  const [fleetType, setFleetType] = useState("Dump Truck 4 Roda (Kapasitas Standar)");
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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-700">
      
      {/* Decorative Grid & Glow Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CV. KEEL MULIA JASA • Waste Management & Logistics</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.18] tracking-tight mb-6">
              Mitra Terpercaya <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Pengangkutan Sampah
              </span>{" "}
              & Kebersihan Lingkungan
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Solusi pengangkutan sampah residensial, limbah komersial kantor/ruko, puing proyek konstruksi, penebangan pohon, hingga pembersihan lahan kosong dengan armada dump truck berizin resmi dan tim loader cekatan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20mau%20konsultasi%20pengangkutan%20sampah%20dan%20pembersihan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-900/40 transition-all hover:-translate-y-0.5 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pesan Armada via WhatsApp</span>
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 transition-all backdrop-blur-xs"
              >
                <span>Lihat Layanan Kami</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Key Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/80 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">5.000+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400">Ritase Terangkut</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400">TPA Resmi & Legal</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">24/7</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400">Layanan Siaga</div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Booking Form */}
          <div className="lg:col-span-5 relative">
            
            <div className="bg-slate-800/95 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative z-10">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">Booking Armada Kilat</h3>
                    <p className="text-[11px] text-slate-400">Respon langsung dalam hitungan menit</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full">
                  Siap Kirim
                </span>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Nama Anda / Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Bpk. Hendra / PT. Sejahtera"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Jenis Sampah / Muatan
                  </label>
                  <select
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-600 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="Sampah Rumah Tangga / Perumahan">Sampah Rumah Tangga / Kompleks Perumahan</option>
                    <option value="Sampah Kantor / Ruko / Restoran">Sampah Kantor / Ruko / Restoran / Mall</option>
                    <option value="Puing Sisa Bangunan & Proyek">Puing Sisa Bangunan, Semen & Proyek Renovasi</option>
                    <option value="Penebangan Pohon & Ranting Kayu">Penebangan Pohon, Batang & Ranting Kayu</option>
                    <option value="Sampah Timbunan & Pembersihan Lahan">Sampah Timbunan & Pembersihan Lahan Kosong</option>
                    <option value="Sampah Pasca Acara / Event Besar">Sampah Pasca Acara / Event / Konser</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Kebutuhan Armada Angkut
                  </label>
                  <select
                    value={fleetType}
                    onChange={(e) => setFleetType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-600 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="Dump Truck 4 Roda (Kapasitas Standar)">Dump Truck 4 Roda (Akses Gang & Pemukiman)</option>
                    <option value="Dump Truck 6 Roda (Kapasitas Besar / Proyek)">Dump Truck 6 Roda (Volume Besar / Proyek)</option>
                    <option value="Pick Up Bak Terbuka / Gran Max">Pick Up Bak Terbuka (Muatan Ringan / Cepat)</option>
                    <option value="Paket Armada + Tim Loader Lengkap">Paket Lengkap: Armada + Tim Tenaga Loader</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Lokasi / Alamat Pengangkutan
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Contoh: Jl. Sultan Alauddin, Makassar / Gowa"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-950/40 transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Kirim Rincian ke WhatsApp Admin</span>
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Tanpa Biaya Tersembunyi
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-teal-400" />
                  Bisa Terbitkan Invoice Perusahaan
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
