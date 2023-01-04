import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IpInfo } from "../../../types/IpInfo";

import { TransformResult } from "./IpInfo";
import {
  BASE_URL,
  GET_IP_INFO,
  REDUCER_PATH,
  SUCCESS,
  TITLES,
} from "./IpInfo.config";

export const IpInfoApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getIpInfo: builder.query<TransformResult[], string>({
      query: (ip) => ({
        url: `${GET_IP_INFO}${ip}`,
        validateStatus: (response, result) =>
          response.status === 200 && result.status === SUCCESS,
      }),
      transformResponse: ({ query: ip, isp, city, zip, timezone }: IpInfo) =>
        Object.entries({
          ip,
          isp,
          city,
          zip,
          timezone,
        }).map(([key, value], index) => {
          return {
            [key]: {
              title: TITLES[index],
              value,
            },
          };
        }),
    }),
  }),
});

export const { useLazyGetIpInfoQuery } = IpInfoApi;

export const IpInfoApiReducer = IpInfoApi.reducer;
export const IpInfoApiName = IpInfoApi.reducerPath;
export const IpInfoApiMiddleware = IpInfoApi.middleware;
