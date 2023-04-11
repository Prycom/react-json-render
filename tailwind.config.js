/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '150': '150px',
        '400': '400px',
        '600': '600px',
        '700': '700px'
      },
      minWidth: {
        '400': '400px'
      },
      minHeight: {
        '200': '200px'
      },
      height: {
        '800': '800px'
      },
      maxHeight: {
        '800': '800px'
      }
    },
  },
  plugins: [],
}