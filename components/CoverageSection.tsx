import React from "react";
import { Building2, Trees, Home, Factory, Landmark } from "lucide-react";

export const CoverageSection: React.FC = () => {
  const regions = [
    {
      city: "Jakarta Selatan",
      icon: Building2,
      areas: "Kebayoran, Pondok Indah, Cilandak, Kemang, Tebet, Kuningan, Jagakarsa",
    },
    {
      city: "Jakarta Pusat & Barat",
      icon: Landmark,
      areas: "Menteng, Sudirman, Tanah Abang, Puri Indah, Kebon Jeruk, Tomang, Pluit",
    },
    {
      city: "Tangerang & Tangsel",
      icon: Trees,
      areas: "BSD City, Bintaro, Alam Sutera, Gading Serpong, Ciputat, Pamulang, Karawaci",
    },
    {
      city: "Depok & Bogor",
      icon: Home,
      areas: "Margonda, Cinere, Sawangan, Cibubur, Sentul City, Bogor Kota, Cibinong",
    },
    {
      city: "Bekasi & Jaktim",
      icon: Factory,
      areas: "Summarecon Bekasi, Harapan Indah, Rawamangun, Duren Sawit, Galaxy",
    },
  ];

  return (
    <section className="py-20 bg-white" id="area-layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green-light text-brand-green-darker border border-brand-green/30 text-xs font-bold uppercase tracking-wider mb-3">
            Wilayah Operasional
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-4">
            Melayani Seluruh Penjuru Jabodetabek
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            Armada cleaner CleanUp IND tersebar strategis sehingga dapat tiba cepat di lokasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {regions.map((reg, idx) => {
            const Icon = reg.icon;
            return (
              <div
                key={idx}
                className="bg-brand-bg-subtle border border-brand-border rounded-2xl p-5 text-center hover:bg-white hover:border-brand-green hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green-darker flex items-center justify-center mx-auto mb-3.5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-base text-brand-dark mb-1.5">{reg.city}</h3>
                  <p className="text-xs text-brand-gray leading-relaxed">{reg.areas}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
