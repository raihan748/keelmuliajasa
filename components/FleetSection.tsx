import React from "react";
import { Truck, Shield, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

export const FleetSection: React.FC = () => {
  const fleets = [
    {
      name: "Dump Truck 6 Roda (Heavy Duty)",
      capacity: "Kapasitas 7 – 8 m³ (6 - 8 Ton)",
      usage: "Ideal untuk puing bongkaran gedung besar, tanah urug, dan pembersihan lahan skala luas.",
      specs: ["Bak hidrolik otomatis", "Terpal penutup standar Dishub", "Cocok untuk akses jalan utama"],
      badge: "Kapasitas Maksimal",
      badgeColor: "bg-amber-500/20 text-amber-800 border-amber-300",
    },
    {
      name: "Dump Truck 4 Roda (Medium Load)",
      capacity: "Kapasitas 4 – 5 m³ (3 - 4 Ton)",
      usage: "Sangat fleksibel untuk akses jalan komplek perumahan, ruko, kantor, dan renovasi rumah tinggal.",
      specs: ["Akses jalan pemukiman", "Bongkar muat hidrolik cepat", "Paling populer untuk renovasi"],
      badge: "Paling Populer",
      badgeColor: "bg-emerald-500/20 text-emerald-800 border-emerald-300",
    },
    {
      name: "Pick Up Bak Terbuka (Light Load)",
      capacity: "Kapasitas 1.5 – 2 m³ (1 Ton)",
      usage: "Layanan gesit untuk sampah ranting kecil, barang bekas pindahan, dan lorong sempit.",
      specs: ["Akses gang & jalan sempit", "Layanan kilat panggilan hari yang sama", "Tarif ekonomis"],
      badge: "Lincah & Cepat",
      badgeColor: "bg-blue-500/20 text-blue-800 border-blue-300",
    },
  ];

  const tools = [
    "Gergaji Mesin (Chain Saw) untuk pemotongan pohon besar",
    "Terpal tebal kedap angin penutup muatan (mencegah sampah tercecer di jalan)",
    "Peralatan sekop baja, cangkul, garpu sampah, dan sapu lidi industri",
    "Alat Pelindung Diri (APD) K3: Rompi safety reflektif, sarung tangan tebal, dan sepatu boots",
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200" id="armada">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            Armada & Perlengkapan Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Kesiapan Armada Tangguh untuk Segala Medan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Seluruh armada CV. Keel Mulia Jasa dirawat secara berkala demi menjamin kelancaran pengangkutan, keamanan di jalan raya, dan ketepatan waktu di lokasi Anda.
          </p>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {fleets.map((fleet, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-7 flex flex-col justify-between hover:bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                    <Truck className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-full border ${fleet.badgeColor}`}>
                    {fleet.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-1">{fleet.name}</h3>
                <div className="text-xs font-bold text-emerald-700 mb-3">{fleet.capacity}</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{fleet.usage}</p>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  {fleet.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20sewa%20unit%20${encodeURIComponent(fleet.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-extrabold text-xs transition-colors"
                >
                  <span>Cek Jadwal Unit Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Tools Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-slate-700 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black mb-2">Standar K3 & Peralatan Lengkap</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kami memastikan setiap pekerjaan pemuatan sampah dilakukan dengan aman, bersih, dan mematuhi regulasi lalu lintas.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, tIdx) => (
                <div key={tIdx} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <Wrench className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-snug">{tool}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
