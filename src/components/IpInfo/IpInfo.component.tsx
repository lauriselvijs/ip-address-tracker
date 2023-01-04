import { useMemo } from "react";
import BeatLoader from "react-spinners/BeatLoader";

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
  const { isFetching, isError, data } = useGetIpInfoQueryState();
  const ipInfoErrorMsg = useGetErrorMsg();

  data?.forEach((value) => {
    console.log(value.ip);
  });

  // const renderIpInfoTest = useMemo(() => {
  //   return Object.values({ ip, isp, city, zip, timezone }).map(
  //     (ipInfo, index) => (
  //       <IpInfoItem key={index}>
  //         <IpInfoAttributesDivider />
  //         <IpInfoItemTitle>{IP_ADDRESS}</IpInfoItemTitle>
  //         <IpInfoItemContent>
  //           {!isFetching ? ipInfo : <BeatLoader />}
  //         </IpInfoItemContent>
  //       </IpInfoItem>
  //     )
  //   );
  // }, [isFetching, ip, isp, city, zip, timezone]);

  if (isError) {
    return (
      <IpInfoErrMsg>
        <IpInfoItemTitle>{ipInfoErrorMsg}</IpInfoItemTitle>
      </IpInfoErrMsg>
    );
  }

  // return <IpInfoStyle>{renderIpInfo}</IpInfoStyle>;
  return <div>Test</div>;
};

export default IpInfo;
