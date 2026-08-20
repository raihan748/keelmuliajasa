import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Keel Mulia Jasa - Jasa Angkutan Sampah, Puing & Kebersihan Lingkungan Profesional",
  description:
    "CV Keel Mulia Jasa adalah penyedia jasa angkutan sampah rumah tangga, komersial, puing bangunan, penebangan pohon, dan pembersihan lahan. Armada dump truck lengkap, berizin resmi, tim profesional, dan siap melayani kontrak B2B maupun insidentil.",
  keywords: [
    "jasa angkutan sampah",
    "keel mulia jasa",
    "cv keel mulia jasa",
    "jasa buang puing bangunan",
    "angkut sampah kantor",
    "sewa dump truck sampah",
    "jasa tebang pohon dan angkut",
    "pembersihan lahan timbunan sampah",
    "waste management makassar",
    "jasa kebersihan lingkungan",
  ],
  authors: [{ name: "CV Keel Mulia Jasa" }],
  openGraph: {
    title: "CV Keel Mulia Jasa - Jasa Angkutan Sampah & Kebersihan Terpadu",
    description: "Solusi terpercaya pengangkutan sampah, puing proyek, dan pembersihan area dengan armada dump truck lengkap berizin resmi.",
    url: "https://keelmuliajasa.com",
    siteName: "CV Keel Mulia Jasa",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Keel Mulia Jasa - Jasa Angkutan Sampah & Puing",
    description: "Layanan pengangkutan sampah profesional, cepat, aman, dan berizin resmi.",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
