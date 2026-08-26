import React from "react";
import { PhoneCall, Instagram, Sparkles, Clock } from "lucide-react";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-brand-500/20 text-brand-300 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border border-brand-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Siap Melayani 24/7
          </span>
          <span className="text-slate-200 font-medium">
            Jasa Angkutan Sampah, Puing & Kebersihan Lingkungan — Makassar, Gowa & Maros
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href="https://instagram.com/cv.keelmuliajasa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@cv.keelmuliajasa</span>
          </a>

          <a
            href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20konsultasi%20layanan%20angkutan%20sampah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Hotline: 0823-9619-3473</span>
          </a>
        </div>
      </div>
    </div>
  );
};

