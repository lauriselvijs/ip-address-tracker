import styled from "styled-components/macro";

export const DarkModeBtnStyle = styled.button`
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-size: ${({ theme }) => theme.font.size.large};

  height: 40px;
  width: 120px;

  color: ${({ theme }) => theme.color.primary};

  background-color: ${({ theme }) => theme.color.secondary};

  &:active {
    transform: scale(0.8);
  }
`;
