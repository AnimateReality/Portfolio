import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am <br />
        Ronald Chittinappilly
      </SectionTitle>
      <SectionText>
      I am a software developer that loves learning new things and am pretty keen to get stuck into a variety of different things.
      </SectionText>
      <Button onClick={()=> window.location= "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;