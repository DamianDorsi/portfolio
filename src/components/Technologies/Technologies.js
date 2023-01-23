import React from 'react';
import { DiCodeBadge, DiReact, DiIonic } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Estas son las tecnologias aprendidas hasta el momento, y las mismas usadas en mis proyectos.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Librerias</ListTitle>
          <ListParagraph>
            React.js <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodeBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programacion</ListTitle>
          <ListParagraph>
            JavaScript <br />
            HTML5 <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiIonic size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Estilos</ListTitle>
          <ListParagraph>
            CSS <br />
            MUI <br/>
            Tailwind <br/>
            Figma <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
