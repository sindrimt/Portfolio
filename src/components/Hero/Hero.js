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
  const [darkMode, setDarkMode, language, setLanguage] =
    useContext(ContextState);
  // Så cursed at darkMode aktiverer language, men heyy is work
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle>
          <br />
          {language
            ? norwegian.hero.sectionTitle[0]
            : english.hero.sectionTitle[0]}
          <br />
          {language
            ? norwegian.hero.sectionTitle[1]
            : english.hero.sectionTitle[1]}
        </SectionTitle>
        <SectionText>
          {language ? norwegian.hero.sectionText : english.hero.sectionText}
        </SectionText>
        <Button>
          {language ? norwegian.hero.buttonText : english.hero.buttonText}
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
