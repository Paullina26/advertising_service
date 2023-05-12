import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Signika', sans-serif;
    position: relative;
    background-color: ${({ theme }) => theme.colors.Background};
    color: ${({ theme }) => theme.colors.Font};
  }

  a, button {
    font-family: 'Signika', sans-serif;
  }
`;
