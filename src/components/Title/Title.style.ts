import styled from "styled-components";

export const TitleStyle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeLarge};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};

  color: ${({ theme }) => theme.colors.secondaryColor};

  margin: 0px;
`;
