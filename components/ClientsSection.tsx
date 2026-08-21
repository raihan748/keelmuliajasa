"use client";

import React, { useState } from "react";
import { Building2, CheckCircle2, ShieldCheck, Star, ZoomIn, X } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ClientsSection: React.FC = () => {
  const [selectedBanner, setSelectedBanner] = useState<string | null>(null);

  const verifiedClients = [
    {
      name: "Al-Fityan School Gowa",
      category: "Institusi Pendidikan Terpadu",
      desc: "Pengelolaan kebersihan & retribusi sampah rutin area sekolah dan asrama.",
      badge: "Pendidikan",
      badgeColor: "bg-neo-blue text-white",
      dir: "left" as const,
    },
    {
      name: "Rumah Sakit Islam Az Zahra",
      category: "Fasilitas Layanan Kesehatan",
      desc: "Penanganan sampah umum non-medis & pembersihan berkala area rumah sakit.",
      badge: "Kesehatan",
      badgeColor: "bg-neo-emerald text-black",
      dir: "right" as const,
    },
    {
      name: "Yayasan Tahfidz Sulaimaniyah",
      category: "Pondok Pesantren & Lembaga Sosial",
      desc: "Pengangkutan sampah pemukiman santri dan pemeliharaan lingkungan bersih.",
      badge: "Pesantren",
      badgeColor: "bg-neo-yellow text-black",
      dir: "left" as const,
    },
    {
      name: "PT. Mitra Sidang Kareasingo (RAKAKA)",
      category: "Sektor Industri & Logistik Kayu",
      desc: "Evakuasi sisa limbah potongan kayu, serbuk, dan material konstruksi pabrik.",
      badge: "Industri & Kayu",
      badgeColor: "bg-neo-purple text-white",
      dir: "right" as const,
    },
    {
      name: "Bumi Kayana",
      category: "Perkebunan & Kawasan Hijau",
      desc: "Pembersihan lahan berkala, penebangan pohon, dan angkutan dahan volume besar.",
      badge: "Komersial",
      badgeColor: "bg-neo-cyan text-black",
      dir: "left" as const,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-neo-bg bg-neo-grid border-b-2 border-black" id="klien-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3 border-2 border-black shadow-neo-sm">
              <Star className="w-3.5 h-3.5 stroke-[2.5]" />
              Mitra & Klien Terverifikasi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
              Dipercaya Sekolah, Rumah Sakit, Pesantren & Industri
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Bukti nyata kepercayaan berbagai institusi ternama di Sulawesi Selatan terhadap kualitas layanan CV. Keel Mulia Jasa.
            </p>
          </div>
        </ScrollReveal>

        {/* Official Client Logos Showcase Banner */}
        <ScrollReveal direction="up" className="mb-12">
          <div className="bg-white border-2 border-black rounded-3xl p-4 sm:p-6 shadow-neo-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-black">
              <span className="text-xs font-black text-slate-900 uppercase">Banner Resmi Rekanan Klien</span>
              <span className="text-[11px] font-bold text-slate-500">Klik untuk memperbesar</span>
            </div>
            <div
              onClick={() => setSelectedBanner("/images/klien-customers-banner.png")}
              className="relative rounded-2xl overflow-hidden border-2 border-black bg-slate-100 cursor-pointer group"
            >
              <img
                src="/images/klien-customers-banner.png"
                alt="Banner Terima Kasih Pelanggan CV Keel Mulia Jasa"
                className="w-full h-auto object-contain group-hover:scale-101 transition-transform"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-neo-yellow text-black text-xs font-black px-3 py-1.5 rounded-lg border-2 border-black shadow-neo flex items-center gap-1">
                  <ZoomIn className="w-4 h-4" />
                  Perbesar Banner Klien
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedClients.map((client, idx) => (
            <ScrollReveal key={idx} direction={client.dir} delay={(idx % 3) * 0.1} className="h-full">
              <div className="h-full bg-white border-2 border-black rounded-3xl p-6 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-black flex items-center justify-center text-slate-900 shadow-neo-sm">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-black shadow-neo-sm ${client.badgeColor}`}>
                      {client.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 mb-1 leading-snug">
                    {client.name}
                  </h3>
                  <div className="text-xs font-black text-amber-600 mb-3">
                    {client.category}
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {client.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t-2 border-black flex items-center gap-1.5 text-[11px] font-black text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  <span>Klien Terverifikasi & Rekanan Aktif</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedBanner && (
        <div
          onClick={() => setSelectedBanner(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-white p-3 rounded-2xl border-2 border-black shadow-2xl">
            <button
              onClick={() => setSelectedBanner(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-neo-yellow text-black border-2 border-black flex items-center justify-center font-black shadow-neo cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
            <img
              src={selectedBanner}
              alt="Banner Klien CV Keel Mulia Jasa"
              className="w-full max-h-[80vh] object-contain rounded-xl border border-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};
