import React, { useContext } from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
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
import BgAnimation from "../../../src/components/BackgrooundAnimation/BackgroundAnimation";
import { darkTheme, lightTheme } from "../../../src/themes/default";

import Model from "../Threejs/Model";

const Technologies = () => {
  const [darkMode, setDarkMode] = useContext(ContextState);

  let iconColor = darkMode
    ? darkTheme.colorTheme.primary1
    : lightTheme.colorTheme.primary1;

  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore cum
        obcaecati quas ipsum, debitis reiciendis dolorum. Temporibus a
        architecto dolor!
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" color={iconColor} />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              With React.js
            </ListParagraph>
            <ImageContainer>
              {/* <BgAnimation /> */}
              <Model fast />
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
              Experience With <br />
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" color={iconColor} />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              Figma balles
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
