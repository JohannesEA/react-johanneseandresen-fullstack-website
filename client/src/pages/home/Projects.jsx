import styled, { keyframes } from "styled-components";
import Button from "../../components/Button";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import {IMAGES} from "../../data/data";
import ImageSlider from "../../components/Imageslider";


const Projects = () => {
  const { width } = getWindowDimensions();

  return (
<Container>

  <Title data-aos="fade-up">Mine Prosjekter</Title>

<ImageContainer id="projects" data-aos="fade-up">
        <ImageSlider images={IMAGES} slidesToShow={5} />
      </ImageContainer>


</Container>

  );

};

export default Projects;

const Container = styled.div`
margin-top:5em;
flex-direction: column;
text-align: center;
`;


const ImageContainer = styled.div`
    padding: 2em 0;
    transition: all .3s ease;
`;


const Title = styled.h1`
  font-size: 2.3rem;
  color: #091922;
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;
