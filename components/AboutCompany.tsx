import React from "react";
import { CheckCircle2, Building, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const AboutCompany: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-transparent border-b border-white/20 relative" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="down">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 border border-white/80 shadow-soft-sm text-xs font-bold">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              <span>Profil Resmi Perusahaan</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-sm tracking-tight mt-3 mb-4">
              Mengenal CV. Keel Mulia Jasa
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">
              Mitra resmi pengelolaan dan pengangkutan sampah terpadu dengan armada mandiri, tenaga terlatih K3, dan legalitas berizin di Sulawesi Selatan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Story & Official Company Profile */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal direction="up" distance={20} className="h-full">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-soft-lg h-full flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/70 text-xs font-bold mb-4">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Legalitas & Standar Operasional Resmi</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                    Solusi Angkutan Sampah, Puing & Kebersihan Terpercaya di Makassar
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-4">
                    <strong className="text-slate-950 font-bold">CV. Keel Mulia Jasa</strong> adalah badan usaha resmi berbadan hukum yang bergerak di bidang jasa kebersihan, pengelolaan, dan pengangkutan berbagai jenis muatan sampah serta material sisa konstruksi di kawasan metropolitan Sulawesi Selatan.
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    Didukung oleh armada dump truck dan pick up mandiri, tenaga loader terlatih dengan standar keselamatan K3, serta kesiapan operasional setiap hari, kami memastikan seluruh material diangkut secara bertanggung jawab, rapi, dan bersih tuntas langsung ke TPA resmi.
                  </p>
                </div>

                {/* Core Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 shadow-soft-xs hover:bg-slate-100/80 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Legalitas CV Resmi</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">Memiliki NIB, NPWP, dan izin operasional badan usaha</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 shadow-soft-xs hover:bg-slate-100/80 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Garansi Bebas Ceceran</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">Bak tertutup terpal & area loading disapu bersih</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 shadow-soft-xs hover:bg-slate-100/80 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Residensial & B2B</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">Kontrak rutin perumahan, ruko, kantor & proyek</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 shadow-soft-xs hover:bg-slate-100/80 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Layanan Cepat / Same Day</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">Armada siaga cepat tiba sesuai jadwal pemesanan</p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Badges & Operation Photo */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal direction="up" distance={20} delay={0.1} className="h-full">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-soft-lg h-full flex flex-col justify-between relative">
                
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 p-2 flex items-center justify-center">
                        <img
                          src="/images/logo-emblem-clean.png"
                          alt="Logo Emblem CV. Keel Mulia Jasa"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">CV. Keel Mulia Jasa</h3>
                        <p className="text-xs text-brand-600 font-medium">Makassar • Gowa • Maros</p>
                      </div>
                    </div>

                    <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full border border-brand-200/60">
                      Resmi & Berizin
                    </span>
                  </div>

                  {/* Photo of Operation */}
                  <div className="rounded-2xl overflow-hidden mb-5 shadow-soft-sm border border-slate-100">
                    <img
                      src="/images/fleet/operasional-loading-sampah.jpg"
                      alt="Operasional Pengangkutan Sampah CV Keel Mulia Jasa"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 font-medium bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-normal">Nama Usaha:</span>
                    <span className="font-bold text-slate-900">CV. KEEL MULIA JASA</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-normal">Bidang Jasa:</span>
                    <span className="font-bold text-slate-900">Pengangkutan Sampah & Puing</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-normal">Tujuan Pembuangan:</span>
                    <span className="font-semibold text-brand-600">Tempat Pemrosesan Akhir (TPA)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-500 font-normal">Cakupan Wilayah:</span>
                    <span className="font-semibold text-slate-800">Makassar, Gowa, Maros & Sulsel</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};


