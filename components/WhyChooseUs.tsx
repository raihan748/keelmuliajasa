import React from "react";
import { Zap, ShieldCheck, Clock, MapPin, MessageCircle } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const propertyTypes = [
    { label: "Rumah Tinggal", emoji: "🏡" },
    { label: "Apartemen / Studio", emoji: "🏢" },
    { label: "Ruko & Toko", emoji: "🏬" },
    { label: "Kantor / Workspace", emoji: "💼" },
    { label: "Restoran & Kafe", emoji: "🍽️" },
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Fast Response",
      desc: "Admin sigap melayani konsultasi dan konfirmasi jadwal dalam hitungan menit via WhatsApp, siap sedia 7 hari seminggu.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Cleaning Products",
      desc: "Chemical ramah lingkungan terstandarisasi, bebas zat kimia keras berbahaya, 100% aman untuk anak-anak, ibu hamil, & hewan peliharaan.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      desc: "Bebas tentukan waktu pengerjaan: pagi, siang, atau sore hari, termasuk di akhir pekan (Sabtu & Minggu) dan hari libur nasional.",
    },
    {
      icon: MapPin,
      title: "Complete Service Coverage",
      desc: "Armada kami siap melayani seluruh penjuru Jakarta, Bogor, Depok, Tangerang, Tangsel, dan Bekasi tanpa ribet.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-green-light text-brand-green-darker border border-brand-green/30 text-xs font-bold uppercase tracking-wider mb-3">
              Kenapa Harus CleanUp IND?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-5 leading-tight">
              Standar Kebersihan Tinggi, Praktis & Tanpa Repot
            </h2>
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed mb-6">
              Kami memahami betapa berharganya waktu dan kenyamanan keluarga Anda. CleanUp IND hadir sebagai mitra kebersihan profesional terpercaya di Jabodetabek dengan jaminan kepuasan pelanggan penuh.
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-extrabold text-brand-dark mb-3">Jangkauan Jenis Properti Layanan Kami:</h4>
              <div className="flex flex-wrap gap-2.5">
                {propertyTypes.map((prop, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green-light/70 text-brand-green-darker text-xs sm:text-sm font-bold border border-brand-green/20"
                  >
                    <span>{prop.emoji}</span>
                    <span>{prop.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20CleanUp%20IND%2C%20saya%20mau%20tanya%20jadwal%20dan%20biaya%20layanan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-wa hover:bg-brand-wa-dark text-white font-extrabold text-base shadow-brand-wa transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Konsultasi Gratis via WhatsApp</span>
            </a>
          </div>

          {/* Right Column: 4 Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-bg-subtle border border-brand-border rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:border-brand-green hover:shadow-card hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green-darker flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
