import { useSelector } from "react-redux";

import { RootState } from "../../store/app/store";
import { ipName } from "../../store/features/Ip";
import { ipLocationApi } from "../../store/features/IpInfo/IpLocation";

export const useGetIpInfoCoordinatesQueryState = () => {
  const { ip: receivedIp } = useSelector((state: RootState) => state[ipName]);
  const queryState = ipLocationApi.endpoints.getIpInfo.useQueryState(
    receivedIp,
    {
      selectFromResult: ({ data: { lat, lon } = {}, isFetching, isError }) => {
        return { lat, lon, isFetching, isIpInfoStateError: isError };
      },
    }
  );

  return queryState;
};
