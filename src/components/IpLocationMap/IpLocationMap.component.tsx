import Map, { Marker } from "react-map-gl";
import { Shimmer } from "react-shimmer";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MARKER_STYLE, STYLE, ZOOM_LEVEL } from "./IpLocationMap.config";
import { useGetIpInfoCoordinatesQueryState } from "./IpLocationMap.hook";
import { MapStyle, ShimmerStyle } from "./IpLocationMap.style";

const IpLocationMap = () => {
  const { lat, lon, isFetching, isIpInfoStateError } =
    useGetIpInfoCoordinatesQueryState();

  //24.48.0.1

  if (lon && lat && !isFetching) {
    return (
      <MapStyle>
        <Map
          longitude={lon}
          latitude={lat}
          zoom={ZOOM_LEVEL}
          mapStyle={STYLE}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        >
          <Marker longitude={lon} latitude={lat}>
            <FaMapMarkerAlt style={MARKER_STYLE} />
          </Marker>
        </Map>
      </MapStyle>
    );
  }

  if (isFetching) {
    return <ShimmerStyle />;
  }

  if (isIpInfoStateError) {
    return null;
  }

  return null;
};

export default IpLocationMap;
