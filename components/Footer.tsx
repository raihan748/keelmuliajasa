import React from "react";
import { Sparkles, MessageCircle, Clock, Mail, CheckCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2.5 text-2xl font-black text-white tracking-tight mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>CleanUp IND</span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-4">
              Penyedia jasa home cleaning, deep cleaning, sedot tungau, cuci toren, dan toilet cleaning profesional terpercaya nomor 1 di seluruh wilayah Jabodetabek.
            </p>
            <div className="flex items-center gap-1.5 text-brand-green font-bold text-xs">
              <CheckCircle className="w-4 h-4" />
              <span>Terdaftar & Terverifikasi Resmi</span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-base mb-4">Layanan Utama</h4>
            <ul className="space-y-2.5">
              <li><a href="#layanan" className="hover:text-brand-green transition-colors">Deep Cleaning</a></li>
              <li><a href="#layanan" className="hover:text-brand-green transition-colors">General Cleaning</a></li>
              <li><a href="#layanan" className="hover:text-brand-green transition-colors">Hydrovacuum Tungau</a></li>
              <li><a href="#layanan" className="hover:text-brand-green transition-colors">Bathroom Cleaning</a></li>
              <li><a href="#layanan" className="hover:text-brand-green transition-colors">Cuci Toren Air</a></li>
              <li><a href="#layanan" className="hover:text-brand-green transition-colors">Paket Berlangganan</a></li>
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-base mb-4">Wilayah Layanan</h4>
            <ul className="space-y-2.5">
              <li><a href="#area-layanan" className="hover:text-brand-green transition-colors">Jakarta Selatan & Pusat</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-green transition-colors">Jakarta Barat, Timur & Utara</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-green transition-colors">Tangerang & Tangsel (BSD)</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-green transition-colors">Kota & Kab. Bogor</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-green transition-colors">Depok & Cibubur</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-green transition-colors">Kota & Kab. Bekasi</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-base mb-4">Kontak & Operasional</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-bold">WhatsApp Admin:</div>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-bold">Jam Operasional:</div>
                  <div>Senin – Minggu: 07.00 – 21.00 WIB</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-bold">Email:</div>
                  <div>halo@cleanupindonesia.id</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 CleanUp IND (CleanUp Indonesia). Hak Cipta Dilindungi Undang-Undang.</p>
          <p>Dirancang untuk Kebersihan Terbaik Seluruh Jabodetabek.</p>
        </div>

      </div>
    </footer>
  );
};
