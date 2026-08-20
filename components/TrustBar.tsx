import React from "react";
import { ShieldCheck, Truck, Users, Receipt } from "lucide-react";

export const TrustBar: React.FC = () => {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "Legalitas & Izin TPA Resmi",
      desc: "Pembuangan sampah dan puing langsung ke TPA resmi pemerintah, aman dari sanksi lingkungan.",
    },
    {
      icon: Truck,
      title: "Armada Dump Truck Siaga",
      desc: "Kesiapan armada dump truck 4 & 6 roda serta pick-up dalam kondisi prima siap jalan setiap hari.",
    },
    {
      icon: Users,
      title: "Tim Loader Cekatan",
      desc: "Tenaga bongkar muat berpengalaman, terbiasa menangani material berat, puing, dan sampah padat.",
    },
    {
      icon: Receipt,
      title: "Invoice & Pembukuan Resmi",
      desc: "Tersedia kwitansi, invoice resmi, dan dokumen pendukung untuk keperluan pembukuan kantor/proyek.",
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-100 hover:border-emerald-200 transition-colors"
              >
                <div className="w-12 h-12 min-w-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
