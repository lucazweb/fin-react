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
    background: rgb(32, 30, 41);
    text-rendering: optimizeLegibility !important;
    -webkkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  h1, h2, h3, span, p, li, div{
    font-family: 'Source Sans Pro', sans-serif;
  }

  .text-align{
    text-align:center;
  }

  .app-description{
    margin-bottom: 20px;
  }

  .company-site{
    text-decoration:none;
    color: #069;
  }

  .company-site:hover{
    text-decoration: underline;
  }

`;
