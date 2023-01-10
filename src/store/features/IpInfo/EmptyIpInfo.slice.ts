import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  BASE_URL,
  REDUCER_PATH,
  RAPIDAPI_HOST_HEADER,
  RAPIDAPI_HOST_HEADER_VALUE,
  RAPIDAPI_KEY_HEADER,
} from "./EmptyIpInfo.config";

export const emptyIpInfoApi = createApi({
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
  endpoints: () => ({}),
});

export default emptyIpInfoApi;
