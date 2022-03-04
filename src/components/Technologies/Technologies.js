import React from 'react';
import { DiFirebase, DiMongodb, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've focused mainly on web development so far. The MERN stack is my preffered method of development and I've outlined some of the technologies that
    I've used below.  
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Frontend</ListTitle>
        <ListParagraph>
          HTML<br/>
          CSS<br/>
          JavaScript<br/>
          React<br/>
          Material UI<br/>

        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejs size="3rem" />
      <ListContainer>
        <ListTitle>Backend</ListTitle>
        <ListParagraph>
          Node
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiMongodb size="3rem" />
      <ListContainer>
        <ListTitle>Databases</ListTitle>
        <ListParagraph>
          MongoDB<br/>
          MySQL

        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiMongodb size="3rem" />
      <ListContainer>
        <ListTitle>Others - Testing, Devops etc.</ListTitle>
        <ListParagraph>
          GitHub, Docker, Jest, Github Actions, Codecov
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionText>
    Apart from this I know that the ability to work with peers is important and this is something that I have experience
    with in developing some of the projects you see on my Github. During my internship I was part of an agile team that worked
    together to achieveproject goals.   
  </SectionText>
  </Section>
);

export default Technologies;
