import React from "react";
import { MessageCircle, Clock, Mail, MapPin, ShieldCheck, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Legalitas */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="bg-white/10 p-2 rounded-2xl border border-white/10">
                <img
                  src="/images/logo-clean.png"
                  alt="Logo CV. Keel Mulia Jasa"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed mb-6">
              Penyedia jasa angkutan sampah rumah tangga, komersial kantor/ruko, puing renovasi bangunan, dan kebersihan insidental terpercaya di wilayah metropolitan Sulawesi Selatan.
            </p>

            <div className="flex items-center gap-2.5 text-white text-xs bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Badan Hukum CV Resmi & Berizin TPA</span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#layanan" className="hover:text-brand-400 transition-colors">Sampah Rumah Tangga Rutin</a></li>
              <li><a href="#layanan" className="hover:text-brand-400 transition-colors">Sampah Sisa Renovasi (Puing)</a></li>
              <li><a href="#layanan" className="hover:text-brand-400 transition-colors">Layanan Kebersihan Insidental</a></li>
              <li><a href="#layanan" className="hover:text-brand-400 transition-colors">Sampah Perusahaan & Pabrik</a></li>
              <li><a href="#layanan" className="hover:text-brand-400 transition-colors">Sampah Perkantoran & Sekolah</a></li>
              <li><a href="#layanan" className="hover:text-brand-400 transition-colors">Penebangan & Angkut Pohon</a></li>
              <li><a href="#layanan" className="hover:text-brand-400 transition-colors">Sewa Dump Truck + Tim Loader</a></li>
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Wilayah Operasional
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#area-layanan" className="hover:text-brand-400 transition-colors">Kota Makassar</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-400 transition-colors">Kabupaten Gowa</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-400 transition-colors">Kabupaten Maros</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-400 transition-colors">Kawasan Industri KIMA</a></li>
              <li><a href="#area-layanan" className="hover:text-brand-400 transition-colors">Sulawesi Selatan</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact Info directly from Poster */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Kontak Resmi
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-300 font-semibold">WhatsApp / Hotline:</div>
                  <a href="https://wa.me/6282396193473" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 font-bold text-white">
                    0823-9619-3473
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-300 font-semibold">Instagram:</div>
                  <a href="https://instagram.com/cv.keelmuliajasa" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 font-bold text-white">
                    @cv.keelmuliajasa
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-300 font-semibold">Email Resmi:</div>
                  <a href="mailto:cvkeel.muliajasa@gmail.com" className="hover:text-sky-400 font-medium text-slate-300">
                    cvkeel.muliajasa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-300 font-semibold">Jam Operasional:</div>
                  <div className="text-slate-400">Senin – Minggu (24 Jam Siaga)</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 CV. Keel Mulia Jasa. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="text-slate-400 font-medium">Makassar • Gowa • Maros • Sulawesi Selatan</p>
        </div>

      </div>
    </footer>
  );
};

