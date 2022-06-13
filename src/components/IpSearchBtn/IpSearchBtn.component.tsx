import React from "react";
import { IpSearchBtnStyle } from "./IpSearchBtn.style";
import { IoIosArrowForward } from "react-icons/io";
import { useGetIpQuery } from "../../store/features/Ip/Ip.service";

const IpSearchBtn = () => {
  // const {
  //   data: ipData,
  //   error,
  //   isLoading,
  //   isSuccess: ipIsSuccessful,
  //   isError,
  // } = useGetIpQuery({
  //   format: "json",
  // });

  // const { ip } = ipData || {};

  const onIpSearchBtnClick = () => {};

  return (
    <IpSearchBtnStyle>
      <IoIosArrowForward onClick={onIpSearchBtnClick} />
    </IpSearchBtnStyle>
  );
};

export default IpSearchBtn;
