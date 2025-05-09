// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],    // body text
          heading: ['Poppins', 'sans-serif'],    // headings
        },
        colors: {
            olive: '#434F40',
          },
      },
    },
    plugins: [],
  }
  
  