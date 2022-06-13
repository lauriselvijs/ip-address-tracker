import { IIpInfo } from "../../../types/IpInfo";

const initialState: IIpInfo = {
  ip: "",
  type: "",
  carrier: {
    name: null,
  },
  location: {
    city: "",
    postal: "",
    latitude: null,
    longitude: null,
  },
  time_zone: {
    abbreviation: "",
    current_time: "",
  },
};

export default initialState;
