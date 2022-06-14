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
import { IpName } from "../../store/features/Ip/Ip.slice";

// TODO:
// [] get theme mobile size from state
// [] add loading state to map
const IpLocationMap = () => {
  const { ipFetch, ip } = useAppSelector((state: RootState) => state[IpName]);

  const { data: IpInfoData, isFetching } = useGetIpInfoQuery(ip, {
    skip: !ipFetch,
  });

  const { longitude, latitude } = IpInfoData?.location || {};

  return !isFetching && longitude && latitude ? (
    <Map
      initialViewState={{
        longitude: longitude,
        latitude: latitude + mapOffset,
        zoom: mapZoomLevel,
      }}
      style={{ outline: "none", height: "65vh" }}
      mapStyle={mapStyle}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
    >
      <Marker longitude={longitude} latitude={latitude}>
        <FaMapMarkerAlt style={{ fontSize: "62px" }} />
      </Marker>
    </Map>
  ) : (
    <></>
  );
};

export default IpLocationMap;
