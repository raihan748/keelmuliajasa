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
    "Layanan kebersihan insidental (kerja bakti)",
  ];

  const posterTargets = [
    "PERUMAHAN / KOS-KOSAN",
    "PERUSAHAAN / PABRIK",
    "PERKANTORAN",
    "SEKOLAH",
    "ORDERAN SAMPAH LAIN-LAIN",
  ];

  return (
    <section className="py-24 bg-neo-surface border-b-2 border-black relative overflow-hidden" id="poster-resmi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <FileImage className="w-3.5 h-3.5 stroke-[2.5]" />
            Brosur & Publikasi Resmi
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Poster Layanan Resmi CV. Keel Mulia Jasa
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Solusi praktis dan profesional untuk masalah sampah di rumah, kantor, sekolah, dan pabrik di area Makassar, Gowa, dan Maros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Poster Image Frame with Zoom Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group cursor-pointer" onClick={() => setModalOpen(true)}>
              
              <div className="bg-neo-card p-3 rounded-3xl border-2 border-black shadow-neo-xl group-hover:shadow-neo-yellow group-hover:-translate-y-1 transition-all duration-300">
                <img
                  src="/images/poster-keelmuliajasa.png"
                  alt="Poster Resmi CV. Keel Mulia Jasa"
                  className="rounded-2xl w-full max-w-sm h-auto object-cover border-2 border-black"
                />
              </div>

              {/* Hover Badge */}
              <div className="absolute inset-0 rounded-3xl bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <div className="bg-neo-yellow text-black px-4 py-2 rounded-xl font-black text-xs border-2 border-black shadow-neo flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" />
                  <span>Klik untuk Perbesar Poster</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right: Content Breakdown directly from Poster */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            
            <div className="bg-neo-card border-2 border-black rounded-3xl p-7 sm:p-9 shadow-neo-lg text-white">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-neo-emerald text-black font-black text-xs px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm uppercase">
                  Tentang Kami
                </span>
                <span className="text-xs text-slate-400 font-bold">Makassar • Gowa • Maros</span>
              </div>

              <h3 className="text-2xl font-black mb-3 text-white">
                Solusi Praktis Masalah Sampah Anda
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-6">
                <strong>Keel MuliaJasa</strong> adalah solusi praktis untuk masalah sampah di rumah Anda. Kami adalah perusahaan jasa pengangkutan sampah profesional yang melayani area <strong>Makassar, Gowa, dan Maros</strong>.
              </p>

              {/* Services List from Poster */}
              <div className="mb-6">
                <div className="text-xs font-black uppercase text-neo-yellow mb-2.5 tracking-wider">
                  Layanan Kami Meliputi:
                </div>
                <div className="space-y-2">
                  {posterServices.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-neo-emerald shrink-0 stroke-[2.5]" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Clients from Poster */}
              <div className="mb-8 pt-5 border-t-2 border-black">
                <div className="text-xs font-black uppercase text-neo-cyan mb-3 tracking-wider">
                  Kami Melayani:
                </div>
                <div className="flex flex-wrap gap-2">
                  {posterTargets.map((tgt, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-neo-surface text-slate-200 text-xs font-black px-3 py-1.5 rounded-lg border-2 border-black shadow-neo-sm"
                    >
                      ☑ {tgt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Contact Badges from Poster */}
              <div className="pt-6 border-t-2 border-black grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20melihat%20poster%20layanan%20angkutan%20sampah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neo-yellow hover:bg-neo-yellow-hover text-black p-3 rounded-xl border-2 border-black shadow-neo-sm font-black text-xs flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>0823-9619-3473</span>
                </a>

                <a
                  href="https://instagram.com/cv.keelmuliajasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neo-surface hover:bg-neo-card2 text-slate-200 p-3 rounded-xl border-2 border-black shadow-neo-sm font-black text-xs flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5"
                >
                  <Instagram className="w-4 h-4 text-neo-yellow" />
                  <span>@cv.keelmuliajasa</span>
                </a>

                <a
                  href="mailto:cvkeel.muliajasa@gmail.com"
                  className="bg-neo-surface hover:bg-neo-card2 text-slate-200 p-3 rounded-xl border-2 border-black shadow-neo-sm font-black text-xs flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 truncate"
                >
                  <Mail className="w-4 h-4 text-neo-emerald shrink-0" />
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center"
            onClick={() => setModalOpen(false)}
          >
            <div className="relative max-w-lg w-full bg-neo-card p-3 rounded-3xl border-2 border-black shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-neo-yellow text-black font-black border-2 border-black shadow-neo flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>

              <img
                src="/images/poster-keelmuliajasa.png"
                alt="Poster Resmi CV. Keel Mulia Jasa"
                className="w-full h-auto rounded-2xl border-2 border-black"
              />

              <div className="mt-4 flex items-center justify-between gap-3">
                <a
                  href="/images/poster-keelmuliajasa.png"
                  download="Poster-CV-Keel-Mulia-Jasa.png"
                  className="flex-1 text-center bg-neo-card2 text-white font-black text-xs py-2.5 rounded-xl border-2 border-black shadow-neo-sm hover:bg-slate-700"
                >
                  Unduh Gambar Poster
                </a>
                <a
                  href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20mau%20order%20sesuai%20poster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-neo-emerald text-black font-black text-xs py-2.5 rounded-xl border-2 border-black shadow-neo-sm hover:bg-neo-emerald-dark"
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
