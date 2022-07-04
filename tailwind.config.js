module.exports = {
  content: [
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: "#2f3447",
          1001: "#304156"
        },
        blue: {
          1000: "#3277B6"
        }
      }
    }
  },
  plugins: []
};
