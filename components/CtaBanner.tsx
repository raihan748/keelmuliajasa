import React from "react";
import { MessageCircle, PhoneCall, Truck, ShieldCheck } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white text-center relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Layanan Cepat & Bergaransi Bersih</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
          Butuh Pengangkutan Sampah atau Puing Hari Ini?
        </h2>
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-9 max-w-2xl mx-auto">
          Hubungi tim operasional <strong>CV. Keel Mulia Jasa</strong> sekarang juga untuk konsultasi gratis, cek estimasi tarif, dan pengiriman armada langsung ke lokasi Anda!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20butuh%20pengangkutan%20sampah%2Fpuing%20segera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-2xl shadow-emerald-950/60 transition-all hover:-translate-y-0.5 active:scale-98"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Pesan via WhatsApp Sekarang</span>
          </a>

          <a
            href="tel:+6281234567890"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all backdrop-blur-xs"
          >
            <PhoneCall className="w-5 h-5 text-emerald-400" />
            <span>Hubungi Hotline: 0812-3456-7890</span>
          </a>
        </div>

      </div>
    </section>
  );
};
