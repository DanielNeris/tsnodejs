import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import Logo from "../assets/logo.png";

export const Container = styled.div`
  height: 10rem;
  width: 100%;
  background: #7159c1;
  display: flex;
  justify-content: space-between;
  position: fixed;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }
  @media ${props => props.theme.mediaQueries.medium} {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  max-width: 200rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 19rem;
  height: 10rem;

  img {
    width: 5rem;
  }

  @media ${props => props.theme.mediaQueries.larger} {
    padding: 0 5rem;
  }
`;

export const StyledLink = styled(Link)`
  outline: 0;
  font-size: 1.4rem;
  font-family: "Lexend Deca", sans-serif;
  transition: all 0.2s;
  cursor: pointer;
  padding: 0 5px;

  color: ${props => props.theme.colors.mainDark};
  &:hover {
    color: ${props => props.theme.colors.main};
  }
`;
export const Navbar = styled.div`
  /* width: 20rem; */
  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
  @media ${props => props.theme.mediaQueries.small} {
    display: none;
  }

  a {
    padding: 0 5px;
  }
`;

export default function Nav() {
  return (
    <Container>
      <Wrapper>
        <StyledLink
          activeClass="active"
          to="home"
          smooth
          spy
          offset={-70}
          duration={700}
        >
          <img width="200" src={Logo} alt="logo" />
        </StyledLink>

        <Navbar>
          <StyledLink
            activeClass="active"
            to="about"
            smooth
            spy
            offset={-70}
            duration={700}
          >
            ABOUT
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="portfolio"
            smooth
            spy
            offset={-70}
            duration={700}
          >
            PORTFOLIO
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="contact"
            smooth
            spy
            offset={-70}
            duration={700}
          >
            CONTACT
          </StyledLink>

          <a
            href="https://github.com/DanielNeris"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/danielneris/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} color="#fff" />
          </a>
          <a
            href="https://stackoverflow.com/users/story/12564237"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow size={24} color="#fff" />
          </a>
        </Navbar>
      </Wrapper>
    </Container>
  );
}
