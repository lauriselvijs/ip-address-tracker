import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../Footer";
import { GlobalStyle } from "../../style/base/Global.style";
import LightTheme from "../../style/theme/LightTheme";

const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
