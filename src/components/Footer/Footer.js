import React, { useContext } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
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
} from "./FooterStyles";

import { lightTheme, darkTheme } from "../../themes/default";

import { ContextState } from "../../../context/ContextState";

const Footer = () => {
  const [darkMode, setDarkMode] = useContext(ContextState);
  let textColor = darkMode
    ? darkTheme.colorTheme.primary1
    : lightTheme.colorTheme.primary1;
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">97 45 12 77</LinkItem>
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
          <Slogan>Gamer er episk</Slogan>
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
  );
};

export default Footer;
