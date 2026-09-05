"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, FileText, PhoneCall, ShieldCheck, ChevronRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: "Publikasi", href: "#poster-resmi" },
    { name: "Klien", href: "#klien-kami" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Armada", href: "#armada" },
    { name: "Simulasi Biaya", href: "#kalkulator" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Sticky Golden Navbar */}
      <header
        className={`sticky top-0 z-40 bg-[#EEBA2B] border-b border-[#D9A51B]/80 transition-all duration-200 ${
          scrolled ? "shadow-md py-1" : "shadow-soft-sm py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* Brand Logo in Navbar */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group shrink-0"
              aria-label="CV. Keel Mulia Jasa - Kembali ke Atas"
              title="CV. Keel Mulia Jasa"
            >
              <div className="bg-transparent p-0 border-0 shadow-none transition-all duration-300 group-hover:scale-105">
                <img
                  src="/images/logo-clean.png"
                  alt="Logo CV. Keel Mulia Jasa"
                  className={`${
                    scrolled
                      ? "h-11 sm:h-12 md:h-14 max-w-[155px] sm:max-w-[195px] md:max-w-[235px]"
                      : "h-10 sm:h-11 md:h-12 max-w-[140px] sm:max-w-[180px] md:max-w-[210px]"
                  } w-auto object-contain transition-all duration-200 drop-shadow-sm`}
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold text-slate-950 hover:text-black hover:bg-black/10 px-3.5 py-1.5 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="#kalkulator"
                className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-slate-900 text-xs font-bold border border-white/60 shadow-soft-xs transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#A8790E]" />
                <span>Minta Penawaran</span>
              </a>

              <a
                href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20angkutan%20sampah"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-soft-sm hover:shadow-soft-md transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0 text-brand-400" />
                <span>Pesan Armada</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden min-h-[40px] min-w-[40px] p-2 rounded-xl bg-white/90 hover:bg-white border border-white/40 text-slate-900 flex items-center justify-center transition-all cursor-pointer shadow-soft-xs"
                aria-label="Buka Menu Navigasi"
              >
                <Menu className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white p-6 shadow-soft-xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="bg-transparent p-0">
                <img
                  src="/images/logo-clean.png"
                  alt="Logo CV. Keel Mulia Jasa"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 px-4 py-2.5 rounded-xl transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-3">
          <div className="flex items-center gap-2 text-slate-700 font-medium text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
            <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0 stroke-[2.2]" />
            <span>Melayani Makassar, Gowa & Maros</span>
          </div>

          <a
            href="https://wa.me/6282396193473?text=Halo%20CV%20Keel%20Mulia%20Jasa%2C%20saya%20ingin%20booking%20armada%20angkutan%20sampah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-soft-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat WhatsApp Cepat</span>
          </a>

          <a
            href="tel:+6282396193473"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs transition-all"
          >
            <PhoneCall className="w-4 h-4 text-slate-600" />
            <span>Telepon: 0823-9619-3473</span>
          </a>
        </div>
      </div>
    </>
  );
};

