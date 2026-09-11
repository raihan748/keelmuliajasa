import React from "react";
import { CheckCircle2, Building, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const AboutCompany: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-transparent border-b border-white/20 relative z-10 scroll-mt-20" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Story & Official Company Profile */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full">
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
                  <ScrollReveal delay={0.05}>
                    <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 shadow-soft-xs hover:border-brand-300 hover:ring-2 hover:ring-brand-500/10 card-transition group h-full">
                      <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-900 transition-colors">Legalitas CV Resmi</h4>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">Memiliki NIB, NPWP, dan izin operasional badan usaha</p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.12}>
                    <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 shadow-soft-xs hover:border-brand-300 hover:ring-2 hover:ring-brand-500/10 card-transition group h-full">
                      <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-900 transition-colors">Garansi Bebas Ceceran</h4>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">Bak tertutup terpal & area loading disapu bersih</p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.18}>
                    <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 shadow-soft-xs hover:border-brand-300 hover:ring-2 hover:ring-brand-500/10 card-transition group h-full">
                      <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-900 transition-colors">Residensial & B2B</h4>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">Kontrak rutin perumahan, ruko, kantor & proyek</p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.24}>
                    <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 shadow-soft-xs hover:border-brand-300 hover:ring-2 hover:ring-brand-500/10 card-transition group h-full">
                      <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-900 transition-colors">Layanan Cepat / Same Day</h4>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">Armada siaga cepat tiba sesuai jadwal pemesanan</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Visual Badges & Operation Photo */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal delay={0.15} className="h-full">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-soft-lg h-full flex flex-col justify-between relative card-transition hover:border-brand-300">
                
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

                    <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/60">
                      Aktif Operasional
                    </span>
                  </div>

                  {/* Operational Photo Preview */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-100">
                    <img
                      src="/images/operasional-profil.jpg"
                      alt="Operasional CV. Keel Mulia Jasa"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
                      <p className="text-white text-xs font-medium">
                        Unit Dump Truck Standar Operasional Bersih & Aman
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    Kami hadir menjawab kebutuhan pengelolaan sampah perkotaan yang modern dan terpercaya dengan SOP penanganan yang higienis.
                  </p>
                </div>

                {/* Micro Meta Table */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 text-xs space-y-2">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-normal">Bentuk Usaha:</span>
                    <span className="font-semibold text-slate-900">CV (Persekutuan Komanditer)</span>
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


