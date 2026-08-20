"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Jenis sampah dan muatan apa saja yang dapat diangkut oleh CV. Keel Mulia Jasa?",
      a: "Kami melayani pengangkutan sampah rumah tangga/pemukiman, sampah komersial kantor/ruko/restoran, puing sisa bongkaran bangunan/proyek (batu, semen, keramik, kayu), dahan dan batang pohon hasil penebangan, hingga sampah timbunan lahan kosong.",
    },
    {
      q: "Ke mana sampah dan puing tersebut akan dibuang?",
      a: "Seluruh muatan sampah dan puing dibuang langsung ke Tempat Pembuangan Akhir (TPA) resmi yang telah berizin dari dinas kebersihan dan lingkungan hidup terkait. Kami tidak pernah membuang sampah sembarangan di pinggir jalan atau lahan liar.",
    },
    {
      q: "Apakah tarif sewa armada sudah termasuk supir dan tenaga kuli angkut (loader)?",
      a: "Ya! Kami menyediakan opsi paket lengkap 'All-In' yang sudah mencakup unit dump truck/pick-up, BBM, supir berpengalaman, serta tenaga loader yang bertugas menaikkan sampah ke bak dan menyapu bersih area pemuatan.",
    },
    {
      q: "Berapa lama armada bisa tiba di lokasi setelah pemesanan dikonfirmasi?",
      a: "Untuk pemesanan mendesak (same day service), armada kami dapat tiba di lokasi dalam waktu 1–3 jam tergantung jarak dan kondisi lalu lintas. Kami juga melayani penjadwalan H-1 untuk kepastian waktu yang lebih presisi.",
    },
    {
      q: "Apakah CV. Keel Mulia Jasa dapat menerbitkan invoice dan faktur resmi untuk perusahaan?",
      a: "Tentu saja. Sebagai badan usaha resmi berbentuk CV, kami memiliki legalitas lengkap (NIB, NPWP) dan siap menerbitkan Surat Penawaran Harga (SPH), Surat Jalan, Kwitansi resmi berstempel, dan Invoice untuk keperluan pembukuan kantor atau instansi Anda.",
    },
    {
      q: "Bagaimana cara perhitungan biaya pengangkutan?",
      a: "Tarif dihitung berdasarkan jenis muatan, volume/ritase armada (Pick Up L300 atau Dump Truck Merah), jarak tempuh ke lokasi dan TPA, serta tingkat kesulitan pemuatan. Anda cukup mengirimkan foto tumpukan sampah via WhatsApp untuk mendapatkan estimasi harga pasti tanpa biaya tersembunyi.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-neo-bg bg-neo-grid border-b-2 border-black" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-cyan text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <HelpCircle className="w-3.5 h-3.5 stroke-[2.5]" />
            Tanya Jawab (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Informasi lengkap seputar mekanisme layanan pengangkutan dan pengelolaan sampah kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border-2 border-black rounded-2xl transition-all duration-200 overflow-hidden shadow-neo ${
                  isOpen ? "bg-neo-surface ring-2 ring-neo-yellow" : "bg-neo-surface hover:bg-neo-card"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-black text-base sm:text-lg text-white">{item.q}</span>
                  <div
                    className={`w-9 h-9 rounded-xl border-2 border-black flex items-center justify-center shrink-0 shadow-neo-sm transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-neo-yellow text-black" : "bg-neo-card text-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-300 font-medium leading-relaxed border-t-2 border-black">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
