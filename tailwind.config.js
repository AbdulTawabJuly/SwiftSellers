/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navbar: ["#39AD96"],
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
