import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IpInfo } from "../../../types/IpInfo";

import { BASE_URL, GET_IP_INFO, REDUCER_PATH, SUCCESS } from "./IpInfo.config";

export const IpInfoApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getIpInfo: builder.query<IpInfo, string>({
      query: (ip) => ({
        url: `${GET_IP_INFO}${ip}`,
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
