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
      height: {
        "445px": "445px",
        "560px": "560px",
        "120px": "120px",
        "150px": "150px",
      },
      width: {
        "120px": "120px",
        "150px": "150px",
        "350px": "350px",
        "445px": "445px",
      },
      fontSize: {
        medium: "7.5rem",
        huge: "12.5rem",
      },
      backgroundImage: (theme) => {
        return {
          // MOBILE
          "img-paramour": "url('/assets/home/mobile/image-hero-paramour.jpg')",
          "img-small-team": "url('/assets/home/mobile/image-small-team.jpg')",
          "img-del-sol": "url('/assets/portfolio/mobile/image-del-sol.jpg')",
          "img-228b": "url('/assets/portfolio/mobile/image-228b.jpg')",
          "img-prototype":
            "url('/assets/portfolio/mobile/image-prototype.jpg')",
          // TABLET
          "img-paramour-tablet":
            "url('/assets/home/tablet/image-hero-paramour.jpg')",
          "img-small-team-tablet":
            "url('/assets/home/tablet/image-small-team.jpg')",
          "img-del-sol-tablet":
            "url('/assets/portfolio/tablet/image-del-sol.jpg')",
          "img-228b-tablet": "url('/assets/portfolio/tablet/image-228b.jpg')",
          "img-prototype-tablet":
            "url('/assets/portfolio/tablet/image-prototype.jpg')",
          // DESKTOP
          "img-paramour-desktop":
            "url('/assets/home/desktop/image-hero-paramour.jpg')",
          "img-federal-desktop":
            "url('/assets/home/desktop/image-hero-federal.jpg')",
          "img-seraph-desktop":
            "url('/assets/home/desktop/image-hero-seraph.jpg')",
          "img-trinity-desktop":
            "url('/assets/home/desktop/image-hero-trinity.jpg')",
          "img-small-team-desktop":
            "url('/assets/home/desktop/image-small-team.jpg')",
          "img-del-sol-desktop":
            "url('/assets/portfolio/desktop/image-del-sol.jpg')",
          "img-228b-desktop": "url('/assets/portfolio/desktop/image-228b.jpg')",
          "img-prototype-desktop":
            "url('/assets/portfolio/desktop/image-prototype.jpg')",
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
  variants: {
    backgroundColor: ["responsive", "hover", "active"],
  },
  plugins: [],
};
