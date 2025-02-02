import type { Config } from "tailwindcss";

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
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-md': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.4)',
        },
      })
    }
  ],
}

export default config;
