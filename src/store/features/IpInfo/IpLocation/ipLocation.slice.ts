import { IpInfo } from "../../../../types/IpInfo";
import emptyIpInfoApi from "../shared/EmptyIpInfo";
import { IpLocationResponse } from "./IpLocation.d";

import { GET_IP_LOCATION } from "./IpLocation.config";

export const ipLocationApi = emptyIpInfoApi.injectEndpoints({
  endpoints: (builder) => ({
    getIpInfo: builder.query<IpInfo, string>({
      query: (ip) => ({
        url: GET_IP_LOCATION,
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
      }: IpLocationResponse) => {
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

export const { useLazyGetIpInfoQuery } = ipLocationApi;

export const ipLocationApiReducer = ipLocationApi.reducer;
export const ipLocationApiName = ipLocationApi.reducerPath;
export const ipLocationApiMiddleware = ipLocationApi.middleware;
