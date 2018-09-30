import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: #f3f3f3;
    text-rendering: optimizeLegibility !important;
    -webkkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  h1, h2, h3, span, p, li, div{
    font-family: 'Source Sans Pro', sans-serif;
  }

`;
