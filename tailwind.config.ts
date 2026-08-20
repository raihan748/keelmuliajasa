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
          green: "#61CE70",
          "green-dark": "#4ABA59",
          "green-darker": "#389E46",
          "green-light": "#EAF8EC",
          "green-soft": "#F4FBF5",
          cyan: "#61E8FF",
          "cyan-dark": "#0EB5D6",
          dark: "#111827",
          "dark-muted": "#374151",
          gray: "#69727D",
          "gray-light": "#9CA3AF",
          border: "#E5E7EB",
          "border-light": "#F3F4F6",
          "bg-subtle": "#F8FAF9",
          wa: "#25D366",
          "wa-dark": "#1EBE5D",
        },
      },
      fontFamily: {
        sans: ["'Nunito'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
        card: "0 4px 12px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)",
        elevated: "0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)",
        "brand-green": "0 8px 20px -4px rgba(97, 206, 112, 0.35)",
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
