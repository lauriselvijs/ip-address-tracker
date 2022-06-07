import { colors } from "./LightTheme.color";
import { font } from "./LightTheme.font";
import { typography } from "./LightTheme.typography";

export const themeId = "PRIMARY_LIGHT_THEME";

const LightTheme = {
  themeId,
  font,
  typography,
  colors,
};

export type ThemeColors = typeof LightTheme.colors;
export type ThemeFont = typeof LightTheme.colors;
export type ThemeTypography = typeof LightTheme.colors;

export default LightTheme;
