export interface IIpInfo {
  ip: string;
  org: string;
  city: string;
  zipCode: string;
  latitude: number | null;
  longitude: number | null;
  gmt: string;
}

interface IIpInfoError {
  status: number;
  data: { message: string };
}
