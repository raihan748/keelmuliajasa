import React from "react";
import { Award, CheckCircle2, ShieldCheck, MapPin, Building, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const AboutCompany: React.FC = () => {
  return (
    <section className="py-24 bg-neo-bg bg-neo-grid border-b-2 border-black" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Official Company Profile (Slides from LEFT) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" distance={60}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-neo-yellow text-black border-2 border-black shadow-neo-sm text-xs font-black uppercase tracking-wider">
                  <Building className="w-4 h-4 stroke-[2.5]" />
                  <span>Profil Resmi Perusahaan</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  CV. Keel Mulia Jasa — Solusi Pengangkutan Sampah & Puing Terpercaya
                </h2>

                <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                  <strong className="text-slate-900 font-black">CV. Keel Mulia Jasa</strong> adalah badan usaha resmi berbadan hukum yang bergerak di bidang layanan kebersihan, pengelolaan, dan pengangkutan berbagai jenis muatan sampah serta material sisa konstruksi di kawasan metropolitan Sulawesi Selatan.
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Didukung oleh armada dump truck dan pick up mandiri, tenaga loader terlatih dengan standar keselamatan K3, serta kesiapan operasional setiap hari, kami memastikan seluruh material diangkut secara bertanggung jawab, rapi, dan bersih tuntas.
                </p>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border-2 border-black shadow-neo-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                    <div>
                      <h4 className="font-black text-sm text-slate-900">Legalitas CV Resmi</h4>
                      <p className="text-xs text-slate-600 font-medium">Memiliki NIB, NPWP, dan legalitas badan usaha</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border-2 border-black shadow-neo-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 stroke-[2.5]" />
                    <div>
                      <h4 className="font-black text-sm text-slate-900">Garansi Bebas Ceceran</h4>
                      <p className="text-xs text-slate-600 font-medium">Bak tertutup terpal & area loading disapu bersih</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border-2 border-black shadow-neo-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5 stroke-[2.5]" />
                    <div>
                      <h4 className="font-black text-sm text-slate-900">Kerja Sama Residensial & B2B</h4>
                      <p className="text-xs text-slate-600 font-medium">Siap kontrak rutin perumahan, ruko, kantor & proyek</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border-2 border-black shadow-neo-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5 stroke-[2.5]" />
                    <div>
                      <h4 className="font-black text-sm text-slate-900">Layanan Cepat / Same Day</h4>
                      <p className="text-xs text-slate-600 font-medium">Armada siaga cepat tiba dalam hitungan jam</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Badges & Fleet Feature Card (Slides from RIGHT) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" distance={60} delay={0.15}>
              <div className="bg-white border-2 border-black rounded-3xl p-7 sm:p-9 shadow-neo-xl relative">
                
                <div className="flex items-center justify-between pb-5 mb-6 border-b-2 border-black">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border-2 border-black p-1.5 flex items-center justify-center shadow-neo-sm">
                      <img
                        src="/images/logo-emblem-clean.png"
                        alt="Logo Emblem CV. Keel Mulia Jasa"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900">CV. Keel Mulia Jasa</h3>
                      <p className="text-xs text-amber-600 font-black">Makassar • Gowa • Maros</p>
                    </div>
                  </div>

                  <span className="bg-neo-yellow text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-black shadow-neo-sm">
                    Badan Usaha Resmi
                  </span>
                </div>

                {/* Photo of Operation */}
                <div className="rounded-2xl overflow-hidden border-2 border-black mb-6 shadow-neo">
                  <img
                    src="/images/fleet/operasional-loading-sampah.jpg"
                    alt="Operasional Pengangkutan Sampah CV Keel Mulia Jasa"
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="space-y-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="font-bold text-slate-500">Nama Usaha:</span>
                    <span className="font-black text-slate-900">CV. KEEL MULIA JASA</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="font-bold text-slate-500">Bidang Jasa:</span>
                    <span className="font-black text-slate-900">Pengangkutan Sampah & Puing</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="font-bold text-slate-500">Tujuan Pembuangan:</span>
                    <span className="font-black text-emerald-600">Tempat Pembuangan Akhir (TPA)</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-bold text-slate-500">Cakupan Wilayah:</span>
                    <span className="font-black text-blue-600">Makassar, Gowa, Maros & Sulsel</span>
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
