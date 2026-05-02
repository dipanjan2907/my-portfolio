/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          black: "#030305",
          dark: "#08080C",
          light: "#1A1A24",
        },
        nebula: {
          purple: "#8A2387",
          pink: "#E94057",
          orange: "#F27121",
          cyan: "#00E5FF",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-sm": "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
        "neon": "0 0 15px rgba(233, 64, 87, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "nebula-gradient": "linear-gradient(to right, #8A2387, #E94057, #F27121)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "aurora-shift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "aurora-shift": "aurora-shift 20s ease-in-out infinite",
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
  plugins: [],
};
