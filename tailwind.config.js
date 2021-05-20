module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#577CFF" },
        secondary: { DEFAULT: "#8AFFA4" },
      },
      spacing: {
        52: "14rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      animation: {
        entranceLeft: "entranceLeft 1s ease-in-out 1",
        entranceRight: "entranceRight 1s ease-in-out 1",
      },
      keyframes: {
        entranceLeft: {
          "0%": { transform: "translateX(-14rem)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "100" },
        },
        entranceRight: {
          "0%": { transform: "translateX(14rem)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "100" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
