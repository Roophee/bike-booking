import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    font-family: Saira SansSerif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
