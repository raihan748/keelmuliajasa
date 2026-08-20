import React from "react";
import { MessageSquareText, FileText, Truck, CheckCircle2 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: MessageSquareText,
      title: "Kirim Foto & Konsultasi",
      desc: "Kirimkan foto/video tumpukan sampah, puing, atau pohon yang ingin diangkut via WhatsApp beserta lokasi Anda.",
      tag: "Langkah 1",
      color: "bg-neo-yellow text-black",
    },
    {
      num: "02",
      icon: FileText,
      title: "Penawaran & Estimasi Unit",
      desc: "Admin kami menghitung estimasi ritase/volume dan memberikan penawaran harga transparan serta jadwal armada.",
      tag: "Langkah 2",
      color: "bg-neo-cyan text-black",
    },
    {
      num: "03",
      icon: Truck,
      title: "Armada & Tim Tiba di Lokasi",
      desc: "Armada dump truck tiba tepat waktu bersama tim loader yang memuat seluruh sampah dan menyapu bersih area.",
      tag: "Langkah 3",
      color: "bg-neo-emerald text-black",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Pembuangan ke TPA & Invoice",
      desc: "Sampah dibuang ke TPA resmi pemerintah. Kami menerbitkan bukti timbangan TPA, kwitansi, atau invoice resmi.",
      tag: "Langkah 4",
      color: "bg-neo-purple text-white",
    },
  ];

  return (
    <section className="py-24 bg-white border-b-2 border-black" id="alur-kerja">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-emerald text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            SOP & Alur Pelayanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            4 Langkah Mudah Menggunakan Jasa Kami
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Proses cepat, praktis, dan Anda tidak perlu repot mengangkat material berat sendiri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border-2 border-black rounded-3xl p-6 text-center relative hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-between shadow-neo"
              >
                <div>
                  <div className="flex items-center justify-between w-full mb-4">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm ${step.color}`}>
                      {step.tag}
                    </span>
                    <span className="text-2xl font-black text-slate-400 font-mono">
                      #{step.num}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-black text-slate-900 flex items-center justify-center mb-4 shadow-neo-sm mx-auto">
                    <Icon className="w-7 h-7 stroke-[2.5]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
