/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blauw: '#083D77',
        wit: '#E8F1F2',
        'licht-groen': '#DFFFD6',
        groen: '#53917e',
        'donker-grijs': '#2D2D2D',
      },
    },
  },
  plugins: [],
};
