module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-color': '#283593',
        'sub-color': '#E8EAF6'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
