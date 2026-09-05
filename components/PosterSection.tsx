"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileImage,
  CheckCircle2,
  PhoneCall,
  Mail,
  Instagram,
  MessageCircle,
  ExternalLink,
  X,
  Maximize2,
} from "lucide-react";

export const PosterSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const posterServices = [
    "Pengangkutan sampah rumah tangga rutin",
    "Pembersihan sampah sisa renovasi (puing)",
    "Layanan kebersihan insidental (kerja bakti / event)",
  ];

  const posterTargets = [
    "Perumahan / Kos-Kosan",
    "Perusahaan / Pabrik",
    "Perkantoran & Ruko",
    "Sekolah & Institusi",
    "Layanan Sampah Lain-Lain",
  ];

  return (
    <section className="py-20 sm:py-28 bg-transparent border-b border-white/20 relative overflow-hidden" id="poster-resmi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 border border-white/80 shadow-soft-sm text-xs font-bold">
            <FileImage className="w-3.5 h-3.5 text-blue-600" />
            <span>Informasi & Brosur Layanan</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-sm tracking-tight mt-3 mb-4">
            Jasa Angkut Sampah Perumahan & Komersial
          </h2>
          <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">
            Solusi praktis dan profesional untuk masalah sampah di rumah, kantor, sekolah, dan pabrik di area Makassar, Gowa, dan Maros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Brosur Image Frame with Zoom Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group cursor-pointer" onClick={() => setModalOpen(true)}>
              
              <div className="bg-slate-50 p-3 rounded-3xl border border-slate-200/80 shadow-soft-md group-hover:shadow-soft-xl group-hover:-translate-y-1 transition-all duration-300">
                <img
                  src="/images/poster-keelmuliajasa.png"
                  alt="Brosur Resmi Layanan CV. Keel Mulia Jasa"
                  className="rounded-2xl w-full max-w-sm h-auto object-cover border border-slate-100"
                />
              </div>

              {/* Hover Badge */}
              <div className="absolute inset-0 rounded-3xl bg-slate-900/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <div className="bg-white text-slate-900 px-4 py-2 rounded-full font-semibold text-xs shadow-soft-lg flex items-center gap-2">
                  <Maximize2 className="w-3.5 h-3.5 text-brand-600" />
                  <span>Klik untuk Perbesar Brosur</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right: Content Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-soft-sm text-slate-900">
              
              <div className="flex items-center gap-2.5 mb-3">
                <span className="bg-brand-50 text-brand-700 font-semibold text-xs px-3 py-1 rounded-full border border-brand-200/60">
                  Tentang Layanan Kami
                </span>
                <span className="text-xs text-slate-500 font-medium">Makassar • Gowa • Maros</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                Solusi Praktis Pengelolaan & Angkutan Sampah
              </h3>

              <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                <strong className="text-slate-900 font-semibold">CV. Keel Mulia Jasa</strong> hadir sebagai mitra terpercaya untuk mengatasi masalah tumpukan sampah perumahan, puing sisa pembongkaran gedung, hingga penataan lingkungan industri secara bertanggung jawab ke Tempat Pemrosesan Akhir (TPA).
              </p>

              {/* Services List */}
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase text-brand-700 mb-3 tracking-wider">
                  Cakupan Layanan:
                </div>
                <div className="space-y-2.5">
                  {posterServices.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Clients */}
              <div className="mb-8 pt-5 border-t border-slate-200/80">
                <div className="text-xs font-semibold uppercase text-slate-500 mb-3 tracking-wider">
                  Segmen Pengguna:
                </div>
                <div className="flex flex-wrap gap-2">
                  {posterTargets.map((tgt, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white text-slate-700 text-xs font-medium px-3.5 py-1.5 rounded-full border border-slate-200 shadow-soft-xs"
                    >
                      {tgt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Contact Badges */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20konsultasi%20layanan%20angkutan%20sampah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-full font-semibold text-xs flex items-center justify-center gap-2 shadow-soft-sm hover:shadow-glow-brand transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>0823-9619-3473</span>
                </a>

                <a
                  href="https://instagram.com/cv.keelmuliajasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-slate-800 p-3 rounded-full border border-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-soft-xs"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@cv.keelmuliajasa</span>
                </a>

                <a
                  href="mailto:cvkeel.muliajasa@gmail.com"
                  className="bg-white hover:bg-slate-100 text-slate-800 p-3 rounded-full border border-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-soft-xs truncate"
                >
                  <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                  <span className="truncate">Email Resmi</span>
                </a>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md p-4 flex items-center justify-center"
            onClick={() => setModalOpen(false)}
          >
            <div className="relative max-w-lg w-full bg-white p-4 rounded-3xl shadow-soft-xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-all cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src="/images/poster-keelmuliajasa.png"
                alt="Brosur Resmi Layanan CV. Keel Mulia Jasa"
                className="w-full h-auto rounded-2xl border border-slate-100 mt-6"
              />

              <div className="mt-4 flex items-center justify-between gap-3">
                <a
                  href="/images/poster-keelmuliajasa.png"
                  download="Brosur-CV-Keel-Mulia-Jasa.png"
                  className="flex-1 text-center bg-slate-100 text-slate-800 font-semibold text-xs py-2.5 rounded-full hover:bg-slate-200 transition-all"
                >
                  Unduh Brosur Layanan
                </a>
                <a
                  href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20mau%20order%20layanan%20angkutan%20sampah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-brand-600 text-white font-semibold text-xs py-2.5 rounded-full hover:bg-brand-700 transition-all shadow-soft-sm"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

