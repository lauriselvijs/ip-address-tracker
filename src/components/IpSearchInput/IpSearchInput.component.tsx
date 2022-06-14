import { bindActionCreators } from "@reduxjs/toolkit";
import React, { ChangeEvent } from "react";
import { IP_INPUT_PLACEHOLDER } from "../../constants/IpInput.const";
import IpSearchBtn from "../IpSearchBtn";
import {
  IpSearchInputStyle,
  IpSearchInputStyleContainer,
} from "./IpSearchInput.style";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { IpActions } from "../../store/features/Ip/Ip.slice";

const IpSearchInput = () => {
  const { ip } = useAppSelector((state: RootState) => state.ip);

  const appDispatch = useAppDispatch();
  const { setIp } = bindActionCreators(IpActions, appDispatch);

  const onIpInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIp(e.target.value);
  };

  //54.85.132.205

  return (
    <IpSearchInputStyleContainer>
      <IpSearchInputStyle
        onChange={onIpInputChange}
        placeholder={IP_INPUT_PLACEHOLDER}
        value={ip}
      />
      <IpSearchBtn />
    </IpSearchInputStyleContainer>
  );
};

export default IpSearchInput;
