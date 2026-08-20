import React from "react";
import { ShieldCheck, Target, Award, Users, CheckCircle } from "lucide-react";

export const AboutCompany: React.FC = () => {
  const highlights = [
    "Perusahaan berbadan hukum resmi (CV. Keel Mulia Jasa)",
    "Memiliki izin resmi pembuangan langsung ke Tempat Pembuangan Akhir (TPA)",
    "Dukungan armada dump truck berbagai ukuran dalam kondisi prima",
    "Didukung tenaga kerja loader berpengalaman dengan perlengkapan keselamatan kerja (K3)",
    "Sistem kerja fleksibel: panggilan insidentil maupun kontrak kerja sama jangka panjang",
    "Faktur resmi, NPWP, dan invoice lengkap untuk pertanggungjawaban instansi/perusahaan",
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Official Logo Card & Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Background gradient card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-700">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
                
                {/* Official Logo Banner */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 mb-6 flex items-center justify-center">
                  <img
                    src="/images/logo-clean.png"
                    alt="Logo CV. Keel Mulia Jasa"
                    className="max-h-24 w-auto object-contain"
                  />
                </div>

                <h3 className="text-xl font-black mb-2 text-white">CV. Keel Mulia Jasa</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Perusahaan spesialis logistik kebersihan, pengangkutan sampah residensial/komersial, dan pengelolaan sisa material konstruksi terpercaya yang berkomitmen menjaga lingkungan tetap bersih, higienis, dan tertata rapi.
                </p>

                <div className="grid grid-cols-2 gap-3.5 pt-5 border-t border-white/15">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="text-[11px] text-slate-400 mb-0.5">Spesialisasi</div>
                    <div className="text-xs font-bold text-amber-400">Waste Logistics</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="text-[11px] text-slate-400 mb-0.5">Legalitas</div>
                    <div className="text-xs font-bold text-emerald-400">Resmi & Legal TPA</div>
                  </div>
                </div>
              </div>

              {/* Floating Award Pill */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Partner Terpercaya</div>
                  <div className="text-[11px] text-slate-500">Ratusan Klien Korporat & Residensial</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Company Story, Vision, Mission */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Profil & Legalitas Perusahaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
              Solusi Pengelolaan & Pengangkutan Sampah yang Profesional dan Bertanggung Jawab
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>CV. Keel Mulia Jasa</strong> hadir untuk menjawab kebutuhan masyarakat, kontraktor proyek, dan pelaku usaha akan jasa pengangkutan sampah yang cepat, transparan, dan taat regulasi. Kami mengoperasikan armada dump truck terawat dengan akses pembuangan langsung ke TPA resmi pemerintah.
            </p>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-sm mb-2">
                  <Target className="w-4 h-4" />
                  <span>Visi Kami</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menjadi perusahaan jasa angkutan sampah dan kebersihan lingkungan terdepan yang andal, inovatif, dan berkontribusi nyata pada kelestarian lingkungan.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-teal-700 font-extrabold text-sm mb-2">
                  <Users className="w-4 h-4" />
                  <span>Misi Kami</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Memberikan pelayanan pengangkutan sampah tepat waktu, memprioritaskan keselamatan kerja, serta memberikan kemudahan birokrasi & penawaran terbaik bagi setiap klien.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
