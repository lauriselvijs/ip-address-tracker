import React from "react";
import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  mapOffset,
  mapStyle,
  mapZoomLevel,
} from "../../constants/IpLocationMap.const";

const IpLocationMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: -71.05,
        latitude: 42.36 + mapOffset,
        zoom: mapZoomLevel,
      }}
      style={{ outline: "none", height: "65vh" }}
      mapStyle={mapStyle}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
    >
      <Marker longitude={-71.05} latitude={42.36}>
        <FaMapMarkerAlt style={{ fontSize: "62px" }} />
      </Marker>
    </Map>
  );
};

export default IpLocationMap;
