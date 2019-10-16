import React from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";

import { Container, TechList, TechItem } from "./styles";

const techItem = [
  "Node.js",
  "Express",
  "React",
  "React Native",
  "Styled Components",
  "Redux"
];

export default function About() {
  return (
    <Layout center id="about">
      <Title>About</Title>
      <SubTitle>if you want to know who I'm</SubTitle>
      <Container>
        <Paragraph>
          I'm a 25 years old Brazillian, based in Guarapuava Paraná. Who Studies
          Software Engineering at Unicesumar. I have fun with code since
          December 2018, building small projects with HTML, CSS, and JavaScript,
          I invest hours in studies about these topics. I'm a self-taught,
          curious, and committed person. I've been studying Nodejs, React, and
          React Native since April of this year. Beyond programming, I like to
          read, run, talk, study English, and play video games.
        </Paragraph>
        <Paragraph>
          Challenging projects makes my eyes shine and grabs my attention. I
          follow the dilemma, Give me an ask, and I give you a solution.
        </Paragraph>
        <Paragraph>
          Nowadays, I'm available for freelance work with the following
          technologies.
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
