import styled from "styled-components/macro";

export const TitleStyle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  color: ${({ theme }) => theme.color.secondary};

  margin: 0px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    font-size: ${({ theme }) => theme.font.size.medium};
  }
`;
