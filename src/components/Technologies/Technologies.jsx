import React, { useContext, useEffect } from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  ImageContainer,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

import { ContextState } from "../../../context/ContextState";
import { darkTheme, lightTheme } from "../../themes/default";
import { norwegian, english } from "../../constants/language";

const Technologies = () => {
  const [darkMode, setDarkMode, language, setLanguage] =
    useContext(ContextState);

  let iconColor = darkMode
    ? darkTheme.colorTheme.primary1
    : lightTheme.colorTheme.primary1;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle data-aos="fade-right">
        {language ? norwegian.technologies.title : english.technologies.title}
      </SectionTitle>
      <SectionText>
        {language
          ? norwegian.technologies.mainText
          : english.technologies.mainText}
      </SectionText>
      <List data-aos="fade-left">
        <ListItem>
          <DiReact size="3rem" color={iconColor} />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              {language
                ? norwegian.technologies.frontEndText[0]
                : english.technologies.frontEndText[0]}
              <br />
              {language
                ? norwegian.technologies.frontEndText[1]
                : english.technologies.frontEndText[1]}
            </ListParagraph>
            <ImageContainer>
              {/* <BgAnimation /> */}
              {/* <Model fast /> */}
            </ImageContainer>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase
            size="3rem"
            onClick={() => console.log(darkMode)}
            color={iconColor}
          />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              {language
                ? norwegian.technologies.backEndText[0]
                : english.technologies.backEndText[0]}
              <br />
              {language
                ? norwegian.technologies.backEndText[1]
                : english.technologies.backEndText[1]}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" color={iconColor} />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              {language
                ? norwegian.technologies.uiText[0]
                : english.technologies.uiText[0]}
              <br />
              {language
                ? norwegian.technologies.uiText[1]
                : english.technologies.uiText[1]}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
