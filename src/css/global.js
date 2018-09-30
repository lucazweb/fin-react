import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: #333;
    text-rendering: optimizeLegibility !important;
    -webkkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

`;
