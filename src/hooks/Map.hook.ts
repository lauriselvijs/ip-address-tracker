import { useEffect, useRef } from "react";
import { MapRef } from "react-map-gl";
import { useMediaQuery } from "react-responsive";

export const useMapFocusOnDeviceScreen = (
  longitude: number,
  latitude: number,
  maxWidth: string,
  mapOffset: number,
  isFetching: boolean
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

    console.log(isDesktop);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      !isDesktop &&
        mapRef.current?.flyTo({
          center: [longitude, latitude + mapOffset],
        });
    }, 500);

    isDesktop &&
      mapRef.current?.flyTo({
        center: [longitude, latitude],
      });
  }, [isDesktop, isFetching]);

  return mapRef;
};
