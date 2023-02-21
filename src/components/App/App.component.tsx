import { GlobalStyle } from "../../style/base/Global.style";
import Title from "../Title";
import IpSearchInput from "../IpSearchInput";
import IpLocationMap from "../IpLocationMap";
import IpInfo from "../IpInfo";
import DarkModeBtn from "../DarkModeBtn";
import { ThemeProvider } from "styled-components";
import theme from "../../style/theme/Default";
import { FooterStyle } from "../../style/layout/Footer.style";
import Author from "../Author";
import { MainStyle } from "../../style/layout/Main.style";
import { HeaderStyle } from "../../style/layout/Header.style";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderStyle>
        <DarkModeBtn />
        <Title />
        <IpSearchInput />
        <IpInfo />
      </HeaderStyle>
      <MainStyle>
        <IpLocationMap />
      </MainStyle>
      <FooterStyle>
        <Author />
      </FooterStyle>
    </ThemeProvider>
  );
};

export default App;
