import React from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

import { Container, TechList, TechItem } from "./styles";

const techItem = ["Node.js", "ReactJS", "React Native", "Express.js", "Redux"];

export default function About() {
  return (
    <Layout center id="about">
      <Title>About</Title>
      <Container>
        <Paragraph>
          I'm 20 years old, I live in Brazil, in the countryside of Barra
          Bonita, in São Paulo. I'm currently studying Computer Science at
          UNISAGRADO. I started in the technology area in mid-2016, when I took
          my first Computer Technician course and fell in love. I really like
          the JavaScript ecosystem and today I'm focused on studying Node.js,
          ReactJS and React Native. In my spare time, I like to play multiplayer
          games with my friends, listen to music, program and study English.
        </Paragraph>
        <TechList>
          {techItem.map(tech => (
            <TechItem key={tech}>{tech}</TechItem>
          ))}
        </TechList>
      </Container>
    </Layout>
  );
}
