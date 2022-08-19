export const IP_INFO_API_REDUCER_PATH = "IpInfoApi";

export const IP_GEOLOCATION_HEADERS = {
  "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY
    ? process.env.REACT_APP_X_RAPID_API_KEY
    : "",
  "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
};
