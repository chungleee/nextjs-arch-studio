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
          "img-small-team": "url('/assets/home/mobile/image-small-team.jpg')",
          "img-del-sol": "url('/assets/portfolio/mobile/image-del-sol.jpg')",
          "img-228b": "url('/assets/portfolio/mobile/image-228b.jpg')",
          "img-prototype":
            "url('/assets/portfolio/mobile/image-prototype.jpg')",
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
