import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { RootState } from "../../store/app/store";
import { IpName } from "../../store/features/Ip";
import { IpInfoApi } from "../../store/features/IpInfo";
import { IpInfoError, IpInfoErrorMsg } from "../../types/IpInfo";
import { Titles } from "./Ipinfo.config";
import { TITLES } from "./IpInfo.config";
import { DefaultError, ErrorMsg, ErrorStatus } from "../../config/Network";

export const useGetIpInfoQueryState = () => {
  const { ip: receivedIp } = useSelector((state: RootState) => state[IpName]);
  const queryState = IpInfoApi.endpoints.getIpInfo.useQueryState(receivedIp, {
    selectFromResult: ({
      data: { query, isp, city, zip, timezone } = {},
      isFetching,
    }) => {
      const transformedData = Object.entries({
        query,
        location: city && zip ? city + ", " + zip : undefined,
        isp,
        timezone,
      })
        .filter(([key]) => {
          const titleKey = key as keyof Titles;

          return TITLES[titleKey];
        })
        .map(([key, value]) => {
          const titleKey = key as keyof Titles;

          return {
            key: nanoid(),
            title: TITLES[titleKey],
            value,
          };
        });

      return { transformedData, isFetching };
    },
  });

  return queryState;
};

export const useGetErrorInfo = (): [
  boolean,
  IpInfoErrorMsg | DefaultError["error"] | undefined
] => {
  const [ipInfoErrorMsg, setIpInfoErrorMsg] = useState<
    IpInfoErrorMsg | DefaultError["error"]
  >();
  const { ip: receivedIp } = useSelector((state: RootState) => state[IpName]);
  const { isError, error } =
    IpInfoApi.endpoints.getIpInfo.useQueryState(receivedIp);
  const { FETCH_ERROR } = ErrorStatus;
  const { NO_CONNECTION } = ErrorMsg;

  useEffect(() => {
    const conErr = (error as DefaultError) || {};

    if (conErr?.status === FETCH_ERROR) {
      setIpInfoErrorMsg(NO_CONNECTION);
    } else if (conErr?.status !== FETCH_ERROR) {
      const { data } = (error as IpInfoError) || {};

      setIpInfoErrorMsg(data?.message);
    }
  }, [isError]);

  return [isError, ipInfoErrorMsg];
};
