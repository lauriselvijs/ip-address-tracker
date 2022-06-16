import React from "react";
import { DarkModeBtnStyle } from "./DarkModeBtn.style";
import { BiSun, BiMoon } from "react-icons/bi";
import DarkTheme from "../../style/theme/DarkTheme";
import { useIfThemeSet, useSetTheme } from "../../hooks/Theme.hook";
import LightTheme from "../../style/theme/LightTheme";

const DarkModeBtn = () => {
  const setTheme = useSetTheme(LightTheme);
  const themeIsSet = useIfThemeSet(DarkTheme.themeId);

  const onDarkModeBtnClick = () => {
    themeIsSet ? setTheme(LightTheme) : setTheme(DarkTheme);
  };

  return (
    <DarkModeBtnStyle onClick={onDarkModeBtnClick}>
      {themeIsSet ? <BiSun /> : <BiMoon />}
    </DarkModeBtnStyle>
  );
};

export default DarkModeBtn;
