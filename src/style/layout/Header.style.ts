import styled from "styled-components/macro";
import BackgroundHeaderImage from "../../asset/images/pattern-bg.png";

export const HeaderStyle = styled.header`
  align-items: center;
  background-image: url(${BackgroundHeaderImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 250px;
  padding-top: 20px;
  position: relative;
`;
