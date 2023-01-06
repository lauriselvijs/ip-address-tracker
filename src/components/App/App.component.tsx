import { GlobalStyle } from "../../style/base/Global.style";
import theme from "../../style/shared/Theme.style";
import Footer from "../Footer";
import FontProvider from "../FontProvider";
import HeaderContainer from "../HeaderContainer";
import Title from "../Title";
import IpSearchInput from "../IpSearchInput";
import IpLocationMap from "../IpLocationMap";
import IpInfo from "../IpInfo";
import DarkModeBtn from "../DarkModeBtn";
import { ThemeProvider } from "styled-components";

const App = () => {
  const {
    font: { familyName, weight },
  } = theme;

  // useReconnectWhenOnline();

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
