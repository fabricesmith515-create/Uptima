import type { Config } from "tailwindcss";

/**
 * Tokens extraits de reference/hero-reference.tsx — voir DESIGN-SYSTEM.md.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#EFEFEF", // fond du hero
        surface: "#F5F5F5", // sections gris clair
        ink: "#111827", // gray-900 — texte, boutons sombres
        "card-dark": "#1A1D2E", // fond des visuels projet
        accent: {
          DEFAULT: "#F26522", // CTA principal
          hover: "#E05A1A",
          soft: "#E8704E", // starburst / corail
          vivid: "#FF5F03", // shader ChromaFlow
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      boxShadow: {
        badge: "0 2px 8px rgba(0,0,0,0.08)",
        "badge-hover": "0 4px 16px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.25, 0.1, 0.25, 1)", // easing standard de la référence
        sheet: "cubic-bezier(0.32, 0.72, 0, 1)", // bottom sheet mobile
      },
      fontSize: {
        // Titres clampés de la référence
        "display-sm": ["clamp(1.75rem, 7vw, 4.2rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        display: ["clamp(2.5rem, 5vw, 4.2rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        heading: ["clamp(1.5rem, 4vw, 3.2rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
