import styled from "styled-components/macro";

export const IpSearchInputStyle = styled.input`
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px 0 0 10px;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  height: 30px;
  padding: 10px 20px;
  width: 30vw;

  &::placeholder {
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.font.weight.light};
    opacity: 0.8;
  }

  &:focus {
    cursor: text;
  }
`;

export const IpSearchInputStyleForm = styled.form`
  align-items: stretch;
  display: flex;
  justify-content: center;
`;

export const IpSearchBtnStyle = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.color.primaryDark};
  border-radius: 0px 10px 10px 0px;
  border: none;
  color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  justify-content: center;
  padding: 0px 15px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media (hover: hover) {
    &:not(:disabled) {
      &:hover {
        background-color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
