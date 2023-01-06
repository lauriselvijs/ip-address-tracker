import { useMemo } from "react";
import { Shimmer } from "react-shimmer";

import { isEmpty } from "../../utils/Array.util";
import { SHIMMER_HEIGHT, SHIMMER_WIDTH } from "./IpInfo.config";
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
            {!isFetching ? (
              value
            ) : (
              <Shimmer width={SHIMMER_WIDTH} height={SHIMMER_HEIGHT} />
            )}
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
