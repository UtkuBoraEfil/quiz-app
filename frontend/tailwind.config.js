/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '144px',
      'lg': '64px',
      'md': '36px',
      'sm': '28px',
    },
    colors: {
        'purple': '#A729F5',
        'dark-blue': '#313E51',
        'blue': '#3B4D66',
        'grey': '#626C7F',
        'light-blue': '#ABC1E1',
        'light-grey': '#F4F6FA',
        'white': '#FFFFFF',
        'green': '#26D782',
        'red': '#EE5454',
      },
    extend: {
        fontFamily: {
          'rubik':   ['Rubik', 'sans-serif'],
          
        }
    },
    backgroundImage: {
        'circles': "url('./assets/images/background.svg')",
      },
  },
  plugins: [],
}

