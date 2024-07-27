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
        'primary': '#EBE9E1',
        'secondary': '#D6536D',
        'accent': '#EFA2B6',
        'neutral': '#EFB11D',
        'base-100': '#E43D12',
        'info': '#425664',
        // 'success': '#A1C398',
        // 'warning': '#FFB534',
        // 'error': '#FA7070'
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
};
// export default config;

export default config;
