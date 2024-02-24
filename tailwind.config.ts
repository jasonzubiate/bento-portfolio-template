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
        "trace-ash": "#0F0F0F",
        "blush-gray": "#141414",
        "demo-smoke": "#EFEFEF",
        "bridal-health": "#FFFBF6",
        "p-text": "#626262",
      },
    },
  },
  plugins: [],
};
export default config;
