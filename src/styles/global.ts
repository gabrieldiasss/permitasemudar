import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --blue-500: #88CBF8;
        --pink-500: #D8015F;

        --gray-300: #DDDCE2;
        --gray-600: #3D3D3D;
    }

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media(max-width: 400px) {
            font-size: 81.125%;
        }
        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    body {
        height: 100vh;

        -webkit-font-smoothing: antialiased;
        font-family: Poppins;
    }

    h1, strong {
        font-family: 700;
    }

    h2 {
        font-weight: 400;
    }

    span {
        color: var(--pink-500);
    }

    button {
        font-family: Poppins;
        font-weight: 700;

        cursor: pointer;
        border: 0;
        outline: 0;

        padding: 0.8rem 2rem;
        font-size: 2rem;
        border-radius: 0.8rem;
        background-color: var(--blue-500);
        color: #fff;
    }

    a {
        text-decoration: none;
        text-transform: none;
    }
`