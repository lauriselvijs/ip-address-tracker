import { createGlobalStyle } from "styled-components";
import { defaultTheme, darkTheme } from "../theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${defaultTheme.color.primary};
    --color-primary-light:  ${defaultTheme.color.primaryLight};
    --color-primary-dark: ${defaultTheme.color.primaryDark};
    --color-secondary: ${defaultTheme.color.secondary};
    --color-secondary-light: ${defaultTheme.color.secondaryLight};
    --color-secondary-dark: ${defaultTheme.color.secondaryDark};
    --color-white: ${defaultTheme.color.white};
    --color-black: ${defaultTheme.color.black};
  }

  .${darkTheme.name}{
    --color-primary: ${darkTheme.color.primary};
    --color-primary-light:  ${darkTheme.color.primaryLight};
    --color-primary-dark: ${darkTheme.color.primaryDark};
    --color-secondary: ${darkTheme.color.secondary};
    --color-secondary-light: ${darkTheme.color.secondaryLight};
    --color-secondary-dark: ${darkTheme.color.secondaryDark};
  }

  body {
    padding: 0px;
    margin: 0px;

    background-color: ${({ theme }) => theme.color.secondary};
    font-family: ${({ theme }) => theme.font.family};
  }
`;
