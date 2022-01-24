import React, { useContext } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

import { data } from "../../constants/constants";
import { ContextState } from "../../../context/ContextState";

const Acomplishments = () => {
  const [darkMode, setDarkMode, language, setLanguage] =
    useContext(ContextState);

  return (
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{language ? card.text : card.englishText}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
