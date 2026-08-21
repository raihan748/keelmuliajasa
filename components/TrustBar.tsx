import React from "react";
import { ShieldCheck, Truck, Scale, FileText } from "lucide-react";

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: ShieldCheck,
      title: "Badan Usaha CV Resmi",
      desc: "Legalitas lengkap (NIB & NPWP) siap menerbitkan invoice dan SPH",
      tag: "100% Legal",
      color: "bg-neo-emerald text-black",
    },
    {
      icon: Truck,
      title: "Pengangkutan Sampah Tuntas",
      desc: "Sampah dan puing langsung diangkut dan dibuang ke TPA tanpa ceceran",
      tag: "Bersih Tuntas",
      color: "bg-neo-yellow text-black",
    },
    {
      icon: Scale,
      title: "Transparansi Ritase & Muatan",
      desc: "Kapasitas muatan akurat sesuai kesepakatan dan kebutuhan di lapangan",
      tag: "Akurat",
      color: "bg-neo-cyan text-black",
    },
    {
      icon: FileText,
      title: "Faktur & Kwitansi Resmi",
      desc: "Mendukung pembayaran termin untuk instansi, kantor, dan proyek",
      tag: "B2B Ready",
      color: "bg-neo-blue text-white",
    },
  ];

  return (
    <section className="py-14 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border-2 border-black rounded-2xl p-5 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white border-2 border-black flex items-center justify-center text-slate-900 shadow-neo-sm">
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm ${item.color}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
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
