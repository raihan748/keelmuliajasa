"use client";

import React, { useState } from "react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export const InteractiveFleetVisualizer: React.FC = () => {
  const [volume, setVolume] = useState<number>(4);

  const presets = [1, 2, 4, 6, 10, 15];

  // Determine recommendation based on volume slider
  const getFleetRecommendation = (vol: number) => {
    if (vol <= 2) {
      return {
        fleet: "Pick Up L300 Bak Rangka Tinggi",
        image: "/images/fleet/pickup-l300-bak-tinggi.jpg",
        capacity: "1 – 2 m³ (1 Ritase Cepat)",
        badge: "Ekonomis & Gesit",
        badgeColor: "bg-sky-50 text-sky-700 border border-sky-200/60",
        desc: "Sangat ideal untuk sampah perumahan, dahan ranting taman, dan sampah ruko/restoran harian.",
        unitCount: "1 Unit Pick Up",
        estPrice: "Mulai Rp 150.000 / rit",
      };
    } else if (vol <= 6) {
      return {
        fleet: "Dump Truck Merah (Medium Load)",
        image: "/images/fleet/dump-truck-merah.jpg",
        capacity: "4 – 6 m³ (Kapasitas Standar)",
        badge: "Paling Direkomendasikan",
        badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
        desc: "Pilihan terbaik untuk sisa puing renovasi rumah, cor beton, sisa semen, batu bata, dan timbunan sampah.",
        unitCount: "1 Unit Dump Truck",
        estPrice: "Mulai Rp 350.000 / rit",
      };
    } else {
      const rits = Math.ceil(vol / 5);
      return {
        fleet: "Multi-Ritase Dump Truck (Heavy Project)",
        image: "/images/fleet/dump-truck-merah.jpg",
        capacity: `${vol} m³ (Estimasi ${rits} Ritase)`,
        badge: "Paket Borongan Proyek",
        badgeColor: "bg-red-50 text-red-700 border border-red-200/60",
        desc: `Paket multi-ritase untuk proyek konstruksi besar, pembongkaran gedung, dan pembersihan lahan luas.`,
        unitCount: `${rits}x Ritase Dump Truck`,
        estPrice: "Paket Borongan Khusus",
      };
    }
  };

  const rec = getFleetRecommendation(volume);

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-soft-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full border border-brand-200/60 shadow-soft-xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Simulator Kebutuhan Armada</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            Estimasi Volume Sampah / Puing Anda
          </h3>
        </div>

        <div className="bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200/80 shadow-soft-xs flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">Volume:</span>
          <span className="text-xl font-bold text-brand-600 font-mono">{volume} m³</span>
        </div>
      </div>

      {/* Quick Mobile Preset Chips */}
      <div className="mb-4">
        <div className="text-xs font-medium text-slate-500 mb-2">Pilih Cepat Volume:</div>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setVolume(p)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                volume === p
                  ? "bg-brand-600 text-white shadow-soft-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              {p} m³
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="mb-6 sm:mb-8">
        <input
          type="range"
          min="1"
          max="15"
          step="1"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
          className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600 border border-slate-200 touch-pan-x"
        />
      </div>

      {/* Dynamic Recommendation Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50/70 p-5 sm:p-7 rounded-3xl border border-slate-200/80 shadow-soft-xs">
        
        {/* Fleet Image Preview */}
        <div className="md:col-span-5 relative h-48 rounded-2xl overflow-hidden border border-slate-100 bg-slate-100">
          <img
            src={rec.image}
            alt={rec.fleet}
            className="w-full h-full object-cover"
          />
          <span className={`absolute top-3 right-3 text-[11px] font-semibold px-3 py-1 rounded-full shadow-soft-xs ${rec.badgeColor}`}>
            {rec.badge}
          </span>
        </div>

        {/* Details & Live Specs */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-brand-700 uppercase mb-1">Rekomendasi Armada Terbaik:</div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight">{rec.fleet}</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">{rec.desc}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-soft-xs">
                <span className="text-[11px] text-slate-500 block">Kebutuhan Unit:</span>
                <span className="font-bold text-brand-700 text-sm mt-0.5 block">{rec.unitCount}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-soft-xs">
                <span className="text-[11px] text-slate-500 block">Estimasi Tarif:</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{rec.estPrice}</span>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20sudah%20hitung%20estimasi%20volume%20sampah%20sekitar%20${volume}%20m3.%20Rekomendasi%20unit%3A%20${encodeURIComponent(rec.fleet)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm shadow-soft-sm hover:shadow-glow-brand transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Booking Unit Sesuai Simulasi Ini</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

