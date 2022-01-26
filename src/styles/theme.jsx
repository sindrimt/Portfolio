import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "./globals";
/* import { darkTheme, lightTheme } from "./globals"; */

import { ContextState } from "../../context/ContextState";

const Theme = ({ children }) => {
  const [darkMode, setDarkMode] = useContext(ContextState);
  /* const { background1: darkBg } = darkTheme;
  const { background1: lightBg } = lightTheme;
  const [testTheme, setTestTheme] = useState(darkBg); */
  //const [darkMode, setDarkMode] = useContext(ContextState);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* <button onClick={() => console.log(testTheme)}>=============</button>
      <button onClick={() => setTestTheme("reddd")}>-------------</button> */}
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
