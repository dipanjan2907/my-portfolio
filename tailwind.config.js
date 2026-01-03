/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#111216",
          dark: "#1A1B23",
          gray: "#252630",
          blue: "#00f3ff",
          purple: "#bc13fe",
          pink: "#ff0055",
          green: "#0aff0a",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon-blue": "0 0 5px #00f3ff, 0 0 20px #00f3ff40",
        "neon-purple": "0 0 5px #bc13fe, 0 0 20px #bc13fe40",
        "neon-pink": "0 0 5px #ff0055, 0 0 20px #ff005540",
        holo: "inset 0 0 20px rgba(0, 243, 255, 0.2), 0 0 15px rgba(0, 243, 255, 0.4)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 243, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 243, 255, 0.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        glitch: "glitch 1s linear infinite",
      },
    },
  },
  plugins: [],
};
