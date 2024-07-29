import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-minus-nav': 'calc(100dvh - var(--nav-height))',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: ['Coming Soon', 'cursive'].join(','),
            textTransform: "none",
          },
        },
      },
      colors: {
        'primary': '#EBE9E1', //background
        'secondary': '#D6536D', //dark pink
        'accent': '#EFA2B6', // light pink
        'neutral': '#EFB11D', //orange
        'base-100': '#E43D12', //red
        'info': '#425664', //dark grey
        // 'success': '#A1C398',
        'warning': '#FEDD89', //yellow
        // 'error': '#FA7070'
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
};

export default config;
