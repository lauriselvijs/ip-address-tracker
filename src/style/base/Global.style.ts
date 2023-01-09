import { createGlobalStyle } from "styled-components";
import { defaultTheme, darkTheme } from "../theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${defaultTheme.color.primary};
    --color-primary-dark: ${defaultTheme.color.primaryDark};
    --color-secondary: ${defaultTheme.color.secondary};
    --color-secondary-light: ${defaultTheme.color.secondaryLight};
    --color-secondary-dark: ${defaultTheme.color.secondaryDark};
    --color-shimmer-bg: ${defaultTheme.color.shimmerBg};
    --color-shimmer: ${defaultTheme.color.shimmer};
    --color-white: ${defaultTheme.color.white};
    --color-black: ${defaultTheme.color.black};
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

  body {
    padding: 0px;
    margin: 0px;

    background-color: ${({ theme }) => theme.color.secondary};
    font-family: ${({ theme }) => theme.font.family};
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }
  
  button {
    -webkit-tap-highlight-color: transparent;
  }
`;
