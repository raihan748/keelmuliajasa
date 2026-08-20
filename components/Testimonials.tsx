import React from "react";
import { Star, User } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ir. Bambang Setyadi",
      role: "Project Manager",
      company: "Kontraktor Renovasi Gedung Komersial",
      text: "Layanan angkut puing dari CV Keel Mulia Jasa sangat memuaskan. 4 ritase puing bongkaran tembok dan semen selesai dalam satu hari. Tim loader-nya gesit dan area proyek disapu bersih sebelum ditinggal.",
      rating: 5,
      tag: "Proyek Konstruksi",
      color: "bg-neo-red text-white",
    },
    {
      name: "H. Syamsul Bahri",
      role: "Ketua Pengelola Lingkungan",
      company: "Kompleks Perumahan Mutiara Gowa",
      text: "Kerja sama pengangkutan sampah rutin perumahan kami dengan CV Keel Mulia Jasa sudah berjalan 2 tahun. Jadwal pengambilan selalu tepat waktu, armada bersih tidak bau menetes di jalan, dan penagihan resmi.",
      rating: 5,
      tag: "Residensial 2 Tahun",
      color: "bg-neo-emerald text-black",
    },
    {
      name: "Dewi Lestari",
      role: "Operational Manager",
      company: "Restoran & Cafe Hertasning",
      text: "Sangat terbantu dengan layanan fast response-nya. Saat sampah event akhir pekan menumpuk banyak, telepon pagi jam 8, jam 10 armada dump truck sudah tiba dan langsung beres.",
      rating: 5,
      tag: "Resto & F&B",
      color: "bg-neo-yellow text-black",
    },
  ];

  return (
    <section className="py-24 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            Testimoni & Kemitraan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Kepercayaan Nyata dari Mitra Kerja Kami
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Komitmen kami adalah memberikan hasil kerja yang bersih, cepat, dan sesuai ekspektasi setiap klien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border-2 border-black rounded-3xl p-7 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm ${rev.color}`}>
                    {rev.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-6 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t-2 border-black">
                <div className="w-11 h-11 rounded-xl bg-white border-2 border-black text-slate-900 flex items-center justify-center shadow-neo-sm">
                  <User className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-amber-600 font-bold">{rev.role}</p>
                  <p className="text-[11px] text-slate-500 font-semibold">{rev.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
