import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MAP_STYLE, MAP_ZOOM_LEVEL } from "../../constants/IpLocationMap.const";
import { useGetIpInfoQuery } from "../../store/features/IpInfo/IpInfo.slice";

const IpLocationMap = () => {
  const { data: ipInfoData, isFetching, isLoading } = useGetIpInfoQuery("");
  const { lon, lat } = ipInfoData || {};

  return (
    <main>
      Map
      {/* <Map
        initialViewState={{
          longitude: 0,
          latitude: 0,
          zoom: MAP_ZOOM_LEVEL,
        }}
        style={{ outline: "none", height: "100vh" }}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      >
        <Marker longitude={0} latitude={0}>
          <FaMapMarkerAlt style={{ fontSize: "62px" }} />
        </Marker>
      </Map> */}
    </main>
  );
};

export default IpLocationMap;
