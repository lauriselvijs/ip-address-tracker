import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  font: {
    family: "'Rubik', sans-serif",
    weight: {
      light: "400",
      medium: "500",
      bold: "700",
    },
    size: {
      large: "2rem",
      medium: "1.625rem",
      small: "1rem",
    },
  },
  color: {
    primary: "var(--color-primary)",
    primaryDark: "var(--color-primary-dark)",
    secondary: "var(--color-secondary)",
    secondaryLight: "var(--color-secondary-light)",
    secondaryDark: "var(--color-secondary-dark)",
    shimmerBg: "var(--color-shimmer-bg)",
    shimmer: "var(--color-shimmer)",
    white: "var(--color-white)",
    black: "var(--color-black)",
  },
  media: {
    mobile: {
      maxWidth: "700px",
    },
    tablet: {
      maxWidth: "1000px",
    },
  },
};

export default theme;
