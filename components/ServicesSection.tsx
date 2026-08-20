import React from "react";
import {
  Home,
  Building2,
  Hammer,
  Trees,
  Shovel,
  Truck,
  PartyPopper,
  FileCheck,
  Check,
  MessageCircle,
} from "lucide-react";

interface ServiceCardItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  icon: React.ElementType;
  popular?: boolean;
  pricing: string;
  features: string[];
  waText: string;
}

export const ServicesSection: React.FC = () => {
  const services: ServiceCardItem[] = [
    {
      id: "puing-bangunan",
      title: "Pengangkutan Puing Bangunan & Proyek",
      category: "Proyek & Konstruksi",
      desc: "Pengangkutan cepat sisa puing tembok, semen, batu bata, keramik hancur, plafon, dan kayu pasca renovasi maupun pembongkaran gedung.",
      icon: Hammer,
      popular: true,
      pricing: "Mulai Rp 350.000 / rit",
      features: [
        "Tersedia armada Dump Truck 4 & 6 Roda",
        "Termasuk tim tenaga angkut/loader berpengalaman",
        "Pembuangan langsung ke lokasi TPA resmi",
      ],
      waText: "Halo CV Keel Mulia Jasa, saya mau order jasa angkut puing sisa bangunan/renovasi",
    },
    {
      id: "sampah-komersial",
      title: "Sampah Komersial Kantor & Restoran",
      category: "Bisnis & Komersial",
      desc: "Pengambilan rutin maupun insidentil sampah perkantoran, ruko, restoran, cafe, supermarket, dan hotel dengan sistem retribusi terpadu.",
      icon: Building2,
      popular: true,
      pricing: "Kontrak Fleksibel Bulanan / Ritase",
      features: [
        "Jadwal pengangkutan tepat waktu & terjadwal",
        "Bisa terbitkan invoice & faktur resmi perusahaan",
        "Menjaga kebersihan area bisnis tetap higienis",
      ],
      waText: "Halo CV Keel Mulia Jasa, saya ingin info kerja sama pengangkutan sampah komersial kantor/restoran",
    },
    {
      id: "sampah-perumahan",
      title: "Sampah Rumah Tangga & Perumahan",
      category: "Residensial",
      desc: "Layanan angkut sampah untuk kompleks perumahan, cluster, perorangan, atau kos-kosan dengan jadwal pengambilan teratur.",
      icon: Home,
      pricing: "Mulai Rp 150.000 / rit (Pick Up)",
      features: [
        "Pengangkutan sampah domestik & perabotan lama",
        "Melayani pembersihan massal perumahan",
        "Kondisi lingkungan tetap asri dan bebas bau",
      ],
      waText: "Halo CV Keel Mulia Jasa, saya ingin pesan layanan angkut sampah rumah tangga/perumahan",
    },
    {
      id: "tebang-pohon",
      title: "Penebangan Pohon & Evakuasi Ranting",
      category: "Landscape & Outdoor",
      desc: "Jasa pemotongan pohon berisiko, pemangkasan dahan rimbun, serta pengangkutan batang kayu dan dedaunan hingga bersih tuntas.",
      icon: Trees,
      pricing: "Sesuai Ukuran & Volume Pohon",
      features: [
        "Peralatan gergaji mesin (Chain Saw) lengkap",
        "Pengerjaan aman memperhatikan instalasi sekitar",
        "Pembersihan dan pengangkutan kayu sampai bersih",
      ],
      waText: "Halo CV Keel Mulia Jasa, saya butuh jasa tebang pohon dan angkut dahan rantingnya",
    },
    {
      id: "pembersihan-lahan",
      title: "Pembersihan Lahan Kosong & Timbunan",
      category: "Land Clearing",
      desc: "Pengurasan lahan tidur dari timbunan sampah liar, semak belukar, puing, dan barang rongsok agar lahan siap pakai atau siap bangun.",
      icon: Shovel,
      popular: true,
      pricing: "Survei Lokasi & Paket Volume",
      features: [
        "Pembersihan lahan secara menyeluruh",
        "Pengerahan tenaga loader & armada besar",
        "Lahan kembali rata, bersih, dan bernilai jual",
      ],
      waText: "Halo CV Keel Mulia Jasa, saya ingin konsultasi pembersihan lahan kosong dari timbunan sampah",
    },
    {
      id: "sewa-dump-truck",
      title: "Sewa Dump Truck + Tim Loader",
      category: "Armada & Logistik",
      desc: "Penyewaan armada dump truck (4 roda atau 6 roda) beserta supir handal dan kuli angkut untuk berbagai kebutuhan logistik sampah.",
      icon: Truck,
      pricing: "Tarif Sewa Harian / Ritase",
      features: [
        "Armada terawat, bak hidrolik fungsi prima",
        "Tenaga loader kuat, cekatan & berseragam",
        "Bisa pesan mendadak untuk kebutuhan urgent",
      ],
      waText: "Halo CV Keel Mulia Jasa, saya ingin sewa armada Dump Truck dan tenaga loader",
    },
    {
      id: "sampah-event",
      title: "Pengangkutan Sampah Event & Konser",
      category: "Event Management",
      desc: "Layanan kebersihan dan evakuasi sampah cepat pasca festival, konser musik, pesta pernikahan, bazaar, pameran, atau gathering akbar.",
      icon: PartyPopper,
      pricing: "Paket Event Standby / Post-Event",
      features: [
        "Tim standby kebersihan selama acara berlangsung",
        "Pengangkutan cepat pasca acara (night clearing)",
        "Venue kembali bersih memenuhi standar pengelola",
      ],
      waText: "Halo CV Keel Mulia Jasa, saya butuh layanan angkutan sampah untuk acara/event",
    },
    {
      id: "kontrak-b2b",
      title: "Kerja Sama Kontrak B2B & Retribusi",
      category: "Kemitraan Jangka Panjang",
      desc: "Solusi kemitraan pengelolaan sampah terpadu untuk kawasan industri, rumah sakit, universitas, apartemen, dan pengembang properti.",
      icon: FileCheck,
      pricing: "Penawaran B2B Khusus (SLA & SOP)",
      features: [
        "Perjanjian kerja sama (MoU) resmi & legal",
        "Pelaporan berkala dan kepatuhan standar AMDAL",
        "Dedicated armada & jadwal prioritas utama",
      ],
      waText: "Halo CV Keel Mulia Jasa, kami dari perusahaan ingin mengajukan proposal kerja sama B2B pengelolaan sampah",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Layanan Utama Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Solusi Pengangkutan Sampah & Kebersihan Terpadu
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Didukung armada dump truck lengkap dan tim loader profesional, kami melayani berbagai jenis pengangkutan sampah dengan pembuangan resmi ke TPA.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl ${
                  item.popular
                    ? "border-emerald-500 shadow-md relative"
                    : "border-slate-200 hover:border-emerald-300 shadow-sm"
                }`}
              >
                {item.popular && (
                  <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-sm">
                    Populer
                  </span>
                )}

                <div>
                  <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4.5 border border-emerald-100">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wide">
                    {item.category}
                  </span>
                  
                  <h3 className="text-lg font-black text-slate-900 mt-1 mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-dashed border-slate-200 mb-5">
                    <ul className="space-y-1.5">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <div className="mb-3">
                    <span className="text-[11px] text-slate-500 font-semibold block">Estimasi Tarif:</span>
                    <span className="text-xs font-black text-emerald-800">{item.pricing}</span>
                  </div>

                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(item.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-sm transition-all hover:shadow-emerald-600/30 active:scale-98"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Pesan / Tanya Tarif</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
