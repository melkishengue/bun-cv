const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./public/index.html",
  ],
  theme: {
    screens: {
      print: { raw: "print" },
      xsm: "500px",
      sm: "640px",
      md: "833px",
      lg: "1079.5px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        firago: ["FiraGO", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm2: ["0.9375rem", "1.32"], // 15px label
        base: ["1rem", "1.34"], // 16px base
        md: ["1.0625rem", "1.34"], // 17px body
        lg: ["1.125rem", "1.34"], // 18px heading
      },
      lineHeight: {
        snugish: "1.32",
        normal: "1.34",
      },
      maxWidth: {
        letter: "66.40625rem",
        a4: "64.609375rem"
      },
      height: {
        letter: "85.9375rem",
        "letter-col": "71.625rem",
        "letter-col-full": "77.9375rem",
        a4: "91.350883rem",
        "a4-col": "77.038383rem",
        "a4-col-full": "83.350883rem",
      },
      spacing: {
        "0.5": "2px",
        "1.5": "0.375rem",
        "1.6": "0.4375rem",
        "2.1": "0.5625rem",
        "2.5": "10px",
        "3.2": "0.8125rem",
        "4.5": "1.125rem",
        "11": "2.75rem",
      },
      colors: {
        gray: {
          150: "hsl(210, 44%, 97%)",
          250: "hsl(210, 40%, 93.5%)",
          550: "hsl(218, 20%, 63%)",
          650: "hsl(216, 15%, 48%)",
          750: "hsl(214, 17%, 32%)",
          ...defaultTheme.colors.gray
        },
        link: "#fbf3f3"
      },
    },
  },

  plugins: [
    function ({ addBase, addUtilities, theme }) {
      addBase({
        body: {
          "-webkit-font-smoothing": "subpixel-antialiased",
        },
      });

      // Typography Utilities
      addUtilities(
        {
          ".optimize-legibility": {
            "text-rendering": "optimizeLegibility",
          },
          ".ligatures": {
            "font-variant-ligatures": "common-ligatures",
            "font-feature-settings": "'liga' on, 'clig' on",
          },
          ".kerning": {
            "font-kerning": "normal",
            "font-feature-settings": "'kern' on",
          },
          ".small-caps": {
            "font-variant-caps": "small-caps",
            "font-feature-settings": "'smcp' on",
          },
          ".all-small-caps": {
            "font-variant-caps": "all-small-caps",
            "font-feature-settings": "'c2sc' on, 'smcp' on",
          },
          ".lining-nums": {
            "font-variant-numeric": "lining-nums",
            "font-feature-settings": "'lnum' on",
          },
          ".oldstyle-nums": {
            "font-variant-numeric": "oldstyle-nums",
            "font-feature-settings": "'onum' on",
          },
          ".proportional-nums": {
            "font-variant-numeric": "proportional-nums",
            "font-feature-settings": "'pnum' on",
          },
          ".tabular-nums": {
            "font-variant-numeric": "tabular-nums",
            "font-feature-settings": "'tnum' on",
          },
          ".slashed-zero": {
            "font-variant-numeric": "slashed-zero",
            "font-feature-settings": "'zero' on",
          },
          ".super": {
            "font-variant-position": "super",
            "font-feature-settings": "'sups' on",
          },
          ".sub": {
            "font-variant-position": "sub",
            "font-feature-settings": "'sub' on",
          },
          ".ordinal": {
            "font-variant-position": "ordinal",
            "font-feature-settings": "'ordn' on",
          },
          ".fractions": {
            "font-variant-numeric": "diagonal-fractions",
            "font-feature-settings": "'frac' on",
          },
          ".case-sensitive": {
            "text-transform": "uppercase",
            "font-feature-settings": "'case' on",
          },
          ".hyphens-manual": {
            "hyphens": "manual",
          },
        },
        ["responsive"]
      );

      // Project Specific Utilities
      addUtilities(
        {
          ".border-inset": {
            "box-shadow": `inset 0 0 0 1px ${theme("colors.gray.400")}`,
          },
        },
        ["responsive"]
      );

      // CSS Multi-Column Layout Utilities
      addUtilities(
        {
          ".col-count-1": {
            "column-count": "1",
          },
          ".col-count-2": {
            "column-count": "2",
          },
          ".col-count-3": {
            "column-count": "3",
          },
          ".col-width-1": {
            "column-width": "65%",
          },
          ".col-gap-md": {
            "column-gap": "2.1875rem",
          },
          ".break-after-col": {
            "break-after": "column",
          },
          ".break-inside-avoid": {
            "break-inside": "avoid",
          },
          ".break-after-avoid": {
            "break-after": "avoid",
          },
          ".break-before-avoid": {
            "break-after": "avoid",
          },
          ".col-fill-auto": {
            "column-fill": "auto",
          },
          ".col-fill-balance": {
            "column-fill": "balance",
          },
        },
        ["responsive"]
      );
    },
  ],
}