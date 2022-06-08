import styled from "styled-components";

export const IpSearchInputStyle = styled.input`
  width: 500px;
  height: 30px;

  border-radius: 10px;
  padding: 10px 20px;

  border: none;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.baseColorDark};

  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};
`;

export const IpSearchInputStyleContainer = styled.div`
  position: relative;
`;
