import React from "react";
import { CheckCircle2, ShieldCheck, Clock, Coins, Users, Truck, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Pembuangan Langsung ke TPA",
      desc: "Tidak pernah membuang sampah di pinggir jalan atau lahan liar. Semua muatan diangkut tuntas ke TPA.",
      color: "bg-neo-emerald text-black",
      dir: "left" as const,
    },
    {
      icon: Clock,
      title: "Respon Kilat & Siaga 24 Jam",
      desc: "Armada kami siap meluncur dalam waktu 1-3 jam untuk panggilan urgent di Makassar, Gowa, dan Maros.",
      color: "bg-neo-yellow text-black",
      dir: "right" as const,
    },
    {
      icon: Coins,
      title: "Tarif Transparan Tanpa Biaya Tersembunyi",
      desc: "Harga sudah mencakup unit armada, bahan bakar (BBM), supir, tenaga loader, dan retribusi TPA.",
      color: "bg-neo-cyan text-black",
      dir: "left" as const,
    },
    {
      icon: Users,
      title: "Tenaga Angkut Berpengalaman & APD K3",
      desc: "Kuli angkut cekatan, sopan, dan dilengkapi peralatan keselamatan (helm, rompi, sarung tangan, sepatu safety).",
      color: "bg-neo-blue text-white",
      dir: "right" as const,
    },
    {
      icon: Truck,
      title: "Armada Sendiri & Terawat Prima",
      desc: "Unit dump truck hidrolik dan pick up rangka tinggi milik sendiri tanpa pihak perantara.",
      color: "bg-neo-purple text-white",
      dir: "left" as const,
    },
    {
      icon: Sparkles,
      title: "Garansi Area Bersih Rapi Tuntas",
      desc: "Area pemuatan puing atau sampah disapu dan dibersihkan dari ceceran sebelum tim meninggalkan lokasi.",
      color: "bg-neo-red text-white",
      dir: "right" as const,
    },
  ];

  return (
    <section className="py-24 bg-neo-bg bg-neo-grid border-b-2 border-black" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
              <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
              Mengapa Memilih Kami
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Standar Tertinggi untuk Kebersihan Properti Anda
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Kami tidak sekadar mengangkut sampah, kami memberikan kepastian ketertiban lingkungan dan kenyamanan tanpa repot.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Grid Cards with Alternating Left/Right Lateral Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <ScrollReveal key={idx} direction={r.dir} delay={(idx % 3) * 0.1} className="h-full">
                <div className="h-full bg-white border-2 border-black rounded-3xl p-6 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl border-2 border-black flex items-center justify-center mb-4 shadow-neo-sm ${r.color}`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <h3 className="font-black text-slate-900 text-lg mb-2 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
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
