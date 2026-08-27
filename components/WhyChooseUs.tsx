import React from "react";
import { CheckCircle2, ShieldCheck, Clock, Coins, Users, Truck, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Pembuangan Resmi ke TPA",
      desc: "Tidak pernah membuang sampah di pinggir jalan atau lahan liar. Seluruh muatan diangkut tuntas ke TPA resmi.",
      color: "bg-emerald-50 text-emerald-600",
      dir: "left" as const,
    },
    {
      icon: Clock,
      title: "Respons Cepat & Jadwal Tepat Waktu",
      desc: "Armada kami siap meluncur tepat waktu untuk melayani kebutuhan mendesak di Makassar, Gowa, dan Maros.",
      color: "bg-brand-50 text-brand-600",
      dir: "right" as const,
    },
    {
      icon: Coins,
      title: "Tarif Transparan & Kompetitif",
      desc: "Harga paket jelas mencakup armada, bahan bakar (BBM), pengemudi, tenaga loader, dan retribusi TPA.",
      color: "bg-sky-50 text-sky-600",
      dir: "left" as const,
    },
    {
      icon: Users,
      title: "Tenaga Angkut Berstandar K3",
      desc: "Kru lapangan cekatan, sopan, dan dilengkapi alat pelindung diri (helm, rompi reflektif, sarung tangan, safety boots).",
      color: "bg-amber-50 text-amber-600",
      dir: "right" as const,
    },
    {
      icon: Truck,
      title: "Armada Mandiri & Terawat Prima",
      desc: "Unit dump truck hidrolik dan pick up rangka tinggi milik perusahaan sendiri, siap beroperasi tanpa pihak perantara.",
      color: "bg-purple-50 text-purple-600",
      dir: "left" as const,
    },
    {
      icon: Sparkles,
      title: "Garansi Area Bersih Tuntas",
      desc: "Area pemuatan puing atau sampah disapu dan dibersihkan dari sisa debu/ceceran sebelum tim beranjak.",
      color: "bg-emerald-50 text-emerald-600",
      dir: "right" as const,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 border-b border-slate-100" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60 shadow-soft-xs text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Mengapa Memilih Kami</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Standar Tertinggi untuk Kebersihan Properti Anda
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Kami tidak sekadar mengangkut sampah, kami memberikan kepastian ketertiban lingkungan dan kenyamanan tanpa repot.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <ScrollReveal key={idx} direction={r.dir} delay={(idx % 3) * 0.1} className="h-full">
                <div className="h-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-soft-xs hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${r.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

