"use client";

import { useEffect } from "react";

export const DevToolsCredits: React.FC = () => {
  useEffect(() => {
    const asciiArt = `
██╗  ██╗███████╗███████╗██╗         ███╗   ███╗██╗   ██╗██╗     ██╗ █████╗ 
██║ ██╔╝██╔════╝██╔════╝██║         ████╗ ████║██║   ██║██║     ██║██╔══██╗
█████╔╝ █████╗  █████╗  ██║         ██╔████╔██║██║   ██║██║     ██║███████║
██╔═██╗ ██╔══╝  ██╔══╝  ██║         ██║╚██╔╝██║██║   ██║██║     ██║██╔══██║
██║  ██╗███████╗███████╗███████╗    ██║ ╚═╝ ██║╚██████╔╝███████╗██║██║  ██║
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═╝
                                                                           
             ██╗ █████╗ ███████╗ █████╗                                    
             ██║██╔══██╗██╔════╝██╔══██╗                                   
             ██║███████║███████╗███████║                                   
        ██   ██║██╔══██║╚════██║██╔══██║                                   
        ╚█████╔╝██║  ██║███████║██║  ██║                                   
         ╚════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝                                   
`;

    console.log(
      `%c${asciiArt}`,
      "color: #FACC15; font-family: monospace; font-weight: 900; font-size: 11px; text-shadow: 2px 2px 0px #000000; line-height: 1.15;"
    );

    console.log(
      "%c 🚚 CV. KEEL MULIA JASA %c 🌿 Jasa Angkutan Sampah, Puing & Kebersihan %c",
      "background: #FACC15; color: #000000; font-weight: 900; font-size: 12px; padding: 4px 8px; border-radius: 4px 0 0 4px; border: 1.5px solid #000;",
      "background: #10B981; color: #000000; font-weight: 900; font-size: 12px; padding: 4px 8px; border-radius: 0 4px 4px 0; border: 1.5px solid #000; border-left: none;",
      "color: transparent;"
    );

    console.log(
      "%c 👨‍💻 DEVELOPER & ENGINEER %c MADE BY RAIHAN MUH IKHSAN %c",
      "background: #000000; color: #FFFFFF; font-weight: 900; font-size: 12px; padding: 4px 8px; border-radius: 4px 0 0 4px; border: 1.5px solid #000;",
      "background: #38BDF8; color: #000000; font-weight: 900; font-size: 12px; padding: 4px 8px; border-radius: 0 4px 4px 0; border: 1.5px solid #000; border-left: none;",
      "color: transparent;"
    );

    console.log(
      "%c✨ High Performance Web Architecture • Next.js 14 • Tailwind CSS • Clean Neobrutalism Design\n📍 Wilayah Operasional: Makassar, Gowa, Maros & Sulawesi Selatan\n📞 Hotline WhatsApp: 0823-9619-3473",
      "color: #64748B; font-weight: 700; font-size: 11px; font-family: monospace; line-height: 1.6;"
    );
  }, []);

  return null;
};
