import styled from "styled-components/macro";

export const IpSearchInputStyle = styled.input`
  width: 500px;
  height: 30px;

  transition: width 0.5s linear;

  border-radius: 10px;
  padding: 10px 20px;

  border: none;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.baseColorDark};

  background-color: ${({ theme }) => theme.colors.secondaryColor};

  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};

  ::placeholder {
    color: ${({ theme }) => theme.colors.baseColor};
    font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightLight};
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    transition: width 0.5s linear;
    width: 300px;
  }
`;

export const IpSearchInputStyleForm = styled.form`
  position: relative;
`;

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
