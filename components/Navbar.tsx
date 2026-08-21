"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle, FileText, PhoneCall, ShieldCheck } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Poster & Profil", href: "#poster-resmi" },
    { name: "Klien & Mitra", href: "#klien-kami" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portofolio Lapangan", href: "#portofolio" },
    { name: "Armada", href: "#armada" },
    { name: "Simulasi Biaya", href: "#kalkulator" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-black transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="bg-white p-1 rounded-xl border-2 border-black shadow-neo-sm group-hover:-translate-y-0.5 group-hover:shadow-neo transition-all">
                <img
                  src="/images/logo-clean.png"
                  alt="Logo CV. Keel Mulia Jasa"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-black text-slate-800 hover:text-black hover:bg-neo-yellow px-3 py-1.5 rounded-lg border border-transparent hover:border-black hover:shadow-neo-sm transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#kalkulator"
                className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-black border-2 border-black shadow-neo-sm hover:-translate-y-0.5 transition-all"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Minta Penawaran</span>
              </a>

              <a
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20angkutan%20sampah"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[42px] inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black text-xs sm:text-sm font-black border-2 border-black shadow-neo hover:-translate-y-0.5 hover:shadow-neo-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-neo-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Pesan Armada</span>
              </a>

              {/* Mobile Hamburger (Enlarged 48px touch target) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden min-h-[44px] min-w-[44px] p-2 rounded-xl bg-white border-2 border-black shadow-neo-sm text-slate-900 active:bg-slate-100 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Buka Menu Navigasi"
              >
                <Menu className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[88%] max-w-sm bg-white p-5 sm:p-6 border-l-2 border-black shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo-clean.png"
                alt="Logo CV. Keel Mulia Jasa"
                className="h-8 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[40px] min-w-[40px] p-2 rounded-lg bg-slate-100 border-2 border-black shadow-neo-sm text-slate-900 active:bg-slate-200 flex items-center justify-center"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center text-sm font-black text-slate-900 active:bg-neo-yellow px-3.5 py-2 rounded-xl border-2 border-transparent active:border-black active:shadow-neo-sm transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-5 border-t-2 border-black space-y-2.5">
          <div className="flex items-center gap-2 text-black font-black text-[11px] bg-neo-yellow p-2.5 rounded-xl border-2 border-black shadow-neo-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
            <span>Melayani Makassar, Gowa & Maros</span>
          </div>

          <a
            href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20angkutan%20sampah"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neo-emerald active:bg-neo-emerald-dark text-black font-black text-sm border-2 border-black shadow-neo"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat WA: 0823-9619-3473</span>
          </a>

          <a
            href="tel:+6282396193473"
            className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-900 font-black text-xs border-2 border-black shadow-neo-sm"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>Telepon: 0823-9619-3473</span>
          </a>
        </div>
      </div>
    </>
  );
};
