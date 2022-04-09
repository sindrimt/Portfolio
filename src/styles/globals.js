import React, { useState, useEffect, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
/*     background-image: ${(props) => props.theme.colorTheme.fadeBottom};
 */    scroll-behavior: smooth;
    overscroll-behavior-y: none;
    overflow-x: hidden;
  }
  body {
    
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${({ darkMode }) =>
      darkMode ? "1.6rem" : "1.6rem"};          //1.6rem
    overscroll-behavior-y: none;
    background-image: url(${(props) =>
      '"' + props.theme.colorTheme.backgroundImage + '"'});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  ::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px grey; 
  border-radius: 10px;
  background: ${(props) => props.theme.colorTheme.scrollBackground};
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colorTheme.fadeScroll}; 
  
  border-radius: 10px;
}



`;

export default GlobalStyles;
