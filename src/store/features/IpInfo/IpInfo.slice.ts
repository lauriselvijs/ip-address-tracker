import {
  createApi,
  fetchBaseQuery,
  skipToken,
} from "@reduxjs/toolkit/query/react";

import { IpInfo } from "../../../types/IpInfo";

import { IP_API_BASE_URL, IP_INFO_API_REDUCER_PATH } from "./IpInfo.config";

export const IpInfoApi = createApi({
  reducerPath: IP_INFO_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: IP_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getIpInfo: builder.query<IpInfo, string>({
      query: (ip) => `json/${ip}`,
    }),
  }),
});

export const useGetIpInfoStateResult =
  IpInfoApi.endpoints.getIpInfo.useQueryState(skipToken);

export const { useGetIpInfoQuery } = IpInfoApi;

export const IpInfoApiReducer = IpInfoApi.reducer;
export const IpInfoApiReducerPath = IpInfoApi.reducerPath;
export const IpInfoApiMiddleware = IpInfoApi.middleware;
