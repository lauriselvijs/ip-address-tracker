import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  IP_GEOLOCATION_HEADERS,
  IP_INFO_API_REDUCER_PATH,
} from "./IpInfo.const";
import { IIpInfo } from "../../../types/IpInfo";
import { IP_GEOLOCATION_BASE_URL } from "../../../constants/LocationByIpUrl.const";
import { prepareReqHeaders } from "./IpInfo.util";

export const IpInfoApi = createApi({
  reducerPath: IP_INFO_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: IP_GEOLOCATION_BASE_URL,
    prepareHeaders: (headers) =>
      prepareReqHeaders(headers, IP_GEOLOCATION_HEADERS),
  }),
  endpoints: (builder) => ({
    getIpInfo: builder.query<IIpInfo, string>({
      query: (ip = "") => {
        return {
          url: `/${ip}`,
        };
      },
    }),
  }),
});

export const { useGetIpInfoQuery } = IpInfoApi;

export const IpInfoApiReducer = IpInfoApi.reducer;
export const IpInfoApiReducerPath = IpInfoApi.reducerPath;
export const IpInfoApiMiddleware = IpInfoApi.middleware;
