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

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Layanan" },
    { id: "puing", label: "Puing & Konstruksi" },
    { id: "komersial", label: "Komersial & Kantor" },
    { id: "residensial", label: "Perumahan & Warga" },
    { id: "lahan", label: "Pohon & Lahan" },
  ];

  const services = [
    {
      category: "puing",
      tag: "Puing & Proyek",
      tagColor: "bg-neo-red text-white",
      icon: Shovel,
      title: "Angkut Puing & Sisa Bangunan",
      shortDesc: "Pembersihan sisa semen, pecahan keramik, batu bata, dan material renovasi.",
      specs: ["Puing Beton & Semen", "Bongkaran Tembok", "Sisa Keramik & Genteng", "Paket Tim Loader"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh jasa angkut puing sisa bangunan/renovasi.",
    },
    {
      category: "komersial",
      tag: "Komersial & B2B",
      tagColor: "bg-neo-blue text-white",
      icon: Building2,
      title: "Sampah Komersial Kantor & Ruko",
      shortDesc: "Layanan rutin untuk ruko, restoran, cafe, pusat perbelanjaan, dan gedung kantor.",
      specs: ["Sampah Restoran & F&B", "Kardus & Plastik Kantor", "Limbah Pasar & Ruko", "Faktur Pajak/Invoice"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh pengangkutan sampah komersial kantor/ruko.",
    },
    {
      category: "residensial",
      tag: "Residensial",
      tagColor: "bg-neo-emerald text-black",
      icon: Home,
      title: "Sampah Rumah Tangga & Perumahan",
      shortDesc: "Solusi kebersihan cluster perumahan dan sampah rumah tangga volume besar.",
      specs: ["Retribusi Perumahan", "Sampah Pindahan Rumah", "Barang Bekas/Perabotan", "Jadwal Rutin/Insidental"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh jasa pengangkutan sampah perumahan/rumah tangga.",
    },
    {
      category: "lahan",
      tag: "Pohon & Taman",
      tagColor: "bg-neo-yellow text-black",
      icon: TreePine,
      title: "Penebangan & Angkut Batang Pohon",
      shortDesc: "Eksekusi penebangan pohon rawan tumbang, pemangkasan dahan, dan evakuasi kayu.",
      specs: ["Tebang Pohon Besar", "Potong Dahan & Ranting", "Evakuasi Daun/Sampah Kebun", "Peralatan Chainsaw Lengkap"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh jasa penebangan dan pengangkutan kayu/pohon.",
    },
    {
      category: "lahan",
      tag: "Pembersihan Lahan",
      tagColor: "bg-neo-cyan text-black",
      icon: Layers,
      title: "Pembersihan Lahan Kosong & Timbunan",
      shortDesc: "Pembersihan semak belukar, timbunan sampah liar, dan perataan lahan siap bangun.",
      specs: ["Babat Semak Belukar", "Keruk Timbunan Liar", "Pembersihan Tanah Kavling", "Armada Dump Truck Siaga"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh jasa pembersihan lahan kosong/timbunan.",
    },
    {
      category: "puing",
      tag: "Sewa Armada",
      tagColor: "bg-neo-purple text-white",
      icon: Truck,
      title: "Sewa Dump Truck + Tim Loader",
      shortDesc: "Penyewaan dump truck hitungan ritase atau harian lengkap dengan supir dan kuli angkut.",
      specs: ["Dump Truck Kapasitas 4-6 m³", "Pick Up L300 Rangka Tinggi", "Supir & BBM Termasuk", "Tenaga Angkut Profesional"],
      waText: "Halo CV Keel Mulia Jasa, saya ingin sewa Dump Truck + Tim Loader.",
    },
    {
      category: "komersial",
      tag: "Event & Acara",
      tagColor: "bg-neo-yellow text-black",
      icon: Sparkles,
      title: "Kebersihan Pasca Acara / Event",
      shortDesc: "Pembersihan kilat pasca konser, bazar, pernikahan, festival, dan pameran.",
      specs: ["Standby Saat Event", "Pembersihan Cepat Pasca Acara", "Evakuasi Sampah Skala Ton", "Area Dijamin Bersih Tuntas"],
      waText: "Halo CV Keel Mulia Jasa, saya butuh jasa kebersihan untuk event/acara besar.",
    },
    {
      category: "residensial",
      tag: "Kerja Bakti",
      tagColor: "bg-neo-emerald text-black",
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
    <section className="py-24 bg-white border-b-2 border-black relative" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            Layanan Komprehensif
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Solusi Pengangkutan Sampah & Kebersihan Terpadu
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Pilihan layanan lengkap dengan armada mandiri, tenaga loader berpengalaman, dan pembuangan resmi ke TPA pemerintah.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black border-2 border-black transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-neo-yellow text-black shadow-neo -translate-y-0.5"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 shadow-neo-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border-2 border-black rounded-3xl p-6 shadow-neo hover:shadow-neo-lg hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black text-slate-900 flex items-center justify-center shadow-neo-sm group-hover:bg-neo-yellow transition-colors">
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-6 pt-3 border-t-2 border-black">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
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
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black font-black text-xs border-2 border-black shadow-neo-sm hover:shadow-neo transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Pesan Layanan</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-2xl bg-white border-2 border-black shadow-neo flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neo-yellow text-black border-2 border-black flex items-center justify-center shrink-0 shadow-neo-sm">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-sm text-slate-900">Butuh Paket Borongan Proyek atau Kontrak Retribusi Rutin?</h4>
              <p className="text-xs text-slate-600 font-medium">Kami siap melakukan survei lokasi gratis dan menyusun Surat Penawaran Harga (SPH) resmi.</p>
            </div>
          </div>

          <a
            href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20kami%20ingin%20jadwalkan%20survei%20lokasi%20dan%20penawaran%20harga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-black text-xs border-2 border-black shadow-neo-sm shrink-0 hover:-translate-y-0.5 transition-all"
          >
            <span>Jadwalkan Survei Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
