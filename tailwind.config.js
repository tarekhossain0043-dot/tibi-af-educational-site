/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16233d",
        "ink-soft": "#5b6472",
        maroon: "#7c1f2a",
        "maroon-deep": "#5c141d",
        gold: "#b8923a",
        "gold-soft": "#d8bd7e",
        paper: "#faf6ee",
        "paper-line": "#e4d9c2",
      },
      fontFamily: {
        sans: [
          "Hind Siliguri",
          "Noto Serif Bengali",
          "Kalpurush",
          "Arial",
          "sans-serif",
        ],
        serif: ["Noto Serif Bengali", "Hind Siliguri", "Kalpurush", "serif"],
      },
      keyframes: {
        "stamp-spin": { to: { transform: "rotate(360deg)" } },
        "hero-arrive": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translate(-50%, 0)" },
          "50%": { transform: "translate(-50%, 8px)" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        "stamp-spin": "stamp-spin 22s linear infinite",
        "hero-arrive": "hero-arrive 0.75s ease both",
        "scroll-bounce": "scroll-bounce 1.8s ease-in-out infinite",
        "fade-in": "fade-in 0.4s ease",
      },
    },
  },
  plugins: [],
};
