import styled from "styled-components";

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

export const IpSearchInputStyleContainer = styled.div`
  position: relative;
`;
