import { DefaultTheme } from "styled-components";
import { colors } from "./DarkTheme.color";
import { font } from "./DarkTheme.font";
import { typography } from "./DarkTheme.typography";
import { media } from "./DarkTheme.media";
import { themeId } from "../../../constants/DarkTheme.const";

const DarkTheme: DefaultTheme = {
  themeId,
  font,
  typography,
  colors,
  media,
};

export default DarkTheme;
