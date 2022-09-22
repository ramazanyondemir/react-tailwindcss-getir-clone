/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      padding: {
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
