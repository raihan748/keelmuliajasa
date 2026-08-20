import React from "react";
import { MapPin, Building, Landmark, Factory, Compass } from "lucide-react";

export const CoverageSection: React.FC = () => {
  const areas = [
    {
      name: "Kota Makassar",
      icon: Building,
      coverage: "Panakkukang, Tamalanrea, Biringkanaya, Rappocini, Manggala, Ujung Pandang, Mariso, Tallo",
      tag: "Pusat Kota",
      color: "bg-neo-yellow text-black",
    },
    {
      name: "Kabupaten Gowa",
      icon: Landmark,
      coverage: "Somba Opu, Pallangga, Barombong, Samata, Hertasning Baru, Bontomarannu",
      tag: "Residensial",
      color: "bg-neo-emerald text-black",
    },
    {
      name: "Kabupaten Maros",
      icon: Compass,
      coverage: "Mandai, Bandara Sultan Hasanuddin, Turikale, Marusu, Moncongloe",
      tag: "Utara & Bandara",
      color: "bg-neo-cyan text-black",
    },
    {
      name: "Kawasan Industri",
      icon: Factory,
      coverage: "Kawasan Industri Makassar (KIMA), Pergudangan Parangloe, Tanjung Bunga, Pelabuhan",
      tag: "Pergudangan & Pabrik",
      color: "bg-neo-blue text-white",
    },
    {
      name: "Proyek Sulawesi Selatan",
      icon: MapPin,
      coverage: "Melayani proyek pembangunan skala besar dan pembersihan lahan di seluruh wilayah Sulsel",
      tag: "Proyek Khusus",
      color: "bg-neo-purple text-white",
    },
  ];

  return (
    <section className="py-24 bg-neo-bg bg-neo-grid border-b-2 border-black" id="area-layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-cyan text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <MapPin className="w-3.5 h-3.5 stroke-[2.5]" />
            Jangkauan Operasional
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Wilayah Jangkauan Armada CV. Keel Mulia Jasa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Armada kami tersebar strategis di titik-titik utama untuk memastikan waktu tempuh tercepat menuju lokasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-black rounded-2xl p-5 text-center shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center mb-3">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border border-black shadow-neo-sm ${area.color}`}>
                      {area.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-slate-50 border-2 border-black text-slate-900 flex items-center justify-center mx-auto mb-3.5 shadow-neo-sm">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="font-black text-base text-slate-900 mb-2">{area.name}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{area.coverage}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
