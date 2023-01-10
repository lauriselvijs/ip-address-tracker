import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IpInfo } from "../../../types/IpInfo";
import { TransformResult } from "./IpInfo";

import {
  BASE_URL,
  GET_IP_INFO,
  REDUCER_PATH,
  RAPIDAPI_HOST_HEADER,
  RAPIDAPI_HOST_HEADER_VALUE,
  RAPIDAPI_KEY_HEADER,
} from "./IpInfo.config";

export const IpInfoApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        RAPIDAPI_KEY_HEADER,
        process.env.REACT_APP_RAPID_API_KEY || ""
      );
      headers.set(RAPIDAPI_HOST_HEADER, RAPIDAPI_HOST_HEADER_VALUE);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getIpInfo: builder.query<IpInfo, string>({
      query: (ip) => ({
        url: GET_IP_INFO,
        params: {
          ip,
          apikey: process.env.REACT_APP_RAPID_API_APP_KEY,
        },
      }),
      transformResponse: ({
        ip,
        city,
        org,
        zipCode,
        timezone,
        latitude,
        longitude,
      }: TransformResult) => {
        return {
          query: ip,
          city,
          org,
          zip: zipCode,
          timezone,
          lat: latitude,
          lon: longitude,
        };
      },
    }),
  }),
});

export const { useLazyGetIpInfoQuery } = IpInfoApi;

export const IpInfoApiReducer = IpInfoApi.reducer;
export const IpInfoApiName = IpInfoApi.reducerPath;
export const IpInfoApiMiddleware = IpInfoApi.middleware;
