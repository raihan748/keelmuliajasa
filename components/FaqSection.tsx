"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah tim CleanUp IND membawa peralatan dan chemical sendiri?",
      a: "Ya, tim kami selalu datang dengan membawa peralatan pembersihan lengkap (mesin vakum, hydrovacuum, steam cleaner, tangga, ember, lap microfiber khusus) dan chemical pembersih profesional. Anda tidak perlu repot menyediakan alat apa pun.",
    },
    {
      q: "Apakah chemical yang digunakan aman untuk anak kecil dan hewan peliharaan?",
      a: "Tentu saja! Kami hanya menggunakan chemical ramah lingkungan (eco-friendly) yang tersertifikasi non-toksik, bebas bau menyengat berbahaya, sehingga 100% aman untuk bayi, ibu hamil, lansia, dan anabul peliharaan Anda.",
    },
    {
      q: "Bagaimana jika saya merasa hasil pembersihan kurang memuaskan?",
      a: "CleanUp IND memberikan Garansi Kepuasan (Re-Clean Guarantee). Jika ada bagian yang terlewat atau kurang bersih, Anda bisa langsung memberitahukan tim di lokasi atau melapor ke admin dalam 24 jam untuk dilakukan pembersihan ulang tanpa biaya tambahan.",
    },
    {
      q: "Berapa lama estimasi durasi pengerjaan per sesi?",
      a: "Durasi tergantung jenis layanan dan luas area. General cleaning biasanya memakan waktu 2–4 jam, sedangkan Deep Cleaning rumah pasca renovasi dapat memakan waktu 4–8 jam dengan jumlah tim cleaner yang disesuaikan.",
    },
    {
      q: "Apakah melayani pembersihan di hari Minggu atau libur nasional?",
      a: "Ya! Kami beroperasi setiap hari dari Senin hingga Minggu, termasuk hari libur nasional mulai pukul 07.00 s/d 21.00 WIB. Sebaiknya lakukan booking H-1 via WhatsApp untuk memastikan ketersediaan slot cleaner favorit Anda.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green-light text-brand-green-darker border border-brand-green/30 text-xs font-bold uppercase tracking-wider mb-3">
            Tanya Jawab
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            Punya pertanyaan seputar layanan kami? Temukan jawabannya di bawah ini.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-brand-green shadow-subtle bg-brand-green-soft/30" : "border-brand-border bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-extrabold text-base sm:text-lg text-brand-dark">{item.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-brand-green-light text-brand-green-darker" : "bg-gray-100 text-brand-dark"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-brand-gray leading-relaxed border-t border-brand-border-light/60">
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
