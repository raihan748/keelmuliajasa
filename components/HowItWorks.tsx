import React from "react";
import { MessageSquareText, FileText, Truck, CheckCircle2 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: MessageSquareText,
      title: "Kirim Foto & Konsultasi",
      desc: "Kirimkan foto/video tumpukan sampah, puing, atau pohon yang ingin diangkut via WhatsApp beserta lokasi Anda.",
    },
    {
      num: "02",
      icon: FileText,
      title: "Penawaran & Estimasi Unit",
      desc: "Admin kami menghitung estimasi ritase/volume dan memberikan penawaran harga transparan serta jadwal armada.",
    },
    {
      num: "03",
      icon: Truck,
      title: "Armada & Tim Loader Bekerja",
      desc: "Armada dump truck tiba tepat waktu bersama tim loader yang memuat seluruh sampah dan menyapu bersih area.",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Pembuangan ke TPA & Invoice",
      desc: "Sampah dibuang ke TPA resmi pemerintah. Kami menerbitkan bukti timbangan TPA, kwitansi, atau invoice resmi.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="alur-kerja">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            SOP & Alur Pelayanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            4 Langkah Mudah Menggunakan Jasa Kami
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Proses cepat, praktis, dan Anda tidak perlu repot mengangkat material berat sendiri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-7 text-center relative hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-base flex items-center justify-center mb-5 shadow-lg shadow-emerald-600/30">
                    {step.num}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
