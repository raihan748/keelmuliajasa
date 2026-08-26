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
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        accent: {
          cyan: "#06B6D4",
          sky: "#0284C7",
          amber: "#F59E0B",
          emerald: "#10B981",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAFC",
          muted: "#F1F5F9",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "'Inter'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        "soft-xs": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "soft-sm": "0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 1px 4px -1px rgba(15, 23, 42, 0.04)",
        "soft-md": "0 8px 20px -4px rgba(15, 23, 42, 0.08), 0 3px 8px -2px rgba(15, 23, 42, 0.04)",
        "soft-lg": "0 16px 36px -6px rgba(15, 23, 42, 0.10), 0 6px 16px -2px rgba(15, 23, 42, 0.05)",
        "soft-xl": "0 24px 50px -12px rgba(15, 23, 42, 0.12), 0 10px 24px -4px rgba(15, 23, 42, 0.06)",
        "glow-brand": "0 12px 30px -6px rgba(5, 150, 105, 0.25)",
        "glow-cyan": "0 12px 30px -6px rgba(6, 182, 212, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
