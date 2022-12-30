export interface IpInfo {
  query: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

enum IpInfoErrorMsg {
  PRIVATE_RANGE = "private range",
  RESERVED_RANGE = "reserved range",
  INVALID_QUERY = "invalid query",
}

interface IpInfoError {
  status: string;
  message: IpInfoErrorMsg;
  query: string;
}
