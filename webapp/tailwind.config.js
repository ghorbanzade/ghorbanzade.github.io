module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
