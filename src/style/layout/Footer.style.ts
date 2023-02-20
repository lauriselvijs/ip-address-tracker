import styled from "styled-components/macro";

export const FooterStyle = styled.footer`
  bottom: 0;
  color: ${({ theme }) => theme.color.secondaryDark};
  font-size: ${({ theme }) => theme.font.size.small};
  left: 0;
  padding-bottom: 0;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 1;

  a {
    color: ${({ theme }) => theme.color.secondaryLight};
  }
`;
