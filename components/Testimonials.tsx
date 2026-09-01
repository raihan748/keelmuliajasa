import React from "react";
import { Star, Quote, Building2, UserCheck, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Bpk. H. Syamsuddin",
      role: "Kontraktor & Pengembang Ruko",
      location: "Panakkukang, Makassar",
      text: "Sangat terbantu untuk pembersihan puing cor beton sisa pembongkaran ruko 3 lantai. Armada dump truck datang tepat waktu dan tim loader bekerja sangat rapi sampai disapu bersih.",
      tag: "Puing Konstruksi",
      color: "bg-red-50 text-red-700 border border-red-200/60",
      dir: "left" as const,
    },
    {
      name: "Ibu Rahmawati",
      role: "Ketua Pengelola Cluster Perumahan",
      location: "Somba Opu, Gowa",
      text: "Kami mempercayakan retribusi sampah rutin perumahan ke CV. Keel Mulia Jasa. Penagihan jelas berbadan hukum CV, jadwal pengangkutan tertib, dan armada pick up rangka tingginya muat banyak.",
      tag: "Kontrak Perumahan",
      color: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
      dir: "zoom" as const,
    },
    {
      name: "Andi Fauzan",
      role: "Pemilik Kafe & Restoran",
      location: "Tamalanrea, Makassar",
      text: "Sampah harian sisa restoran dan kardus logistik selalu diangkut tepat waktu setiap pagi. Area belakang dapur jadi selalu steril dan higienis. Sangat direkomendasikan!",
      tag: "Sampah Komersial",
      color: "bg-amber-50 text-amber-700 border border-amber-200/60",
      dir: "right" as const,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-transparent border-b border-white/20" id="testimoni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 border border-white/80 shadow-soft-sm text-xs font-bold">
              <Star className="w-3.5 h-3.5 text-blue-600" />
              <span>Pengalaman Pelanggan</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mt-3 mb-4">
              Kepercayaan Klien Residensial & Bisnis
            </h2>
            <p className="text-base sm:text-lg text-slate-950 font-medium leading-relaxed">
              Komitmen kami adalah memberikan hasil kerja yang rapi, tuntas, dan tepat waktu untuk setiap mitra dan pelanggan.
            </p>
          </div>
        </ScrollReveal>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <ScrollReveal key={idx} direction={rev.dir} delay={idx * 0.12} className="h-full">
              <div className="h-full bg-white border border-white/90 rounded-3xl p-7 sm:p-8 shadow-soft-sm hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${rev.color}`}>
                      {rev.tag}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 font-normal leading-relaxed mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{rev.role} • <span className="text-slate-700">{rev.location}</span></p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

