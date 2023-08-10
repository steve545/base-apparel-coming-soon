/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/index.js"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Josefin Sans"],
      },
      fontWeight: {
        base: "300",
        semi: "400",
        bold: "600",
      },
      fontSize: {
        base: "1rem",
        title: "2.75rem",
        "title-desktop": "4rem",
      },
      letterSpacing: {
        "guideline-wide": ".3em",
      },
      lineHeight: {
        "guideline-mobile": "2.75rem",
        "guideline-desktop": "4.5rem",
      },
      width: {
        18: "4.5rem",
      },
      backgroundImage: {
        "pattern-desktop": "url('/images/bg-pattern-desktop.svg')",
        "hero-desktop": "url(/images/hero-desktop.jpg)",
        "hero-mobile": "url(/images/hero-mobile.jpg)",
      },
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
        "gradient-from-white": "hsl(0, 0%, 100%)",
        "gradient-to-white": "hsl(0, 100%, 98%)",
        "gradient-from-light-pink": "hsl(0, 80%, 86%)",
        "gradient-to-light-pink": "hsl(0, 74%, 74%)",
      },
    },
  },
  plugins: [],
};
