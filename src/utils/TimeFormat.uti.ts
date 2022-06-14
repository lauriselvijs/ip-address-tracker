export const timeStringToTimeZoneOffset = (
  abbreviation = "",
  timeString = ""
): string => abbreviation + " " + timeString?.slice(19);
