import styled from "styled-components/macro";
import { IpInfoBaseStyle } from "../../style/shared/IpLocation.style";

export const IpInfoStyle = styled(IpInfoBaseStyle)`
  max-width: 80vw;
`;

export const IpInfoErrMsg = styled(IpInfoBaseStyle)`
  height: fit-content;
  padding: 20px;
`;

export const IpInfoItem = styled.div`
  padding-right: 40px;
  padding-top: 10px;
  padding: 20px;
  position: relative;
  transition: width 0.5s linear;
  width: 245px;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding: 0px;
    text-align: center;
    transition: width 0.5s linear;
    width: 320px;
  }
`;

export const IpInfoAttributesDivider = styled.div`
  position: absolute;
  top: 35px;
  left: -5px;
  border-left: 1px solid ${({ theme }) => theme.color.primary};
  height: 68px;
  opacity: 0.2;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    display: none;
  }
`;

export const IpInfoItemTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.small};
  letter-spacing: 1px;
`;

export const IpInfoItemContent = styled.h3`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-top: 0px;
  padding-top: 2px;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    margin: 0px;
  }
`;
