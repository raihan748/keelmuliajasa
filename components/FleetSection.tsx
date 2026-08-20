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
      badgeColor: "bg-neo-red text-white",
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
      badgeColor: "bg-neo-yellow text-black",
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
      badgeColor: "bg-neo-blue text-white",
    },
  ];

  const profileCommitments = [
    {
      title: "Izin Resmi & Legalitas Pembuangan TPA",
      desc: "Seluruh muatan sampah dan puing dibuang ke TPA resmi berizin pemerintah, menjamin kepatuhan AMDAL dan bebas sanksi lingkungan.",
      icon: ShieldCheck,
      color: "text-neo-emerald",
    },
    {
      title: "Garansi Area Bersih & Disapu Tuntas",
      desc: "Tim kami tidak hanya mengangkut sampah, tapi juga membersihkan dan menyapu sisa kotoran di area titik muat sampai rapi.",
      icon: Award,
      color: "text-neo-yellow",
    },
    {
      title: "Transparansi Ritase & Bukti Timbangan",
      desc: "Penghitungan volume muatan yang jujur dengan bukti jalan resmi serta struk timbangan TPA untuk akurasi pelaporan.",
      icon: Scale,
      color: "text-neo-cyan",
    },
    {
      title: "Layanan Dokumen & Faktur Resmi B2B",
      desc: "Penerbitan Surat Penawaran Harga (SPH), Surat Perjanjian Kerja Sama (MoU), Kwitansi stempel resmi, dan Invoice perusahaan.",
      icon: FileCheck,
      color: "text-neo-purple",
    },
  ];

  return (
    <section className="py-24 bg-neo-bg bg-neo-grid border-b-2 border-black" id="armada">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-cyan text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <Truck className="w-3.5 h-3.5 stroke-[2.5]" />
            Dokumentasi & Spesifikasi Armada
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Armada Tangguh Asli CV. Keel Mulia Jasa
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Didukung armada operasional milik sendiri dengan modifikasi khusus bak sampah dan dump truck hidrolik untuk memastikan muatan aman dan cepat sampai di TPA.
          </p>
        </div>

        {/* Real Fleet Cards Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {fleets.map((fleet, idx) => (
            <div
              key={idx}
              className="bg-neo-surface border-2 border-black rounded-3xl overflow-hidden shadow-neo-lg hover:shadow-neo-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-60 w-full overflow-hidden bg-black border-b-2 border-black">
                  <img
                    src={fleet.image}
                    alt={fleet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3.5 right-3.5 text-[10px] font-black uppercase px-3 py-1 rounded-md border-2 border-black shadow-neo-sm ${fleet.badgeColor}`}>
                    {fleet.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-1.5 leading-tight">{fleet.name}</h3>
                  <div className="text-xs font-black text-neo-yellow mb-3.5 bg-neo-card px-2.5 py-1 rounded-md inline-block border border-slate-700">
                    {fleet.capacity}
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed mb-5">{fleet.usage}</p>

                  <div className="pt-4 border-t-2 border-black space-y-2">
                    {fleet.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs font-bold text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-neo-emerald shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{spec}</span>
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
                  <span>Pesan Unit Armada Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Company Profile Commitment & Standards Banner */}
        <div className="bg-neo-surface rounded-3xl p-8 sm:p-10 text-white border-2 border-black shadow-neo-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <div className="w-12 h-12 rounded-xl bg-neo-yellow text-black flex items-center justify-center mb-4 border-2 border-black shadow-neo-sm">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="text-2xl font-black mb-2 text-white">Standar & Komitmen Pelayanan</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                CV. Keel Mulia Jasa memegang teguh standar operasional kebersihan, kepatuhan regulasi lingkungan, dan kepuasan penuh bagi setiap mitra kerja.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileCommitments.map((item, tIdx) => {
                const Icon = item.icon;
                return (
                  <div key={tIdx} className="bg-neo-card p-4 rounded-2xl border-2 border-black shadow-neo-sm flex items-start gap-3.5 hover:-translate-y-0.5 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-neo-surface border-2 border-black text-neo-yellow flex items-center justify-center shrink-0 mt-0.5 shadow-neo-sm">
                      <Icon className={`w-5 h-5 ${item.color} stroke-[2.5]`} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white mb-1 uppercase tracking-wide">{item.title}</div>
                      <div className="text-[11px] text-slate-300 font-medium leading-snug">{item.desc}</div>
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
