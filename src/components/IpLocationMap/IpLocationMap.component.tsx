import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IpLocationMapStyle } from "./IpLocationMap.style";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY
  ? process.env.REACT_APP_MAPBOX_KEY
  : "";

console.log("test");

const IpLocationMap = () => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-71.05);
  const [lat, setLat] = useState(42.36);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current || "",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return <IpLocationMapStyle ref={mapContainer} />;
};

export default IpLocationMap;
