import React from "react";
import {
  Home,
  Sparkles,
  Crown,
  Bug,
  Bath,
  Repeat,
  Droplets,
  CookingPot,
  CalendarDays,
  Check,
  MessageCircle,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  popular?: boolean;
  startingPrice: string;
  features: string[];
  waText: string;
}

export const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: "deep-cleaning",
      title: "Deep Cleaning",
      desc: "Pembersihan intensif dan menyeluruh hingga ke sudut-sudut tersempit, sangat ideal untuk rumah baru, pasca renovasi, maupun pindahan rumah/apartemen.",
      icon: Home,
      popular: true,
      startingPrice: "Rp 25.000 / m²",
      features: [
        "Pembersihan debu semen, cat & silikon",
        "Detail sela jendela, kusen & plafon",
        "Sanitasi lantai & disinfeksi ruangan",
      ],
      waText: "Halo CleanUp IND, saya ingin pesan layanan Deep Cleaning untuk rumah/apartemen",
    },
    {
      id: "general-cleaning",
      title: "General Cleaning",
      desc: "Pembersihan standar harian atau berkala untuk menjaga kebersihan rumah, apartemen, atau kantor agar selalu rapi, wangi, dan nyaman ditinggali.",
      icon: Sparkles,
      startingPrice: "Rp 65.000 / jam",
      features: [
        "Sapu, pel lantai & lap permukaan debu",
        "Merapikan tempat tidur & ruang tamu",
        "Pengosongan & pembersihan tempat sampah",
      ],
      waText: "Halo CleanUp IND, saya ingin pesan layanan General Cleaning rutin",
    },
    {
      id: "exclusive-cleaning",
      title: "Exclusive Cleaning",
      desc: "Layanan VIP premium dengan tim senior bersertifikat, peralatan modern lengkap, chemical spesialis impor, dan supervisi langsung standar hotel berbintang.",
      icon: Crown,
      startingPrice: "Rp 450.000 / paket",
      features: [
        "Disinfeksi uap panas (Steam Sanitizing)",
        "Perawatan khusus marmer & granit",
        "Quality Control langsung di tempat",
      ],
      waText: "Halo CleanUp IND, saya ingin reservasi layanan Exclusive Cleaning VIP",
    },
    {
      id: "hydrovacuum-tungau",
      title: "Hydrovacuum Tungau",
      desc: "Sedot tungau, debu mikro, dan alergen pada kasur/springbed, sofa kain, gorden, dan karpet menggunakan teknologi mesin filter air tanpa bahan kimia beracun.",
      icon: Bug,
      popular: true,
      startingPrice: "Rp 150.000 / item",
      features: [
        "Sedot tungau hingga kedalaman 20cm",
        "Meredakan alergi, asma & gatal-gatal",
        "Pengerjaan kering, langsung siap dipakai",
      ],
      waText: "Halo CleanUp IND, saya mau pesan Hydrovacuum Sedot Tungau Kasur & Sofa",
    },
    {
      id: "bathroom-cleaning",
      title: "Bathroom Cleaning",
      desc: "Pembersihan kerak air membandel, jamur dinding, noda kuning pada kloset, wastafel, keramik, dan kaca shower hingga kinclong tanpa merusak nat keramik.",
      icon: Bath,
      startingPrice: "Rp 180.000 / toilet",
      features: [
        "Pembersihan kerak air & sabun di kaca shower",
        "Restorasi kilau keramik & kloset",
        "Formula anti jamur & bau tak sedap",
      ],
      waText: "Halo CleanUp IND, saya butuh layanan Bathroom Cleaning untuk bersihkan kerak kamar mandi",
    },
    {
      id: "subscription-packages",
      title: "Subscription Packages",
      desc: "Paket langganan pembersihan hemat mingguan atau bulanan untuk hunian, apartemen, atau kantor dengan harga jauh lebih hemat dan prioritas jadwal.",
      icon: Repeat,
      startingPrice: "Rp 600.000 / bln",
      features: [
        "Hemat hingga 25% dari tarif normal",
        "Cleaner tetap yang sudah terbiasa dengan hunian",
        "Jadwal fleksibel & jaminan kehadiran tepat waktu",
      ],
      waText: "Halo CleanUp IND, saya ingin konsultasi Paket Berlangganan (Subscription)",
    },
    {
      id: "water-tank-cleaning",
      title: "Water Tank Cleaning",
      desc: "Kuras dan sikat toren serta tangki air dari endapan lumpur, lumut tebal, dan karat pipa. Menjamin pasokan air keluarga Anda selalu jernih dan higienis.",
      icon: Droplets,
      startingPrice: "Rp 200.000 / unit",
      features: [
        "Penyikatan lumut & kuras endapan lumpur",
        "Disinfeksi aman standar air bersih keluarga",
        "Melayani kapasitas toren 250L s/d 5.000L+",
      ],
      waText: "Halo CleanUp IND, saya mau booking Cuci Toren / Tangki Air",
    },
    {
      id: "grease-trap-cleaning",
      title: "Grease Trap Cleaning",
      desc: "Pembersihan dan pengurasan perangkap lemak pada wastafel dapur rumah tangga maupun restoran untuk mencegah pipa mampet dan bau tak sedap.",
      icon: CookingPot,
      startingPrice: "Rp 250.000 / unit",
      features: [
        "Pengangkatan kerak lemak & sisa makanan beku",
        "Pembersihan saluran & de-odorizing bau",
        "Ideal untuk dapur rumah, resto & coffee shop",
      ],
      waText: "Halo CleanUp IND, saya mau pesan Grease Trap Cleaning untuk dapur/resto",
    },
    {
      id: "event-support-cleaning",
      title: "Event Support Cleaning",
      desc: "Layanan kebersihan standby sebelum, saat, dan sesudah acara (pre & post-event) untuk pesta ulang tahun, syukuran, pernikahan, bazaar, atau gathering kantor.",
      icon: CalendarDays,
      startingPrice: "Rp 350.000 / crew",
      features: [
        "Tim standby berseragam rapi & cekatan",
        "Pengelolaan sampah & piring kotor selama acara",
        "Pemulihan lokasi pasca acara seperti semula",
      ],
      waText: "Halo CleanUp IND, saya butuh tim Event Support Cleaning untuk acara",
    },
  ];

  return (
    <section className="py-20 bg-brand-bg-subtle" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green-light text-brand-green-darker border border-brand-green/30 text-xs font-bold uppercase tracking-wider mb-3">
            Pilihan Layanan Kebersihan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-4">
            Layanan Lengkap untuk Segala Kebutuhan Hunian & Bisnis
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            Dari pembersihan rutin harian hingga pembersihan menyeluruh pasca renovasi, CleanUp IND siap memberikan hasil higienis terbaik di seluruh Jabodetabek.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-elevated ${
                  item.popular
                    ? "border-brand-green shadow-card relative"
                    : "border-brand-border hover:border-brand-green/40 shadow-subtle"
                }`}
              >
                {item.popular && (
                  <span className="absolute top-4 right-4 bg-brand-green text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider shadow-sm">
                    Populer
                  </span>
                )}

                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-brand-green-light to-emerald-100 text-brand-green-darker flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-brand-dark mb-2.5">{item.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed mb-5">{item.desc}</p>

                  <div className="pt-4 border-t border-dashed border-brand-border mb-6">
                    <ul className="space-y-2">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-brand-dark-muted font-medium">
                          <Check className="w-4 h-4 text-brand-green-dark shrink-0" strokeWidth={3} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border-light mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs font-bold text-brand-gray">Mulai dari</span>
                    <span className="text-base font-black text-brand-green-darker">{item.startingPrice}</span>
                  </div>

                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(item.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-extrabold text-sm shadow-subtle transition-all hover:shadow-brand-green active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Pesan Sekarang</span>
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
