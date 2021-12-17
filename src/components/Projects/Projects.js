import React, { useContext } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  LargeBreak,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

import { ContextState } from "../../../context/ContextState";
import { norwegian, english } from "../../constants/language";

//import kul from "../../../public/assets/kul.gif";

const Projects = ({ theme, setTheme }) => {
  const [language, setLanguage, darkMode, setDarkMode] =
    useContext(ContextState);
  return (
    <Section nopadding id="projects">
      <LargeBreak />
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({
            id,
            image,
            title,
            description,
            tags,
            source,
            visit,
            titleEnglish,
            descriptionEnglish,
          }) => (
            <BlogCard key={id}>
              <Img src={image} />
              {}
              <TitleContent>
                <HeaderThree title>
                  {darkMode ? title : titleEnglish}
                </HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{darkMode ? description : descriptionEnglish}</CardInfo>
              <div>
                <br />
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit} target="_blank">
                  Live Server
                </ExternalLinks>
                <ExternalLinks href={source} target="_blank">
                  Source Code
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
