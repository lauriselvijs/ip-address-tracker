import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MARKER_STYLE, STYLE, ZOOM_LEVEL } from "./IpLocationMap.config";
import { useGetIpInfoCoordinatesQueryState } from "./IpLocationMap.hook";
import { IpLocationMapShimmerStyle, MapStyle } from "./IpLocationMap.style";

const IpLocationMap = () => {
  // TODO
  // [ ] - add map scroll
  const { lat, lon, isFetching, isIpInfoStateError } =
    useGetIpInfoCoordinatesQueryState();

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
    return (
      <div>
        <IpLocationMapShimmerStyle />
      </div>
    );
  }

  if (isIpInfoStateError) {
    return null;
  }

  return null;
};

export default IpLocationMap;
