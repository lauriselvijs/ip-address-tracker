import { Theme } from "../../types/styles/Theme.style";

interface IDefaultTheme {
  name: string;
  color: Theme["color"];
}

export const defaultTheme: IDefaultTheme = {
  name: "",
  color: {
    primary: "hsl(0, 0%, 59%)",
    primaryDark: "hsl(0, 0%, 17%)",
    secondary: "hsl(360, 100%, 100%)",
    secondaryLight: "hsl(224, 100%, 50%)",
    secondaryDark: "hsl(0,0%, 0%)",
    white: "hsl(360, 100%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
};

export const darkTheme: Theme = {
  name: "dark",
  color: {
    primary: "hsl(0, 100%, 100%)",
    primaryDark: "	hsl(203, 89%, 53%)",
    secondary: "hsl(0, 0%, 0%)",
    secondaryLight: "hsl(268, 39%, 49%)",
    secondaryDark: "hsl(202, 97%, 43%)",
  },
};
