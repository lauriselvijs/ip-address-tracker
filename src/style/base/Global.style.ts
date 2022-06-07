import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('${({ theme }) => theme.font.fontFamilyImportUrl}');

    body{
        padding: 0px;
        margin: 0px;
        font-family: ${({ theme }) => theme.font.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
    }

`;
