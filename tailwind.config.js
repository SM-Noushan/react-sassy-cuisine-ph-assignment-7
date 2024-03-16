/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'spring-green-50': '#eefff7',
      'spring-green-100': '#d7ffef',
      'spring-green-200': '#b2ffde',
      'spring-green-300': '#77fec5',
      'spring-green-400': '#35f3a3',
      'spring-green-500': '#0be58a',
      'spring-green-600': '#02b76c',
      'spring-green-700': '#068f56',
      'spring-green-800': '#0b7047',
      'spring-green-900': '#0b5c3c',
      'spring-green-950': '#003420',
      'haiti-50': '#ececff',
      'haiti-100': '#dcdcff',
      'haiti-200': '#c2c0ff',
      'haiti-300': '#a09aff',
      'haiti-400': '#8872ff',
      'haiti-500': '#7951ff',
      'haiti-600': '#6f31fa',
      'haiti-700': '#6125dd',
      'haiti-800': '#4e21b2',
      'haiti-900': '#41238c',
      'haiti-950': '#150b2b',
    },
    fontFamily: {
      lexend: ['Lexend', 'sans-serif'],
      fira_sans: ['Fira Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

