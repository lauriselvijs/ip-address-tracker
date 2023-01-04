import { useMemo } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import {
  IP_ADDRESS,
  ISP,
  LOCATION,
  TIMEZONE,
} from "../../constants/IpInfo.const";
import { useGetErrorMsg, useGetIpInfoQueryState } from "./IpInfo.hook";

import {
  IpInfoAttributesDivider,
  IpInfoItem,
  IpInfoItemContent,
  IpInfoItemTitle,
  IpInfoStyle,
  IpInfoErrMsg,
} from "./IpInfo.style";

const IpInfo = () => {
  const {
    data: { query: ip, isp, city, zip, timezone } = {},
    isFetching,
    isError,
  } = useGetIpInfoQueryState();
  const ipInfoErrorMsg = useGetErrorMsg();

  const renderIpAddress = useMemo(() => {
    const renderIpAddressContent = (
      <IpInfoItemContent>{!isFetching ? ip : <BeatLoader />}</IpInfoItemContent>
    );

    return (
      <IpInfoItem>
        <IpInfoItemTitle>{IP_ADDRESS}</IpInfoItemTitle>
        {(ip || isFetching) && renderIpAddressContent}
      </IpInfoItem>
    );
  }, [isFetching, ip]);

  const renderIpLocation = useMemo(
    () => (
      <IpInfoItem>
        <IpInfoAttributesDivider />
        <IpInfoItemTitle>{LOCATION}</IpInfoItemTitle>
        {(ip || isFetching) && (
          <IpInfoItemContent>
            {!isFetching ? (
              <>
                {city}, {zip}
              </>
            ) : (
              <BeatLoader />
            )}
          </IpInfoItemContent>
        )}
      </IpInfoItem>
    ),
    [isFetching, city, zip]
  );

  const renderIpLocationTime = useMemo(
    () => (
      <IpInfoItem>
        <IpInfoAttributesDivider />
        <IpInfoItemTitle>{TIMEZONE}</IpInfoItemTitle>
        {(ip || isFetching) && (
          <IpInfoItemContent>
            {!isFetching ? timezone : <BeatLoader />}
          </IpInfoItemContent>
        )}
      </IpInfoItem>
    ),
    [isFetching, timezone]
  );

  const renderIpIspName = useMemo(
    () => (
      <IpInfoItem>
        <IpInfoAttributesDivider />
        <IpInfoItemTitle>{ISP}</IpInfoItemTitle>
        {(ip || isFetching) && (
          <IpInfoItemContent>
            {!isFetching ? isp : <BeatLoader />}
          </IpInfoItemContent>
        )}
      </IpInfoItem>
    ),
    [isFetching, isp]
  );

  const renderIpInfoErrorMsg = useMemo(
    () => (
      <div>
        <IpInfoItemTitle>{ipInfoErrorMsg}</IpInfoItemTitle>
      </div>
    ),
    [isError, ipInfoErrorMsg]
  );

  if (isError) {
    return <IpInfoErrMsg>{renderIpInfoErrorMsg}</IpInfoErrMsg>;
  }

  return (
    <IpInfoStyle>
      {renderIpAddress}
      {renderIpLocation}
      {renderIpLocationTime}
      {renderIpIspName}
    </IpInfoStyle>
  );
};

export default IpInfo;
