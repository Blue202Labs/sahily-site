import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "sahily-green": "#10b151",
      },
      boxShadow: {
        blurred: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        "spin-pause": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" }, // Pauses after one full spin
        },
      },
      animation: {
        "spin-pause": "spin-pause 3s ease-in-out infinite", // Customize duration as needed
      },
    },
    fontFamily: {
      default: ["var(--font-libre-franklin)", ...defaultTheme.fontFamily.sans],
      nunito: ["var(--font-nunito-sans)", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
export default config;
