import RubikBold from "../font/Rubik/Rubik-Bold.woff2";
import RubikMedium from "../font/Rubik/Rubik-Medium.woff2";
import RubikRegular from "../font/Rubik/Rubik-Regular.woff2";

export const font = `
@font-face {
    font-family: Rubik;
    src: url(${RubikBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Rubik;
    src: url(${RubikMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Rubik;
    src: url(${RubikRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
`;
