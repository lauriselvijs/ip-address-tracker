import { createGlobalStyle } from "styled-components";
import darkTheme from "../theme/Dark";
import { color } from "./Colors.style";
import { font } from "./Font.style";

export const GlobalStyle = createGlobalStyle`
  ${font}

  :root {
    --color-primary: ${color.primary};
    --color-primary-dark: ${color.primaryDark};
    --color-secondary: ${color.secondary};
    --color-secondary-light: ${color.secondaryLight};
    --color-secondary-dark: ${color.secondaryDark};
    --color-shimmer-bg: ${color.shimmerBg};
    --color-shimmer: ${color.shimmer};
    --color-white: ${color.white};
    --color-black: ${color.black};
  }

  .${darkTheme.name}{
    --color-primary: ${darkTheme.color.primary};
    --color-primary-dark: ${darkTheme.color.primaryDark};
    --color-secondary: ${darkTheme.color.secondary};
    --color-secondary-light: ${darkTheme.color.secondaryLight};
    --color-secondary-dark: ${darkTheme.color.secondaryDark};
    --color-shimmer-bg: ${darkTheme.color.shimmerBg};
    --color-shimmer: ${darkTheme.color.shimmer};
  }

  :root {
    --button-bg-color: ${({ theme }) => theme.color.secondary};
    --button-border-radius: 10px;
    --button-font-size: ${({ theme }) => theme.font.size.large};
    --button-hover-bg-color: ${({ theme }) => theme.color.primary};
    --button-hover-text-color: ${({ theme }) => theme.color.primaryDark};
    --button-padding: 16px 32px;
    --button-text-color: ${({ theme }) => theme.color.primary};
    --button-font-weight: ${({ theme }) => theme.font.weight.bold};

  }

  body {
    padding: 0;
    margin: 0;

    background-color: ${({ theme }) => theme.color.secondary};
    font-family: ${({ theme }) => theme.font.family};
  }
`;
