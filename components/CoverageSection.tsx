import React from "react";
import { MapPin, Building, Landmark, Factory, Compass } from "lucide-react";

export const CoverageSection: React.FC = () => {
  const areas = [
    {
      name: "Kota Makassar",
      icon: Building,
      coverage: "Panakkukang, Tamalanrea, Biringkanaya, Rappocini, Manggala, Ujung Pandang, Mariso, Tallo",
    },
    {
      name: "Kabupaten Gowa",
      icon: Landmark,
      coverage: "Somba Opu, Pallangga, Barombong, Samata, Hertasning Baru, Bontomarannu",
    },
    {
      name: "Kabupaten Maros",
      icon: Compass,
      coverage: "Mandai, Bandara Sultan Hasanuddin, Turikale, Marusu, Moncongloe",
    },
    {
      name: "Kawasan Industri & Pergudangan",
      icon: Factory,
      coverage: "Kawasan Industri Makassar (KIMA), Pergudangan Parangloe, Tanjung Bunga, Pelabuhan",
    },
    {
      name: "Proyek Khusus Sulawesi Selatan",
      icon: MapPin,
      coverage: "Melayani proyek pembangunan skala besar dan pembersihan lahan di seluruh wilayah Sulsel",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200" id="area-layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Jangkauan Operasional
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Wilayah Jangkauan Armada CV. Keel Mulia Jasa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Armada kami tersebar strategis di titik-titik utama untuk memastikan waktu tempuh tercepat menuju lokasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center hover:bg-white hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3.5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">{area.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{area.coverage}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
