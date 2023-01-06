import styled from "styled-components/macro";

export const MapStyle = styled.main`
  canvas {
    outline: none;
    height: 120vh;
  }
`;

export const ShimmerStyle = styled.div`
  width: 100vw;
  height: 120vh;

  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;

  @keyframes placeholderShimmer {
    0% {
      background-position: -100vw 0;
    }

    100% {
      background-position: 100vw 0;
    }
  }
`;
