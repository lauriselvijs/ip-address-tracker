import { useEffect, useRef } from "react";
import { MapRef } from "react-map-gl";
import { useMediaQuery } from "react-responsive";

export const useMapFocusOnDeviceScreen = (
  longitude: number,
  latitude: number,
  maxWidth: string,
  mapOffset: number
) => {
  const mapRef = useRef<MapRef | null>(null);

  const isDesktop = useMediaQuery({
    query: `(min-width: ${maxWidth})`,
  });

  useEffect(() => {
    !isDesktop &&
      mapRef.current?.flyTo({
        center: [longitude, latitude + mapOffset],
      });
  }, []);

  useEffect(() => {
    !isDesktop &&
      mapRef.current?.flyTo({
        center: [longitude, latitude + mapOffset],
      });

    isDesktop &&
      mapRef.current?.flyTo({
        center: [longitude, latitude],
      });

    console.log("render");
  }, [isDesktop]);

  return mapRef;
};
