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
        '4xl': '96px',
        '5xl': '112px',
      },
      backgroundImage: {
        'home-desktop': "url('/public/assets/home/background-home-desktop.jpg')",
        'home-mobile': "url('/public/assets/home/background-home-mobile.jpg')",
        'destination-desktop': "url('/public/assets/destination/background-destination-desktop.jpg')",
        'crew-desktop': "url('/public/assets/crew/background-crew-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
