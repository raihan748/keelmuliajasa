import React from "react";
import { MessageCircle, Clock, Mail, MapPin, ShieldCheck, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neo-surface text-slate-400 pt-16 pb-12 text-sm border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b-2 border-black">
          
          {/* Col 1: Brand Info & Legalitas */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="bg-neo-card p-2 rounded-xl border-2 border-black shadow-neo-sm">
                <img
                  src="/images/logo-clean.png"
                  alt="Logo CV. Keel Mulia Jasa"
                  className="h-11 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-5">
              Penyedia jasa angkutan sampah rumah tangga, komersial, puing renovasi bangunan, dan kebersihan insidental terpercaya di wilayah Makassar, Gowa, dan Maros.
            </p>

            <div className="flex items-center gap-2 text-black font-black text-xs bg-neo-yellow p-3 rounded-xl border-2 border-black shadow-neo-sm">
              <ShieldCheck className="w-4.5 h-4.5 shrink-0 stroke-[2.5]" />
              <span>Badan Hukum CV Resmi & Terdaftar TPA</span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4 border-b-2 border-black pb-1 inline-block text-neo-yellow">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li><a href="#layanan" className="hover:text-neo-yellow transition-colors">Sampah Rumah Tangga Rutin</a></li>
              <li><a href="#layanan" className="hover:text-neo-yellow transition-colors">Sampah Sisa Renovasi (Puing)</a></li>
              <li><a href="#layanan" className="hover:text-neo-yellow transition-colors">Layanan Kebersihan Insidental</a></li>
              <li><a href="#layanan" className="hover:text-neo-yellow transition-colors">Sampah Perusahaan & Pabrik</a></li>
              <li><a href="#layanan" className="hover:text-neo-yellow transition-colors">Sampah Perkantoran & Sekolah</a></li>
              <li><a href="#layanan" className="hover:text-neo-yellow transition-colors">Penebangan & Angkut Pohon</a></li>
              <li><a href="#layanan" className="hover:text-neo-yellow transition-colors">Sewa Dump Truck + Tim Loader</a></li>
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4 border-b-2 border-black pb-1 inline-block text-neo-cyan">
              Wilayah Operasional
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li><a href="#area-layanan" className="hover:text-neo-cyan transition-colors">Kota Makassar</a></li>
              <li><a href="#area-layanan" className="hover:text-neo-cyan transition-colors">Kabupaten Gowa</a></li>
              <li><a href="#area-layanan" className="hover:text-neo-cyan transition-colors">Kabupaten Maros</a></li>
              <li><a href="#area-layanan" className="hover:text-neo-cyan transition-colors">Kawasan Industri KIMA</a></li>
              <li><a href="#area-layanan" className="hover:text-neo-cyan transition-colors">Sulawesi Selatan</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact Info directly from Poster */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4 border-b-2 border-black pb-1 inline-block text-neo-emerald">
              Kontak Resmi
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-neo-emerald shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-black">WhatsApp / Hotline:</div>
                  <a href="https://wa.me/6282396193473" target="_blank" rel="noopener noreferrer" className="hover:text-neo-yellow font-bold text-slate-200">
                    0823-9619-3473
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-neo-yellow shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-black">Instagram:</div>
                  <a href="https://instagram.com/cv.keelmuliajasa" target="_blank" rel="noopener noreferrer" className="hover:text-neo-yellow font-bold text-slate-200">
                    @cv.keelmuliajasa
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-neo-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-black">Email Resmi:</div>
                  <a href="mailto:cvkeel.muliajasa@gmail.com" className="hover:text-neo-yellow font-medium text-slate-300">
                    cvkeel.muliajasa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neo-yellow shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-black">Jam Operasional:</div>
                  <div className="text-slate-300 font-medium">Senin – Minggu (24 Jam Siaga)</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-bold">
          <p>&copy; 2026 CV. Keel Mulia Jasa. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="text-neo-yellow font-black">Makassar • Gowa • Maros</p>
        </div>

      </div>
    </footer>
  );
};
