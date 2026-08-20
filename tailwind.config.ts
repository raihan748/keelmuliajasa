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
          bg: "#0B0F17",
          surface: "#131B2A",
          card: "#182338",
          card2: "#1E2C45",
          border: "#2A3B5C",
          borderDark: "#000000",
          yellow: "#FACC15",
          "yellow-hover": "#EAB308",
          emerald: "#10B981",
          "emerald-dark": "#059669",
          red: "#EF4444",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
          gray: "#94A3B8",
          light: "#F8FAFC",
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
        "neo-white": "4px 4px 0px 0px #FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
