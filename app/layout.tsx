import type { Metadata } from "next";
import "./globals.css";
import { DevToolsCredits } from "@/components/DevToolsCredits";

export const metadata: Metadata = {
  metadataBase: new URL("https://keelmuliajasa.com"),
  title: "CV. Keel Mulia Jasa - Jasa Angkutan Sampah, Puing & Kebersihan Lingkungan",
  description:
    "CV. Keel Mulia Jasa adalah penyedia resmi jasa angkutan sampah rumah tangga, komersial, puing proyek konstruksi, penebangan pohon, dan pembersihan lahan dengan armada dump truck lengkap di Makassar, Gowa, dan Maros.",
  keywords: [
    "keel mulia jasa",
    "cv keel mulia jasa",
    "jasa angkutan sampah",
    "jasa buang puing bangunan",
    "sewa dump truck sampah",
    "jasa tebang pohon makassar",
    "pembersihan lahan sampah",
    "waste management sulawesi",
  ],
  authors: [{ name: "Raihan Muh Ikhsan", url: "https://keelmuliajasa.com" }, { name: "CV. Keel Mulia Jasa" }],
  creator: "Raihan Muh Ikhsan",
  publisher: "CV. Keel Mulia Jasa",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "CV. Keel Mulia Jasa - Jasa Angkutan Sampah & Kebersihan Terpadu",
    description: "Solusi terpercaya pengangkutan sampah, puing proyek, dan pembersihan area dengan armada dump truck lengkap dan profesional.",
    url: "https://keelmuliajasa.com",
    siteName: "CV. Keel Mulia Jasa",
    images: [
      {
        url: "/images/logo-original.jpg",
        width: 1080,
        height: 1080,
        alt: "Logo CV. Keel Mulia Jasa",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/*
        ======================================================================
        *  CV. KEEL MULIA JASA — Official Website
        *  Designed & Developed with Passion
        *  Made by Raihan Muh Ikhsan
        ======================================================================
        */}
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-neo-yellow selection:text-black">
        <DevToolsCredits />
        {children}
      </body>
    </html>
  );
}
