import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { RootState } from "../../store/app/store";
import { IpName } from "../../store/features/Ip";
import { IpInfoApi } from "../../store/features/IpInfo";
import { IpInfoError } from "../../types/IpInfo";
import { Titles } from "./Ipinfo.config";
import { TITLES } from "./IpInfo.config";
import { DefaultError, ErrorMsg, ErrorStatus } from "../../types/Network.d";

export const useGetIpInfoQueryState = () => {
  const { ip: receivedIp } = useSelector((state: RootState) => state[IpName]);
  const queryState = IpInfoApi.endpoints.getIpInfo.useQueryState(receivedIp, {
    selectFromResult: ({
      data: { query, org, city, zip, timezone } = {},
      isFetching,
    }) => {
      const transformedData = Object.entries({
        query,
        location: city && zip ? city + " " + zip : undefined,
        org,
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
  IpInfoError["data"]["message"] | DefaultError["error"] | undefined
] => {
  const [ipInfoErrorMsg, setIpInfoErrorMsg] = useState<
    IpInfoError["data"]["message"] | DefaultError["error"]
  >();
  const { ip: receivedIp } = useSelector((state: RootState) => state[IpName]);
  const { isError, error } =
    IpInfoApi.endpoints.getIpInfo.useQueryState(receivedIp);
  const { FETCH_ERROR } = ErrorStatus;
  const { NO_CONNECTION } = ErrorMsg;

  useEffect(() => {
    const conErr = (error as DefaultError) || {};

    if (isError) {
      if (conErr?.status === FETCH_ERROR) {
        setIpInfoErrorMsg(NO_CONNECTION);
      } else if (conErr?.status !== FETCH_ERROR) {
        const {
          data: { message },
        } = (error as IpInfoError) || {};

        setIpInfoErrorMsg(message);
      }
    }
  }, [isError]);

  return [isError, ipInfoErrorMsg];
};
