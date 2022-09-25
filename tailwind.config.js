/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "639px", // -1px

        md: "767px", // -1px

        lg: "1023px", // -1px

        xl: "1279px", // -1px

        "2xl": "1535px", // -1px
      },
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)",
      }),
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-white-color": "#fafafa",
        "brand-yellow-color": "#ffd300",
        "category-hover": "#f3f0fe",
      },
    },
  },
  plugins: [],
};
