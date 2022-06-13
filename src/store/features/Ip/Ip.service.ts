import { IP_API_REDUCER_PATH } from "./Ip.const";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IIp } from "../../../types/Ip";
import { IPIFY_BASE_URL } from "../../../constants/IpUrl.const";
import { IIpApiQueryParams } from "./Ip";

export const IpApi = createApi({
  reducerPath: IP_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: IPIFY_BASE_URL }),
  endpoints: (builder) => ({
    getIp: builder.query<IIp, IIpApiQueryParams>({
      query: (arg) => {
        const { format } = arg;
        return {
          url: "/",
          params: { format },
        };
      },
    }),
  }),
});

export const { useGetIpQuery } = IpApi;
export const IpApiReducer = IpApi.reducer;
export const IpApiReducerPath = IpApi.reducerPath;
