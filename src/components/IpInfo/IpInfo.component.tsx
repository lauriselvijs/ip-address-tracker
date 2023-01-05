import { useMemo } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { IpInfoApi } from "../../store/features/IpInfo";

import { isEmpty } from "../../utils/Array.util";
import { useGetErrorInfo, useGetIpInfoQueryState } from "./IpInfo.hook";
import {
  IpInfoAttributesDivider,
  IpInfoItem,
  IpInfoItemContent,
  IpInfoItemTitle,
  IpInfoStyle,
  IpInfoErrMsg,
} from "./IpInfo.style";

const IpInfo = () => {
  const { isFetching, transformedData: data } = useGetIpInfoQueryState();
  const [isError, ipInfoErrorMsg] = useGetErrorInfo();

  const renderIpInfoItems = useMemo(
    () =>
      data?.map(({ title, value, key }, index) => (
        <IpInfoItem key={key}>
          {index !== 0 && <IpInfoAttributesDivider />}
          <IpInfoItemTitle>{title}</IpInfoItemTitle>
          <IpInfoItemContent>
            {!isFetching ? value : <BeatLoader />}
          </IpInfoItemContent>
        </IpInfoItem>
      )),
    [isFetching, data]
  );

  if (isError) {
    return (
      <IpInfoErrMsg>
        <IpInfoItemTitle>{ipInfoErrorMsg}</IpInfoItemTitle>
      </IpInfoErrMsg>
    );
  } else if (!isEmpty(data)) {
    return <IpInfoStyle>{renderIpInfoItems}</IpInfoStyle>;
  }

  return null;
};

export default IpInfo;
