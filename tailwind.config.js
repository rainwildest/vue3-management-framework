module.exports = {
  content: [
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        "2.5xl": ["28px", "28px"]
      },
      height: {
        29.5: "120px"
      },
      colors: {
        gray: {
          1000: "#333333",
          1001: "#f2f2f7"
        },
        blue: {
          1000: "#4877E7"
        }
      },
      boxShadow: {
        // lg: "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);"
      }
    }
  },
  plugins: []
};
