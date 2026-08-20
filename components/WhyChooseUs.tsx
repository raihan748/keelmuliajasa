import React from "react";
import { Zap, ShieldCheck, UserCheck, FileCheck, CheckCircle2, MessageCircle } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: "100% Legal & Buang ke TPA Resmi",
      desc: "Kami memiliki jalur izin resmi ke Tempat Pembuangan Akhir (TPA). Menjamin sampah dan puing Anda tidak dibuang sembarangan di tepi jalan atau lahan liar.",
    },
    {
      icon: Zap,
      title: "Respon Cepat & Siaga 24/7",
      desc: "Admin responsif dalam hitungan menit. Layanan siap berangkat di hari yang sama untuk kebutuhan pengangkutan mendesak (urgent call).",
    },
    {
      icon: UserCheck,
      title: "Paket Lengkap Termasuk Kuli Angkut",
      desc: "Anda terima beres. Tim loader kami yang akan menyekop, mengangkut, menaikkan ke bak truk, dan menyapu bersih area pemuatan.",
    },
    {
      icon: FileCheck,
      title: "Transparansi Biaya & Dokumen Resmi",
      desc: "Tidak ada biaya tersembunyi. Tersedia invoice, kwitansi bertanda tangan, stempel perusahaan, dan surat jalan untuk keperluan kantor.",
    },
  ];

  const clientCategories = [
    { name: "Kompleks Perumahan & Cluster", desc: "Pengangkutan sampah residensial harian/mingguan" },
    { name: "Kontraktor & Renovasi Gedung", desc: "Evakuasi puing tembok, cor semen & material sisa" },
    { name: "Restoran, Cafe & Rumah Makan", desc: "Penanganan limbah organik & sisa kemasan higienis" },
    { name: "Gedung Perkantoran & Ruko", desc: "Pembersihan rutin dokumen afkir, sampah kardus & arsip" },
    { name: "Pemilik Lahan & Properti", desc: "Pembersihan timbunan sampah liar & ilalang" },
    { name: "Event Organizer & Pengelola Venue", desc: "Kebersihan massal pra dan pasca acara festival" },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Keunggulan CV. Keel Mulia Jasa
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
              Mengapa Ratusan Klien Mempercayakan Pengangkutan Sampah Kepada Kami?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Pengelolaan sampah dan puing membutuhkan legalitas, kecepatan, dan tenaga kerja yang terbiasa menangani muatan berat. Kami hadir memberikan solusi tuntas tanpa membuat Anda pusing.
            </p>

            <a
              href="https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20tanya%20prosedur%20dan%20jadwal%20pengangkutan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Konsultasi & Jadwalkan Pengangkutan</span>
            </a>
          </div>

          {/* Right Column: 4 Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2 leading-snug">{pt.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Client Categories Matrix */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-6 text-center">
            Sektor & Klien yang Rutin Kami Layani
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientCategories.map((cat, cIdx) => (
              <div key={cIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-0.5">{cat.name}</h4>
                  <p className="text-[11px] text-slate-500">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
