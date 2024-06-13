/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        GreenLighter: 'var(--GreenLighter)',
        GreenMedium: 'var(--GreenMedium)',
        GreenDarker: 'var(--GreenDarker)',
        Red: 'var(--Red)',
      
        White: 'var(--White)',
        GreyMedium: 'var(--GreyMedium)',
        GreyDarker: 'var(--GreyDarker)',
      },
    },
    screens: {
      'sm': {'max': '375px'}

    }
  },
  plugins: [],
}

