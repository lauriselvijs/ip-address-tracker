import { Container } from "../../types/Container";
import { HeaderContainerStyle } from "./HeaderContainer.style";

const HeaderContainer = ({ children }: Container) => {
  return <HeaderContainerStyle>{children}</HeaderContainerStyle>;
};

export default HeaderContainer;
