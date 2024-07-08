/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3D91',
        secondary: '#D0D6F9',
        accent: '#FFFFFF',
      },
      fontFamily: {
        base: ['Barlow Condensed', 'sans-serif'],
        heading: ['Bellefair', 'serif'],
      },
      fontSize: {
        small: '14px',
        medium: '18px',
        large: '24px',
        '2xl': '48px',
        '3xl': '80px',
      },
      backgroundImage: {
        'home-desktop': "url('/public/assets/home/background-home-desktop.jpg')",
        'destination-desktop': "url('/public/assets/destination/background-destination-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
