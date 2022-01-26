import React, { useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

import theme from "../themes/default";

import { ThemeProvider } from "styled-components";

/* const darkTheme = theme.darkMode;
const lightTheme = theme.lightMode;

const themes = {
    light: lightMode,
    dark: darkMode,
  }, */

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
