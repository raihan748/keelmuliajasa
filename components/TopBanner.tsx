import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white text-xs sm:text-sm py-2 px-4 text-center font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-brand-green" />
          <span>
            <strong>Promo Spesial Jabodetabek:</strong> Dapatkan Diskon s/d{" "}
            <span className="text-brand-green font-bold">20%</span> untuk Pemesanan Pertama!
          </span>
        </span>
        <a
          href="https://wa.me/6281234567890?text=Halo%20CleanUp%20IND%2C%20saya%20mau%20klaim%20promo%20diskon%20pembersihan%20pertama%20untuk%20area%20Jabodetabek"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-cyan hover:text-white underline font-bold inline-flex items-center gap-1 transition-colors"
        >
          Klaim Promo via WhatsApp
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
