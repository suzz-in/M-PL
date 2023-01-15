module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        __spacing_xs: "0.5rem" /* 8px */,
        __spacing_sm: "0.75rem" /* 12px */,
        __spacing_base: "1rem" /* 16px */,
        __spacing_md: "1.25rem" /* 20px */,
        __spacing_lg: "1.5rem" /* 24px */,
        __spacing_xl: "2rem" /* 32px */,
      },
      fontSize: {
        __text_xs: "0.75rem" /* 12px */,
        __text_sm: "0.875rem" /* 14px */,
        __text_base: "1rem" /* 16px */,
        __text_md: "1.125rem" /* 18px */,
        __text_lg: "1.25rem" /* 20px */,
        __text_xl: "1.5rem" /* 24px */,
      },
    },
    colors: {
      __mpl_black: "#2f2f2f",
      __mpl_white: "#fff",
      __mpl_lightgray: "#DCDCDC",
      __mpl_darkgray: "#939393",
      __mpl_pink: "#FF6767",
    },
  },
  plugins: [],
};
