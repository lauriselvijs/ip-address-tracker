import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeId: string;
    font: ThemeFont;
    typography: ThemeTypography;
    colors: ThemeColors;
  }
}
