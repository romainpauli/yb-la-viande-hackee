module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--vinum-primary)",
        "primary-d": "var(--vinum-primary-d)",
        "secondary-ll": "var(--vinum-secondary-ll)",
        "secondary-l": "var(--vinum-secondary-l)",
        secondary: "var(--vinum-secondary)",
        "secondary-d": "var(--vinum-secondary-d)",
        "secondary-dd": "var(--vinum-secondary-dd)",
        "secondary-t": "var(--vinum-secondary-t)",
        tanslucide: "var(--vinum-translucide)",
        textcolor: "var(--vinum-textcolor)",
        "textcolor-al": "#FEF7E0",
        cardcolor: "var(--vinum-cardcolor)",
        accent: "var(--vinum-accent)",
        hint: "#ddc5a2",
        error: "#7f1c17",
        info: "#2196F3",
        success: "#60a172",
        "success-d": "#4C805B",
        warning: "#FFC107"
      }
    },
    fill: theme => ({
      "vinum-primary": theme("colors.vinum.primary"),
      "vinum-transparent": "transparent"
    })
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
