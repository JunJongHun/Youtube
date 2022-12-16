/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        youtube_main: `#FF0000`,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
