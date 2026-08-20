import React from "react";
import { Truck, PhoneCall, ShieldCheck } from "lucide-react";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-neo-surface text-slate-200 text-xs sm:text-sm py-2.5 px-4 font-bold border-b-2 border-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-neo-yellow text-black px-2.5 py-0.5 rounded-md text-[11px] font-black border-2 border-black shadow-neo-sm uppercase tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
            Berizin Resmi TPA
          </span>
          <span className="text-slate-300 font-semibold">
            CV. Keel Mulia Jasa — Pengangkutan Sampah, Puing & Kebersihan Terpadu
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="text-slate-400 hidden md:inline-flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-neo-emerald" />
            Armada Siaga Setiap Hari
          </span>
          <a
            href="https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20konsultasi%20layanan%20angkutan%20sampah%2Fpuing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neo-card hover:bg-neo-card2 text-neo-yellow px-3 py-1 rounded-md border-2 border-black shadow-neo-sm font-black inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>WA: +62 812-3456-7890</span>
          </a>
        </div>
      </div>
    </div>
  );
};
