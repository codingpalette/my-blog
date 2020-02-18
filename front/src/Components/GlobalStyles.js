import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset};
  @font-face { font-family: 'RIDIBatang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff'); font-weight: normal; font-style: normal; }

  body{background-color: #fafafa;  }

  html,body,th,td,input,select,textarea,button {
    font-size:14px;
    line-height:1.5;
    font-family:'RIDIBatang';
    color:#333;
  } 
  a{text-decoration:none; color:#333;}
  button{background:none; border:none; outline:none; cursor:pointer; padding:0;}
  input{
    border: none;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    outline: none;
    border-radius: 0;
    padding:0;
    background-color:transparent;
  }

  select{
    outline:none;
    border:none;
    appearance: none;
    background-color:transparent;
    border-radius:0;
  }

  textarea{
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none; /*remove the resize handle on the bottom right*/
    background-color:transparent;
    border-radius: 0;
    width: 100%;
    display: inline-block;
    padding:0;
  }

  /* @media (prefers-color-scheme: dark) {
    body {
      background-color: #212121;
    }
    body,th,td,input,select,textarea,button{
      color:#fff;
    }
    a{
      color:#fff;
    }

  } */
  .max_box{max-width:1230px; margin-left:auto; margin-right:auto; padding:0 15px; box-sizing:border-box;}
  .clearfix:after{content:''; display:block; clear:both;}
  .content_box{
    padding: 15px 10px;
    box-sizing: border-box;
    
    /* @media (prefers-color-scheme: dark) {
      background-color: #333;
    } */
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }
  

`;

export default GlobalStyles;
