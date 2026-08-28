import React from "react";
import { ShieldCheck, Truck, Scale, FileText } from "lucide-react";

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: ShieldCheck,
      title: "Badan Usaha CV Resmi",
      desc: "Legalitas lengkap (NIB & NPWP) siap menerbitkan invoice dan SPH resmi",
      tag: "100% Legal",
      color: "bg-brand-50 text-brand-700",
    },
    {
      icon: Truck,
      title: "Pengangkutan Tuntas",
      desc: "Sampah dan puing langsung diangkut dan dibuang ke TPA tanpa ceceran",
      tag: "Bersih Tuntas",
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: Scale,
      title: "Transparansi Ritase",
      desc: "Kapasitas muatan akurat sesuai kesepakatan dan kebutuhan riil di lapangan",
      tag: "Akurat",
      color: "bg-cyan-50 text-cyan-700",
    },
    {
      icon: FileText,
      title: "Faktur & Kwitansi Resmi",
      desc: "Mendukung pembayaran termin untuk instansi, cluster kantor, dan proyek",
      tag: "B2B Ready",
      color: "bg-sky-50 text-sky-700",
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#38B6FF] border-b border-white/20 relative overflow-hidden">
      {/* Ambient background silhouette accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-48 bg-white/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-soft-sm hover:shadow-soft-xl hover:border-brand-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Silhouette watermark icon in bottom right */}
                <div className="absolute -right-4 -bottom-4 w-28 h-28 text-slate-900/[0.04] group-hover:text-brand-600/[0.09] group-hover:scale-110 transition-all duration-300 pointer-events-none select-none">
                  <Icon className="w-full h-full stroke-[1.2]" />
                </div>

                {/* Subtle top silhouette accent highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100/80 text-brand-700 flex items-center justify-center shadow-soft-xs group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-soft-xs ${item.color} border-current/20`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.desc}
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

