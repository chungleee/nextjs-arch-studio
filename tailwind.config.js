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
        "240px": "240px",
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
          // PORTFOLIO
          "image-228b-mobile":
            'url("/assets/portfolio/mobile/image-228b-mobile.jpg")',
          "image-del-sol-mobile":
            'url("/assets/portfolio/mobile/image-del-sol-mobile.jpg")',
          "image-edelweiss-mobile":
            'url("/assets/portfolio/mobile/image-edelweiss-mobile.jpg")',
          "image-eebox-mobile":
            'url("/assets/portfolio/mobile/image-eebox-mobile.jpg")',
          "image-federal-mobile":
            'url("/assets/portfolio/mobile/image-federal-mobile.jpg")',
          "image-hypers-mobile":
            'url("/assets/portfolio/mobile/image-hypers-mobile.jpg")',
          "image-netcry-mobile":
            'url("/assets/portfolio/mobile/image-netcry-mobile.jpg")',
          "image-paramour-mobile":
            'url("/assets/portfolio/mobile/image-paramour-mobile.jpg")',
          "image-prototype-mobile":
            'url("/assets/portfolio/mobile/image-prototype-mobile.jpg")',
          "image-seraph-mobile":
            'url("/assets/portfolio/mobile/image-seraph-mobile.jpg")',
          "image-sxiv-mobile":
            'url("/assets/portfolio/mobile/image-sxiv-mobile.jpg")',
          "image-trinity-mobile":
            'url("/assets/portfolio/mobile/image-trinity-mobile.jpg")',
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
