module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      2: "2 2 0%",
      3: "3 3 0%",
    },
    extend: {
      screens: {
        "small-phone": { max: "330px" },
      },
      backgroundImage: {
        "football-pattern": "url('/src/assets/helmets-1-title-blue-a.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
