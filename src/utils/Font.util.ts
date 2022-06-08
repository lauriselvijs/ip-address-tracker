export const fontWeightObjToString = (fontWeighObj: {
  [key: string]: string;
}) => Object.values(fontWeighObj).join(";");
