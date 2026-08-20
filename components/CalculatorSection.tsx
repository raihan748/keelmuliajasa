"use client";

import React, { useState } from "react";
import { Calculator, MessageCircle, Send, Truck, FileText } from "lucide-react";

export const CalculatorSection: React.FC = () => {
  const [clientName, setClientName] = useState("");
  const [company, setCompany] = useState("");
  const [wasteType, setWasteType] = useState("Puing Sisa Bangunan & Semen");
  const [truckUnit, setTruckUnit] = useState("Dump Truck 4 Roda (1 Ritase / 4-5 m³)");
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

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative" id="kalkulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Estimator & Permintaan Penawaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Hitung Kebutuhan Armada & Minta Penawaran
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Isi formulir singkat di bawah ini untuk menghitung estimasi unit yang dibutuhkan dan mengirimkan format pesanan resmi langsung ke WhatsApp tim operasional kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Nama Pemesan / Penanggung Jawab *
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Contoh: Bpk. Rahmat / Ibu Sinta"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Nama Perusahaan / Cluster (Opsional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Contoh: PT. Adhi Konstruksi / Cluster Anggrek"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Jenis Sampah / Muatan *
                </label>
                <select
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all"
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
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Estimasi Kebutuhan Unit Armada *
                </label>
                <select
                  value={truckUnit}
                  onChange={(e) => setTruckUnit(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all"
                >
                  <option value="Dump Truck 4 Roda (1 Ritase / 4-5 m³)">Dump Truck 4 Roda (1 Ritase / 4-5 m³)</option>
                  <option value="Dump Truck 6 Roda (1 Ritase / 7-8 m³)">Dump Truck 6 Roda (1 Ritase / 7-8 m³)</option>
                  <option value="Pick Up Bak Terbuka (1-2 m³)">Pick Up Bak Terbuka (1-2 m³)</option>
                  <option value="Paket Borongan / Multi-Ritase Proyek">Paket Borongan / Multi-Ritase Proyek</option>
                  <option value="Kontrak Rutin Mingguan / Bulanan">Kontrak Rutin Mingguan / Bulanan</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                Alamat / Lokasi Titik Muat Sampah *
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Contoh: Jl. Perintis Kemerdekaan KM 10, Makassar"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                Keterangan Tambahan / Akses Jalan (Opsional)
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Contoh: Lokasi masuk gang lebar 3 meter, butuh 3 orang loader untuk angkat puing"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all"
              />
            </div>

            <div className="pt-3 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-950/50 transition-all hover:scale-102 active:scale-98"
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
