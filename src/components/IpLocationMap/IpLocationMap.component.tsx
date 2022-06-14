import React from "react";
import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  mapOffset,
  mapStyle,
  mapZoomLevel,
} from "../../constants/IpLocationMap.const";
import { useGetIpInfoQuery } from "../../store/features/IpInfo/IpInfo.service";
import { useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";

// TODO:
// [] get theme mobile size from state
const IpLocationMap = () => {
  const { ipFetch, ip } = useAppSelector((state: RootState) => state.ip);

  const { data: IpInfoData, isFetching } = useGetIpInfoQuery(ip || "", {
    skip: !ipFetch,
  });

  const { longitude, latitude } = IpInfoData?.location || {};

  return !isFetching && IpInfoData ? (
    <Map
      initialViewState={{
        longitude: longitude || 0,
        latitude: latitude || 0 + mapOffset,
        zoom: mapZoomLevel,
      }}
      style={{ outline: "none", height: "65vh" }}
      mapStyle={mapStyle}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
    >
      <Marker longitude={longitude || 0} latitude={latitude || 0}>
        <FaMapMarkerAlt style={{ fontSize: "62px" }} />
      </Marker>
    </Map>
  ) : (
    <></>
  );
};

export default IpLocationMap;
