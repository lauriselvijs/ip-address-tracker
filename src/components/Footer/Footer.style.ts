import styled from "styled-components/macro";

export const FooterStyle = styled.footer`
  font-size: ${({ theme }) => theme.font.size.small};
  text-align: center;

  z-index: 1;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  padding-bottom: 0;

  color: ${({ theme }) => theme.color.secondaryDark};

  a {
    color: ${({ theme }) => theme.color.secondaryLight};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
  }
`;
