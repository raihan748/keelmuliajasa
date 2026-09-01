import React from "react";
import { MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-transparent text-center relative overflow-hidden border-b border-white/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal direction="zoom">
          <div className="bg-white border border-white/80 rounded-3xl p-8 sm:p-14 shadow-soft-md relative">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 border border-blue-200/60 shadow-soft-xs text-xs font-bold mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Layanan Cepat & Bergaransi Bersih</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-5 leading-tight">
              Butuh Pengangkutan Sampah atau Puing Hari Ini?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-9 max-w-2xl mx-auto">
              Hubungi tim operasional <strong className="text-slate-900 font-bold">CV. Keel Mulia Jasa</strong> sekarang untuk konsultasi gratis, memperoleh estimasi tarif yang transparan, dan pengiriman armada langsung ke lokasi Anda.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20membutuhkan%20layanan%20pengangkutan%20sampah%20dan%20puing%20segera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm sm:text-base shadow-soft-sm hover:shadow-glow-brand transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pesan via WhatsApp Sekarang</span>
              </a>

              <a
                href="tel:+6282396193473"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 shadow-soft-xs hover:shadow-soft-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-brand-600" />
                <span>Hotline: 0823-9619-3473</span>
              </a>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

