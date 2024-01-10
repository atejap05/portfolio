import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
      mypolygon_t: "polygon(0 5%, 100% 0, 100% 100%, 0% 100%);",
      mypolygon_b: "polygon(0 0, 100% 0, 100% 95%, 0% 100%);",
      mypolygon_y: "polygon(0% 6%, 100% 0%, 100% 95%, 0% 100%);",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        my: {
          black: "#0B0C10",
          darken: "#1B262C",
          dark: "#0F4C75",
          light: "#3282B8",
          lighten: "#BBE1FA",
          white: "#F0F8FF",
          bage: "#FAF4EE",
        },
      },
      animation: {
        "hand-shake": "hand-shake 1s ease-in-out infinite",
      },
      keyframes: {
        "hand-shake": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
export default config;
