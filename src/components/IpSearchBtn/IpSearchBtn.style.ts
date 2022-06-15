import styled from "styled-components/macro";

export const IpSearchBtnStyle = styled.button`
  position: absolute;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 0px 8px 8px 0px;
  background-color: ${({ theme }) => theme.colors.baseColorDark};
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  top: 0px;
  left: 490px;

  cursor: pointer;

  transition: left 0.5s linear;

  &:active {
    transform: scale(0.9);
  }

  color: ${({ theme }) => theme.colors.secondaryColor};

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    transition: left 0.5s linear;
    left: 290px;
  }
`;
