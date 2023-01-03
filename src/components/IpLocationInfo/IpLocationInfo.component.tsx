import { useEffect, useMemo, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import {
  IP_ADDRESS,
  ISP,
  LOCATION,
  TIMEZONE,
} from "../../constants/IpInfo.const";
import { IpInfoApi } from "../../store/features/IpInfo/IpInfo.slice";
import { IpInfoError, IpInfoErrorMsg } from "../../types/IpInfo";

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
  const [ipInfoErrorMsg, setIpInfoErrorMsg] = useState<IpInfoErrorMsg>();
  const {
    data: ipInfo,
    isLoading,
    isFetching,
    isError,
    error,
  } = IpInfoApi.endpoints.getIpInfo.useQueryState("");

  useEffect(() => {
    const { message: errorMsg } = (error as IpInfoError) || {};

    isError && setIpInfoErrorMsg(errorMsg);
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
            {!isLoading ? (
              <>
                {city}, {zip}
              </>
            ) : (
              <BeatLoader />
            )}
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
