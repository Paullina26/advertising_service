import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    font-family: 'Signika', sans-serif;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    background-color: ${({ theme }) => theme.colors.Background};
    color: ${({ theme }) => theme.colors.Font};
  }

  a, button {
    font-family: 'Signika', sans-serif;
  }
`;
