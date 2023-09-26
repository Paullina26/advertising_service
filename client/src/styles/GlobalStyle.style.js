import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
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
    overflow-x: hidden;
    width: 100vw;
  }

  a, button {
    font-family: 'Signika', sans-serif;
  }
`;
