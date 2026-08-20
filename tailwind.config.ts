import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          card2: "#F1F5F9",
          cardLight: "#F8FAFC",
          border: "#000000",
          borderDark: "#000000",
          yellow: "#FACC15",
          "yellow-hover": "#EAB308",
          emerald: "#10B981",
          "emerald-dark": "#059669",
          red: "#EF4444",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
          gray: "#64748B",
          dark: "#0F172A",
          light: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "'Nunito'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        "neo-sm": "2px 2px 0px 0px #000000",
        neo: "4px 4px 0px 0px #000000",
        "neo-lg": "6px 6px 0px 0px #000000",
        "neo-xl": "8px 8px 0px 0px #000000",
        "neo-yellow": "4px 4px 0px 0px #FACC15",
        "neo-emerald": "4px 4px 0px 0px #10B981",
        "neo-cyan": "4px 4px 0px 0px #06B6D4",
      },
    },
  },
  plugins: [],
};
export default config;
