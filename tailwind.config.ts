import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Customizing NextUI secondary color
        secondary: {
          DEFAULT: "#4ade80", // Default secondary color
          light: "#86efac",  // Light variant of the secondary color
          dark: "#166534",   // Dark variant of the secondary color
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          secondary: "#4ade80", // Custom secondary color in light mode
        },
        dark: {
          secondary: "#86efac", // Custom secondary color in dark mode
        },
      },
    }),
  ],
};

export default config;
