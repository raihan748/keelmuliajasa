import React from "react";
import { MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center relative overflow-hidden border-b-2 border-black">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-50 border-2 border-black rounded-3xl p-8 sm:p-14 shadow-neo-xl relative">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-neo-yellow text-black border-2 border-black shadow-neo-sm text-xs font-black uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
            <span>Layanan Cepat & Bergaransi Bersih</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
            Butuh Pengangkutan Sampah atau Puing Hari Ini?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-9 max-w-2xl mx-auto">
            Hubungi tim operasional <strong className="text-slate-900 font-black">CV. Keel Mulia Jasa</strong> sekarang juga untuk konsultasi gratis, cek estimasi tarif, dan pengiriman armada langsung ke lokasi Anda!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20butuh%20pengangkutan%20sampah%2Fpuing%20segera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black font-black text-base border-2 border-black shadow-neo hover:shadow-neo-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Pesan via WhatsApp Sekarang</span>
            </a>

            <a
              href="tel:+6282396193473"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-black text-base border-2 border-black shadow-neo hover:shadow-neo-lg hover:-translate-y-0.5 transition-all"
            >
              <PhoneCall className="w-5 h-5 text-amber-500" />
              <span>Hotline: 0823-9619-3473</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
