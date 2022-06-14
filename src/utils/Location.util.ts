export const toLocationString = (city = "", postal = ""): string =>
  city && postal && city + ", " + postal;
