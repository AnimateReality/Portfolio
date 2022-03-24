import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am <br />
        Ronald Chittinappilly
      </SectionTitle>
      <SectionText>
      ... and I am a Software Developer. <br/><br/>
      Keep scrolling to learn a bit more about me. 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;