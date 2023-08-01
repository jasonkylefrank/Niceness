import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  p {
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
    /* :hover {
      text-decoration: underline;
    } */
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;