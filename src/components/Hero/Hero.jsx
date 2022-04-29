import React, { useContext, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

import { ContextState } from "../../../context/ContextState";
import { norwegian, english } from "../../constants/language";

const Hero = () => {
  const [darkMode, setDarkMode, language, setLanguage] = useContext(ContextState);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle data-aos="fade-right" data-aos-delay="200">
          <br />
          {language ? norwegian.hero.sectionTitle[0] : english.hero.sectionTitle[0]}
          <br />
          {language ? norwegian.hero.sectionTitle[1] : english.hero.sectionTitle[1]}
        </SectionTitle>
        <SectionText data-aos="fade-left" data-aos-delay="800">
          {language ? norwegian.hero.sectionText : english.hero.sectionText}
        </SectionText>
        <form role="search" method="get" action="" target="_blank">
          <Button
            data-aos="fade-left"
            data-aos-delay="1000"
            onClick={(e) => {
              e.preventDefault();
              window.open("/resume.pdf", "_blank");
            }}
          >
            {language ? norwegian.hero.buttonText : english.hero.buttonText}
          </Button>
        </form>
      </LeftSection>
    </Section>
  );
};

export default Hero;
