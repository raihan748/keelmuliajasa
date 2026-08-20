import React from "react";
import { ShieldCheck, Award, Sparkles, Leaf } from "lucide-react";

export const TrustBar: React.FC = () => {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "Terpercaya",
      desc: "Cleaner beridentitas resmi, lolos verifikasi ketat & berseragam rapi.",
    },
    {
      icon: Award,
      title: "Berpengalaman",
      desc: "Mengikuti SOP hotel berbintang dan terlatih menangani berbagai noda.",
    },
    {
      icon: Sparkles,
      title: "Hasil Maksimal",
      desc: "Pembersihan detail hingga sela terdalam dengan garansi re-clean jika kurang puas.",
    },
    {
      icon: Leaf,
      title: "Chemical Aman",
      desc: "Bahan pembersih ramah lingkungan, non-toksik untuk anak, bumil & hewan peliharaan.",
    },
  ];

  return (
    <section className="bg-white border-b border-brand-border-light py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-bg-subtle transition-colors"
              >
                <div className="w-12 h-12 min-w-12 rounded-xl bg-brand-green-light text-brand-green-darker flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-brand-dark mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
