import styled from "styled-components/macro";

export const IpSearchInputStyle = styled.input`
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  height: 30px;
  padding: 10px 20px;
  transition: width 0.5s linear;
  width: 500px;

  ::placeholder {
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.font.weight.light};
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    transition: width 0.5s linear;
    width: 300px;
  }
`;

export const IpSearchInputStyleForm = styled.form`
  position: relative;
`;

export const IpSearchBtnStyle = styled.button`
  position: absolute;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 0px 8px 8px 0px;
  background-color: ${({ theme }) => theme.color.primaryDark};
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  top: 0px;
  left: 490px;

  cursor: pointer;

  transition: left 0.5s linear;

  &:active {
    transform: scale(0.9);
  }

  color: ${({ theme }) => theme.color.secondary};

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    transition: left 0.5s linear;
    left: 290px;
  }
`;
