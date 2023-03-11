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
          globalGreen: 'var(--green)',
        },
      },
      backgroundColor: {
        skin: {
          cardBg: 'var(--card_bg)',
          mainBg: 'var(--bg)',
          globalGreen: 'var(--green)',
          hover_green: 'var(--btn-hover-green)',
        },
      },
      fontFamily: {
        dmSans: "'DM Sans', sans-serif;",
      },
    },
  },
  plugins: [],
};
