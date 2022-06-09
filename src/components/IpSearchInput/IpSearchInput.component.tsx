import React from "react";
import IpSearchBtn from "../IpSearchBtn";
import {
  IpSearchInputStyle,
  IpSearchInputStyleContainer,
} from "./IpSearchInput.style";

const IpSearchInput = () => {
  return (
    <IpSearchInputStyleContainer>
      <IpSearchInputStyle placeholder="Search for any IP address for domain" />
      <IpSearchBtn />
    </IpSearchInputStyleContainer>
  );
};

export default IpSearchInput;
