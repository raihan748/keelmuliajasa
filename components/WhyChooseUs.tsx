import React from "react";
import {
  ShieldCheck,
  Clock,
  Coins,
  Smile,
  Truck,
  Sparkles,
  FileCheck,
  Layers,
  MessageCircle,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Pembuangan Langsung ke TPA",
      desc: "Tidak pernah membuang sampah di pinggir jalan atau lahan liar. Semua muatan diangkut tuntas ke TPA.",
      color: "bg-neo-emerald text-black",
    },
    {
      icon: Clock,
      title: "Respon Kilat & Siaga 24 Jam",
      desc: "Armada kami siap meluncur dalam waktu 1-3 jam untuk panggilan urgent di Makassar, Gowa, dan Maros.",
      color: "bg-neo-yellow text-black",
    },
    {
      icon: Coins,
      title: "Tarif Transparan Tanpa Biaya Tersembunyi",
      desc: "Harga sudah mencakup unit armada, bahan bakar (BBM), supir, tenaga loader, dan retribusi TPA.",
      color: "bg-neo-cyan text-black",
    },
    {
      icon: Sparkles,
      title: "Garansi Area Ditinggalkan Bersih",
      desc: "Tim kami menyapu dan membersihkan sisa debu/ceceran di titik muat sebelum meninggalkan lokasi Anda.",
      color: "bg-neo-purple text-white",
    },
    {
      icon: FileCheck,
      title: "Invoice & Dokumen B2B Lengkap",
      desc: "Memiliki legalitas badan hukum CV resmi, NPWP, NIB, siap menerbitkan kwitansi, SPH, dan faktur resmi.",
      color: "bg-neo-blue text-white",
    },
    {
      icon: Truck,
      title: "Armada Milik Sendiri & Terawat",
      desc: "Dump truck dan pick up rutin diservis dan dibersihkan, bak terpasang terpal rapat anti-bau & anti-ceceran.",
      color: "bg-neo-red text-white",
    },
  ];

  const clientSegments = [
    { name: "Pemilik Rumah & Perumahan", desc: "Sampah bulanan, puing renovasi kamar/pagar, pembersihan gudang & dahan pohon." },
    { name: "Kontraktor & Mandor Proyek", desc: "Evakuasi sisa cor beton, galian tanah, bongkaran dinding, keramik & puing skala ritase besar." },
    { name: "Restoran, Cafe & Ruko", desc: "Pengangkutan sampah basah/kering harian, kardus, plastik, dan sisa bahan baku." },
    { name: "Sekolah, Kampus & Yayasan", desc: "Retribusi sampah terpadu lingkungan institusi pendidikan terjadwal dan rapi." },
    { name: "Pabrik, Gudang & Industri", desc: "Limbah non-B3, kayu palet, sisa kemasan, dan pembersihan area pergudangan." },
    { name: "Pengelola Event & EO", desc: "Pembersihan cepat pasca festival, pameran, konser musik, dan acara pernikahan." },
  ];

  return (
    <section className="py-24 bg-neo-bg bg-neo-grid border-b-2 border-black" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            Nilai Tambah & Kepercayaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Mengapa Memilih CV. Keel Mulia Jasa?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Standar profesionalisme tinggi untuk menjamin kepuasan dan kenyamanan setiap pelanggan kami.
          </p>
        </div>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-black rounded-3xl p-7 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border-2 border-black flex items-center justify-center mb-5 text-slate-900 shadow-neo-sm">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Segments Matrix */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-neo-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black text-amber-600 uppercase tracking-wider">
              Segmentasi Pelanggan
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-2">
              Kami Melayani Berbagai Sektor Klien
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Fleksibilitas sistem sewa ritase, harian, atau kontrak bulanan sesuai kebutuhan operasional Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientSegments.map((seg, sIdx) => (
              <div
                key={sIdx}
                className="bg-slate-50 p-5 rounded-2xl border-2 border-black shadow-neo-sm hover:shadow-neo hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neo-yellow border border-black" />
                  <h4 className="font-black text-slate-900 text-sm">{seg.name}</h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{seg.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t-2 border-black text-center">
            <p className="text-xs sm:text-sm text-slate-700 font-bold mb-4">
              Punya kebutuhan khusus atau volume muatan skala besar?
            </p>
            <a
              href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20tanya%20prosedur%20dan%20jadwal%20pengangkutan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-neo-yellow hover:bg-neo-yellow-hover text-black font-black text-sm sm:text-base border-2 border-black shadow-neo hover:shadow-neo-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Konsultasikan Kebutuhan Anda Sekarang</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
