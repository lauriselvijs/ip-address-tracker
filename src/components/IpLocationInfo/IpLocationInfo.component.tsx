import React from "react";
import { IpLocationInfoStyle } from "./IpLocationInfo.style";

// TODO:
// [] change table to flex box
// [] add separator between items
const IpLocationInfo = () => {
  return (
    <IpLocationInfoStyle>
      <tr>
        <th>IP ADDRESS</th>
        <th>LOCATION</th>
        <th>TIMEZONE</th>
        <th>ISP</th>
      </tr>
    </IpLocationInfoStyle>
  );
};

export default IpLocationInfo;
