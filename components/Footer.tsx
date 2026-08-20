import React from "react";
import { MessageCircle, Phone, Clock, Mail, MapPin, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Legalitas */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <img
                src="/images/logo-clean.png"
                alt="Logo CV. Keel Mulia Jasa"
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
              Penyedia jasa angkutan sampah, puing bangunan, penebangan pohon, dan pembersihan lahan terpercaya dengan armada dump truck lengkap berizin resmi ke TPA.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800/40">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Badan Hukum CV Resmi & Terdaftar</span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Angkut Puing & Sisa Proyek</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Sampah Komersial Kantor & Resto</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Sampah Rumah Tangga & Perumahan</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Penebangan & Angkut Batang Pohon</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Pembersihan Lahan Kosong & Timbunan</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Sewa Dump Truck + Tim Loader</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Kontrak B2B Retribusi Sampah</a></li>
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4">
              Wilayah Operasional
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#area-layanan" className="hover:text-emerald-400 transition-colors">Kota Makassar</a></li>
              <li><a href="#area-layanan" className="hover:text-emerald-400 transition-colors">Kabupaten Gowa</a></li>
              <li><a href="#area-layanan" className="hover:text-emerald-400 transition-colors">Kabupaten Maros</a></li>
              <li><a href="#area-layanan" className="hover:text-emerald-400 transition-colors">Kawasan Industri KIMA</a></li>
              <li><a href="#area-layanan" className="hover:text-emerald-400 transition-colors">Sulawesi Selatan</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Operational Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4">
              Kontak & Operasional
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-bold">WhatsApp Hotline:</div>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-bold">Jam Operasional:</div>
                  <div>Senin – Minggu: 07.00 – 21.00 WITA</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">(Siaga Layanan Urgent 24 Jam)</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-bold">Email Kantor:</div>
                  <div>kontak@keelmuliajasa.com</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-bold">Pool Armada & Kantor:</div>
                  <div className="text-[11px] leading-relaxed">Makassar & Gowa, Sulawesi Selatan</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 CV. Keel Mulia Jasa. Hak Cipta Dilindungi Undang-Undang.</p>
          <p>Solusi Pengangkutan Sampah & Kebersihan Terpadu.</p>
        </div>

      </div>
    </footer>
  );
};
