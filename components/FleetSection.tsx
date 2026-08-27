import React from "react";
import { Truck, ShieldCheck, CheckCircle2, MessageCircle, Scale } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const FleetSection: React.FC = () => {
  const fleetData = [
    {
      name: "Dump Truck Merah (Heavy Duty)",
      specs: "Kapasitas 4 - 6 m³ (1 Ritase Penuh)",
      loadType: "Puing Sisa Bangunan, Beton, Semen, Tanah & Batang Pohon",
      image: "/images/fleet/dump-truck-merah.jpg",
      tag: "Proyek & Puing",
      badgeColor: "bg-red-50 text-red-700 border border-red-200/60",
      direction: "left" as const,
      features: [
        "Sistem dump hidrolik bongkar muatan cepat",
        "Kapasitas beban berat s/d 5-7 ton",
        "Dilengkapi terpal pengaman anti-ceceran",
        "Cocok untuk proyek renovasi & konstruksi besar",
      ],
    },
    {
      name: "Pick Up L300 Bak Rangka Tinggi",
      specs: "Kapasitas 3 - 4 m³ (Rangka Besi Pengaman)",
      loadType: "Sampah Komersial Ruko, Restoran, Dahan Pohon & Pemukiman",
      image: "/images/fleet/pickup-l300-bak-tinggi.jpg",
      tag: "Ruko & Residensial",
      badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
      direction: "zoom" as const,
      features: [
        "Rangka besi tinggi memuat sampah volume besar",
        "Akses mudah ke jalan lingkungan & gang sempit",
        "Waktu respons cepat untuk pesanan mendesak",
        "Ideal untuk sampah harian kafe & perumahan",
      ],
    },
    {
      name: "Armada Operasional & Tim Loader",
      specs: "Paket Lengkap Unit + BBM + Tim Bongkar Muat",
      loadType: "Penanganan Seluruh Jenis Sampah di Lokasi",
      image: "/images/fleet/operasional-loading-sampah.jpg",
      tag: "Layanan All-In",
      badgeColor: "bg-sky-50 text-sky-700 border border-sky-200/60",
      direction: "right" as const,
      features: [
        "Tim loader sigap menaikkan karung sampah",
        "Dilengkapi sekop, cangkul, sapu, & karung goni",
        "Standar keselamatan kerja & APD lengkap (K3)",
        "Garansi area pemuatan ditinggalkan bersih tuntas",
      ],
    },
  ];

  const commitments = [
    {
      title: "Pembuangan Langsung ke TPA",
      desc: "Seluruh muatan sampah diangkut dan dibuang langsung ke TPA resmi, bukan dibuang di pinggir jalan atau lahan liar.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-700",
      dir: "left" as const,
    },
    {
      title: "Garansi Area Bersih Tuntas",
      desc: "Tim kami menyapu dan membersihkan sisa debu/ceceran di titik muat sebelum meninggalkan lokasi.",
      icon: CheckCircle2,
      color: "bg-amber-50 text-amber-700",
      dir: "right" as const,
    },
    {
      title: "Transparansi Ritase & Muatan",
      desc: "Perhitungan kapasitas akurat tanpa manipulasi, transparan dan dapat dipertanggungjawabkan.",
      icon: Scale,
      color: "bg-cyan-50 text-cyan-700",
      dir: "left" as const,
    },
    {
      title: "Dokumen & Faktur B2B Resmi",
      desc: "Kelengkapan invoice resmi CV, kwitansi, SPH, dan surat jalan berstempel resmi untuk instansi/perusahaan.",
      icon: ShieldCheck,
      color: "bg-purple-50 text-purple-700",
      dir: "right" as const,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100" id="armada">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60 shadow-soft-xs text-xs font-semibold">
              <Truck className="w-3.5 h-3.5 text-brand-600" />
              <span>Kesiapan Logistik & Armada</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Armada Milik Sendiri Siap Operasional Setiap Hari
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Didukung unit dump truck dan pick up dalam kondisi prima serta tim loader berpengalaman untuk menjamin kebersihan maksimal di lokasi Anda.
            </p>
          </div>
        </ScrollReveal>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {fleetData.map((fleet, idx) => (
            <ScrollReveal key={idx} direction={fleet.direction} delay={idx * 0.12} className="h-full">
              <div className="h-full bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-soft-xs hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Photo Frame */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={fleet.image}
                      alt={fleet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full shadow-soft-xs ${fleet.badgeColor}`}>
                      {fleet.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                      {fleet.name}
                    </h3>
                    <div className="text-xs font-semibold text-brand-600 mb-3 font-mono">
                      {fleet.specs}
                    </div>

                    <p className="text-xs text-slate-600 font-normal mb-4 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-150">
                      <strong className="text-slate-800 font-semibold">Muatan:</strong> {fleet.loadType}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {fleet.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={`https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20unit%20${encodeURIComponent(fleet.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-all shadow-soft-xs hover:shadow-soft-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Booking Unit Ini</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Official Company Profile Commitments Showcase */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-soft-sm">
            <div className="max-w-3xl mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-2.5 border border-brand-200/60 shadow-soft-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                <span>Komitmen Standar Pelayanan Resmi</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4 Pilar Jaminan Kualitas CV. Keel Mulia Jasa
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                Sesuai dengan standar operasional company profile kami dalam melayani setiap klien perumahan, komersial, maupun industri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((com, cIdx) => {
                const Icon = com.icon;
                return (
                  <ScrollReveal key={cIdx} direction={com.dir} delay={cIdx * 0.1}>
                    <div className="h-full bg-white border border-slate-200/80 rounded-2xl p-6 shadow-soft-xs hover:shadow-soft-md transition-all flex flex-col justify-between">
                      <div>
                        <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm mb-2">{com.title}</h4>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">{com.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

