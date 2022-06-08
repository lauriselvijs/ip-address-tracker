import React from "react";
import { IContainer } from "../../types/Container";
import { HeaderContainerStyle } from "./HeaderContainer.style";

const HeaderContainer = ({ children }: IContainer) => {
  return <HeaderContainerStyle>{children}</HeaderContainerStyle>;
};

export default HeaderContainer;
