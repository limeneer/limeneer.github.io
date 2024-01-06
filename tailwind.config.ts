import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        azonix: ["Azonix", "sans-serif"],
      },
      colors: {
        "soft-white": "#f9f9fb",
        "limeneer-cyan": "#00FFFF",
        "limeneer-blue": "#000078",
      },
    },
  },
  plugins: [],
  // safelist: ["bg-[#00FFFF]", "#f9f9fb", "lg:text-4xl"],
};
export default config;
