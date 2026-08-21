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
      color: "bg-neo-red text-white",
      dir: "left" as const,
    },
    {
      name: "Ibu Rahmawati",
      role: "Ketua Pengelola Cluster Perumahan",
      location: "Somba Opu, Gowa",
      text: "Kami mempercayakan retribusi sampah rutin perumahan ke CV. Keel Mulia Jasa. Penagihan jelas berbadan hukum CV, jadwal pengangkutan tertib, dan armada pick up rangka tingginya muat banyak.",
      tag: "Kontrak Perumahan",
      color: "bg-neo-emerald text-black",
      dir: "zoom" as const,
    },
    {
      name: "Andi Fauzan",
      role: "Owner Cafe & Restoran",
      location: "Tamalanrea, Makassar",
      text: "Sampah harian sisa restoran dan kardus logistik selalu diangkut tepat waktu setiap pagi. Area belakang dapur jadi selalu steril dan higienis. Sangat direkomendasikan!",
      tag: "Sampah Komersial",
      color: "bg-neo-yellow text-black",
      dir: "right" as const,
    },
  ];

  return (
    <section className="py-24 bg-white border-b-2 border-black" id="testimoni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
              <Star className="w-3.5 h-3.5 stroke-[2.5]" />
              Pengalaman Pelanggan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Kepercayaan Klien Residensial & Bisnis
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Komitmen kami adalah memberikan hasil kerja yang rapi, tuntas, dan tepat waktu untuk setiap mitra dan pelanggan.
            </p>
          </div>
        </ScrollReveal>

        {/* Review Cards Grid with Lateral Slide-Ins */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <ScrollReveal key={idx} direction={rev.dir} delay={idx * 0.12} className="h-full">
              <div className="h-full bg-slate-50 border-2 border-black rounded-3xl p-7 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm ${rev.color}`}>
                      {rev.tag}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 font-medium leading-relaxed mb-6 italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neo-yellow border-2 border-black flex items-center justify-center text-slate-900 font-black text-sm shadow-neo-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-slate-900">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500 font-bold">{rev.role} • <span className="text-slate-700">{rev.location}</span></p>
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
