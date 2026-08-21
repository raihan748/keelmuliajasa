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

    message += `\nMohon info ketersediaan jadwal armada, estimasi tarif, dan dokumen penawaran resminya. Terima kasih!`;

    const url = `https://wa.me/6282396193473?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-14 sm:py-24 bg-neo-bg bg-neo-grid text-slate-900 relative border-b-2 border-black" id="kalkulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <Calculator className="w-3.5 h-3.5 stroke-[2.5]" />
            Estimator & Simulasi Cepat
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
            Simulasi Kebutuhan Unit & Permintaan Penawaran
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
            Gunakan simulator visual di bawah untuk menentukan jenis armada yang cocok, lalu kirimkan detail pesanan Anda langsung ke WhatsApp tim operasional.
          </p>
        </div>

        {/* Feature 1: Interactive Volume & Fleet Simulator */}
        <div className="max-w-4xl mx-auto">
          <InteractiveFleetVisualizer />
        </div>

        {/* Feature 2: Official Form */}
        <div className="max-w-3xl mx-auto bg-white border-2 border-black rounded-3xl p-5 sm:p-10 shadow-neo-xl">
          <div className="flex items-center gap-2 mb-5 pb-3.5 border-b-2 border-black">
            <span className="bg-neo-cyan text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border-2 border-black shadow-neo-sm">
              Formulir Pemesanan Resmi
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500 font-bold">Respon Kilat 24/7</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              <div>
                <label className="block text-[11px] sm:text-xs font-black text-slate-800 mb-1.5 uppercase tracking-wide">
                  Nama Pemesan / PIC *
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Contoh: Bpk. Rahmat / Ibu Sinta"
                  required
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border-2 border-black text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-black text-slate-800 mb-1.5 uppercase tracking-wide">
                  Nama Perusahaan / Cluster (Opsional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Contoh: PT. Adhi Konstruksi / Cluster Anggrek"
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border-2 border-black text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-black text-slate-800 mb-1.5 uppercase tracking-wide">
                  Jenis Sampah / Muatan *
                </label>
                <select
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border-2 border-black text-slate-900 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
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
                <label className="block text-[11px] sm:text-xs font-black text-slate-800 mb-1.5 uppercase tracking-wide">
                  Estimasi Kebutuhan Unit Armada *
                </label>
                <select
                  value={truckUnit}
                  onChange={(e) => setTruckUnit(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border-2 border-black text-slate-900 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
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
              <label className="block text-[11px] sm:text-xs font-black text-slate-800 mb-1.5 uppercase tracking-wide">
                Alamat / Lokasi Titik Muat Sampah *
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Contoh: Jl. Perintis Kemerdekaan KM 10, Makassar"
                required
                className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border-2 border-black text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-black text-slate-800 mb-1.5 uppercase tracking-wide">
                Keterangan Tambahan / Akses Jalan (Opsional)
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Contoh: Lokasi masuk gang lebar 3 meter, butuh loader untuk angkat puing"
                className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border-2 border-black text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl bg-neo-yellow hover:bg-neo-yellow-hover text-black font-black text-sm sm:text-base border-2 border-black shadow-neo hover:shadow-neo-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
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
