module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      spacing: {
        spacing_xs: "0.5rem" /* 8px */,
        spacing_sm: "0.75rem" /* 12px */,
        spacing_base: "1rem" /* 16px */,
        spacing_md: "1.25rem" /* 20px */,
        spacing_lg: "1.5rem" /* 24px */,
        spacing_xl: "2rem" /* 32px */,
      },
      fontSize: {
        text_xs: "0.75rem" /* 12px */,
        text_sm: "0.875rem" /* 14px */,
        text_base: "1rem" /* 16px */,
        text_md: "1.125rem" /* 18px */,
        text_lg: "1.25rem" /* 20px */,
        text_xl: "1.5rem" /* 24px */,
      },
    },
    colors: {
      mpl_black: "#2f2f2f",
      mpl_white: "#fff",
      mpl_lightgray: "#DCDCDC",
      mpl_darkgray: "#939393",
      mpl_pink: "#FF6767",
    },
  },
  plugins: [],
};
