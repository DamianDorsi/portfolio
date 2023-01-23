import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenid@ a  <br />
          mi Portfolio personal
        </SectionTitle>
        <SectionText>
          En este portfolio encontraras una muestra de los proyectos que realice, como asi tambien los certificados de estudio que poseo y las tecnologias que use para crear los mismos. Busco trabajo como FrontEnd Dev trainee.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;