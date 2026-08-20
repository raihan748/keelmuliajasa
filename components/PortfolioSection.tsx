"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  CheckCircle2,
  HardHat,
  MapPin,
  Calendar,
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const PortfolioSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const activities = [
    {
      title: "Pembersihan Area & Evakuasi Karung Sampah",
      location: "Pattallassang, Kabupaten Gowa",
      date: "17 Jan 2026",
      desc: "Evakuasi tumpukan sampah karung sisa produksi & pembersihan total area loading bay hingga bersih dan bebas kotoran.",
      type: "Before & After",
      image: "/images/portofolio-before-after.png",
      tag: "Hasil Kerja Nyata",
      tagColor: "bg-neo-yellow text-black",
    },
    {
      title: "Standar K3 & Operasional Residensial",
      location: "Kompleks Perumahan Pattallassang, Gowa",
      date: "10 Jan 2026",
      desc: "Tim loader CV. Keel Mulia Jasa bekerja dengan APD lengkap: Helm safety kuning, rompi reflektif biru, sarung tangan, dan safety boots.",
      type: "Kepatuhan K3",
      image: "/images/tim-lapangan-k3.png",
      tag: "Keselamatan Kerja (K3)",
      tagColor: "bg-neo-emerald text-black",
    },
    {
      title: "Pemuatan Sampah Rumah Tangga Perumahan",
      location: "Makassar & Gowa Regency",
      date: "Operasional Harian",
      desc: "Pengangkutan kantong sampah residensial terjadwal dengan armada pick-up bak tinggi tanpa ceceran di jalan.",
      type: "Layanan Rutin",
      image: "/images/fleet/operasional-loading-sampah.jpg",
      tag: "Residensial Rutin",
      tagColor: "bg-neo-blue text-white",
    },
  ];

  return (
    <section className="py-24 bg-neo-bg border-b-2 border-black relative overflow-hidden" id="portofolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-emerald text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <Camera className="w-3.5 h-3.5 stroke-[2.5]" />
            Dokumentasi & Portofolio Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Bukti Nyata Kinerja Tim di Lapangan
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Lihat hasil pengerjaan sebelum dan sesudah (Before & After) serta standar keselamatan kerja (K3) tim loader CV. Keel Mulia Jasa.
          </p>
        </div>

        {/* Featured 1: Interactive Before & After Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 bg-neo-surface border-2 border-black rounded-3xl p-6 sm:p-9 shadow-neo-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-black">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-neo-yellow text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm">
                  Proyek Pembersihan Area
                </span>
                <span className="text-xs text-neo-emerald font-black flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Pattallassang, Gowa Regency
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Hasil Kerja Sebelum & Sesudah (Before & After)
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1 bg-neo-card px-3 py-1.5 rounded-xl border-2 border-black shadow-neo-sm">
                <Calendar className="w-3.5 h-3.5 text-neo-yellow" />
                Dokumentasi: 17 Jan 2026
              </span>
            </div>
          </div>

          <div
            className="cursor-pointer group relative overflow-hidden rounded-2xl border-2 border-black bg-black shadow-neo"
            onClick={() => setActivePhoto("/images/portofolio-before-after.png")}
          >
            <img
              src="/images/portofolio-before-after.png"
              alt="Dokumentasi Before After CV Keel Mulia Jasa"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <div className="bg-neo-yellow text-black px-4 py-2 rounded-xl font-black text-xs border-2 border-black shadow-neo flex items-center gap-2">
                <Maximize2 className="w-4 h-4" />
                <span>Klik untuk Zoom Foto Before-After</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t-2 border-black grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neo-emerald shrink-0 stroke-[2.5]" />
              <span>Evakuasi Sampah Karung & Puing Selesai</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neo-emerald shrink-0 stroke-[2.5]" />
              <span>Area Loading Bay Disapu & Bersih Rapi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neo-emerald shrink-0 stroke-[2.5]" />
              <span>Muatan Langsung Dibawa ke TPA Resmi</span>
            </div>
          </div>
        </motion.div>

        {/* Featured 2: 3 Cards Grid of Field Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-neo-surface border-2 border-black rounded-3xl overflow-hidden shadow-neo-lg hover:shadow-neo-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div
                  className="relative h-60 w-full overflow-hidden bg-black border-b-2 border-black cursor-pointer"
                  onClick={() => setActivePhoto(act.image)}
                >
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3.5 right-3.5 text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-black shadow-neo-sm ${act.tagColor}`}>
                    {act.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-neo-yellow mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{act.location}</span>
                  </div>

                  <h4 className="text-lg font-black text-white mb-2.5 leading-snug">
                    {act.title}
                  </h4>

                  <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                    {act.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t-2 border-black flex items-center justify-between text-[11px] text-slate-400 font-bold">
                  <span className="flex items-center gap-1 text-neo-emerald font-black">
                    <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                    Standar SOP
                  </span>
                  <span>{act.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center"
            onClick={() => setActivePhoto(null)}
          >
            <div className="relative max-w-2xl w-full bg-neo-card p-3 rounded-3xl border-2 border-black shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-neo-yellow text-black font-black border-2 border-black shadow-neo flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>

              <img
                src={activePhoto}
                alt="Dokumentasi Kerja"
                className="w-full h-auto rounded-2xl border-2 border-black object-contain max-h-[80vh]"
              />

              <div className="mt-4 text-center">
                <a
                  href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20tertarik%20dengan%20hasil%20kerja%20di%20portofolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neo-emerald text-black font-black text-xs border-2 border-black shadow-neo-sm hover:bg-neo-emerald-dark transition-colors"
                >
                  <span>Pesan Layanan Seperti Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
