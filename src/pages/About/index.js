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
      <SubTitle>Briefly, if you want to know who I'm</SubTitle>
      <Container>
        <Paragraph>
          I'm 25 years old Brazillian, based in Guarapuava Paraná. Who Studies
          Software Engineering at Unicesumar. I code since December 2018, With
          focus on JavaScript, I invest hours in studies about the topic. I'm
          self taught, curious and commited person. Beyond programming I like to
          read, run, talk and play video games.
          {/* Sou Brasileiro, tenho 25 anos, e moro em Guarapuava no Paraná. Estudo
          Engenharia de Software, pela faculdade Unicesumar. Programo desde
          Dezembro de 2018, Atualmente com foco em javascript, invisto horas em
          estudos sobre o tema. Me considero autodidata, curioso e dedicado
          naquilo que me proponho realizar. Além de programar, gosto de ler,
          praticar corrida, conversar e jogar video game. */}
        </Paragraph>
        <Paragraph>
          Challenging projects makes my eyes shine and grabs my attention. I
          follow the dilema, Give me a ask and i give you a solve.
          {/* Projetos que me desafiam me fazem brilhar os olhos e seguram minha
          atenção. Sigo o dilema, faça-me uma pergunta que eu lhe dou uma
          solução. */}
        </Paragraph>
        <Paragraph>
          Nowadays I'm available for freelance work with the following
          tecnologies.
          {/* Atualmente atuo como freelancer utilizando as tecnologias: */}
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
