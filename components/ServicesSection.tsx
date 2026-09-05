"use client";

import React, { useState } from "react";
import {
  Truck,
  Building2,
  Home,
  TreePine,
  Shovel,
  Sparkles,
  ArrowRight,
  Layers,
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Layanan" },
    { id: "puing", label: "Puing & Proyek" },
    { id: "komersial", label: "Komersial & Kantor" },
    { id: "residensial", label: "Perumahan & Warga" },
    { id: "lahan", label: "Pohon & Lahan" },
  ];

  const services = [
    {
      category: "puing",
      tag: "Puing & Proyek",
      tagColor: "bg-red-50 text-red-700 border border-red-200/60",
      icon: Shovel,
      title: "Angkut Puing & Sisa Bangunan",
      shortDesc: "Pembersihan sisa semen, pecahan keramik, batu bata, dan material renovasi bangunan.",
      specs: ["Puing Beton & Semen", "Bongkaran Tembok", "Sisa Keramik & Genteng", "Paket Tim Loader"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh jasa angkut puing sisa bangunan/renovasi.",
    },
    {
      category: "komersial",
      tag: "Komersial & B2B",
      tagColor: "bg-sky-50 text-sky-700 border border-sky-200/60",
      icon: Building2,
      title: "Sampah Komersial Kantor & Ruko",
      shortDesc: "Layanan rutin untuk ruko, restoran, cafe, pusat perbelanjaan, dan gedung kantor.",
      specs: ["Sampah Restoran & F&B", "Kardus & Plastik Kantor", "Limbah Pasar & Ruko", "Faktur Pajak/Invoice Resmi"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh pengangkutan sampah komersial kantor/ruko.",
    },
    {
      category: "residensial",
      tag: "Residensial",
      tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
      icon: Home,
      title: "Sampah Rumah Tangga & Perumahan",
      shortDesc: "Solusi kebersihan cluster perumahan, rumah indekos, dan sampah rumah tangga volume besar.",
      specs: ["Retribusi Perumahan", "Sampah Pindahan Rumah", "Barang Bekas & Perabotan", "Jadwal Rutin atau Insidental"],
      waText: "Halo CV Keel Mulia Jasa, saya membutuhkan jasa pengangkutan sampah perumahan/rumah tangga.",
    },
    {
      category: "lahan",
      tag: "Pohon & Taman",
      tagColor: "bg-amber-50 text-amber-700 border border-amber-200/60",
      icon: TreePine,
      title: "Penebangan & Angkut Batang Pohon",
      shortDesc: "Layanan penebangan pohon rawan tumbang, pemangkasan dahan, dan evakuasi kayu secara aman.",
      specs: ["Tebang Pohon Besar", "Potong Dahan & Ranting", "Evakuasi Daun & Sampah Kebun", "Peralatan Chainsaw Lengkap"],
      waText: "Halo CV Keel Mulia Jasa, saya membutuhkan jasa penebangan dan pengangkutan kayu/pohon.",
    },
    {
      category: "lahan",
      tag: "Pembersihan Lahan",
      tagColor: "bg-cyan-50 text-cyan-700 border border-cyan-200/60",
      icon: Layers,
      title: "Pembersihan Lahan Kosong & Timbunan",
      shortDesc: "Pembersihan semak belukar, timbunan sampah liar, dan perataan lahan siap bangun.",
      specs: ["Babat Semak Belukar", "Pembersihan Timbunan Liar", "Pembersihan Tanah Kavling", "Armada Dump Truck Siaga"],
      waText: "Halo CV Keel Mulia Jasa, saya membutuhkan jasa pembersihan lahan kosong/timbunan.",
    },
    {
      category: "puing",
      tag: "Sewa Armada",
      tagColor: "bg-purple-50 text-purple-700 border border-purple-200/60",
      icon: Truck,
      title: "Sewa Dump Truck + Tim Loader",
      shortDesc: "Penyewaan dump truck berbasis ritase atau harian, lengkap dengan pengemudi dan tenaga loader profesional.",
      specs: ["Dump Truck Kapasitas 4–6 m³", "Pick Up L300 Rangka Tinggi", "Pengemudi & BBM Termasuk", "Tenaga Angkut Profesional"],
      waText: "Halo CV Keel Mulia Jasa, saya ingin menyewa armada Dump Truck + Tim Loader.",
    },
    {
      category: "komersial",
      tag: "Event & Acara",
      tagColor: "bg-amber-50 text-amber-700 border border-amber-200/60",
      icon: Sparkles,
      title: "Kebersihan Pasca Acara / Event",
      shortDesc: "Pembersihan kilat pasca konser, bazar, pernikahan, festival, dan pameran.",
      specs: ["Standby Saat Event", "Pembersihan Cepat Pasca Acara", "Evakuasi Sampah Skala Ton", "Area Dijamin Bersih Tuntas"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh jasa kebersihan untuk event/acara besar.",
    },
    {
      category: "residensial",
      tag: "Kerja Bakti",
      tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
      icon: CalendarCheck,
      title: "Layanan Kebersihan Insidental (Kerja Bakti)",
      shortDesc: "Armada pengangkut khusus untuk kegiatan kerja bakti lingkungan RT/RW dan kelurahan.",
      specs: ["Armada Siaga di Lokasi", "Pengangkutan Massal Sekaligus", "Diskon Khusus Lingkungan Warga", "Langsung Dibuang ke TPA"],
      waText: "Halo CV Keel Mulia Jasa, kami butuh armada angkut untuk kerja bakti lingkungan warga.",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-transparent border-b border-white/20 relative" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 border border-white/80 shadow-soft-sm text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Layanan Komprehensif</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-sm tracking-tight mt-3 mb-4">
              Solusi Pengangkutan Sampah & Kebersihan Terpadu
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">
              Pilihan layanan lengkap dengan armada mandiri, tenaga loader terlatih, dan jaminan pembuangan langsung ke Tempat Pemrosesan Akhir (TPA).
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal direction="zoom" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-950 text-white shadow-soft-md scale-105"
                    : "bg-white text-slate-800 hover:bg-slate-50 border border-white shadow-soft-xs"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((item, idx) => {
            const Icon = item.icon;
            const direction = idx % 2 === 0 ? "left" : "right";
            const delay = (idx % 4) * 0.1;

            return (
              <ScrollReveal key={idx} direction={direction} delay={delay} className="h-full">
                <div className="h-full bg-white border border-slate-200/80 rounded-3xl p-6 shadow-soft-xs hover:shadow-soft-md hover:border-brand-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-100 group-hover:scale-105 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed mb-5">
                      {item.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <a
                      href={`https://wa.me/6282396193473?text=${encodeURIComponent(item.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-50 hover:bg-brand-600 text-slate-700 hover:text-white border border-slate-200 hover:border-brand-600 text-xs font-semibold transition-all duration-200 shadow-soft-xs hover:shadow-soft-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Pesan Layanan</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <ScrollReveal direction="up" delay={0.2} className="mt-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900">Butuh Paket Borongan Proyek atau Kontrak Retribusi Rutin?</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">Kami siap melakukan survei lokasi gratis dan menyusun Surat Penawaran Harga (SPH) resmi.</p>
              </div>
            </div>

            <a
              href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20kami%20ingin%20jadwalkan%20survei%20lokasi%20dan%20penawaran%20harga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shrink-0 shadow-soft-sm hover:shadow-soft-md transition-all"
            >
              <span>Jadwalkan Survei Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

