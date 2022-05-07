module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropDown: {
          // increase exsiting size of dropdown
          "0%": {
            transform: "scale(1.1)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};
