import React, { useEffect, useMemo, useState } from "react";
import {
  IP_ADDRESS,
  ISP,
  LOCATION,
  TIMEZONE,
} from "../../constants/IpInfo.const";
import { useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { useGetIpInfoQuery } from "../../store/features/IpInfo/IpInfo.service";
import { toLocationString } from "../../utils/Location.util";
import { timeStringToTimeZoneOffset } from "../../utils/TimeFormat.uti";
import {
  IpLocationInfoAttributesDivider,
  IpLocationInfoItem,
  IpLocationInfoItemContent,
  IpLocationInfoItemTitle,
  IpLocationInfoStyle,
} from "./IpLocationInfo.style";
import BeatLoader from "react-spinners/BeatLoader";

const IpLocationInfo = () => {
  const { ipFetch, ip } = useAppSelector((state: RootState) => state.ip);
  const { data: IpInfoData, isLoading } = useGetIpInfoQuery(ip, {
    skip: !ipFetch,
  });

  const { ip: ipAddress } = IpInfoData || {};
  const { city, postal } = IpInfoData?.location || {};
  const { abbreviation, current_time } = IpInfoData?.time_zone || {};
  const { organization: ispName } = IpInfoData?.connection || {};

  const ipAddressBlock = useMemo(
    () => (
      <IpLocationInfoItem>
        <IpLocationInfoItemTitle>{IP_ADDRESS}</IpLocationInfoItemTitle>
        <IpLocationInfoItemContent>
          {!isLoading ? ipAddress : <BeatLoader />}
        </IpLocationInfoItemContent>
      </IpLocationInfoItem>
    ),
    [isLoading, ipAddress]
  );

  const ipLocation = useMemo(
    () => (
      <IpLocationInfoItem>
        <IpLocationInfoAttributesDivider />
        <IpLocationInfoItemTitle>{LOCATION}</IpLocationInfoItemTitle>
        <IpLocationInfoItemContent>
          {!isLoading ? toLocationString(city, postal) : <BeatLoader />}
        </IpLocationInfoItemContent>
      </IpLocationInfoItem>
    ),
    [isLoading, city, postal]
  );

  const ipLocationTime = useMemo(
    () => (
      <IpLocationInfoItem>
        <IpLocationInfoAttributesDivider />
        <IpLocationInfoItemTitle>{TIMEZONE}</IpLocationInfoItemTitle>
        <IpLocationInfoItemContent>
          {!isLoading ? (
            timeStringToTimeZoneOffset(abbreviation, current_time)
          ) : (
            <BeatLoader />
          )}
        </IpLocationInfoItemContent>
      </IpLocationInfoItem>
    ),
    [isLoading, abbreviation, current_time]
  );

  const ipIspName = useMemo(
    () => (
      <IpLocationInfoItem>
        <IpLocationInfoAttributesDivider />
        <IpLocationInfoItemTitle>{ISP}</IpLocationInfoItemTitle>
        <IpLocationInfoItemContent>
          {!isLoading ? ispName : <BeatLoader />}
        </IpLocationInfoItemContent>
      </IpLocationInfoItem>
    ),
    [isLoading, ispName]
  );

  return (
    <IpLocationInfoStyle>
      {ipAddressBlock}
      {ipLocation}
      {ipLocationTime}
      {ipIspName}
    </IpLocationInfoStyle>
  );
};

export default IpLocationInfo;
