import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset};
  @font-face { font-family: 'RIDIBatang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff'); font-weight: normal; font-style: normal; }
  html{font-size:16px;}
  body{background-color: #efeeee;}
  body *{font-family:RIDIBatang; color:#222;}
  a{text-decoration:none;}
  button{background:none; border:none; outline:none; cursor:pointer; padding:0;}
  .max_box{max-width:1230px; margin:0 auto; padding:0 15px; box-sizing:border-box;}
  .clearfix:after{content:''; display:block; clear:both;}
  .content_box{
    padding: 20px;
    box-sizing: border-box;
    border-radius:30px;
    background-color: #efeeee;
    box-shadow:  6px 6px 12px #cbcaca, 
             -6px -6px 12px #ffffff;
    @media (prefers-color-scheme: dark) {
      background-color: #262a3c;
      box-shadow:  4px 4px 7px #171924,  -2px -2px 5px #353b54;
    }
    
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: #262a3c;
    }
    body *{color:#ddd;}
    .tui-editor-contents *{
      color:#DDD !important;
    }
  }
  select { appearance:none }
  input,select{
    display:block;
    width:100%;
    height:40px;
    outline:none;
    border:none;
    box-sizing:border-box;
    padding:5px 15px;
    background-color:transparent;
  }

  .input_box{
    margin-bottom: 15px;
    border-radius: 40px;
    background-color: #efeeee;
    box-shadow: inset 4px 4px 8px #cbcaca, inset -4px -4px 8px #ffffff;
    @media (prefers-color-scheme: dark) {
      background-color: #262a3c;
      box-shadow: inset 4px 4px 7px #171924, inset -2px -2px 5px #353b54;
    }
  }





`;

export default GlobalStyles;
