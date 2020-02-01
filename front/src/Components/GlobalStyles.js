import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset};
  @font-face { font-family: 'RIDIBatang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff'); font-weight: normal; font-style: normal; }
  html{font-size:16px;}
  body{background-color: #ebf5fc;}
  body *{font-family:RIDIBatang; color:#555;}
  a{text-decoration:none;}
  button{background:none; border:none; outline:none; cursor:pointer; padding:0;}
  .max_box{max-width:1230px; margin:0 auto; padding:0 15px; box-sizing:border-box;}
  .clearfix:after{content:''; display:block; clear:both;}
  .content_box{
    padding: 15px 10px;
    box-sizing: border-box;
    
    @media (prefers-color-scheme: dark) {
      background-color: #1f2023;
    }
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: #131419;
    }
    body *{color:#ddd;}
    .tui-editor-contents *{
      color:#DDD !important;
    }
  }

  input,select{
    border: none;
    background-color: #edf2f7;
    width: 100%;
    display: block;
    padding: 8px 16px;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 15px;
    border-radius: 0;
    &::placeholder {
      color: #4a5568;
    }
    @media (prefers-color-scheme: dark) {
      background-color: #333;
    }
  }


`;

export default GlobalStyles;
