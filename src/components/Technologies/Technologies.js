import React from 'react';
import { DiMongodb, DiNodejs, DiReact, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider />
  <SectionTitle main>Technologies</SectionTitle>
  <SectionText>
    I've focused mainly on web development so far. The MERN stack is my preffered method of development and I've outlined some of the technologies that
    I have experience using below.  
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
          Bootstrap<br/>
          Material UI<br/>

        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejs size="3rem" />
      <ListContainer>
        <ListTitle>Backend</ListTitle>
        <ListParagraph>
          Node<br/>
          Express
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
      <DiCode size="3rem" />
      <ListContainer>
        <ListTitle>Others - Testing, Devops etc.</ListTitle>
        <ListParagraph>
          GitHub, Docker, Jest, Github Actions, Codecov
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionTitle>Team Collaboration</SectionTitle>
  <SectionText>

    I get along well with my peers and have experience
    with working alongside other developers, UX/UI designers and project leads for many of the projects I've worked on.
  </SectionText>
  </Section>
);

export default Technologies;
