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
      desc: "Sampah dan puing langsung diangkut dan dibuang ke TPA resmi tanpa ceceran",
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
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-soft-xs hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.color}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
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

