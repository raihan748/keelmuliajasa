"use client";

import React, { useState } from "react";
import { Calculator, MessageCircle, Send } from "lucide-react";

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
    <section className="py-24 bg-neo-bg bg-neo-grid text-white relative border-b-2 border-black" id="kalkulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-neo-yellow text-black text-xs font-black uppercase tracking-wider mb-3.5 border-2 border-black shadow-neo-sm">
            <Calculator className="w-3.5 h-3.5 stroke-[2.5]" />
            Estimator & Permintaan Penawaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Hitung Kebutuhan Armada & Minta Penawaran
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            Isi formulir singkat di bawah ini untuk menghitung estimasi unit yang dibutuhkan dan mengirimkan format pesanan resmi langsung ke WhatsApp tim operasional kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-neo-surface border-2 border-black rounded-3xl p-6 sm:p-10 shadow-neo-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div>
                <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-wide">
                  Nama Pemesan / Penanggung Jawab *
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Contoh: Bpk. Rahmat / Ibu Sinta"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neo-bg border-2 border-black text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-wide">
                  Nama Perusahaan / Cluster (Opsional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Contoh: PT. Adhi Konstruksi / Cluster Anggrek"
                  className="w-full px-4 py-3 rounded-xl bg-neo-bg border-2 border-black text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-wide">
                  Jenis Sampah / Muatan *
                </label>
                <select
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neo-bg border-2 border-black text-white text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
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
                <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-wide">
                  Estimasi Kebutuhan Unit Armada *
                </label>
                <select
                  value={truckUnit}
                  onChange={(e) => setTruckUnit(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neo-bg border-2 border-black text-white text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
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
              <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-wide">
                Alamat / Lokasi Titik Muat Sampah *
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Contoh: Jl. Perintis Kemerdekaan KM 10, Makassar"
                required
                className="w-full px-4 py-3 rounded-xl bg-neo-bg border-2 border-black text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-wide">
                Keterangan Tambahan / Akses Jalan (Opsional)
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Contoh: Lokasi masuk gang lebar 3 meter, butuh loader untuk angkat puing"
                className="w-full px-4 py-3 rounded-xl bg-neo-bg border-2 border-black text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-neo-yellow focus:shadow-neo-sm transition-all"
              />
            </div>

            <div className="pt-3 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-neo-yellow hover:bg-neo-yellow-hover text-black font-black text-sm sm:text-base border-2 border-black shadow-neo hover:shadow-neo-lg transition-all cursor-pointer"
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
