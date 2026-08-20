"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Hospital, Factory, HeartHandshake, ShieldCheck } from "lucide-react";

export const ClientsSection: React.FC = () => {
  const clients = [
    {
      name: "Al-Fityan School Gowa",
      type: "Lembaga Pendidikan Terpadu",
      desc: "Layanan retribusi dan pengangkutan sampah rutin area kampus sekolah (TKIT, SDIT, SMPIT, SMAIT).",
      icon: GraduationCap,
      color: "bg-neo-blue text-white",
      tag: "Pendidikan",
    },
    {
      name: "Rumah Sakit Islam Az Zahra",
      type: "Fasilitas Layanan Kesehatan",
      desc: "Penanganan pengangkutan sampah non-medis dan kebersihan area lingkungan rumah sakit secara higienis.",
      icon: Hospital,
      color: "bg-neo-red text-white",
      tag: "Kesehatan / RS",
    },
    {
      name: "Yayasan Tahfidz Sulaimaniyah",
      type: "Pondok Pesantren & Yayasan",
      desc: "Pengelolaan kebersihan lingkungan pesantren dan evakuasi sampah terjadwal.",
      icon: Building2,
      color: "bg-neo-emerald text-black",
      tag: "Yayasan & Ponpes",
    },
    {
      name: "PT. Mitra Sidang Kareasingo (RAKAKA)",
      type: "Industri & Kayu Berkualitas",
      desc: "Pengangkutan limbah potongan kayu, sisa industri pertukangan, dan pembersihan gudang.",
      icon: Factory,
      color: "bg-neo-yellow text-black",
      tag: "Industri & Pabrik",
    },
    {
      name: "Bumi Kayana",
      type: "Komersial & Perkebunan",
      desc: "Kerja sama pembersihan area hijau, evakuasi dahan/ranting, dan kebersihan lingkungan usaha.",
      icon: HeartHandshake,
      color: "bg-neo-purple text-white",
      tag: "Komersial / Usaha",
    },
  ];

  return (
    <section className="py-24 bg-neo-bg bg-neo-grid border-b-2 border-black relative overflow-hidden" id="klien-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <HeartHandshake className="w-3.5 h-3.5 stroke-[2.5]" />
            Thanks to Our Customers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Klien & Mitra Resmi CV. Keel Mulia Jasa
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Dipercaya oleh institusi pendidikan, rumah sakit, pabrik industri, perumahan, dan pelaku bisnis terkemuka di wilayah Makassar, Gowa, dan Maros.
          </p>
        </div>

        {/* Official Client Logos Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 bg-neo-surface border-2 border-black rounded-3xl p-6 sm:p-8 shadow-neo-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 mb-6 border-b-2 border-black">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-neo-emerald animate-ping" />
              <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide">
                Portofolio Kemitraan Aktif Kami
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 bg-neo-card px-3.5 py-1.5 rounded-xl border-2 border-black shadow-neo-sm text-xs font-black text-neo-yellow">
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              <span>Kerja Sama MoU & Retribusi Resmi</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-black bg-white shadow-neo">
            <img
              src="/images/klien-customers-banner.png"
              alt="Logo Klien CV. Keel Mulia Jasa (Bumi Kayana, Yayasan Sulaimaniyah, RAKAKA, Al-Fityan School, RS Islam Az Zahra)"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* 5 Real Client Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.35 }}
                className="bg-neo-surface border-2 border-black rounded-3xl p-6 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-neo-card border-2 border-black text-neo-yellow flex items-center justify-center shadow-neo-sm">
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm ${client.color}`}>
                      {client.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-white mb-1 leading-snug">
                    {client.name}
                  </h4>
                  <div className="text-xs font-black text-neo-yellow mb-3 uppercase tracking-wide">
                    {client.type}
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                    {client.desc}
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-black text-[11px] text-neo-emerald font-black flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Mitra Terverifikasi CV. Keel Mulia Jasa</span>
                </div>
              </motion.div>
            );
          })}

          {/* Call to action card for new B2B partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.35 }}
            className="bg-neo-yellow border-2 border-black rounded-3xl p-6 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between text-black"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-black text-neo-yellow flex items-center justify-center mb-4 border-2 border-black shadow-neo-sm">
                <HeartHandshake className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="text-lg font-black mb-1 leading-snug">
                Ingin Menjadi Mitra Perusahaan Kami?
              </h4>
              <p className="text-xs font-bold leading-relaxed mb-4 text-slate-900">
                Kami siap mengajukan proposal kerja sama retribusi sampah terpadu dengan MoU resmi, SOP standar, dan penawaran harga terbaik.
              </p>
            </div>

            <a
              href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20kami%20ingin%20mengajukan%20kerja%20sama%20B2B%20pengelolaan%20sampah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-black text-white font-black text-xs py-3 rounded-xl border-2 border-black shadow-neo-sm hover:bg-slate-900 transition-colors"
            >
              Ajukan Kerja Sama B2B
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
