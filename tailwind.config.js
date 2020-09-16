module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ["Spartan", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => {
        return {
          "img-paramour": "url('/assets/home/mobile/image-hero-paramour.jpg')",
        };
      },
      colors: {
        "very-dark-blue": "#1B1D23",
        "dark-grey": "#60636D",
        "medium-grey": "#7D828F",
        "light-grey": "#C8CCD8",
        "very-light-grey": "#EEEFF4",
        "error-red": "#DF5656",
      },
    },
  },
  variants: {},
  plugins: [],
};
