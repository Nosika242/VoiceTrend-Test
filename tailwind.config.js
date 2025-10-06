
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Define the custom breakpoint here
        'navbreak': '820px', 
      },
    },
  },
  plugins: [],
}