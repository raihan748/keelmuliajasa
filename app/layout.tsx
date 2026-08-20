import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanUp IND - Jasa Home Cleaning Profesional Jabodetabek | Bersih, Rapi & Bergaransi",
  description:
    "Jasa home cleaning, deep cleaning, sedot tungau kasur, cuci kamar mandi & toren profesional untuk seluruh wilayah Jabodetabek. Tenaga terlatih, chemical eco-friendly ramah anak, dan booking cepat via WhatsApp.",
  keywords: [
    "jasa home cleaning jabodetabek",
    "deep cleaning jakarta",
    "jasa sedot tungau kasur",
    "cuci toren air tangerang",
    "jasa bersih rumah bsd",
    "toilet cleaning depok",
    "cleanup indonesia",
  ],
  authors: [{ name: "CleanUp IND" }],
  openGraph: {
    title: "CleanUp IND - Solusi Home Cleaning Praktis Jabodetabek",
    description: "Bersih-bersih rumah lebih mudah, rapi, dan bergaransi bersama CleanUp IND. Konsultasi gratis via WhatsApp sekarang!",
    url: "https://cleanupindonesia.id",
    siteName: "CleanUp IND",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanUp IND - Jasa Home Cleaning Jabodetabek",
    description: "Layanan home cleaning terpercaya di Jakarta, Bogor, Depok, Tangerang, Bekasi.",
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
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white font-sans text-brand-dark">
        {children}
      </body>
    </html>
  );
}
