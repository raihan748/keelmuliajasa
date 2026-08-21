"use client";

import React from "react";
import { Building2, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ClientsSection: React.FC = () => {
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
    <section className="py-20 bg-neo-bg bg-neo-grid border-b-2 border-black" id="klien-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3 border-2 border-black shadow-neo-sm">
              <Star className="w-3.5 h-3.5 stroke-[2.5]" />
              Mitra & Klien Terverifikasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Dipercaya Sekolah, Rumah Sakit, Pesantren & Industri
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Bukti nyata kepercayaan berbagai institusi ternama di Sulawesi Selatan terhadap kualitas layanan CV. Keel Mulia Jasa.
            </p>
          </div>
        </ScrollReveal>

        {/* Client Cards Grid with Alternating Lateral Slide-Ins */}
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
    </section>
  );
};
