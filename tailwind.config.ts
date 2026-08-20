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
        brand: {
          emerald: "#059669",
          "emerald-dark": "#047857",
          "emerald-darker": "#065F46",
          "emerald-light": "#ECFDF5",
          "emerald-soft": "#F0FDF4",
          teal: "#0D9488",
          amber: "#F59E0B",
          dark: "#0F172A",
          "dark-muted": "#334155",
          gray: "#64748B",
          "gray-light": "#94A3B8",
          border: "#E2E8F0",
          "border-light": "#F1F5F9",
          "bg-subtle": "#F8FAFC",
          wa: "#25D366",
          "wa-dark": "#1EBE5D",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Nunito'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
        card: "0 4px 14px -2px rgba(0, 0, 0, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        elevated: "0 12px 30px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.05)",
        "brand-emerald": "0 8px 25px -4px rgba(5, 150, 105, 0.35)",
        "brand-wa": "0 6px 20px rgba(37, 211, 102, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseBadge: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        float: "float 3.5s ease-in-out infinite",
        "pulse-badge": "pulseBadge 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
