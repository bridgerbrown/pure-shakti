/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'facialwoman': 'url(/facial-woman.jpg)',
        'yogawoman': 'url(/yoga-woman.jpg)',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)'],
        cinzel: ['var(--font-cinzel)'],
        svarga: ['var(--font-svarga)'],
      },
      colors: {
        'primaryOne': '#ceead6',
        'secondaryOne': '#ebe1cb',
        'primaryTwo': '#cffcdf',
        'secondaryTwo': '#c7f5d3',
        'h2Two': '#73ba8c',
        'h3Two': '#284030',
      },
    },
  },
  plugins: [],
}
