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
      badgeColor: "bg-neo-red text-white",
      desc: "Dokumentasi nyata sebelum & sesudah evakuasi tumpukan puing cor beton, batu bata, dan sampah material hingga area tanah bersih tuntas.",
    },
    {
      title: "Kesiapan Tim Loader & Standar APD K3",
      location: "Pattallassang, Kab. Gowa",
      date: "10 Januari 2026",
      image: "/images/tim-lapangan-k3.png",
      tag: "Standar K3 Resmi",
      badgeColor: "bg-neo-yellow text-black",
      desc: "Kru operasional lapangan CV. Keel Mulia Jasa lengkap dengan helm keselamatan kuning, rompi reflektif biru, sarung tangan tebal, dan safety boots.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-neo-bg bg-neo-grid border-b-2 border-black" id="portofolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
              <Camera className="w-3.5 h-3.5 stroke-[2.5]" />
              Dokumentasi Lapangan Nyata
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Bukti Kerja Nyata Sebelum & Sesudah
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Foto asli dokumentasi tim CV. Keel Mulia Jasa saat pengerjaan pengangkutan material puing dan sampah di wilayah operasional Sulawesi Selatan.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature 1: Interactive Draggable Before-After Slider */}
        <ScrollReveal direction="up" className="mb-14 sm:mb-16">
          <div className="max-w-4xl mx-auto bg-white p-4 sm:p-7 rounded-3xl border-2 border-black shadow-neo-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 pb-3 border-b-2 border-black">
              <div className="flex items-center gap-2">
                <span className="bg-neo-emerald text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm">
                  Komparasi Interaktif
                </span>
                <span className="text-xs font-black text-slate-900">Pattallassang, Kab. Gowa</span>
              </div>
              <span className="text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-300">
                👈 Geser Slider ke Kiri / Kanan 👉
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
              <div className="h-full bg-white border-2 border-black rounded-3xl overflow-hidden shadow-neo-lg hover:shadow-neo-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div
                    onClick={() => setSelectedImage(proj.image)}
                    className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-200 cursor-pointer border-b-2 border-black"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-neo-yellow text-black text-xs font-black px-3.5 py-2 rounded-xl border-2 border-black shadow-neo flex items-center gap-1.5">
                        <ZoomIn className="w-4 h-4 stroke-[2.5]" />
                        Perbesar Foto Dokumentasi
                      </span>
                    </div>
                    <span className={`absolute top-3.5 right-3.5 text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-black shadow-neo-sm ${proj.badgeColor}`}>
                      {proj.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-bold mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        {proj.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        {proj.date}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <div className="p-3 rounded-xl bg-slate-50 border-2 border-black shadow-neo-sm flex items-center gap-2 text-xs font-black text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5] shrink-0" />
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-white p-3 rounded-2xl border-2 border-black shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-neo-yellow text-black border-2 border-black flex items-center justify-center font-black shadow-neo cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
            <img
              src={selectedImage}
              alt="Preview Dokumentasi Foto Lapangan"
              className="w-full max-h-[80vh] object-contain rounded-xl border border-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};
