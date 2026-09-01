"use client";

import React, { useState } from "react";
import { Camera, CheckCircle2, ShieldCheck, MapPin, Calendar, ZoomIn, X, Sparkles } from "lucide-react";
import { InteractiveBeforeAfter } from "@/components/InteractiveBeforeAfter";
import { ScrollReveal } from "@/components/ScrollReveal";

export const PortfolioSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const realProjects = [
    {
      title: "Pemuatan & Evakuasi Puing Sisa Bangunan",
      location: "Pattallassang, Kab. Gowa",
      date: "17 Januari 2026",
      image: "/images/portofolio-before-after.png",
      tag: "Sebelum & Sesudah",
      badgeColor: "bg-red-50 text-red-700 border border-red-200/60",
      desc: "Dokumentasi nyata sebelum & sesudah evakuasi tumpukan puing cor beton, batu bata, dan sampah material hingga area tanah bersih tuntas.",
    },
    {
      title: "Kesiapan Tim Loader & Standar APD K3",
      location: "Pattallassang, Kab. Gowa",
      date: "10 Januari 2026",
      image: "/images/tim-lapangan-k3.png",
      tag: "Standar K3 Resmi",
      badgeColor: "bg-amber-50 text-amber-700 border border-amber-200/60",
      desc: "Kru operasional lapangan CV. Keel Mulia Jasa lengkap dengan helm keselamatan kuning, rompi reflektif biru, sarung tangan tebal, dan safety boots.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-transparent border-b border-white/20" id="portofolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 border border-white/80 shadow-soft-sm text-xs font-bold">
              <Camera className="w-3.5 h-3.5 text-blue-600" />
              <span>Dokumentasi Lapangan Nyata</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mt-3 mb-4">
              Bukti Kerja Nyata Sebelum & Sesudah
            </h2>
            <p className="text-base sm:text-lg text-slate-950 font-medium leading-relaxed">
              Foto asli dokumentasi tim CV. Keel Mulia Jasa saat pengerjaan pengangkutan material puing dan sampah di wilayah operasional Sulawesi Selatan.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature 1: Interactive Draggable Before-After Slider */}
        <ScrollReveal direction="up" className="mb-14 sm:mb-16">
          <div className="max-w-4xl mx-auto bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/80 shadow-soft-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full border border-brand-200/60">
                  Komparasi Interaktif
                </span>
                <span className="text-xs font-semibold text-slate-800">Pattallassang, Kab. Gowa</span>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/80">
                Geser Slider untuk Membandingkan
              </span>
            </div>

            <InteractiveBeforeAfter
              beforeImage="/images/portofolio-before.jpg"
              afterImage="/images/portofolio-after.jpg"
              beforeLabel="SEBELUM: TUMPUKAN PUING"
              afterLabel="SESUDAH: BERSIH TUNTAS"
            />
          </div>
        </ScrollReveal>

        {/* Feature 2: 2 Real Field Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realProjects.map((proj, idx) => (
            <ScrollReveal key={idx} direction={idx === 0 ? "left" : "right"} delay={idx * 0.12}>
              <div className="h-full bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-soft-xs hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div
                    onClick={() => setSelectedImage(proj.image)}
                    className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 cursor-pointer border-b border-slate-100"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-slate-900 text-xs font-semibold px-4 py-2 rounded-full shadow-soft-lg flex items-center gap-1.5">
                        <ZoomIn className="w-4 h-4 text-brand-600" />
                        Perbesar Foto Dokumentasi
                      </span>
                    </div>
                    <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full shadow-soft-xs ${proj.badgeColor}`}>
                      {proj.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-2.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-600" />
                        {proj.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-600" />
                        {proj.date}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Muatan Langsung Dibawa ke TPA</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-white p-4 rounded-3xl shadow-soft-xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Preview Dokumentasi Foto Lapangan"
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-slate-100 mt-6"
            />
          </div>
        </div>
      )}
    </section>
  );
};

