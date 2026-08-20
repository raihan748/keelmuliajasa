import React from "react";
import { Truck, ShieldCheck, CheckCircle2, MessageCircle, Scale } from "lucide-react";

export const FleetSection: React.FC = () => {
  const fleetData = [
    {
      name: "Dump Truck Merah (Heavy Duty)",
      specs: "Kapasitas 4 - 6 m³ (1 Ritase Penuh)",
      loadType: "Puing Sisa Bangunan, Beton, Semen, Tanah & Batang Pohon",
      image: "/images/fleet/dump-truck-merah.jpg",
      tag: "Proyek & Puing",
      badgeColor: "bg-neo-red text-white",
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
      badgeColor: "bg-neo-emerald text-black",
      features: [
        "Rangka besi tinggi memuat sampah volume besar",
        "Akses mudah ke jalan lingkungan & gang sempit",
        "Waktu respon cepat untuk pesanan mendesak",
        "Ideal untuk sampah harian cafe & perumahan",
      ],
    },
    {
      name: "Armada Operasional & Tim Loader",
      specs: "Paket Lengkap Unit + BBM + Tim Bongkar Muat",
      loadType: "Penanganan Seluruh Jenis Sampah di Lokasi",
      image: "/images/fleet/operasional-loading-sampah.jpg",
      tag: "Layanan All-In",
      badgeColor: "bg-neo-blue text-white",
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
      title: "Izin Resmi TPA Pemerintah",
      desc: "100% pembuangan legal berizin ke TPA resmi pemerintah daerah, bukan lahan liar.",
      icon: ShieldCheck,
      color: "bg-neo-emerald text-black",
    },
    {
      title: "Garansi Area Bersih Tuntas",
      desc: "Tim kami menyapu dan membersihkan sisa debu/ceceran di titik muat sebelum meninggalkan lokasi.",
      icon: CheckCircle2,
      color: "bg-neo-yellow text-black",
    },
    {
      title: "Transparansi Ritase & Timbangan",
      desc: "Perhitungan kapasitas akurat tanpa manipulasi, siap sertakan bukti struk timbangan resmi TPA.",
      icon: Scale,
      color: "bg-neo-cyan text-black",
    },
    {
      title: "Dokumen & Faktur B2B Resmi",
      desc: "Kelengkapan invoice resmi CV, kwitansi, SPH, dan surat jalan bermaterai untuk instansi/perusahaan.",
      icon: ShieldCheck,
      color: "bg-neo-purple text-white",
    },
  ];

  return (
    <section className="py-24 bg-white border-b-2 border-black" id="armada">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <Truck className="w-3.5 h-3.5 stroke-[2.5]" />
            Kesiapan Logistik & Armada
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Armada Milik Sendiri Siap Operasional 24 Jam
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Didukung unit dump truck dan pick up dalam kondisi prima serta tim loader berpengalaman untuk menjamin kebersihan maksimal di lokasi Anda.
          </p>
        </div>

        {/* Fleet Cards Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {fleetData.map((fleet, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border-2 border-black rounded-3xl overflow-hidden shadow-neo hover:shadow-neo-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-200 border-b-2 border-black">
                  <img
                    src={fleet.image}
                    alt={fleet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3.5 right-3.5 text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-black shadow-neo-sm ${fleet.badgeColor}`}>
                    {fleet.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-900 mb-1 leading-snug">
                    {fleet.name}
                  </h3>
                  <div className="text-xs font-black text-amber-600 mb-3 font-mono">
                    {fleet.specs}
                  </div>

                  <p className="text-xs text-slate-600 font-semibold mb-4 leading-relaxed bg-white p-2.5 rounded-xl border border-slate-200">
                    <strong className="text-slate-800">Muatan:</strong> {fleet.loadType}
                  </p>

                  <div className="space-y-2 pt-2 border-t-2 border-black">
                    {fleet.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20unit%20${encodeURIComponent(fleet.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neo-yellow group-hover:bg-neo-emerald text-black font-black text-xs border-2 border-black shadow-neo transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Booking Unit Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Company Profile Commitments Showcase */}
        <div className="bg-slate-50 border-2 border-black rounded-3xl p-8 sm:p-10 shadow-neo-xl">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neo-emerald text-black text-[11px] font-black uppercase tracking-wider mb-2.5 border-2 border-black shadow-neo-sm">
              <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
              Komitmen Standar Pelayanan Resmi
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              4 Pilar Jaminan Kualitas CV. Keel Mulia Jasa
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Sesuai dengan standar operasional company profile kami dalam melayani setiap klien perumahan, komersial, maupun industri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((com, cIdx) => {
              const Icon = com.icon;
              return (
                <div
                  key={cIdx}
                  className="bg-white border-2 border-black rounded-2xl p-5 shadow-neo hover:shadow-neo-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border-2 border-black flex items-center justify-center mb-4 text-slate-900 shadow-neo-sm">
                      <Icon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h4 className="font-black text-slate-900 text-sm mb-2">{com.title}</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{com.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
