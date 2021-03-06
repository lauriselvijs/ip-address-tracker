import styled from "styled-components/macro";

export const DarkModeBtnStyle = styled.button`
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeLarge};

  height: 40px;
  width: 120px;

  color: ${({ theme }) => theme.colors.baseColor};

  background-color: ${({ theme }) => theme.colors.secondaryColor};

  &:active {
    transform: scale(0.8);
  }
`;
