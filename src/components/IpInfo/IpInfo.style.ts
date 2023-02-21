import styled from "styled-components/macro";
import { ShimmerStyle } from "../../style/animations/Shimmer.style";

export const IpInfoStyle = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;
  box-shadow: 2px 2px 10px 2px ${({ theme }) => theme.color.primary};
  display: flex;
  margin-bottom: -12vh;
  max-width: 90vw;
  min-height: 180px;
  padding: 10px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: -55vh;
    padding-bottom: 40px;
  }
`;

export const IpInfoErrMsgStyle = styled(IpInfoStyle)`
  min-height: fit-content;
  padding: 20px;
`;

export const IpInfoItemStyle = styled.div`
  min-width: 60px;
  overflow-x: auto;
  padding: 20px 80px 20px 30px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding: 10px 5vw;
    text-align: center;
  }
`;

export const IpInfoAttributesDividerStyle = styled.div`
  border-left: 2px solid ${({ theme }) => theme.color.primary};
  bottom: 0;
  height: 50%;
  left: 0;
  margin: auto;
  opacity: 0.3;
  position: absolute;
  top: 0;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    display: none;
  }
`;

export const IpInfoItemTitleStyle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.small};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const IpInfoItemContentStyle = styled.h3`
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    margin: 0;
    padding: 0;
  }
`;

export const IpInfoShimmerStyle = styled(ShimmerStyle)`
  animation-name: ip-info-shimmer;
  height: 30px;
  width: 100%;

  @keyframes ip-info-shimmer {
    0% {
      background-position: -320px 0;
    }

    100% {
      background-position: 320px 0;
    }
  }
`;
