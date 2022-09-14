import React from "react";
import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  MAP_OFFSET,
  MAP_STYLE,
  MAP_ZOOM_LEVEL,
} from "../../constants/IpLocationMap.const";
import { useGetIpInfoQuery } from "../../store/features/IpInfo/IpInfo.service";
import { useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { IpName } from "../../store/features/Ip/Ip.slice";
import { ThemeName } from "../../store/features/Theme/Theme.slice";
import { useMapFocusOnDeviceScreen } from "../../hooks/Map.hook";

const IpLocationMap = () => {
  const { ipFetch, ip } = useAppSelector((state: RootState) => state[IpName]);
  const theme = useAppSelector((state: RootState) => state[ThemeName]);
  const {
    data: IpInfoData,
    isFetching,
    isLoading,
  } = useGetIpInfoQuery(ip, {
    skip: !ipFetch,
  });
  const { longitude, latitude } = IpInfoData || {};
  const { maxWidth } = theme?.media.tablet || {};

  const mapRef = useMapFocusOnDeviceScreen(
    longitude || 0,
    latitude || 0,
    maxWidth,
    MAP_OFFSET,
    isFetching
  );

  return !isLoading && !isFetching && longitude && latitude ? (
    <main>
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: MAP_ZOOM_LEVEL,
        }}
        style={{ outline: "none", height: "100vh" }}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      >
        <Marker longitude={longitude} latitude={latitude}>
          <FaMapMarkerAlt style={{ fontSize: "62px" }} />
        </Marker>
      </Map>
    </main>
  ) : (
    <main></main>
  );
};

export default IpLocationMap;
