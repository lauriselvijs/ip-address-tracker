import { IIpInfo } from "../../../types/IpInfo";

const initialState: IIpInfo = {
  ip: "",
  type: "",
  connection: {
    organization: "",
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
