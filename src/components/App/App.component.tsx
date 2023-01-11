import { GlobalStyle } from "../../style/base/Global.style";
import Footer from "../Footer";
import FontProvider from "../FontProvider";
import HeaderContainer from "../HeaderContainer";
import Title from "../Title";
import IpSearchInput from "../IpSearchInput";
import IpLocationMap from "../IpLocationMap";
import IpInfo from "../IpInfo";
import DarkModeBtn from "../DarkModeBtn";
import { ThemeProvider } from "styled-components";
import theme from "../../style/theme";

const App = () => {
  const {
    font: { familyName, weight },
  } = theme;

  return (
    <FontProvider fontFamilyName={familyName} fontWeight={weight}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HeaderContainer>
          <DarkModeBtn />
          <Title />
          <IpSearchInput />
          <IpInfo />
        </HeaderContainer>
        <IpLocationMap />
        <Footer />
      </ThemeProvider>
    </FontProvider>
  );
};

export default App;
