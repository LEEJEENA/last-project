import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root{
    --vh: 100%;
  }

  * {
  margin:0;
  padding:0;
  font-family: 'Pretendard';
}  
&::-webkit-scrollbar {
  display: none;
}

html,body{
  width:100vw;
  height:auto;
}
body {
  background: #F4F5F7;
  box-sizing: border-box;
  margin: 0 auto;
 /* 모바일 크기 고정 */
 width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: #F4F5F7;
  word-break: break-all;
  @media all and (min-width: 360px) and (max-width: 100vw) {
  body {
    background-color: #F4F5F7;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}
}

#root {
  width: 100%;
  max-width: 425px;
  /* height: 100vh; */
  margin: auto;
  position: relative;
  background-color: #F4F5F7;
  box-shadow: 0px 0px 10px #ccc;
}

/* 여기까지 */


h1 {
  margin: 0;
  font-size: 32px;
}
h2 {
  margin: 0;
  font-size: 28px;
}
h3 {
  margin: 0;
  font-size: 24px;
}
ul {
  list-style: none;
}
p, span {
  margin: 0;
  font-family: 'Pretendard';
}
button {
cursor: pointer;
}
`



export default GlobalStyle;

