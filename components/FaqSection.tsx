"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      a: "Ya! Kami menyediakan opsi paket lengkap 'All-In' yang sudah mencakup unit dump truck, BBM, supir berpengalaman, serta tenaga loader yang bertugas menaikkan sampah ke bak truk dan menyapu bersih area pemuatan.",
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
      a: "Tarif dihitung berdasarkan jenis muatan, volume/ritase armada (Pick Up, Dump Truck 4 Roda, atau Dump Truck 6 Roda), jarak tempuh ke lokasi dan TPA, serta tingkat kesulitan pemuatan. Anda cukup mengirimkan foto tumpukan sampah via WhatsApp untuk mendapatkan estimasi harga pasti tanpa biaya tersembunyi.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Tanya Jawab (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Informasi lengkap seputar mekanisme layanan pengangkutan dan pengelolaan sampah kami.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-emerald-500 shadow-sm bg-emerald-50/30" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-extrabold text-base sm:text-lg text-slate-900">{item.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
