import React from "react";
import { MousePointerClick, MessageSquareText, Sparkles, ThumbsUp } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "1",
      icon: MousePointerClick,
      title: "Pilih Layanan & Waktu",
      desc: "Tentukan jenis pembersihan yang Anda butuhkan serta jadwal yang paling nyaman untuk Anda.",
    },
    {
      num: "2",
      icon: MessageSquareText,
      title: "Konfirmasi via WhatsApp",
      desc: "Admin kami segera mengonfirmasi ketersediaan cleaner dan rincian pemesanan Anda secara instan.",
    },
    {
      num: "3",
      icon: Sparkles,
      title: "Tim Datang & Bekerja",
      desc: "Cleaner profesional tiba tepat waktu membawa perlengkapan modern dan chemical higienis terstandar.",
    },
    {
      num: "4",
      icon: ThumbsUp,
      title: "Inspeksi & Puas",
      desc: "Periksa hasil kerja bersama tim. Nikmati hunian yang bersih, segar, wangi, dan bergaransi penuh.",
    },
  ];

  return (
    <section className="py-20 bg-brand-bg-subtle" id="cara-pesan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green-light text-brand-green-darker border border-brand-green/30 text-xs font-bold uppercase tracking-wider mb-3">
            Proses Pemesanan Praktis
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-4">
            4 Langkah Mudah Menikmati Hunian Bersih
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            Pesan dalam hitungan detik, tim kami akan datang tepat waktu membawa peralatan lengkap.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="bg-white border border-brand-border rounded-2xl p-7 text-center relative hover:border-brand-green hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-11 h-11 rounded-full bg-brand-green text-white font-black text-lg flex items-center justify-center mb-5 shadow-brand-green">
                  {step.num}
                </div>
                <h3 className="text-lg font-extrabold text-brand-dark mb-2.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
