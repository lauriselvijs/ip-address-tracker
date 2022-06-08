import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0px;
        margin: 0px;
        font-family: ${({ theme }) => theme.font.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
    }

`;
