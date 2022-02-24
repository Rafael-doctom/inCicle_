// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    height: 100%;

    --gray:  hsl(240, 9%, 89%);
    --black: hsl(240, 65, 13%)
}
  ul, li, a{
    list-style: none;
    text-decoration: none;
    text-transform: none;
  }
`;

export default GlobalStyle;