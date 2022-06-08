import styled from "styled-components";

export const FooterStyle = styled.footer`
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};
  text-align: center;
  color: ${({ theme }) => theme.colors.baseColorDark};

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
