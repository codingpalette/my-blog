import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset};
  @font-face { font-family: 'RIDIBatang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff'); font-weight: normal; font-style: normal; }
  html{font-size:16px;}
  body{background:#fafafa;}
  body *{font-family:RIDIBatang; color:#333;}
  a{text-decoration:none;}
  button{background:none; border:none; outline:none; cursor:pointer; padding:0;}
  .max_box{max-width:1230px; margin:0 auto; padding:0 15px; box-sizing:border-box;}
  .clearfix:after{content:''; display:block; clear:both;}
  

`;

export default GlobalStyles;
