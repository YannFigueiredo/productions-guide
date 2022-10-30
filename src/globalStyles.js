import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    :root {
        //Colors
        --color-dark: rgb(19, 21, 32);
        --color-mid-dark: rgb(22, 34, 36);
        --color-light: rgb(29, 33, 46);
        --color-emphasis: rgb(255,255, 255);
        --color-main-font: rgb(255, 255, 255);
        --color-secondary-font: rgba(255, 255, 255, 0.71);
        --color-box: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));

        //Spacing
        --horizontal-default-spacing: 25px;
        --vertical-default-spacing: 15px;

        //Font size
        --text-label: 13px;
        --text-span: 16px;
        --text-title: 36px;
        --text-subtitle: 14px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', 'Arial', 'Helvetica', 'sans-serif';
    }

    h1, h2, h3 {
        color: var(--color-main-font);
        font-weight: 700;
    }

    h2{
        font-size: var(--text-title);
    }

    h3{
        font-size: var(--text-subtitle);
    }

    p, span, a {
        font-weight: 400;
        color: var(--color-secondary-font);
        font-size: var(--text-span);
    }

    img {
        max-width: 100%;
    }

    body {
        background-image: radial-gradient(circle, var(--color-light), var(--color-mid-dark), var(--color-dark));
    }

    @media screen and (max-width: 480px) {
        h2{
        font-size: 26px;
    }

    }
`

export default GlobalStyles;