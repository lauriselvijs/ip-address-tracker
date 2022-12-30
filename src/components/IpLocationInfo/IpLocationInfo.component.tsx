import { useEffect, useMemo, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import {
  IP_ADDRESS,
  ISP,
  LOCATION,
  TIMEZONE,
} from "../../constants/IpInfo.const";
import {
  useGetIpInfoQuery,
  useGetIpInfoStateResult,
} from "../../store/features/IpInfo/IpInfo.slice";
import { toLocationString } from "../../utils/Location.util";
import { IpInfoError } from "../../types/IpInfo";

import {
  IpLocationInfoAttributesDivider,
  IpLocationInfoItem,
  IpLocationInfoItemContent,
  IpLocationInfoItemError,
  IpLocationInfoItemTitle,
  IpLocationInfoStyle,
  IpLocationInfoErrMsg,
} from "./IpLocationInfo.style";

const IpLocationInfo = () => {
  const [ipInfoErrorMsg, setIpInfoErrorMsg] = useState<string>();
  const { data: ipInfo, isLoading, isError, error } = useGetIpInfoStateResult;

  useEffect(() => {
    const errorMsg = error as IpInfoError;

    isError && setIpInfoErrorMsg(errorMsg.message);
  }, [isError]);

  const { query: ip, isp, city, zip, timezone } = ipInfo || {};

  const ipAddressBlock = useMemo(
    () => (
      <IpLocationInfoItem>
        <IpLocationInfoItemTitle>{IP_ADDRESS}</IpLocationInfoItemTitle>
        {(ip || isLoading) && (
          <IpLocationInfoItemContent>
            {!isLoading ? ip : <BeatLoader />}
          </IpLocationInfoItemContent>
        )}
      </IpLocationInfoItem>
    ),
    [isLoading, ip]
  );

  const ipLocation = useMemo(
    () => (
      <IpLocationInfoItem>
        <IpLocationInfoAttributesDivider />
        <IpLocationInfoItemTitle>{LOCATION}</IpLocationInfoItemTitle>
        {(ip || isLoading) && (
          <IpLocationInfoItemContent>
            {!isLoading ? toLocationString(city, zip) : <BeatLoader />}
          </IpLocationInfoItemContent>
        )}
      </IpLocationInfoItem>
    ),
    [isLoading, city, zip]
  );

  const ipLocationTime = useMemo(
    () => (
      <IpLocationInfoItem>
        <IpLocationInfoAttributesDivider />
        <IpLocationInfoItemTitle>{TIMEZONE}</IpLocationInfoItemTitle>
        {(ip || isLoading) && (
          <IpLocationInfoItemContent>
            {!isLoading ? timezone : <BeatLoader />}
          </IpLocationInfoItemContent>
        )}
      </IpLocationInfoItem>
    ),
    [isLoading, timezone]
  );

  const ipIspName = useMemo(
    () => (
      <IpLocationInfoItem>
        <IpLocationInfoAttributesDivider />
        <IpLocationInfoItemTitle>{ISP}</IpLocationInfoItemTitle>
        {(ip || isLoading) && (
          <IpLocationInfoItemContent>
            {!isLoading ? isp : <BeatLoader />}
          </IpLocationInfoItemContent>
        )}
      </IpLocationInfoItem>
    ),
    [isLoading, isp]
  );

  const ipInfoErrorMsgElement = useMemo(
    () => (
      <IpLocationInfoItemError>
        <IpLocationInfoItemTitle>{ipInfoErrorMsg}</IpLocationInfoItemTitle>
      </IpLocationInfoItemError>
    ),
    [isError, ipInfoErrorMsg]
  );

  if (isError) {
    return <IpLocationInfoErrMsg>{ipInfoErrorMsgElement}</IpLocationInfoErrMsg>;
  }

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
