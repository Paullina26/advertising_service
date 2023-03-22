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
  }

  a, button {
    font-family: 'Signika', sans-serif;
  }
`;
