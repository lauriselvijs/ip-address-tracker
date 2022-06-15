import styled from "styled-components/macro";
import BackgroundHeaderImage from "../../asset/images/pattern-bg.png";

export const HeaderContainerStyle = styled.header`
  background-image: url(${BackgroundHeaderImage});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  margin: 0px;
  height: 35vh;
`;
