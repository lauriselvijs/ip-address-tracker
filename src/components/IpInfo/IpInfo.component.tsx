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

  const renderIpInfoItems = useMemo(
    () =>
      data?.map(({ title, value, key }) => (
        <IpInfoItem key={key}>
          <IpInfoAttributesDivider />
          <IpInfoItemTitle>{title}</IpInfoItemTitle>
          <IpInfoItemContent>
            {!isFetching ? value : <BeatLoader />}
          </IpInfoItemContent>
        </IpInfoItem>
      )),
    [isFetching, data]
  );

  if (data) {
    return <IpInfoStyle>{renderIpInfoItems}</IpInfoStyle>;
  }

  if (isError) {
    return (
      <IpInfoErrMsg>
        <IpInfoItemTitle>{ipInfoErrorMsg}</IpInfoItemTitle>
      </IpInfoErrMsg>
    );
  }

  return null;
};

export default IpInfo;
