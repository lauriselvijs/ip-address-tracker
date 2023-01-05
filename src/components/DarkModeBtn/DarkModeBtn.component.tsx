import { DarkModeBtnStyle } from "./DarkModeBtn.style";
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "../../hooks/Theme";
import { darkTheme } from "../../style/theme";

const DarkModeBtn = () => {
  const { currentTheme, setTheme, setDefaultTheme } = useTheme();
  const { name: darkThemeName } = darkTheme;

  const onDarkModeBtnClick = () => {
    currentTheme ? setDefaultTheme() : setTheme(darkThemeName);
  };

  return (
    <DarkModeBtnStyle
      onClick={onDarkModeBtnClick}
      aria-label="switch to dark mode"
    >
      {currentTheme ? <BiSun /> : <BiMoon />}
    </DarkModeBtnStyle>
  );
};

export default DarkModeBtn;
