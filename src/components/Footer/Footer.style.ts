import styled from "styled-components/macro";

export const FooterStyle = styled.footer`
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};
  text-align: center;

  z-index: 1;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  padding-bottom: 5px;

  color: ${({ theme }) => theme.colors.baseColorDark};

  a {
    color: ${({ theme }) => theme.colors.secondaryColorLight};
  }
`;
