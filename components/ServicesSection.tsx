"use client";

import React from "react";
import { motion } from "framer-motion";
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
  tagColor: string;
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
      tagColor: "bg-neo-red text-white",
      pricing: "Mulai Rp 350.000 / rit",
      features: [
        "Tersedia armada Dump Truck Merah",
        "Termasuk tim tenaga angkut/loader",
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
      tagColor: "bg-neo-yellow text-black",
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
      tagColor: "bg-neo-blue text-white",
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
      tagColor: "bg-neo-emerald text-black",
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
      tagColor: "bg-neo-purple text-white",
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
      tagColor: "bg-neo-cyan text-black",
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
      tagColor: "bg-neo-yellow text-black",
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
      tagColor: "bg-neo-emerald text-black",
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
    <section className="py-24 bg-neo-bg border-b-2 border-black" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            Layanan Utama Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Solusi Pengangkutan Sampah & Kebersihan Terpadu
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Didukung armada dump truck lengkap dan tim loader profesional, kami melayani berbagai jenis pengangkutan sampah dengan pembuangan resmi ke TPA.
          </p>
        </div>

        {/* 8 Services Neobrutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className={`bg-neo-surface rounded-2xl p-6 border-2 border-black shadow-neo hover:shadow-neo-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between ${
                  item.popular ? "ring-2 ring-neo-yellow" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-neo-card border-2 border-black flex items-center justify-center text-neo-yellow shadow-neo-sm">
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>

                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm ${item.tagColor}`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-black text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t-2 border-black mb-5">
                    <ul className="space-y-1.5">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-200 font-semibold">
                          <Check className="w-3.5 h-3.5 text-neo-emerald shrink-0 mt-0.5 stroke-[3]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-black mt-auto">
                  <div className="mb-3 bg-neo-card p-2 rounded-lg border border-slate-700">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Estimasi Tarif:</span>
                    <span className="text-xs font-black text-neo-yellow">{item.pricing}</span>
                  </div>

                  <a
                    href={`https://wa.me/6282396193473?text=${encodeURIComponent(item.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black font-black text-xs border-2 border-black shadow-neo-sm hover:shadow-neo transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Pesan / Tanya Tarif</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
