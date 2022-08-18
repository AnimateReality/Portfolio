import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Ronald, I'm a <br />
        Software Developer
      </SectionTitle>
      <SectionText>
      I work mainly with web development <br/>
      Keep scrolling to learn more about me. 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;