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
        primary: "#2A3F53",
        secondary: "#C8A24F",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        libre: ["var(--font-libre-baskerville)", "serif"],
      },
      keyframes: {
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-scroll-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-scroll": "marquee-scroll 60s linear infinite",
        "marquee-scroll-reverse": "marquee-scroll-reverse 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
