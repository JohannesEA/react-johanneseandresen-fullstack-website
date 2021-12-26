import styled, { keyframes } from "styled-components";
import Button from "../../components/Button";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import {IMAGES} from "../../data/data";
import ImageSlider from "../../components/Imageslider";


const Projects = () => {
  const { width } = getWindowDimensions();

  return (


    <Container >
        <ImageSlider images={IMAGES} slidesToShow={5} />
      </Container>
  );
};

export default Projects;

const Container = styled.div`
    margin-top: 5em;
    padding: 2em 0;
    transition: all .3s ease;
`;

