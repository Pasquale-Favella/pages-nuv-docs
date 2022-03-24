module.exports = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require('@tailwindcss/typography'),require('@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "primary":'#ffffff'
        },
        light :{
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary":'rgb(17, 24, 39)'
        }
      },
    ],
  },
}