import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["var(--font-kanit)", "sans-serif"]
      },
      colors: {
        buddy: {
          purple: "oklch(62% 0.21 302)",
          pink: "oklch(66% 0.24 348)",
          black: "oklch(13% 0.026 295)",
          lavender: "oklch(98% 0.009 295)",
          yellow: "oklch(84% 0.15 82)",
          mint: "oklch(73% 0.15 158)"
        }
      },
      boxShadow: {
        glow: "0 24px 80px oklch(66% 0.24 348 / .18)"
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", ".light &");
    })
  ]
};

export default config;
