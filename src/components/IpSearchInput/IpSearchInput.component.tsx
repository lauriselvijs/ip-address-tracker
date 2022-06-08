import React from "react";
import IpSearchBtn from "../IpSearchBtn";
import {
  IpSearchInputStyle,
  IpSearchInputStyleContainer,
} from "./IpSearchInput.style";

const IpSearchInput = () => {
  return (
    <IpSearchInputStyleContainer>
      <IpSearchInputStyle />
      <IpSearchBtn />
    </IpSearchInputStyleContainer>
  );
};

export default IpSearchInput;
