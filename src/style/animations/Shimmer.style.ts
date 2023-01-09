import styled from "styled-components/macro";

export const ShimmerStyle = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: ${({ theme }) => theme.color.shimmerBg};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.color.shimmerBg} 0%,
    ${({ theme }) => theme.color.shimmer} 20%,
    ${({ theme }) => theme.color.shimmerBg} 40%,
    ${({ theme }) => theme.color.shimmerBg} 100%
  );
  background-repeat: no-repeat;
`;
