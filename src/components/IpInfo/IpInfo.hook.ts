import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { IpName } from "../../store/features/Ip";
import { IpInfoApi } from "../../store/features/IpInfo";
import { IpInfoError, IpInfoErrorMsg } from "../../types/IpInfo";

export const useGetIpInfoQueryState = () => {
  const { ip: receivedIp } = useSelector((state: RootState) => state[IpName]);
  const queryState = IpInfoApi.endpoints.getIpInfo.useQueryState(receivedIp);

  return queryState;
};

export const useGetErrorMsg = (): IpInfoErrorMsg | undefined => {
  const [ipInfoErrorMsg, setIpInfoErrorMsg] = useState<IpInfoErrorMsg>();
  const { ip: receivedIp } = useSelector((state: RootState) => state[IpName]);
  const { isError, error } =
    IpInfoApi.endpoints.getIpInfo.useQueryState(receivedIp);

  useEffect(() => {
    const { data } = (error as IpInfoError) || {};

    isError && setIpInfoErrorMsg(data?.message);
  }, [isError]);

  return ipInfoErrorMsg;
};
