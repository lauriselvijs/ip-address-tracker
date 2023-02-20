import styled from "styled-components/macro";

export const BtnBaseStyle = styled.button`
  -webkit-tap-highlight-color: transparent;
`;

export const PrimaryBtnStyle = styled(BtnBaseStyle)`
  background-color: var(--button-bg-color);
  border-radius: var(--button-border-radius);
  border: none;
  color: var(--button-text-color);
  cursor: pointer;
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  padding: var(--button-padding);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media (hover: hover) {
    &:not(:disabled) {
      &:hover {
        color: var(--button-hover-text-color);
        background-color: var(--button-hover-bg-color);
      }
    }
  }
`;

export const SecondaryBtnStyle = styled(PrimaryBtnStyle)`
  --button-bg-color: ${({ theme }) => theme.color.primaryDark};
  --button-border-radius: 0 10px 10px 0;
  --button-text-color: ${({ theme }) => theme.color.secondary};
  --button-font-size: ${({ theme }) => theme.font.size.medium};
  --button-padding: 0 15px;
  --button-hover-bg-color: ${({ theme }) => theme.color.primary};
`;
