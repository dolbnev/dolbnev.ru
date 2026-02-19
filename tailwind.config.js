/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'druk': ['Druk Text Wide', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
