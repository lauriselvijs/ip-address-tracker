import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../Footer";
import { GlobalStyle } from "../../style/base/Global.style";
import LightTheme from "../../style/theme/LightTheme";
import FontProvider from "../FontProvider";

const App = () => {
  const {
    font: { fontFamilyName, fontWeight },
  } = LightTheme;

  return (
    <FontProvider fontFamilyName={fontFamilyName} fontWeight={fontWeight}>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Footer />
      </ThemeProvider>
    </FontProvider>
  );
};

export default App;
