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
        "football-pattern": "url('/src/assets/helmets-title-long.png')",
        "football-names": "url('/src/assets/helmets-name-long-1.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
