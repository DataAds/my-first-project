/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#c8dffb',100:'#91bff7',200:'#5a9ff3',300:'#237fee',
          400:'#0c4e9f',500:'#0f63c8',600:'#0d57b2',700:'#0b4c9c',800:'#093b78',900:'#062750',950:'#031428'
        },
        accent: {
          50:'#bad5ee',100:'#75abde',200:'#3181cc',300:'#215587',
          400:'#1a3a5d',500:'#102a42',600:'#0d2135',700:'#0a1927',800:'#06111a',900:'#03080d'
        },
        info: {
          50:'#d2f5fb',100:'#a5ecf7',200:'#79e2f3',300:'#4cd9ee',
          400:'#1fcfea',500:'#1fcfea',600:'#12abc2',700:'#0e8092',800:'#095561',900:'#052b31'
        },
      },
      borderRadius: {
        xl: "0.75rem",
        '2xl': "1rem"
      }
    },
  },
  plugins: [],
};
