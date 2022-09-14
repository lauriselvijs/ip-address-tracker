import React from "react";
import { IpSearchBtnStyle } from "./IpSearchBtn.style";
import { IoIosArrowForward } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { bindActionCreators } from "@reduxjs/toolkit";
import { IpActions, IpName } from "../../store/features/Ip/Ip.slice";
import { RootState } from "../../store/app/store";

const IpSearchBtn = () => {
  const appDispatch = useAppDispatch();
  const { setIpFetch } = bindActionCreators(IpActions, appDispatch);
  const { ipFetch } = useAppSelector((state: RootState) => state[IpName]);

  const onIpSearchBtnClick = (): void => {
    setIpFetch();
  };

  return (
    <IpSearchBtnStyle
      disabled={ipFetch}
      aria-label="search ip"
      onClick={onIpSearchBtnClick}
    >
      <IoIosArrowForward />
    </IpSearchBtnStyle>
  );
};

export default IpSearchBtn;
