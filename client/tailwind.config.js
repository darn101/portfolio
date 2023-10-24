/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'dnb': "url('/data/dnb.png')",
      }
    },
  },
  plugins: [],
}

