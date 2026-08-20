"use client";

import React, { useState } from "react";
import { Sparkles, Menu, X, MessageCircle } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Cara Pesan", href: "#cara-pesan" },
    { name: "Hitung Biaya", href: "#kalkulator" },
    { name: "Area Jabodetabek", href: "#area-layanan" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-border-light shadow-subtle transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3.5">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 text-2xl font-black tracking-tight text-brand-dark group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-green to-emerald-500 flex items-center justify-center text-white shadow-brand-green group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="flex items-center">
                CleanUp
                <span className="ml-1 text-sm bg-brand-green-light text-brand-green-darker px-1.5 py-0.5 rounded font-extrabold">
                  IND
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-brand-dark-muted hover:text-brand-green-darker transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6281234567890?text=Halo%20CleanUp%20IND%2C%20saya%20ingin%20konsultasi%20layanan%20home%20cleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-wa hover:bg-brand-wa-dark text-white text-sm font-bold shadow-brand-wa transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Kami</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-brand-dark hover:bg-brand-bg-subtle transition-colors"
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
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-brand-border-light">
            <div className="flex items-center gap-2 text-xl font-black text-brand-dark">
              <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>CleanUp IND</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-brand-gray hover:bg-gray-100"
              aria-label="Tutup Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-brand-dark hover:text-brand-green-darker py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-brand-border-light">
          <a
            href="https://wa.me/6281234567890?text=Halo%20CleanUp%20IND%2C%20saya%20ingin%20booking%20layanan%20home%20cleaning"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-wa hover:bg-brand-wa-dark text-white font-bold shadow-brand-wa transition-transform active:scale-98"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Pesan via WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
