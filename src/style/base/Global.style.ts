import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.colors.secondaryColor};
        padding: 0px;
        margin: 0px;
        font-family: ${({ theme }) => theme.font.fontFamily};
    }
`;
