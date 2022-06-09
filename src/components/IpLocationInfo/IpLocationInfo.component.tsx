import React, { useMemo, useState } from "react";
import {
  IpLocationInfoAttributesDivider,
  IpLocationInfoItem,
  IpLocationInfoItemContent,
  IpLocationInfoItemTitle,
  IpLocationInfoStyle,
} from "./IpLocationInfo.style";

// TODO:
// [x] change table to flex box
// [x] add separator between items
const IpLocationInfo = () => {
  const [ipLocationInfo, setIpLocationInfo] = useState([
    { title: "IP ADDRESS", desc: "192.212.174.101" },
    { title: "LOCATION", desc: "Brooklyn,NY 10001" },
    { title: "TIMEZONE", desc: "UTC-05:00" },
    { title: "ISP", desc: "Space Starlink" },
  ]);

  const IpLocationInfoAttributes = useMemo(
    () =>
      ipLocationInfo.map(({ title, desc }, index) => (
        <IpLocationInfoItem key={title}>
          <IpLocationInfoItemTitle>{title}</IpLocationInfoItemTitle>
          <IpLocationInfoItemContent>{desc}</IpLocationInfoItemContent>
          <IpLocationInfoAttributesDivider key={index} />
        </IpLocationInfoItem>
      )),
    [ipLocationInfo]
  );

  return (
    <IpLocationInfoStyle itemCount={ipLocationInfo.length}>
      {IpLocationInfoAttributes}
    </IpLocationInfoStyle>
  );
};

export default IpLocationInfo;
