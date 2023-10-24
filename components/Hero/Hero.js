"use-client"

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        ActsCloud
      </SectionTitle>
      <SectionText>
        The purpose of ActsCloud is to help local developers take on the growing tech industry while building innovative and industry changing technologies.
      </SectionText>
      {/* <Button onClick={props.handleClick}>Learn More</Button>*/}
    </LeftSection>
  </Section>
);

export default Hero;