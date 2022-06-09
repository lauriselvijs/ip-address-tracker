import React from "react";
import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

// TODO:
// [] wrap map component with map style
// [] create map const file and put in map config
// [] put marker inline style inside wrapper map style component

export const mapOffset = 0.0003; // only if mobile
export const mapZoomLevel = 18;
export const mapStyle = "mapbox://styles/mapbox/streets-v9";

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
