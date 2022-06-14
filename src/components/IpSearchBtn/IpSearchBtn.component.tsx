import React, { useMemo } from "react";
import { IpSearchBtnStyle } from "./IpSearchBtn.style";
import { IoIosArrowForward } from "react-icons/io";
import { useAppDispatch } from "../../hooks/Store.hook";
import { bindActionCreators } from "@reduxjs/toolkit";
import { IpActions } from "../../store/features/Ip/Ip.slice";

const IpSearchBtn = () => {
  const appDispatch = useAppDispatch();
  const { setIpFetch } = bindActionCreators(IpActions, appDispatch);

  const onIpSearchBtnClick = (): void => {
    setIpFetch();
  };

  return (
    <IpSearchBtnStyle>
      <IoIosArrowForward onClick={onIpSearchBtnClick} />
    </IpSearchBtnStyle>
  );
};

export default IpSearchBtn;
