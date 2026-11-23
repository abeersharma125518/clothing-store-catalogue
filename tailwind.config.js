/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#241b1c',
        wine: '#4c1d24',
        'wine-light': '#6e2e37',
        maroon: '#7b2d3a',
        cream: '#fbf8f3',
        sand: '#f1e9dd',
        gold: '#b98b48',
        stone: '#6d6460',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -20px rgba(45, 25, 25, 0.35)',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
