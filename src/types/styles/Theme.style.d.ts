import { DefaultTheme } from "styled-components";

export interface ThemeColors {
  name: string;
  color: Partial<DefaultTheme["color"]>;
}
