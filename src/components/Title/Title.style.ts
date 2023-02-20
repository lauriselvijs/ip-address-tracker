import styled from "styled-components/macro";

export const TitleStyle = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    font-size: ${({ theme }) => theme.font.size.medium};
  }
`;
