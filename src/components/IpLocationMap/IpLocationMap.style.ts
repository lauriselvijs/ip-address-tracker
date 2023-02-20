import styled from "styled-components/macro";
import { ShimmerStyle } from "../../style/animations/Shimmer.style";

export const MapStyle = styled.div`
  canvas {
    outline: none;
    height: 120vh;
  }
`;

export const IpLocationMapShimmerStyle = styled(ShimmerStyle)`
  animation-name: map-placeholder-shimmer;

  height: 120vh;

  @keyframes map-placeholder-shimmer {
    0% {
      background-position: -100vw 0;
    }

    100% {
      background-position: 100vw 0;
    }
  }
`;
