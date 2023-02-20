import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../style/components/Button.style";

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

export const IpSearchBtnStyle = styled(SecondaryBtnStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
