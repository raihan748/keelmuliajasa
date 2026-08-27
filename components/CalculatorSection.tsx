"use client";

import React, { useState } from "react";
import { Calculator, MessageCircle, Send } from "lucide-react";
import { InteractiveFleetVisualizer } from "@/components/InteractiveFleetVisualizer";

export const CalculatorSection: React.FC = () => {
  const [clientName, setClientName] = useState("");
  const [company, setCompany] = useState("");
  const [wasteType, setWasteType] = useState("Puing Sisa Bangunan & Semen");
  const [truckUnit, setTruckUnit] = useState("Dump Truck Merah (1 Ritase / 4-6 m³)");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = clientName.trim() || "Calon Klien";
    
    let message = `*SURAT PERMINTAAN PENAWARAN / BOOKING ARMADA*\n` +
      `*CV. KEEL MULIA JASA*\n\n` +
      `👤 *Nama Pemesan:* ${name}\n`;

    if (company.trim()) {
      message += `🏢 *Perusahaan / Instansi:* ${company.trim()}\n`;
    }

    message += `📦 *Jenis Muatan/Sampah:* ${wasteType}\n` +
      `🚛 *Kebutuhan Unit:* ${truckUnit}\n` +
      `📍 *Lokasi Pengangkutan:* ${location.trim() || 'Sesuai Konfirmasi'}\n`;

    if (note.trim()) {
      message += `📝 *Catatan Khusus:* ${note.trim()}\n`;
    }

    message += `\nMohon bantuan informasi ketersediaan jadwal armada, estimasi tarif, dan dokumen penawaran resminya. Terima kasih.`;

    const url = `https://wa.me/6282396193473?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 text-slate-900 relative border-b border-slate-100" id="kalkulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60 shadow-soft-xs text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-brand-600" />
            <span>Estimator & Simulasi Cepat</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Simulasi Kebutuhan Unit & Permintaan Penawaran
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Gunakan simulator visual di bawah untuk menentukan jenis armada yang sesuai dengan volume muatan Anda, lalu kirimkan detail pesanan langsung ke tim operasional kami.
          </p>
        </div>

        {/* Feature 1: Interactive Volume & Fleet Simulator */}
        <div className="max-w-4xl mx-auto">
          <InteractiveFleetVisualizer />
        </div>

        {/* Feature 2: Official Form */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-soft-md">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full border border-brand-200/60">
                Formulir Pemesanan Resmi
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">Respons Cepat Setiap Hari</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nama Pemesan / PIC *
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Contoh: Bpk. Rahmat / Ibu Sinta"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nama Perusahaan / Cluster (Opsional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Contoh: PT. Adhi Konstruksi / Cluster Anggrek"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Jenis Sampah / Muatan *
                </label>
                <select
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all"
                >
                  <option value="Puing Sisa Bangunan & Semen">Puing Sisa Bangunan, Semen & Keramik</option>
                  <option value="Sampah Komersial Kantor / Ruko / Restoran">Sampah Komersial Kantor / Ruko / Restoran</option>
                  <option value="Sampah Rumah Tangga & Perumahan">Sampah Rumah Tangga & Kompleks Perumahan</option>
                  <option value="Penebangan Pohon & Ranting Kayu">Penebangan Pohon, Batang & Ranting Kayu</option>
                  <option value="Pembersihan Lahan Kosong & Timbunan">Pembersihan Lahan Kosong & Timbunan Liar</option>
                  <option value="Sampah Pasca Acara / Event Besar">Sampah Pasca Acara / Event Besar</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Estimasi Kebutuhan Unit Armada *
                </label>
                <select
                  value={truckUnit}
                  onChange={(e) => setTruckUnit(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all"
                >
                  <option value="Dump Truck Merah (1 Ritase / 4-6 m³)">Dump Truck Merah (1 Ritase / 4-6 m³)</option>
                  <option value="Pick Up L300 Bak Rangka Tinggi (3-4 m³)">Pick Up L300 Bak Rangka Tinggi (3-4 m³)</option>
                  <option value="Armada Pemukiman & Kompleks">Armada Pemukiman & Kompleks</option>
                  <option value="Paket Borongan / Multi-Ritase Proyek">Paket Borongan / Multi-Ritase Proyek</option>
                  <option value="Kontrak Rutin Mingguan / Bulanan">Kontrak Rutin Mingguan / Bulanan</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Alamat / Lokasi Titik Muat Sampah *
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Contoh: Jl. Perintis Kemerdekaan KM 10, Makassar"
                required
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Keterangan Tambahan / Akses Jalan (Opsional)
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Contoh: Lokasi masuk gang lebar 3 meter, butuh loader untuk angkat puing"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm sm:text-base shadow-soft-sm hover:shadow-glow-brand transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Kirim Permintaan ke WhatsApp Admin</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

