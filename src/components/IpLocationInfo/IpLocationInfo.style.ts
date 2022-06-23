import styled from "styled-components/macro";

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
    padding-bottom: 40px;
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
