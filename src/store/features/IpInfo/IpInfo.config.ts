export const REDUCER_PATH = "IpInfoApi";

export const BASE_URL = "http://ip-api.com/";
export const GET_IP_INFO = "json/";

export const SUCCESS = "success";

export interface Titles {
  query: string;
  isp: string;
  location: string;
  timezone: string;
}

export const TITLES: Titles = {
  query: "Ip address",
  isp: "ISP",
  location: "Location",
  timezone: "Timezone",
};
