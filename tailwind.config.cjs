/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        content: 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
