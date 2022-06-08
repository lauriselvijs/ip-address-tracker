import { DefaultTheme } from "styled-components";
import { colors } from "./LightTheme.color";
import { themeId } from "../../../constants/LightTheme.const";
import { font } from "./LightTheme.font";
import { typography } from "./LightTheme.typography";

const LightTheme: DefaultTheme = {
  themeId,
  font,
  typography,
  colors,
};

export default LightTheme;
