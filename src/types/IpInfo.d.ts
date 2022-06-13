export interface IIpInfo {
  ip: string;
  type: string;
  carrier: {
    name: null;
  };
  location: {
    city: string;
    postal: string;
    latitude: number | null;
    longitude: number | null;
  };
  time_zone: {
    abbreviation: string;
    current_time: string;
  };
}
