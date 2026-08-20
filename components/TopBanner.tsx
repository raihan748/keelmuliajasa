import React from "react";
import { Truck, PhoneCall, ShieldCheck } from "lucide-react";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white text-xs sm:text-sm py-2.5 px-4 font-medium border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[11px] font-bold border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            Berizin Resmi & Legal TPA
          </span>
          <span className="text-slate-300">
            CV. Keel Mulia Jasa — Jasa Angkutan Sampah, Puing Bangunan & Kebersihan Terpadu
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="text-slate-400 hidden md:inline-flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-emerald-400" />
            Armada Siaga Setiap Hari
          </span>
          <a
            href="https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20konsultasi%20layanan%20angkutan%20sampah%2Fpuing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Hotline / WA: +62 812-3456-7890</span>
          </a>
        </div>
      </div>
    </div>
  );
};
