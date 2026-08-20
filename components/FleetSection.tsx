import React from "react";
import { Truck, ShieldCheck, CheckCircle2, MessageCircle, FileCheck, Scale, Award } from "lucide-react";

export const FleetSection: React.FC = () => {
  const fleets = [
    {
      name: "Dump Truck Merah (Heavy Duty)",
      image: "/images/fleet/dump-truck-merah.jpg",
      capacity: "Kapasitas 4 – 6 m³ (Muatan Berat)",
      usage: "Armada utama untuk angkutan puing cor, sisa bongkaran semen/tembok, tanah, dan sampah padat proyek.",
      specs: [
        "Bak hidrolik jungkit otomatis",
        "Dinding bak baja tebal & kokoh",
        "Siap untuk material berat & puing konstruksi",
      ],
      badge: "Armada Proyek & Puing",
      badgeColor: "bg-red-500/15 text-red-700 border-red-200",
    },
    {
      name: "Pick Up L300 Bak Rangka Tinggi",
      image: "/images/fleet/pickup-l300-bak-tinggi.jpg",
      capacity: "Kapasitas 3 – 4 m³ (Rangka Khusus Sampah)",
      usage: "Didesain dengan pengaman tralis tinggi, optimal untuk sampah kemasan resto, ruko, kardus kantor, dan dahan kayu.",
      specs: [
        "Rangka tralis tinggi anti tercecer",
        "Akses cepat ke pusat kota & pertokoan",
        "Sangat lincah untuk jadwal rutin harian",
      ],
      badge: "Limbah Komersial & Resto",
      badgeColor: "bg-emerald-500/15 text-emerald-700 border-emerald-200",
    },
    {
      name: "Armada Angkut Pemukiman & Residensial",
      image: "/images/fleet/operasional-loading-sampah.jpg",
      capacity: "Kapasitas 2 – 3 m³ (Akses Kompleks)",
      usage: "Melayani pengangkutan sampah perumahan, gang perumahan, kluster, serta pembersihan massal lingkungan.",
      specs: [
        "Akses fleksibel ke gang & jalan sempit",
        "Didukung tim loader cekatan",
        "Pengangkutan bersih tuntas sampai disapu",
      ],
      badge: "Residensial & Perumahan",
      badgeColor: "bg-blue-500/15 text-blue-700 border-blue-200",
    },
  ];

  const profileCommitments = [
    {
      title: "Izin Resmi & Legalitas Pembuangan TPA",
      desc: "Seluruh muatan sampah dan puing dibuang ke TPA resmi berizin pemerintah, menjamin kepatuhan AMDAL dan bebas sanksi lingkungan.",
      icon: ShieldCheck,
    },
    {
      title: "Garansi Area Bersih & Disapu Tuntas",
      desc: "Tim kami tidak hanya mengangkut sampah, tapi juga membersihkan dan menyapu sisa kotoran di area titik muat sampai rapi.",
      icon: Award,
    },
    {
      title: "Transparansi Ritase & Bukti Timbangan",
      desc: "Penghitungan volume muatan yang jujur dengan bukti jalan resmi serta struk timbangan TPA untuk akurasi pelaporan.",
      icon: Scale,
    },
    {
      title: "Layanan Dokumen & Faktur Resmi B2B",
      desc: "Penerbitan Surat Penawaran Harga (SPH), Surat Perjanjian Kerja Sama (MoU), Kwitansi stempel resmi, dan Invoice perusahaan.",
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200" id="armada">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            Dokumentasi & Spesifikasi Armada
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Armada Tangguh Asli CV. Keel Mulia Jasa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Didukung armada operasional milik sendiri dengan modifikasi khusus bak sampah dan dump truck hidrolik untuk memastikan muatan aman dan cepat sampai di TPA.
          </p>
        </div>

        {/* Real Fleet Cards Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {fleets.map((fleet, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={fleet.image}
                    alt={fleet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className={`absolute top-4 right-4 text-[11px] font-black uppercase px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${fleet.badgeColor} bg-white/90`}>
                    {fleet.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 mb-1 leading-tight">{fleet.name}</h3>
                  <div className="text-xs font-extrabold text-emerald-700 mb-3">{fleet.capacity}</div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">{fleet.usage}</p>

                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    {fleet.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20unit%20${encodeURIComponent(fleet.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white font-extrabold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Pesan Unit Armada Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Company Profile Commitment & Standards Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-slate-700 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black mb-2">Standar & Komitmen Pelayanan</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                CV. Keel Mulia Jasa memegang teguh standar operasional kebersihan, kepatuhan regulasi lingkungan, dan kepuasan penuh bagi setiap mitra kerja.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileCommitments.map((item, tIdx) => {
                const Icon = item.icon;
                return (
                  <div key={tIdx} className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-start gap-3.5 hover:bg-white/10 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white mb-1">{item.title}</div>
                      <div className="text-[11px] text-slate-300 leading-snug">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
