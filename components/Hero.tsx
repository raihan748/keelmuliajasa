"use client";

import React, { useState } from "react";
import { Star, MessageCircle, ShieldCheck, CheckCircle2, Calendar } from "lucide-react";

export const Hero: React.FC = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("Deep Cleaning");
  const [area, setArea] = useState("Jakarta Selatan");

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customerName = name.trim() || "Pelanggan";
    const msg = `Halo CleanUp IND, saya *${customerName}* ingin memesan layanan home cleaning:\n\n` +
      `🧹 *Layanan:* ${service}\n` +
      `📍 *Wilayah:* ${area}\n\n` +
      `Mohon info ketersediaan jadwal dan estimasi biayanya. Terima kasih!`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-green-soft/40 to-white pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-brand-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-light text-brand-green-darker border border-brand-green/30 text-xs sm:text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Jasa Home Cleaning No. 1 di Jabodetabek</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark leading-[1.15] tracking-tight mb-6">
              Bersih-bersih Rumah Lebih{" "}
              <span className="text-brand-green-dark relative inline-block">
                Mudah & Praktis
                <span className="absolute left-0 bottom-1.5 w-full h-3 bg-brand-green-light -z-10 rounded"></span>
              </span>{" "}
              bersama CleanUp IND
            </h1>

            <p className="text-base sm:text-lg text-brand-dark-muted leading-relaxed mb-8 max-w-xl">
              Solusi pembersihan menyeluruh untuk rumah, apartemen, kantor, dan ruko di seluruh Jabodetabek. Dikerjakan oleh tenaga terlatih, chemical ramah anak, dan bergaransi bersih maksimal.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="https://wa.me/6281234567890?text=Halo%20CleanUp%20IND%2C%20saya%20ingin%20pesan%20layanan%20home%20cleaning%20sekarang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-extrabold text-base shadow-brand-green transition-all hover:-translate-y-0.5 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white hover:bg-brand-bg-subtle text-brand-dark font-bold text-base border border-brand-border hover:border-brand-gray transition-all shadow-subtle"
              >
                Lihat Daftar Layanan
              </a>
            </div>

            {/* Hero Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/8">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-dark">10.000+</div>
                <div className="text-xs sm:text-sm font-semibold text-brand-gray">Rumah & Unit Bersih</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-dark">4.9 / 5.0</div>
                <div className="text-xs sm:text-sm font-semibold text-brand-gray">Rating Kepuasan</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-dark">100%</div>
                <div className="text-xs sm:text-sm font-semibold text-brand-gray">Crew Terverifikasi</div>
              </div>
            </div>
          </div>

          {/* Right Hero: Quick Booking Box with floating badges */}
          <div className="lg:col-span-5 relative">
            {/* Floating Top Badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-white px-3.5 py-2 rounded-full shadow-card border border-brand-border flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-dark animate-float">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
              <span>100% Bergaransi Bersih</span>
            </div>

            {/* Booking Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-elevated border border-brand-border relative z-10">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-border-light">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-green" />
                  <h3 className="font-extrabold text-lg text-brand-dark">Booking Kilat via WhatsApp</h3>
                </div>
                <span className="text-xs font-bold bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-full border border-cyan-200">
                  Respon &lt; 5 Menit
                </span>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-4">
                <div>
                  <label htmlFor="heroName" className="block text-xs font-bold text-brand-dark-muted mb-1.5">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    id="heroName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Ibu Rina / Bpk. Budi"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-gray-50/50 text-brand-dark text-sm focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="heroService" className="block text-xs font-bold text-brand-dark-muted mb-1.5">
                    Pilih Layanan Utama
                  </label>
                  <select
                    id="heroService"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-gray-50/50 text-brand-dark text-sm focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all outline-none"
                  >
                    <option value="Deep Cleaning">Deep Cleaning (Detail Menyeluruh)</option>
                    <option value="General Cleaning">General Cleaning (Harian/Rutin)</option>
                    <option value="Exclusive Cleaning VIP">Exclusive Cleaning (VIP Premium)</option>
                    <option value="Hydrovacuum Tungau">Hydrovacuum Tungau (Kasur/Sofa)</option>
                    <option value="Bathroom Cleaning">Bathroom Cleaning (Kerak Kamar Mandi)</option>
                    <option value="Subscription Packages">Paket Berlangganan Hemat</option>
                    <option value="Water Tank Cleaning">Cuci Toren & Tangki Air</option>
                    <option value="Grease Trap Cleaning">Grease Trap Cleaning</option>
                    <option value="Event Support Cleaning">Event Support Cleaning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="heroArea" className="block text-xs font-bold text-brand-dark-muted mb-1.5">
                    Wilayah di Jabodetabek
                  </label>
                  <select
                    id="heroArea"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-gray-50/50 text-brand-dark text-sm focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all outline-none"
                  >
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Jakarta Barat">Jakarta Barat</option>
                    <option value="Jakarta Timur">Jakarta Timur</option>
                    <option value="Jakarta Utara">Jakarta Utara</option>
                    <option value="Tangerang Selatan (BSD/Bintaro/Serpong)">Tangerang Selatan (BSD/Bintaro/Serpong)</option>
                    <option value="Kota / Kab. Tangerang">Kota / Kab. Tangerang</option>
                    <option value="Depok">Depok</option>
                    <option value="Bekasi">Bekasi</option>
                    <option value="Bogor">Bogor</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-wa hover:bg-brand-wa-dark text-white font-extrabold text-sm shadow-brand-wa transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Hubungkan ke Admin WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 bg-white px-3.5 py-2 rounded-full shadow-card border border-brand-border flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-dark animate-float [animation-delay:1.5s]">
              <CheckCircle2 className="w-5 h-5 text-brand-green" />
              <span>Chemical Ramah Anak & Pet</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
