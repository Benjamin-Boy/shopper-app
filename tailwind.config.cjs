/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primaryBg: "var(--color-bg-primary)",
      secondaryBg: "var(--color-bg-secondary)",
      tertiaryBg: "var(--color-bg-tertiary)",
      quaternaryBg: "var(--color-bg-quaternary)",
      quinternaryBg: "var(--color-bg-quinternary)",
      primaryText: "var(--color-text-primary)",
      secondaryText: "var(--color-text-secondary)",
      tertiaryText: "var(--color-text-tertiary)",
      gray: "var(--color-gray)",
    },
    extend: {
      keyframes: {
        categoriesToggle: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        categoriesToggleReverse: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        cartToggle: {
          "0%": { transform: "translateX(100%) scaleX(0)" },
          "10%": { transform: "translateX(90%) scaleX(1)" },
          "100%": { transform: "translateX(0) scaleX(1)" },
        },
        cartToggleReverse: {
          "0%": { transform: "translateX(0) scaleX(1)" },
          "90%": { transform: "translateX(90%) scaleX(1)" },
          "100%": { transform: "translateX(100%) scaleX(0)" },
        },
        filterToggle: {
          "0%": { transform: "translateX(-100%) scaleX(0)" },
          "10%": { transform: "translateX(-90%) scaleX(1)" },
          "100%": { transform: "translateX(0) scaleX(1)" },
        },
        filterToggleReverse: {
          "0%": { transform: "translateX(0) scaleX(1)" },
          "90%": { transform: "translateX(-90%) scaleX(1)" },
          "100%": { transform: "translateX(-100%) scaleX(0)" },
        },
        sidebarToggle: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        sidebarToggleReverse: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        categoriesToggle: "categoriesToggle 300ms ease-in-out forwards",
        categoriesToggleReverse:
          "categoriesToggleReverse 300ms ease-in-out forwards",
        cartToggle: "cartToggle 300ms ease-in-out forwards",
        cartToggleReverse: "cartToggleReverse 300ms ease-in-out forwards",
        filterToggle: "filterToggle 300ms ease-in-out forwards",
        filterToggleReverse: "filterToggleReverse 300ms ease-in-out forwards",
        sidebarToggle: "sidebarToggle 300ms ease-in-out forwards",
        sidebarToggleReverse: "sidebarToggleReverse 300ms ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
