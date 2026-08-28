import React from "react";
import { MessageSquareText, FileText, Truck, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: MessageSquareText,
      title: "Kirim Foto & Konsultasi",
      desc: "Kirimkan foto/video tumpukan sampah, puing, atau pohon yang ingin diangkut via WhatsApp beserta lokasi Anda.",
      tag: "Langkah 1",
      color: "bg-brand-50 text-brand-700 border border-brand-200/60",
    },
    {
      num: "02",
      icon: FileText,
      title: "Penawaran & Estimasi Unit",
      desc: "Admin kami menghitung estimasi ritase/volume dan memberikan penawaran harga transparan serta jadwal armada.",
      tag: "Langkah 2",
      color: "bg-sky-50 text-sky-700 border border-sky-200/60",
    },
    {
      num: "03",
      icon: Truck,
      title: "Armada Tiba di Lokasi",
      desc: "Armada dump truck tiba tepat waktu bersama tim loader yang memuat seluruh sampah dan menyapu bersih area.",
      tag: "Langkah 3",
      color: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Pembuangan ke TPA & Invoice",
      desc: "Sampah dibuang langsung ke Tempat Pemrosesan Akhir (TPA). Kami siap menerbitkan kwitansi resmi atau invoice untuk pembukuan Anda.",
      tag: "Langkah 4",
      color: "bg-purple-50 text-purple-700 border border-purple-200/60",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#38B6FF] border-b border-white/20" id="alur-kerja">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 border border-white/80 shadow-soft-sm text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>SOP & Alur Pelayanan</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mt-3 mb-4">
              4 Langkah Mudah Menggunakan Jasa Kami
            </h2>
            <p className="text-base sm:text-lg text-slate-950 font-medium leading-relaxed">
              Proses cepat, transparan, dan Anda tidak perlu repot mengangkat material berat sendiri.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="h-full">
                <div
                  className="h-full bg-white border border-slate-200/80 rounded-3xl p-7 text-center relative hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between shadow-soft-xs"
                >
                  <div>
                    <div className="flex items-center justify-between w-full mb-5">
                      <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${step.color}`}>
                        {step.tag}
                      </span>
                      <span className="text-xl font-bold text-slate-300 font-mono">
                        {step.num}
                      </span>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 mx-auto">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {step.desc}
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

