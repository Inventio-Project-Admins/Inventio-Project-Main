module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_3f": "#0000003f", "900_7a": "#0000007a" },
        blue: { 200: "#9bcaee" },
        blue_gray: { 400: "#8591a4", 900: "#2d3748", "400_01": "#8392ab", "400_02": "#8b8f92", "900_01": "#172b4d" },
        gray: { 200: "#e8e9e9", 300: "#e0e1e2", 900: "#1e1e1e", "300_01": "#e1e5e8", "300_02": "#dddddd" },
        light_blue: { 400: "#1fb6f2", a700: "#0192fe" },
        red: { a100: "#fd8383" },
        white: { a700: "#fdfdfd", a700_01: "#ffffff" },
      },
      boxShadow: { xs: "0 2px 6px 0 #0000003f" },
      fontFamily: { opensans: "Open Sans", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
