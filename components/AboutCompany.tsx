import React from "react";
import { Award, CheckCircle2, ShieldCheck, MapPin, Building, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const AboutCompany: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-100" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Story & Official Company Profile */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" distance={40}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60 shadow-soft-xs text-xs font-semibold">
                  <Building className="w-3.5 h-3.5 text-brand-600" />
                  <span>Profil Resmi Perusahaan</span>
                </div>

                <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
                  <strong className="text-slate-900 font-extrabold">CV. Keel Mulia Jasa</strong> adalah badan usaha resmi berbadan hukum yang bergerak di bidang layanan kebersihan, pengelolaan, dan pengangkutan berbagai jenis muatan sampah serta material sisa konstruksi di kawasan metropolitan Sulawesi Selatan.
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Didukung oleh armada dump truck dan pick up mandiri, tenaga loader terlatih dengan standar keselamatan K3, serta kesiapan operasional setiap hari, kami memastikan seluruh material diangkut secara bertanggung jawab, rapi, dan bersih tuntas.
                </p>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft-xs">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Legalitas CV Resmi</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">Memiliki NIB, NPWP, dan legalitas badan usaha</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft-xs">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Garansi Bebas Ceceran</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">Bak tertutup terpal & area loading disapu bersih</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft-xs">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Residensial & B2B</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">Kontrak rutin perumahan, ruko, kantor & proyek</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft-xs">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Layanan Cepat / Same Day</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">Armada siaga cepat tiba sesuai jadwal</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Badges & Operation Photo */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" distance={40} delay={0.15}>
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-soft-lg relative">
                
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

                <div className="space-y-2.5 text-xs text-slate-600 font-medium">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500 font-normal">Nama Usaha:</span>
                    <span className="font-bold text-slate-900">CV. KEEL MULIA JASA</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500 font-normal">Bidang Jasa:</span>
                    <span className="font-bold text-slate-900">Pengangkutan Sampah & Puing</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500 font-normal">Tujuan Pembuangan:</span>
                    <span className="font-semibold text-brand-600">Tempat Pemrosesan Akhir (TPA)</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
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

