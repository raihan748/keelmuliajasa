import React from "react";
import { MessageCircle, Clock, Mail, MapPin, ShieldCheck, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 pt-16 pb-12 text-sm border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b-2 border-black">
          
          {/* Col 1: Brand Info & Legalitas */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="bg-white p-2 rounded-xl border-2 border-black shadow-neo-sm">
                <img
                  src="/images/logo-clean.png"
                  alt="Logo CV. Keel Mulia Jasa"
                  className="h-11 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-5">
              Penyedia jasa angkutan sampah rumah tangga, komersial, puing renovasi bangunan, dan kebersihan insidental terpercaya di wilayah Makassar, Gowa, dan Maros.
            </p>

            <div className="flex items-center gap-2 text-black font-black text-xs bg-neo-yellow p-3 rounded-xl border-2 border-black shadow-neo-sm">
              <ShieldCheck className="w-4.5 h-4.5 shrink-0 stroke-[2.5]" />
              <span>Badan Hukum CV Resmi & Berpengalaman</span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-4 border-b-2 border-black pb-1 inline-block">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold text-slate-700">
              <li><a href="#layanan" className="hover:text-black hover:underline transition-colors">Sampah Rumah Tangga Rutin</a></li>
              <li><a href="#layanan" className="hover:text-black hover:underline transition-colors">Sampah Sisa Renovasi (Puing)</a></li>
              <li><a href="#layanan" className="hover:text-black hover:underline transition-colors">Layanan Kebersihan Insidental</a></li>
              <li><a href="#layanan" className="hover:text-black hover:underline transition-colors">Sampah Perusahaan & Pabrik</a></li>
              <li><a href="#layanan" className="hover:text-black hover:underline transition-colors">Sampah Perkantoran & Sekolah</a></li>
              <li><a href="#layanan" className="hover:text-black hover:underline transition-colors">Penebangan & Angkut Pohon</a></li>
              <li><a href="#layanan" className="hover:text-black hover:underline transition-colors">Sewa Dump Truck + Tim Loader</a></li>
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-4 border-b-2 border-black pb-1 inline-block">
              Wilayah Operasional
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold text-slate-700">
              <li><a href="#area-layanan" className="hover:text-black hover:underline transition-colors">Kota Makassar</a></li>
              <li><a href="#area-layanan" className="hover:text-black hover:underline transition-colors">Kabupaten Gowa</a></li>
              <li><a href="#area-layanan" className="hover:text-black hover:underline transition-colors">Kabupaten Maros</a></li>
              <li><a href="#area-layanan" className="hover:text-black hover:underline transition-colors">Kawasan Industri KIMA</a></li>
              <li><a href="#area-layanan" className="hover:text-black hover:underline transition-colors">Sulawesi Selatan</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact Info directly from Poster */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-4 border-b-2 border-black pb-1 inline-block">
              Kontak Resmi
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-900 font-black">WhatsApp / Hotline:</div>
                  <a href="https://wa.me/6282396193473" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 font-extrabold text-slate-900">
                    0823-9619-3473
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-900 font-black">Instagram:</div>
                  <a href="https://instagram.com/cv.keelmuliajasa" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 font-extrabold text-slate-900">
                    @cv.keelmuliajasa
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-900 font-black">Email Resmi:</div>
                  <a href="mailto:cvkeel.muliajasa@gmail.com" className="hover:text-blue-700 font-bold text-slate-800">
                    cvkeel.muliajasa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-900 font-black">Jam Operasional:</div>
                  <div className="text-slate-700 font-medium">Senin – Minggu (24 Jam Siaga)</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-bold">
          <p>&copy; 2026 CV. Keel Mulia Jasa. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="text-slate-900 font-black">Makassar • Gowa • Maros</p>
        </div>

      </div>
    </footer>
  );
};
