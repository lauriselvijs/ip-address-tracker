import styled from "styled-components";

export const IpLocationInfoStyle = styled.table`
  height: 150px;
  width: 900px;
  table-layout: fixed;
  border-radius: 10px;

  th {
    text-align: center;
    vertical-align: top;
  }

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  margin-bottom: -120px; ;
`;
