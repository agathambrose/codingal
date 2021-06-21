module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange-bg": "#ff7160",
        "orange-border": "#ff5a43",
      },
      fontFamily: {
        "open-sans": "'Open Sans', sans-serif, monospace",
        Roboto: "'Roboto', sans-serif, monospace",
      },
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
