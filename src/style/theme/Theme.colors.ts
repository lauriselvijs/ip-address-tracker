import { ThemeColors, DefaultThemeColors } from "./Theme.colors.d";

export const defaultTheme: DefaultThemeColors = {
  name: "",
  color: {
    primary: "hsl(0, 0%, 59%)",
    primaryDark: "hsl(0, 0%, 17%)",
    secondary: "hsl(360, 100%, 100%)",
    secondaryLight: "hsl(224, 100%, 50%)",
    secondaryDark: "hsl(0,0%, 0%)",
    shimmer: "hsl(225, 12%, 94%)",
    shimmerBg: "hsl(210, 12%, 97%)",
    white: "hsl(360, 100%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
};

export const darkTheme: ThemeColors = {
  name: "dark",
  color: {
    primary: "hsl(0, 100%, 100%)",
    primaryDark: "hsl(203, 89%, 53%)",
    secondary: "hsl(0, 0%, 0%)",
    secondaryLight: "hsl(268, 39%, 49%)",
    secondaryDark: "hsl(202, 97%, 43%)",
    shimmer: "hsl(225, 4%, 10%)",
    shimmerBg: "hsl(0,4%, 12%)",
  },
};
