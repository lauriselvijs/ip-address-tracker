/// <reference types="react-scripts" />
import "styled-components";

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      family: string;
      weight: {
        light: string;
        medium: string;
        bold: string;
      };
      size: {
        large: string;
        medium: string;
        small: string;
      };
    };
    color: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      shimmerBg: string;
      shimmer: string;
      white: string;
      black: string;
    };
    media: {
      mobile: {
        maxWidth: string;
      };
      tablet: {
        maxWidth: string;
      };
    };
  }
}
