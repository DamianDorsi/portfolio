import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, GridContainer, Img } from '../Projects/ProjectsStyles';
import { certificados } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="projects">
    <SectionTitle main>Certificados de Estudios</SectionTitle>
    <GridContainer>
      {certificados.map((cert, i) => {
        return (
          <BlogCard key={i}>
          <Img src={cert.image} />
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Acomplishments;
