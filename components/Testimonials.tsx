import React from "react";
import { Star, Building2, User } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ir. Bambang Setyadi",
      role: "Project Manager",
      company: "Kontraktor Renovasi Gedung Komersial",
      text: "Layanan angkut puing dari CV Keel Mulia Jasa sangat memuaskan. 4 ritase puing bongkaran tembok dan semen selesai dalam satu hari. Tim loader-nya gesit dan area proyek disapu bersih sebelum ditinggal.",
      rating: 5,
    },
    {
      name: "H. Syamsul Bahri",
      role: "Ketua Pengelola Lingkungan",
      company: "Kompleks Perumahan Mutiara Gowa",
      text: "Kerja sama pengangkutan sampah rutin perumahan kami dengan CV Keel Mulia Jasa sudah berjalan 2 tahun. Jadwal pengambilan selalu tepat waktu, armada bersih tidak bau menetes di jalan, dan penagihan resmi.",
      rating: 5,
    },
    {
      name: "Dewi Lestari",
      role: "Operational Manager",
      company: "Restoran & Cafe Hertasning",
      text: "Sangat terbantu dengan layanan fast response-nya. Saat sampah event akhir pekan menumpuk banyak, telepon pagi jam 8, jam 10 armada dump truck sudah tiba dan langsung beres.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Testimoni & Kemitraan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Kepercayaan Nyata dari Mitra Kerja Kami
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Komitmen kami adalah memberikan hasil kerja yang bersih, cepat, dan sesuai ekspektasi setiap klien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 font-black text-base flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-emerald-700 font-semibold">{rev.role}</p>
                  <p className="text-[11px] text-slate-500">{rev.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
