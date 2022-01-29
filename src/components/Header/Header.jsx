import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";

import {
  IoMdMoon,
  IoMdSunny,
  TiWorldOutline,
  RiEnglishInput,
  RiAncientGateLine,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  DiCssdeck,
} from "../../constants/icons";

import { ContextState } from "../../../context/ContextState";
import { norwegian, english } from "../../constants/language";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

import { lightTheme, darkTheme } from "../../themes/default";

const Header = () => {
  const [darkMode, setDarkMode, language, setLanguage] =
    useContext(ContextState);
  //const [language, setLanguage] = useContext(ContextState);

  let textColor = darkMode
    ? darkTheme.colorTheme.primary1
    : lightTheme.colorTheme.primary1;

  const scroll = (amount) => {
    setTimeout(() => {
      window.scrollBy(0, amount);
    }, 350);
  };

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: textColor,
              marginBottom: "20px",
            }}
          >
            <TiWorldOutline size="3.5rem" /> {/* Endre denne kansskje? */}
            <Span>Sindri Mørch Tomasson</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>
              {language ? norwegian.header.projects : english.header.projects}
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>
              {language
                ? norwegian.header.technologies
                : english.header.technologies}
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>
              {language ? norwegian.header.about : english.header.about}
            </NavLink>
          </Link>
        </li>
      </Div2>
      {/* <IconContext.Provider> */}
      <Div3>
        <SocialIcons onClick={() => setLanguage(!language)}>
          {
            (console.log(`Language is: ${language ? "English" : "Norwegian"}`),
            language ? (
              <RiEnglishInput size="3rem" color={textColor} />
            ) : (
              <RiAncientGateLine size="3rem" color={textColor} />
            ))
          }
        </SocialIcons>
        <SocialIcons href="https://github.com/sindrimt" target="_blank">
          <AiFillGithub size="3rem" color={textColor} />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/" target="_blank">
          <AiFillLinkedin size="3rem" color={textColor} />
        </SocialIcons>
        <SocialIcons>
          <AiFillInstagram size="3rem" color={textColor} />
        </SocialIcons>
        <SocialIcons
          onClick={() => {
            setDarkMode(!darkMode);
            scroll(1);
          }}
        >
          {darkMode ? (
            <IoMdSunny size="3rem" color={textColor} />
          ) : (
            <IoMdMoon size="3rem" color={textColor} />
          )}
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
