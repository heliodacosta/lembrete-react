import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
 --blue-color: #195DA2;
 --blue-dark: #094188;
 --gray-color: #E6E7E2;
 --yellow-color: #FAF493;

 --font-black: #1c1c1c;
 --font-white: #fff:
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
    //1rem = 16px
   @media(max-width: 1080px) {
    font-size: 93.75%; // 1rem = 15 pixels
   }
   @media(max-width: 720px) {
    font-size: 87.5%; // 1rem = 14 pixels
   }
}

`
;