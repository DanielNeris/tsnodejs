import React from "react";
import {
  FaRegEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaStackOverflow
} from "react-icons/fa";
import Layout from "../../components/Layout";
import Title from "../../components/Title";

import { Container, Link, ContactLink } from "./styles";

export default function Contact() {
  return (
    <Layout center id="contact">
      <Title>Get in touch</Title>
      <Container>
        <Link target="_blank" href="mailto:danielneris01@gmail.com">
          <FaRegEnvelope size={16} />
          danielneris01@gmail.com
        </Link>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5514988347077&text=Hey!%20I%20have%20some%20nice%20projects%20and%20I%20think%20you%20can%20help%20me.%20Can%20we%20talk%3F"
        >
          <FaWhatsapp size={16} />
          Feel free to send me a message.
        </Link>

        <br />

        <p>
          Made with ♥ by{" "}
          <a
            href="https://github.com/DanielNeris"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel de Souza Neris
          </a>
        </p>
        <p>
          Credits by{" "}
          <a
            href="https://github.com/juliomerisio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Julio
          </a>
        </p>
        <p>© Copyright 2020 copyright - All Rights Reserved</p>

        <br />

        <p>
          <ContactLink
            href="https://github.com/DanielNeris"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} color="#000" />
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/danielneris/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} color="#000" />
          </ContactLink>
          <ContactLink
            href="https://stackoverflow.com/users/story/12564237"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow size={24} color="#000" />
          </ContactLink>
        </p>
      </Container>
    </Layout>
  );
}
