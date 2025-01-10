import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: '#4785ff',
        primarypurple: '#a3a3f5',
        primarypink: '#ffa4d5',
        primarygreen: '#c3ffd2',
        primarylightblue: '#c3ffd2',
        primarydarkblue: '#07294D',
        primarywhite: '#ffffff',
        primaryblack: '#000000',
        primaryGold: '#FFD700',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
