export const colors = {
  background: "#F0F0F5",
  primary: "#34CB79",
  primaryhover: "#2FB86E",
  text: "#6C6C80",
  title: "#322153",
  placeholder: "#A0A0B2",

  white: "#FFFFFF",
};

export const fontTypes = {
  title: {
    fontSize: 54,
  },
  text: {
    fontSize: 24,
    lineHeight: "38px",
  },
  formTitle: {
    fontSize: 36,
  },
  formSubtitle: {
    fontSize: 24,
  },
  formTextAuxiliary: {
    fontSize: 14,
    fontWeight: "normal",
  },
};

export const grid = {
  breakpoints: {
    md: 900,
  },
};

export const mediaQueries = {
  md: `(max-width: ${grid.breakpoints.md}px)`,
};

export default { colors, fontTypes, mediaQueries };
