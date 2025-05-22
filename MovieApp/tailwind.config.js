// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // adjust according to your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
