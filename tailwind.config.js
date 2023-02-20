/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "portal-color": "#8BD046",
        "primary-color": "#272727",
        "unknown-color": "#6c757d",
      },
      backgroundImage: {
        "portal-texture": "url('./assets/portal.png')",
      },
    },
  },
  plugins: [],
};
