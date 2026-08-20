"use client";

import React, { useState } from "react";
import { Menu, X, MessageCircle, FileText } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Poster & Profil", href: "#poster-resmi" },
    { name: "Layanan", href: "#layanan" },
    { name: "Armada", href: "#armada" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Hitung Biaya", href: "#kalkulator" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-neo-surface/95 backdrop-blur-md border-b-2 border-black transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo with Official Image */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="bg-neo-card p-1.5 rounded-xl border-2 border-black shadow-neo-sm group-hover:-translate-y-0.5 group-hover:shadow-neo transition-all">
                <img
                  src="/images/logo-clean.png"
                  alt="Logo CV. Keel Mulia Jasa"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-black text-slate-300 hover:text-black hover:bg-neo-yellow px-3 py-1.5 rounded-lg border border-transparent hover:border-black hover:shadow-neo-sm transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-3">
              <a
                href="#kalkulator"
                className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neo-card hover:bg-neo-card2 text-slate-200 text-xs font-black border-2 border-black shadow-neo-sm hover:-translate-y-0.5 transition-all"
              >
                <FileText className="w-4 h-4 text-neo-yellow" />
                <span>Minta Penawaran</span>
              </a>

              <a
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20angkutan%20sampah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black text-xs sm:text-sm font-black border-2 border-black shadow-neo hover:-translate-y-0.5 hover:shadow-neo-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-neo-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pesan Armada</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl bg-neo-card border-2 border-black shadow-neo-sm text-slate-200 hover:bg-neo-card2 transition-all"
                aria-label="Buka Menu"
              >
                <Menu className="w-6 h-6" />
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
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-neo-surface p-6 border-l-2 border-black shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b-2 border-black">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo-clean.png"
                alt="Logo CV. Keel Mulia Jasa"
                className="h-9 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-neo-card border-2 border-black shadow-neo-sm text-slate-200 hover:bg-neo-card2"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2.5 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-black text-slate-200 hover:text-black hover:bg-neo-yellow px-4 py-2 rounded-xl border-2 border-transparent hover:border-black hover:shadow-neo-sm transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t-2 border-black space-y-3">
          <a
            href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20angkutan%20sampah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neo-emerald hover:bg-neo-emerald-dark text-black font-black text-sm border-2 border-black shadow-neo"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat WA: 0823-9619-3473</span>
          </a>
          <a
            href="tel:+6282396193473"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neo-card hover:bg-neo-card2 text-slate-200 font-black text-xs border-2 border-black shadow-neo-sm"
          >
            <span>Hotline: 0823-9619-3473</span>
          </a>
        </div>
      </div>
    </>
  );
};
