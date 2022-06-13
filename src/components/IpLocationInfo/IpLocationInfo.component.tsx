import React, { useEffect, useMemo, useState } from "react";
import { useGetIpQuery } from "../../store/features/Ip/Ip.service";
import { useGetIpInfoQuery } from "../../store/features/IpInfo/IpInfo.service";
import {
  IpLocationInfoAttributesDivider,
  IpLocationInfoItem,
  IpLocationInfoItemContent,
  IpLocationInfoItemTitle,
  IpLocationInfoStyle,
} from "./IpLocationInfo.style";

const IpLocationInfo = () => {
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

  // const { data: IpInfoData } = useGetIpInfoQuery(ip || "", {
  //   skip: !ipIsSuccessful,
  // });

  // const { city } = IpInfoData?.location || {};

  // console.log(city);

  const [ipLocationInfo, setIpLocationInfo] = useState([
    { title: "IP ADDRESS", desc: "192.212.174.101" },
    { title: "LOCATION", desc: "Brooklyn, NY 10001" },
    { title: "TIMEZONE", desc: "UTC-05:00" },
    { title: "ISP", desc: "Space Starlink" },
  ]);

  const ipLocationInfoAttributes = useMemo(
    () =>
      ipLocationInfo.map(({ title, desc }, index) => (
        <IpLocationInfoItem key={title}>
          <IpLocationInfoItemTitle>{title}</IpLocationInfoItemTitle>
          <IpLocationInfoItemContent>{desc}</IpLocationInfoItemContent>
          <IpLocationInfoAttributesDivider firstElementIndex={index} />
        </IpLocationInfoItem>
      )),
    [ipLocationInfo]
  );

  return <IpLocationInfoStyle>{ipLocationInfoAttributes}</IpLocationInfoStyle>;
};

export default IpLocationInfo;
