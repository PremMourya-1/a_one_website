module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        waterdrop: "waterdrop 1.5s infinite",
        waterdrop2: "waterdrop 2s infinite",
        blink: "blink 1s infinite",
      },
    },
    keyframes: {
      waterdrop: {
        "0%": {
          transform: "scale(1)",
          opacity: "1",
        },
        "70%": {
          transform: "scale(2)",
          opacity: "0",
        },
        "100%": {
          transform: "scale(2.5)",
          opacity: "0",
        },
      },
      waterdrop2: {
        "0%": {
          transform: "scale(1)",
          opacity: "1",
        },
        "70%": {
          transform: "scale(2)",
          opacity: "0",
        },
        "100%": {
          transform: "scale(3)",
          opacity: "0",
        },
      },
    },
    screens: {
      "2xl": { max: "1200px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1100px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "992px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "576px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "460px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
//  extend: {
//       animation: {
//         waterdrop: 'waterdrop 1.5s infinite',
//         blink: 'blink 1s infinite',

//       },
