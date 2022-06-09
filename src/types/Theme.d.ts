import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeId: string;
    font: {
      fontFamilyName: string;
      fontFamily: string;
      fontWeight: {
        fontWeightLight: string;
        fontWeightMedium: string;
        fontWeightBold: string;
      };
    };
    typography: {
      fontSize: {
        fontSizeLarge: string;
        fontSizeMedium: string;
        fontSizeSmall: string;
      };
    };
    colors: {
      baseColor: string;
      baseColorDark: string;
      secondaryColor: string;
      white: string;
      black: string;
    };
    media: {
      mobile: {
        maxWidth: string;
      };
    };
  }
}
