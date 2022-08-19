import styled from "styled-components/macro";
import { IpLocationBaseStyle } from "../../style/shared/IpLocation.style";

export const IpLocationInfoStyle = styled(IpLocationBaseStyle)``;

export const IpLocationInfoErrMsg = styled(IpLocationBaseStyle)`
  width: 500px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    width: 400px;

    transition: width;
  }
`;

export const IpLocationInfoItem = styled.div`
  padding: 20px;
  padding-top: 10px;
  padding-right: 40px;
  width: 245px;
  position: relative;
  transition: width 0.5s linear;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    transition: width 0.5s linear;

    width: 320px;
    padding: 0px;
    text-align: center;
  }
`;

export const IpLocationInfoItemError = styled(IpLocationInfoItem)`
  padding: 0px;
  padding-top: 50px;
  padding-left: 20px;
`;

export const IpLocationInfoAttributesDivider = styled.div`
  position: absolute;
  top: 35px;
  left: -5px;
  border-left: 1px solid ${({ theme }) => theme.colors.baseColor};
  height: 68px;
  opacity: 0.2;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: none;
  }
`;

export const IpLocationInfoItemTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};
  color: ${({ theme }) => theme.colors.baseColor};
  letter-spacing: 1px;
`;

export const IpLocationInfoItemContent = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};
  color: ${({ theme }) => theme.colors.baseColorDark};

  margin-top: 0px;
  padding-top: 2px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    margin: 0px;
  }
`;
