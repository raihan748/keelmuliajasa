"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <section className="py-24 bg-neo-bg bg-neo-grid border-b-2 border-black overflow-hidden" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Official Logo Card & Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative">
              
              {/* Neobrutalist Main Card */}
              <div className="bg-neo-surface border-2 border-black rounded-3xl p-7 sm:p-9 text-white shadow-neo-xl relative">
                
                {/* Official Logo Display Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-neo-card p-4 rounded-2xl border-2 border-black mb-6 flex items-center justify-center shadow-neo-sm"
                >
                  <img
                    src="/images/logo-clean.png"
                    alt="Logo CV. Keel Mulia Jasa"
                    className="max-h-24 w-auto object-contain"
                  />
                </motion.div>

                <div className="inline-block bg-neo-yellow text-black font-black text-xs px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm uppercase mb-2">
                  Company Profile
                </div>
                <h3 className="text-2xl font-black mb-2 text-white">CV. Keel Mulia Jasa</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-6">
                  Perusahaan spesialis logistik kebersihan, pengangkutan sampah residensial/komersial, dan pengelolaan sisa material konstruksi terpercaya yang berkomitmen menjaga lingkungan tetap bersih, higienis, dan tertata rapi.
                </p>

                <div className="grid grid-cols-2 gap-3.5 pt-5 border-t-2 border-black">
                  <div className="bg-neo-card rounded-xl p-3.5 border-2 border-black shadow-neo-sm">
                    <div className="text-[11px] text-slate-400 font-bold mb-0.5">Spesialisasi</div>
                    <div className="text-xs font-black text-neo-yellow">Waste Logistics</div>
                  </div>
                  <div className="bg-neo-card rounded-xl p-3.5 border-2 border-black shadow-neo-sm">
                    <div className="text-[11px] text-slate-400 font-bold mb-0.5">Legalitas</div>
                    <div className="text-xs font-black text-neo-emerald">Resmi & Legal TPA</div>
                  </div>
                </div>
              </div>

              {/* Floating Neo Award Sticker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute -bottom-5 -right-3 sm:-right-5 bg-neo-yellow text-black border-2 border-black rounded-2xl p-4 shadow-neo flex items-center gap-3 max-w-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-black text-neo-yellow flex items-center justify-center shrink-0 border border-black">
                  <Award className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase">Partner Terpercaya</div>
                  <div className="text-[11px] font-bold text-slate-900">Ratusan Klien B2B & Rumah Tangga</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Company Story, Vision, Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-emerald text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
              Profil & Legalitas Perusahaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5 leading-tight">
              Solusi Pengelolaan & Pengangkutan Sampah yang Profesional dan Bertanggung Jawab
            </h2>
            <p className="text-base text-slate-300 font-medium leading-relaxed mb-6">
              <strong className="text-white font-black">CV. Keel Mulia Jasa</strong> hadir untuk menjawab kebutuhan masyarakat, kontraktor proyek, dan pelaku usaha akan jasa pengangkutan sampah yang cepat, transparan, dan taat regulasi. Kami mengoperasikan armada dump truck terawat dengan akses pembuangan langsung ke TPA resmi pemerintah.
            </p>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="flex items-start gap-2.5 bg-neo-surface p-3 rounded-xl border-2 border-black shadow-neo-sm"
                >
                  <CheckCircle className="w-5 h-5 text-neo-emerald shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neo-surface border-2 border-black rounded-2xl p-5 shadow-neo">
                <div className="flex items-center gap-2 text-neo-yellow font-black text-sm mb-2">
                  <Target className="w-4 h-4 stroke-[2.5]" />
                  <span className="uppercase">Visi Kami</span>
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Menjadi perusahaan jasa angkutan sampah dan kebersihan lingkungan terdepan yang andal, inovatif, dan berkontribusi nyata pada kelestarian lingkungan.
                </p>
              </div>

              <div className="bg-neo-surface border-2 border-black rounded-2xl p-5 shadow-neo">
                <div className="flex items-center gap-2 text-neo-cyan font-black text-sm mb-2">
                  <Users className="w-4 h-4 stroke-[2.5]" />
                  <span className="uppercase">Misi Kami</span>
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Memberikan pelayanan pengangkutan sampah tepat waktu, memprioritaskan keselamatan kerja, serta memberikan kemudahan birokrasi & penawaran terbaik bagi setiap klien.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
