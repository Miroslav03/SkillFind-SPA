/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'main-background-color':'#191A19',
        'main-text-color':'#19232a'
      },
      backgroundImage: {
        'main-background': "url('./assets/hero.jpg')",
      },
    },
  },
  plugins: [require('daisyui'),],
}

