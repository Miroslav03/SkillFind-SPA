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
      transitionDelay: {
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}

