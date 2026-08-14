import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B2545",
          soft: "#163A5F",
          muted: "#2A4A6A",
        },
        copper: {
          DEFAULT: "#C97A3D",
          dark: "#A85F2A",
          light: "#E09A5C",
        },
        slate: {
          text: "#5A6A7A",
          light: "#8A97A5",
          pale: "#F4F6F8",
          line: "#E2E8EE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(11, 37, 69, 0.08)",
        lift: "0 12px 40px rgba(11, 37, 69, 0.14)",
        copper: "0 8px 24px rgba(201, 122, 61, 0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
