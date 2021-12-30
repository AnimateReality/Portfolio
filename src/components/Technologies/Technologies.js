import React from 'react';
import { DiFirebase, DiMongodb, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with yada yada yada
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Frontend</ListTitle>
        <ListParagraph>
          Expereince with <br/>
          React
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejs size="3rem" />
      <ListContainer>
        <ListTitle>Backend</ListTitle>
        <ListParagraph>
          Expereince with <br/>
          Node
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiMongodb size="3rem" />
      <ListContainer>
        <ListTitle>Databases</ListTitle>
        <ListParagraph>
          Expereince with <br/>
          MongoDB
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
