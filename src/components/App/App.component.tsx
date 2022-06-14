import React, { useEffect, useLayoutEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../Footer";
import { GlobalStyle } from "../../style/base/Global.style";
import LightTheme from "../../style/theme/LightTheme";
import FontProvider from "../FontProvider";
import HeaderContainer from "../HeaderContainer";
import Title from "../Title";
import IpSearchInput from "../IpSearchInput";
import IpLocationMap from "../IpLocationMap";
import IpLocationInfo from "../IpLocationInfo";
import DarkModeBtn from "../DarkModeBtn";

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  const {
    font: { fontFamilyName, fontWeight },
  } = LightTheme;

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
