import styled, { css } from "styled-components";

export interface IIpLocationInfoAttributesDivider {
  // omit first item of array
  firstElementIndex: number;
}

export const IpLocationInfoStyle = styled.div`
  z-index: 1;

  height: 150px;
  border-radius: 10px;
  padding: 10px;

  box-shadow: 2px 2px 10px 2px ${({ theme }) => theme.colors.baseColor};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  transition: height, margin-bottom 0.5s linear;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  margin-bottom: -120px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: height, margin-bottom 0.5s linear;

    height: 310px;
    margin-bottom: -340px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export const IpLocationInfoItem = styled.div`
  padding: 20px;
  padding-right: 40px;
  width: 242px;
  position: relative;
  transition: width 0.5s linear;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    transition: width 0.5s linear;

    width: 305px;
    padding: 0px;
    text-align: center;
  }
`;

export const IpLocationInfoAttributesDivider = styled.div<IIpLocationInfoAttributesDivider>`
  ${({ firstElementIndex }) =>
    firstElementIndex !== 0
      ? css`
          position: absolute;
          top: 35px;
          left: -5px;
          border-left: 1px solid ${({ theme }) => theme.colors.baseColor};
          height: 68px;
          opacity: 0.2;
        `
      : css`
          display: none;
        `}

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: none;
  }
`;

export const IpLocationInfoItemTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};
  color: ${({ theme }) => theme.colors.baseColor};
  letter-spacing: 1px;
`;

export const IpLocationInfoItemContent = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};
  color: ${({ theme }) => theme.colors.baseColorDark};

  margin-top: 0px;
  padding-top: 2px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    margin: 0px;
  }
`;
