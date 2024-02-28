import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --fs-sm: 0.75rem;
        --fs-md: 0.875rem;
        --fs-lg: 1.75rem;

        --fw-regular: 400;
        --fw-bold: 700;

        @media only screen and (min-width: 37.5em) {
            --fs-sm: 1.125rem;
            --fs-md: 0.875rem;
            --fs-lg: 2.5rem;
        }
    }

    body {
        font-family: 'Josefin Sans Variable';
        font-size: var(--fs-sm);
        font-weight: var(--fw-regular);

        color: ${(props) => props.theme.text};

        background-color: ${(props) => props.theme.background};
        background-image: ${(props) =>
          props.theme.name === "light"
            ? "url('/images/bg-mobile-light.jpg')"
            : "url('/images/bg-mobile-dark.jpg')"};
        background-repeat: no-repeat;
        background-size: contain;
    }
`;
