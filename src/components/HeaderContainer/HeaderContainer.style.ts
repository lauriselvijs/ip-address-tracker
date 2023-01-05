import styled from "styled-components/macro";
// import BackgroundHeaderImage from "../../asset/images/pattern-bg.png";
// import BackgroundHeaderImageDarkMode from "../../asset/images/pattern-bg-dark-mode.png";

export const HeaderContainerStyle = styled.header`
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: center;

  margin: 0px;
  height: 35vh;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    height: 30vh;

    justify-content: flex-start;

    gap: 20px;

    padding-top: 20px;
  }
`;
