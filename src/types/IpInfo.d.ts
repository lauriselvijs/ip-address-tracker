export interface IpInfo {
  query: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  org: string;
}

export interface IpInfoError {
  data: { message: string };
  status: number;
}
