import React from "react";
import { ShieldCheck, Truck, Users, Receipt } from "lucide-react";

export const TrustBar: React.FC = () => {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "Legalitas Izin TPA",
      desc: "Pembuangan langsung ke Tempat Pembuangan Akhir resmi pemerintah tanpa risiko sanksi.",
      tag: "100% Legal",
      color: "bg-neo-emerald text-black",
    },
    {
      icon: Truck,
      title: "Armada Milik Sendiri",
      desc: "Kesiapan armada dump truck dan pick up bak tralis tinggi dalam kondisi prima siap jalan.",
      tag: "Siap Setiap Hari",
      color: "bg-neo-yellow text-black",
    },
    {
      icon: Users,
      title: "Tim Loader Cekatan",
      desc: "Tenaga bongkar muat berpengalaman, terlatih menangani puing berat, dan menyapu bersih.",
      tag: "Terima Beres",
      color: "bg-neo-blue text-white",
    },
    {
      icon: Receipt,
      title: "Dokumen B2B Resmi",
      desc: "Tersedia kwitansi, invoice resmi, SPH, dan surat jalan untuk pembukuan kantor/perusahaan.",
      tag: "Invoice Ready",
      color: "bg-neo-purple text-white",
    },
  ];

  return (
    <section className="bg-neo-bg py-10 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-neo-surface border-2 border-black shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-neo-card border-2 border-black flex items-center justify-center text-neo-yellow shadow-neo-sm">
                      <Icon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm ${item.color}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-black text-base text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
