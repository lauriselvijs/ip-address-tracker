import React from "react";
import { DarkModeBtnStyle } from "./DarkModeBtn.style";
import { BiSun, BiMoon } from "react-icons/bi";
import DarkTheme from "../../style/theme/DarkTheme";

import { useSetTheme } from "../../hooks/Theme.hook";
import LightTheme from "../../style/theme/LightTheme";

const DarkModeBtn = () => {
  const [isThemeSet, setTheme] = useSetTheme(LightTheme);

  const onDarkModeBtnClick = () => {
    isThemeSet ? setTheme(LightTheme) : setTheme(DarkTheme);
  };

  return (
    <DarkModeBtnStyle onClick={onDarkModeBtnClick}>
      {/* {darkTheme ? <BiSun /> : <BiMoon />} */}
      <BiSun />
    </DarkModeBtnStyle>
  );
};

export default DarkModeBtn;
