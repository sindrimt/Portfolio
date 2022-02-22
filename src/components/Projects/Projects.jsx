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
  const [darkMode, setDarkMode, language, setLanguage] =
    useContext(ContextState);
  return (
    <Section nopadding id="projects">
      <LargeBreak />
      <SectionDivider />
      <SectionTitle main>
        {language ? norwegian.projects.mainTitle : english.projects.mainTitle}
      </SectionTitle>
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
                  {language ? title : titleEnglish}
                </HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{language ? description : descriptionEnglish}</CardInfo>
              <div>
                <br />
                <TitleContent>
                  {language ? norwegian.projects.stack : english.projects.stack}
                </TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                {!visit ? (
                  console.log("Ingen visit")
                ) : (
                  <ExternalLinks href={visit} target="_blank">
                    {language
                      ? norwegian.projects.server
                      : english.projects.server}
                  </ExternalLinks>
                )}
                <ExternalLinks href={source} target="_blank">
                  {language ? norwegian.projects.code : english.projects.code}
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
