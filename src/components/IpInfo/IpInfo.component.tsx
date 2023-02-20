import { useMemo } from "react";

import { isEmpty } from "../../utils/Array";

import { useGetErrorInfo, useGetIpInfoQueryState } from "./IpInfo.hook";
import {
  IpInfoAttributesDividerStyle,
  IpInfoItemStyle,
  IpInfoItemContentStyle,
  IpInfoItemTitleStyle,
  IpInfoStyle,
  IpInfoErrMsgStyle,
  IpInfoShimmerStyle,
} from "./IpInfo.style";

const IpInfo = () => {
  // TODO:
  // [ ] - on page load automatically search for users ip
  const { isFetching, transformedData: data } = useGetIpInfoQueryState();
  const [isError, ipInfoErrorMsg] = useGetErrorInfo();

  const renderIpInfoItems = useMemo(
    () =>
      data?.map(({ title, value, key }, index) => (
        <IpInfoItemStyle key={key}>
          {index !== 0 && <IpInfoAttributesDividerStyle />}
          <IpInfoItemTitleStyle>{title}</IpInfoItemTitleStyle>
          <IpInfoItemContentStyle>
            {isFetching ? <IpInfoShimmerStyle /> : value}
          </IpInfoItemContentStyle>
        </IpInfoItemStyle>
      )),
    [isFetching, data]
  );

  if (isError) {
    return (
      <IpInfoErrMsgStyle>
        <IpInfoItemTitleStyle>{ipInfoErrorMsg}</IpInfoItemTitleStyle>
      </IpInfoErrMsgStyle>
    );
  } else if (!isEmpty(data)) {
    return <IpInfoStyle>{renderIpInfoItems}</IpInfoStyle>;
  }

  return null;
};

export default IpInfo;
