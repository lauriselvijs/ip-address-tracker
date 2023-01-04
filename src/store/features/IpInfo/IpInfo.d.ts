export type TransformKeys = "ip" | "isp" | "city" | "zip" | "timezone" | string;

export type TransformResult = {
  [key in IpInfoTransformKeys]: {
    title: string;
    value: string;
  };
};
