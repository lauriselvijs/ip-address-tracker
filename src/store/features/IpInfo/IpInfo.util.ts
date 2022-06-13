import { IPreaperHeader } from "./IpInfo.util.d";

export const prepareReqHeaders = (
  headers: Headers,
  headerObj: IPreaperHeader
) => {
  for (const [
    ipGeolocationHeaderKey,
    ipGeolocationHeaderValue,
  ] of Object.entries(headerObj)) {
    headers.set(ipGeolocationHeaderKey, ipGeolocationHeaderValue);
  }

  return headers;
};
