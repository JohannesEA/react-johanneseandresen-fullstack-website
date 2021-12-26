import styled, { keyframes } from "styled-components";
import { Spiral as Hamburger } from "hamburger-react";
import getWindowDimensions from "../commonFunctions/Dimentions";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
        <Logo src="/assets/logos/logo3.png" alt="nav-logo" />
      </Link>

      {width < 800 && (
        <Hamburger
          label="Show menu"
          size={40}
          toggled={isOpen}
          toggle={setOpen}
        ></Hamburger>
      )}

      {(isOpen || width > 800) && (
        <Menu isOpen={isOpen}>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink>Hjem</Menulink>
          </Link>
     {  width < 800 &&   <Link to="about" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink>Om Meg</Menulink>
          </Link>}
          <Link to="education" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink>Utdannelse</Menulink>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink>Prosjekter</Menulink>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={300}>
            {" "}
            <Menulink>Kontakt Meg</Menulink>{" "}
          </Link>
        </Menu>
      )}
    </Container>
  );
};

export default Navbar;

const navanimation = keyframes`
0%{
right: -100%;
opacity: 0;
}

50%{
    right: -50%;
    opacity: .5;

}
100%{
    right: 0%;
    opacity: 1;

}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8em;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 800px) {
    position: relative;
  }
`;

const Logo = styled.img`
  max-height: 5em;
  justify-self: start;
  margin-left: 20px;
`;

const Menu = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;

  @media (max-width: 800px) {
    z-index: 100;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 70%;
    height: 100vh;
    position: absolute;
    top: 8em;
    left: auto;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  }
`;

const Menulink = styled.p`
  margin: auto 1.2rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #091922;

  &:hover {
    color: #04397e;
  }

  @media (max-width: 800px) {
    margin: 1em auto;
    
  }
`;
