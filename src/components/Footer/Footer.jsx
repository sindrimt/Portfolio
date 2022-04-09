import React, { useContext } from "react";
/* import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"; */
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "../../constants/icons";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Divider,
} from "./FooterStyles";

import { lightTheme, darkTheme } from "../../themes/default";
import { SocialIcons } from "../Header/HeaderStyles";
import { ContextState } from "../../../context/ContextState";

const Footer = () => {
  const [darkMode, setDarkMode, language, setLanguage] =
    useContext(ContextState);
  let textColor = darkMode
    ? darkTheme.colorTheme.primary1
    : lightTheme.colorTheme.primary1;
  return (
    <>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>{language ? "Telefon" : "Call"}</LinkTitle>
            <LinkItem href="tel:111-111-1111">47 24 56 30</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:sindrimt@gmail.com">
              sindrimt@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>
              {language ? "Sindri Mørch Tomasson" : "Sindri Mørch Tomasson"}
            </Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/sindrimt" target="_blank">
              <AiFillGithub size="3rem" color={textColor} />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/" target="_blank">
              <AiFillLinkedin size="3rem" color={textColor} />
            </SocialIcons>
            <SocialIcons href="https://instagram.com/" target="_blank">
              <AiFillInstagram size="3rem" color={textColor} />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
      <Divider />
    </>
  );
};

export default Footer;
