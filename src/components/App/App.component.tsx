import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../Footer";
import { GlobalStyle } from "../../style/base/Global.style";
import FontProvider from "../FontProvider";
import HeaderContainer from "../HeaderContainer";
import Title from "../Title";
import IpSearchInput from "../IpSearchInput";
import IpLocationMap from "../IpLocationMap";
import IpLocationInfo from "../IpLocationInfo";
import DarkModeBtn from "../DarkModeBtn";
import { ThemeName } from "../../store/features/Theme";
import { RootState } from "../../store/app/store";
import { useAppSelector } from "../../hooks/Store.hook";

const App = () => {
  const theme = useAppSelector((state: RootState) => state[ThemeName]);

  const {
    font: { fontFamilyName, fontWeight },
  } = theme;

  return (
    <FontProvider fontFamilyName={fontFamilyName} fontWeight={fontWeight}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HeaderContainer>
          <Title />
          <DarkModeBtn />
          <IpSearchInput />
          <IpLocationInfo />
        </HeaderContainer>
        <IpLocationMap />
        <Footer />
      </ThemeProvider>
    </FontProvider>
  );
};

export default App;
