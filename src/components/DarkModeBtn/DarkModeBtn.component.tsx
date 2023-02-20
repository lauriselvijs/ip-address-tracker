import { DarkModeBtnStyle } from "./DarkModeBtn.style";
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "../../hooks/Theme";
import { useMemo } from "react";
import { darkTheme } from "../../style/theme/Dark.style";

const DarkModeBtn = () => {
  const { currentTheme, setTheme, setDefaultTheme } = useTheme();
  const { name: darkThemeName } = darkTheme;

  const onDarkModeBtnClick = () => {
    currentTheme ? setDefaultTheme() : setTheme(darkThemeName);
  };

  const icon = useMemo(
    () =>
      currentTheme ? (
        <BiSun aria-hidden="true" />
      ) : (
        <BiMoon aria-hidden="true" />
      ),
    [currentTheme]
  );

  return (
    <DarkModeBtnStyle
      onClick={onDarkModeBtnClick}
      aria-label="Switch to dark mode"
      title="Dark mode"
    >
      {icon}
    </DarkModeBtnStyle>
  );
};

export default DarkModeBtn;
