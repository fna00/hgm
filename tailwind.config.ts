import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: `${576 / 16}rem`,
        md: `${768 / 16}rem`,
        lg: `${992 / 16}rem`,
        xl: `${1200 / 16}rem`,
      },
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s forwards",
        slideOut: "slideOut 0.5s forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#001F3F",
        customHeroAlt: "#3A6D8C",
        customSectionTop: "#6A9AB0",
        customSectionAlt: "#EAD8B1",
      },
      backgroundImage: {
        hero: "url('../assets/hero.png')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        windSong: ["WindSong"],
      },
    },
  },
  plugins: [],
};
export default config;
