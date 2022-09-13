export const IP_INFO_API_REDUCER_PATH = "IpInfoApi";

export const FIND_ANY_IP_ADDRESS_API_KEY = process.env
  .REACT_APP_FIND_ANY_IP_ADDRESS_API_KEY
  ? process.env.REACT_APP_FIND_ANY_IP_ADDRESS_API_KEY
  : "";

export const IP_GEOLOCATION_HEADERS = {
  "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY
    ? process.env.REACT_APP_X_RAPID_API_KEY
    : "",
  "X-RapidAPI-Host":
    "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
};
