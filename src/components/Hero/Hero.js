import React, { useContext } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

import { ContextState } from "../../../context/ContextState";
import { norwegian, english } from "../../constants/language";

const Hero = () => {
  const [language, setLanguage, darkMode, setDarkMode] =
    useContext(ContextState);
  // Så cursed at darkMode aktiverer language, men heyy is work
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle>
          <br />
          {darkMode
            ? norwegian.hero.sectionTitle[0]
            : english.hero.sectionTitle[0]}
          <br />
          {darkMode
            ? norwegian.hero.sectionTitle[1]
            : english.hero.sectionTitle[1]}
        </SectionTitle>
        <SectionText>
          {darkMode ? norwegian.hero.sectionText : english.hero.sectionText}
        </SectionText>
        <Button onClick={() => console.log("asdasd " + language)}>
          {darkMode ? norwegian.hero.buttonText : english.hero.buttonText}
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
