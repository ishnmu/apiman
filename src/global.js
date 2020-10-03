import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    body {
        display: flex;
        flex-direction: column;

        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

        height: 100vh;
        margin: 0;
        padding: 0;

        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};

        transition: all 0.25s linear;
    }

    footer {
        bottom: 5%;
        left: 50%;

        font-size: 0.5rem;
        text-align: center;

        a {
            color: ${({ theme }) => theme.color};
        }
    }
`;
