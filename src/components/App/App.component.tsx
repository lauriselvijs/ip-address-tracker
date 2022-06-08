import React from "react";
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

const App = () => {
  const {
    font: { fontFamilyName, fontWeight },
  } = LightTheme;

  return (
    <FontProvider fontFamilyName={fontFamilyName} fontWeight={fontWeight}>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <HeaderContainer>
          <Title />
          <IpSearchInput />
          <IpLocationInfo />
        </HeaderContainer>
        <IpLocationMap />
        {/* <Footer /> */}
      </ThemeProvider>
    </FontProvider>
  );
};

export default App;
