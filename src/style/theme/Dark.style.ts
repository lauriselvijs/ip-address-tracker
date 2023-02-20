import { DefaultTheme } from "styled-components";

export interface ThemeColors {
  name: string;
  color: Partial<DefaultTheme["color"]>;
}

export const darkTheme: ThemeColors = {
  name: "dark",
  color: {
    primary: "hsl(0 100% 100%)",
    primaryDark: "hsl(203 89% 53%)",
    secondary: "hsl(0 0% 0%)",
    secondaryLight: "hsl(268 39% 49%)",
    secondaryDark: "hsl(202 97% 43%)",
    shimmer: "hsl(225 4% 10%)",
    shimmerBg: "hsl(0 4% 12%)",
  },
};
