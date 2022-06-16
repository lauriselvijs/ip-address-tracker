import styled, { css } from "styled-components/macro";
import BackgroundHeaderImage from "../../asset/images/pattern-bg.png";
import BackgroundHeaderImageDarkMode from "../../asset/images/pattern-bg-dark-mode.png";
import DarkTheme from "../../style/theme/DarkTheme";

export const HeaderContainerStyle = styled.header`
  ${({ theme }) =>
    theme.themeId === DarkTheme.themeId
      ? css`
          background-image: url(${BackgroundHeaderImageDarkMode});
        `
      : css`
          background-image: url(${BackgroundHeaderImage});
        `}

  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  margin: 0px;
  height: 35vh;
`;
