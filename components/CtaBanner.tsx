import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-tr from-brand-green via-emerald-500 to-teal-500 text-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
          Siap Nikmati Rumah Bersih, Rapi & Higienis Tanpa Repot?
        </h2>
        <p className="text-base sm:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
          Hubungi admin CleanUp IND sekarang juga untuk konsultasi gratis dan klaim promo diskon pembersihan rumah khusus wilayah Jabodetabek!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20CleanUp%20IND%2C%20saya%20mau%20booking%20jadwal%20pembersihan%20sekarang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-brand-green-darker font-black text-base shadow-2xl hover:bg-gray-50 transition-all hover:-translate-y-0.5 active:scale-98"
          >
            <MessageCircle className="w-5 h-5 fill-brand-green text-brand-green" />
            <span>Pesan via WhatsApp Sekarang</span>
          </a>

          <a
            href="tel:+6281234567890"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-brand-dark/90 hover:bg-black text-white font-extrabold text-base transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Hubungi Telepon</span>
          </a>
        </div>
      </div>
    </section>
  );
};
