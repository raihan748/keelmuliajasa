import React from "react";
import { MapPin, Building, Landmark, Factory, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const CoverageSection: React.FC = () => {
  const areas = [
    {
      name: "Kota Makassar",
      icon: Building,
      coverage: "Panakkukang, Tamalanrea, Biringkanaya, Rappocini, Manggala, Ujung Pandang, Mariso, Tallo",
      tag: "Pusat Kota",
      color: "bg-brand-50 text-brand-700 border border-brand-200/60",
    },
    {
      name: "Kabupaten Gowa",
      icon: Landmark,
      coverage: "Somba Opu, Pallangga, Barombong, Samata, Hertasning Baru, Bontomarannu",
      tag: "Residensial",
      color: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
    {
      name: "Kabupaten Maros",
      icon: Compass,
      coverage: "Mandai, Bandara Sultan Hasanuddin, Turikale, Marusu, Moncongloe",
      tag: "Utara & Bandara",
      color: "bg-sky-50 text-sky-700 border border-sky-200/60",
    },
    {
      name: "Kawasan Industri",
      icon: Factory,
      coverage: "Kawasan Industri Makassar (KIMA), Pergudangan Parangloe, Tanjung Bunga, Pelabuhan",
      tag: "Pabrik & Gudang",
      color: "bg-purple-50 text-purple-700 border border-purple-200/60",
    },
    {
      name: "Sulawesi Selatan",
      icon: MapPin,
      coverage: "Melayani proyek pembangunan skala besar dan pembersihan lahan di seluruh wilayah Sulsel",
      tag: "Proyek Khusus",
      color: "bg-amber-50 text-amber-700 border border-amber-200/60",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 border-b border-slate-100" id="area-layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60 shadow-soft-xs text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>Jangkauan Operasional</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Wilayah Jangkauan Armada CV. Keel Mulia Jasa
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Armada kami tersebar strategis di titik-titik utama untuk memastikan waktu tempuh tercepat menuju lokasi Anda.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
                <div
                  className="h-full bg-white border border-slate-200/80 rounded-3xl p-6 text-center shadow-soft-xs hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-center mb-3.5">
                      <span className={`text-[11px] font-semibold px-3 py-0.5 rounded-full ${area.color}`}>
                        {area.tag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-base text-slate-900 mb-2">{area.name}</h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">{area.coverage}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

