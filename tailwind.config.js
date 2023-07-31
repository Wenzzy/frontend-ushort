/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '12px',
        md: '16px',
        '2md': '20px',
        '3md': '22px',
        lg: '30px',
      },
      gap: {
        4.5: '1.1rem',
        13: '3.25rem',
      },
    },
    colors: {
      primary: '#FFFFFF',
      accent: '#7271F3',
      gray: {
        300: '#747474',
        350: '#4B4D59',
        400: '#42434B',
        450: '#3F4048',
        500: '#33343C',
      },
      red: {
        500: '#CD4646',
        600: '#813D3D',
      },
    },
  },
  plugins: [],
}
