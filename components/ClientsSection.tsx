"use client";

import React, { useState } from "react";
import { Building2, CheckCircle2, ShieldCheck, Star, ZoomIn, X } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ClientsSection: React.FC = () => {
  const [selectedBanner, setSelectedBanner] = useState<string | null>(null);

  const verifiedClients = [
    {
      name: "Al-Fityan School Gowa",
      category: "Institusi Pendidikan Terpadu (TKIT - SMAIT)",
      desc: "Pengelolaan kebersihan & retribusi sampah rutin area sekolah dan asrama.",
      badge: "Pendidikan",
      badgeColor: "bg-sky-50 text-sky-700 border border-sky-200/60",
      dir: "left" as const,
    },
    {
      name: "Rumah Kost Islami Az Zahra",
      category: "Fasilitas Kost-Kosan & Hunian",
      desc: "Penanganan sampah umum rutin & pembersihan berkala lingkungan kos-kosan.",
      badge: "Kos-Kosan",
      badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
      dir: "up" as const,
    },
    {
      name: "Yayasan Tahfidz Sulaimaniyah",
      category: "Pondok Pesantren & Lembaga Sosial",
      desc: "Pengangkutan sampah pemukiman santri dan pemeliharaan lingkungan bersih.",
      badge: "Pesantren",
      badgeColor: "bg-amber-50 text-amber-700 border border-amber-200/60",
      dir: "right" as const,
    },
    {
      name: "PT. Mitra Kirana Karkasindo (RAKAKA)",
      category: "Sektor Industri & Manufaktur",
      desc: "Evakuasi sisa limbah operasional, potongan material, dan kebersihan pabrik.",
      badge: "Industri",
      badgeColor: "bg-purple-50 text-purple-700 border border-purple-200/60",
      dir: "left" as const,
    },
    {
      name: "Sari Roti (Rotinya Indonesia)",
      category: "Industri & Manufaktur Makanan",
      desc: "Penanganan pengangkutan sampah logistik dan sisa operasional industri.",
      badge: "F&B Manufaktur",
      badgeColor: "bg-orange-50 text-orange-700 border border-orange-200/60",
      dir: "up" as const,
    },
    {
      name: "Bumi Kayana",
      category: "Kawasan Perumahan & Residensial",
      desc: "Pengangkutan retribusi sampah rutin warga dan pemeliharaan kebersihan lingkungan perumahan.",
      badge: "Perumahan",
      badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
      dir: "right" as const,
    },
    {
      name: "Griya Kenari",
      category: "Pengembang Perumahan & Properti",
      desc: "Pembersihan puing sisa konstruksi unit rumah baru dan sampah lingkungan.",
      badge: "Properti",
      badgeColor: "bg-rose-50 text-rose-700 border border-rose-200/60",
      dir: "left" as const,
    },
    {
      name: "Hertasning Madani & Green Dumais Villa",
      category: "Cluster Perumahan & Villa",
      desc: "Pengangkutan retribusi sampah pemukiman warga secara terjadwal dan tertib.",
      badge: "Perumahan",
      badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
      dir: "up" as const,
    },
    {
      name: "Perumahan Bukit Ketapang",
      category: "Kompleks Perumahan Residensial",
      desc: "Layanan angkut sampah berkala untuk menjaga kebersihan dan kenyamanan hunian.",
      badge: "Residensial",
      badgeColor: "bg-indigo-50 text-indigo-700 border border-indigo-200/60",
      dir: "right" as const,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 border-b border-slate-100" id="klien-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60 shadow-soft-xs text-xs font-semibold">
              <Star className="w-3.5 h-3.5 text-brand-600" />
              <span>Mitra & Klien Terverifikasi</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Dipercaya Sekolah, Kos-Kosan, Perumahan & Industri
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Bukti nyata kepercayaan berbagai institusi ternama di Sulawesi Selatan terhadap kualitas dan integritas layanan CV. Keel Mulia Jasa.
            </p>
          </div>
        </ScrollReveal>

        {/* Official Client Logos Showcase Banner */}
        <ScrollReveal direction="up" className="mb-14">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-7 shadow-soft-md">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Customer & Rekanan Klien Resmi</span>
              <span className="text-xs text-slate-400 font-medium">Klik untuk memperbesar</span>
            </div>
            <div
              onClick={() => setSelectedBanner("/images/klien-customers-banner.png")}
              className="relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 cursor-pointer group flex items-center justify-center py-4"
            >
              <img
                src="/images/klien-customers-banner.png"
                alt="Daftar Customer dan Rekanan Resmi CV. Keel Mulia Jasa"
                className="w-full max-w-2xl max-h-[550px] h-auto object-contain rounded-xl shadow-soft-xs group-hover:scale-101 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-slate-900 text-xs font-semibold px-4 py-2 rounded-full shadow-soft-lg flex items-center gap-1.5">
                  <ZoomIn className="w-4 h-4 text-brand-600" />
                  Perbesar Poster Customer
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedClients.map((client, idx) => (
            <ScrollReveal key={idx} direction={client.dir} delay={(idx % 3) * 0.1} className="h-full">
              <div className="h-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-soft-xs hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${client.badgeColor}`}>
                      {client.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {client.name}
                  </h3>
                  <div className="text-xs font-semibold text-brand-600 mb-3">
                    {client.category}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {client.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
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
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-white p-4 rounded-3xl shadow-soft-xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedBanner(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedBanner}
              alt="Banner Klien CV Keel Mulia Jasa"
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-slate-100 mt-6"
            />
          </div>
        </div>
      )}
    </section>
  );
};

