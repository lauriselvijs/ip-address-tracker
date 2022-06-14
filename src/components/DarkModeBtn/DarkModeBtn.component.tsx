import React from "react";
import { DarkModeBtnStyle } from "./DarkMode.style";
import { BiSun, BiMoon } from "react-icons/bi";

const DarkModeBtn = () => {
  return (
    <DarkModeBtnStyle>
      <BiMoon />
    </DarkModeBtnStyle>
  );
};

export default DarkModeBtn;
