"use client";

import React, { useState } from "react";
import { Calculator, MessageCircle, Send } from "lucide-react";

export const CalculatorSection: React.FC = () => {
  const [name, setName] = useState("");
  const [prop, setProp] = useState("Rumah Tinggal");
  const [service, setService] = useState("Deep Cleaning (Pembersihan Menyeluruh)");
  const [city, setCity] = useState("Jakarta Selatan");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customerName = name.trim() || "Pelanggan";
    let message = `Halo CleanUp IND, saya *${customerName}* ingin booking layanan kebersihan:\n\n` +
      `🏢 *Jenis Properti:* ${prop}\n` +
      `🧹 *Layanan:* ${service}\n` +
      `📍 *Wilayah:* ${city}\n`;

    if (note.trim()) {
      message += `📝 *Catatan:* ${note.trim()}\n`;
    }

    message += `\nMohon konfirmasi ketersediaan jadwal dan total biaya. Terima kasih!`;

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative" id="kalkulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Estimasi & Booking Otomatis
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Hitung & Pesan Langsung ke WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Pilih kebutuhan Anda di bawah ini dan klik tombol untuk mengirimkan format pesanan rapi secara otomatis ke WhatsApp admin kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div>
                <label className="block text-xs font-bold text-gray-200 mb-2">Nama Pemesan</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-200 mb-2">Jenis Properti</label>
                <select
                  value={prop}
                  onChange={(e) => setProp(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/20 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all"
                >
                  <option value="Rumah Tinggal">Rumah Tinggal</option>
                  <option value="Apartemen / Studio">Apartemen / Studio</option>
                  <option value="Ruko / Toko">Ruko / Toko</option>
                  <option value="Kantor / Workspace">Kantor / Workspace</option>
                  <option value="Restoran / Kafe">Restoran / Kafe</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-200 mb-2">Layanan yang Dibutuhkan</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/20 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all"
                >
                  <option value="Deep Cleaning (Pembersihan Menyeluruh)">Deep Cleaning (Pembersihan Menyeluruh)</option>
                  <option value="General Cleaning (Harian/Rutin)">General Cleaning (Harian/Rutin)</option>
                  <option value="Exclusive Cleaning VIP">Exclusive Cleaning VIP</option>
                  <option value="Hydrovacuum Sedot Tungau Kasur/Sofa">Hydrovacuum Sedot Tungau Kasur/Sofa</option>
                  <option value="Bathroom Cleaning (Kerak Kamar Mandi)">Bathroom Cleaning (Kerak Kamar Mandi)</option>
                  <option value="Paket Berlangganan (Subscription)">Paket Berlangganan (Subscription)</option>
                  <option value="Water Tank Cleaning (Cuci Toren)">Water Tank Cleaning (Cuci Toren)</option>
                  <option value="Grease Trap Cleaning">Grease Trap Cleaning</option>
                  <option value="Event Support Cleaning">Event Support Cleaning</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-200 mb-2">Kota / Wilayah di Jabodetabek</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/20 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all"
                >
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                  <option value="Jakarta Barat">Jakarta Barat</option>
                  <option value="Jakarta Timur">Jakarta Timur</option>
                  <option value="Jakarta Utara">Jakarta Utara</option>
                  <option value="Tangerang Selatan (BSD, Bintaro, Alam Sutera, Serpong)">Tangerang Selatan (BSD, Bintaro, Serpong, dll)</option>
                  <option value="Kota / Kab. Tangerang">Kota / Kab. Tangerang</option>
                  <option value="Depok">Depok</option>
                  <option value="Bekasi (Kota & Kabupaten)">Bekasi (Kota & Kabupaten)</option>
                  <option value="Bogor (Kota & Kabupaten)">Bogor (Kota & Kabupaten)</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-xs font-bold text-gray-200 mb-2">Catatan Khusus / Jadwal yang Diinginkan (Opsional)</label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Contoh: Rencana Sabtu jam 09:00 pagi, ada 2 kamar tidur & 1 kamar mandi"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all"
              />
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-brand-wa hover:bg-brand-wa-dark text-white font-extrabold text-base shadow-brand-wa transition-all hover:scale-102 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Kirim Pesanan ke WhatsApp Sekarang</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
