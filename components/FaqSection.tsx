"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Jenis sampah dan muatan apa saja yang dapat diangkut oleh CV. Keel Mulia Jasa?",
      a: "Kami melayani pengangkutan sampah rumah tangga/pemukiman, sampah komersial kantor/ruko/restoran, puing sisa bongkaran bangunan/proyek (batu, semen, keramik, kayu), dahan dan batang pohon hasil penebangan, hingga sampah timbunan lahan kosong.",
    },
    {
      q: "Ke mana sampah dan puing tersebut akan dibuang?",
      a: "Seluruh muatan sampah dan puing didistribusikan secara bertanggung jawab langsung ke Tempat Pemrosesan Akhir (TPA) sesuai regulasi kelestarian lingkungan hidup.",
    },
    {
      q: "Apakah tarif sewa armada sudah termasuk pengemudi dan tenaga loader?",
      a: "Ya. Kami menyediakan opsi paket lengkap (All-In) yang sudah mencakup unit dump truck/pick-up, bahan bakar (BBM), pengemudi berpengalaman, serta tenaga loader yang bertugas menaikkan sampah ke bak dan menyapu bersih area pemuatan.",
    },
    {
      q: "Berapa lama armada bisa tiba di lokasi setelah pemesanan dikonfirmasi?",
      a: "Untuk pemesanan mendesak (layanan di hari yang sama), armada kami dapat tiba di lokasi dalam waktu 1–3 jam tergantung jarak dan kondisi lalu lintas. Kami juga melayani pemesanan terjadwal (H-1) untuk kepastian waktu yang lebih terencana.",
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
    <section className="py-20 sm:py-28 bg-transparent border-b border-white/20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="down">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 border border-white/80 shadow-soft-sm text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Tanya Jawab (FAQ)</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-sm tracking-tight mt-3 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">
              Informasi lengkap seputar mekanisme layanan pengangkutan dan pengelolaan sampah kami.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden shadow-soft-xs ${
                  isOpen
                    ? "bg-white border-brand-300 ring-2 ring-brand-500/10 shadow-soft-sm"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900">{item.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-brand-50 text-brand-600" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100">
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

