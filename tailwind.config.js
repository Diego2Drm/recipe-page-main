/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "Stone-100": "#f3e6d8",
        "Stone-150": "#e4ded8",
        "Stone-600": "#5f574e",
        "Stone-900": "#302d2c",
        "Brown-800": "#854632",
        "Rose-800": "#7b284f",
        "Rose-50": "#fff5fa",
      },
      fontFamily: {
        "Young": ["Young", 'sans-serif'],
        "Outfit": ["Outfit", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

