"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Sparkles, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const InteractiveFleetVisualizer: React.FC = () => {
  const [volume, setVolume] = useState<number>(4);

  // Determine recommendation based on volume slider
  const getFleetRecommendation = (vol: number) => {
    if (vol <= 2) {
      return {
        fleet: "Pick Up L300 Bak Rangka Tinggi",
        image: "/images/fleet/pickup-l300-bak-tinggi.jpg",
        capacity: "1 – 2 m³ (1 Ritase Cepat)",
        badge: "Ekonomis & Gesit",
        badgeColor: "bg-neo-blue text-white",
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
        badgeColor: "bg-neo-yellow text-black",
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
        badgeColor: "bg-neo-red text-white",
        desc: `Paket multi-ritase untuk proyek konstruksi besar, pembongkaran gedung, dan pembersihan lahan luas.`,
        unitCount: `${rits}x Ritase Dump Truck`,
        estPrice: "Paket Borongan Khusus",
      };
    }
  };

  const rec = getFleetRecommendation(volume);

  return (
    <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-9 shadow-neo-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-black">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-neo-emerald text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm mb-1.5">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            Simulator Kebutuhan Armada
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Pilih Estimasi Volume Sampah / Puing Anda
          </h3>
        </div>

        <div className="bg-slate-50 px-4 py-2 rounded-2xl border-2 border-black shadow-neo-sm flex items-center gap-3">
          <span className="text-xs text-slate-500 font-bold">Volume Terpilih:</span>
          <span className="text-xl font-black text-amber-600 font-mono">{volume} m³</span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-black text-slate-700 mb-2">
          <span>1 m³ (Sedikit / Karungan)</span>
          <span>5 m³ (1 Truk Standar)</span>
          <span>10 m³ (Besar)</span>
          <span>15+ m³ (Proyek Luas)</span>
        </div>

        <input
          type="range"
          min="1"
          max="15"
          step="1"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
          className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500 border-2 border-black"
        />
      </div>

      {/* Dynamic Recommendation Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 p-6 rounded-2xl border-2 border-black shadow-neo">
        
        {/* Fleet Image Preview */}
        <div className="md:col-span-5 relative h-48 rounded-xl overflow-hidden border-2 border-black bg-slate-200">
          <img
            src={rec.image}
            alt={rec.fleet}
            className="w-full h-full object-cover"
          />
          <span className={`absolute top-2.5 right-2.5 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-md border border-black shadow-neo-sm ${rec.badgeColor}`}>
            {rec.badge}
          </span>
        </div>

        {/* Details & Live Specs */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="text-xs font-black text-amber-600 uppercase mb-1">Rekomendasi Armada Terbaik:</div>
            <h4 className="text-xl font-black text-slate-900 mb-2 leading-tight">{rec.fleet}</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">{rec.desc}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-bold text-slate-800">
              <div className="bg-white p-2.5 rounded-xl border border-slate-300 shadow-neo-sm">
                <span className="text-[10px] text-slate-500 block">Kebutuhan Unit:</span>
                <span className="font-black text-emerald-700">{rec.unitCount}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-300 shadow-neo-sm">
                <span className="text-[10px] text-slate-500 block">Estimasi Tarif:</span>
                <span className="font-black text-amber-600">{rec.estPrice}</span>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20sudah%20hitung%20estimasi%20volume%20sampah%20sekitar%20${volume}%20m3.%20Rekomendasi%20unit%3A%20${encodeURIComponent(rec.fleet)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neo-yellow hover:bg-neo-yellow-hover text-black font-black text-xs border-2 border-black shadow-neo-sm hover:shadow-neo transition-all"
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
