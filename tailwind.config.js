/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          globalGreen: '#7EE787',
        },
      },
      backgroundColor: {
        skin: {
          cardBg: 'rgba(40, 46, 54, 0.97);',
          mainBg: '#1B1B1B;',
        },
      },
      fontFamily: {
        dmSans: "'DM Sans', sans-serif;",
      },
    },
  },
  plugins: [],
};
