import { latest } from "immer/dist/internal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { IpName } from "../../store/features/Ip";
import { IpInfoApi } from "../../store/features/IpInfo";

export const useGetIpInfoCoordinatesQueryState = () => {
  const { ip: receivedIp } = useSelector((state: RootState) => state[IpName]);
  const queryState = IpInfoApi.endpoints.getIpInfo.useQueryState(receivedIp, {
    selectFromResult: ({ data: { lat, lon } = {}, isFetching, isError }) => {
      return { lat, lon, isFetching, isIpInfoStateError: isError };
    },
  });

  return queryState;
};
