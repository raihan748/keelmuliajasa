import React from "react";
import { Star } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rina Saraswati",
      role: "Ibu Rumah Tangga",
      location: "BSD City, Tangerang",
      initial: "R",
      text: "Pesan deep cleaning setelah renovasi rumah di BSD. Hasilnya luar biasa bersih, sisa debu semen dan cat di keramik hilang total. Tim datang tepat waktu dan kerjanya sangat teliti.",
    },
    {
      name: "Dimas Pratama",
      role: "Profesional",
      location: "Apartemen Sudirman Park, Jakarta",
      initial: "D",
      text: "Hydrovacuum kasur dan sofanya juara banget! Anak saya yang tadinya sering bersin karena alergi debu sekarang tidurnya jauh lebih nyenyak. Chemical-nya juga wangi segar dan gak bikin perih.",
    },
    {
      name: "Melinda Kusuma",
      role: "Owner Kafe",
      location: "Senopati, Jakarta Selatan",
      initial: "M",
      text: "Kamar mandi yang keramiknya berkerak kuning bertahun-tahun bisa kembali kinclong seperti baru lagi. Admin WhatsApp-nya juga responsif banget saat saya booking mendadak. Sangat direkomendasikan!",
    },
  ];

  return (
    <section className="py-20 bg-brand-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green-light text-brand-green-darker border border-brand-green/30 text-xs font-bold uppercase tracking-wider mb-3">
            Testimoni Klien
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-4">
            Apa Kata Mereka Tentang CleanUp IND?
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            Kepuasan dan kenyamanan hunian bersih Anda adalah prioritas nomor satu kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border rounded-2xl p-7 shadow-subtle flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-brand-dark-muted leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-brand-border-light">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-brand-green-light to-emerald-200 text-brand-green-darker font-black text-base flex items-center justify-center">
                  {rev.initial}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-brand-dark">{rev.name}</h4>
                  <p className="text-xs text-brand-gray">{rev.role} • {rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
