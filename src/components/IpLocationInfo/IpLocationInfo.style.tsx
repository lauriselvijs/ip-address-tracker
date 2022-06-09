import styled, { css } from "styled-components";

export interface IIpLocationInfoStyle {
  itemCount: number;
}

export interface IIpLocationInfoAttributesDivider {
  // omit first item of array
  key: number;
}

export const IpLocationInfoStyle = styled.div<IIpLocationInfoStyle>`
  height: 150px;
  width: calc(241px * ${({ itemCount }) => itemCount});
  border-radius: 10px;

  box-shadow: 2px 2px 10px 2px ${({ theme }) => theme.colors.baseColor};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  margin-bottom: -120px;
`;

export const IpLocationInfoItem = styled.div`
  padding: 15px;
  padding-right: 40px;
  position: relative;
`;

export const IpLocationInfoAttributesDivider = styled.div<IIpLocationInfoAttributesDivider>`
  ${({ key }) =>
    key !== 0 &&
    css`
      position: absolute;
      top: 35px;
      left: -5px;
      border-left: 1px solid ${({ theme }) => theme.colors.baseColor};
      height: 68px;
      opacity: 0.2;
    `}
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
  text-align: justify;

  margin-top: 0px;
  padding-top: 2px;
`;
