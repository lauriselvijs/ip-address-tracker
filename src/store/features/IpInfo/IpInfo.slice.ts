import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IpInfo, IpInfoError } from "../../../types/IpInfo";

import {
  IP_API_BASE_URL,
  IP_API_GET_IP_INFO,
  IP_INFO_API_REDUCER_PATH,
  SUCCESS,
} from "./IpInfo.config";

export const IpInfoApi = createApi({
  reducerPath: IP_INFO_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: IP_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getIpInfo: builder.query<IpInfo, string>({
      query: (ip) => ({
        url: `${IP_API_GET_IP_INFO}${ip}`,
        validateStatus: (response, result) =>
          response.status === 200 && result.status === SUCCESS,
      }),
    }),
  }),
});

export const { useLazyGetIpInfoQuery } = IpInfoApi;

export const IpInfoApiReducer = IpInfoApi.reducer;
export const IpInfoApiReducerPath = IpInfoApi.reducerPath;
export const IpInfoApiMiddleware = IpInfoApi.middleware;
