import { DefaultTheme } from "styled-components";

const initialState: DefaultTheme = {
  themeId: "",
  font: {
    fontFamilyName: "",
    fontFamily: "",
    fontWeight: {
      fontWeightLight: "",
      fontWeightMedium: "",
      fontWeightBold: "",
    },
  },
  typography: {
    fontSize: {
      fontSizeLarge: "",
      fontSizeMedium: "",
      fontSizeSmall: "",
    },
  },
  colors: {
    baseColor: "",
    baseColorDark: "",
    secondaryColor: "",
    secondaryColorLight: "",
    secondaryColorDark: "",
    white: "",
    black: "",
  },
  media: {
    mobile: {
      maxWidth: "",
    },
  },
};

export default initialState;
