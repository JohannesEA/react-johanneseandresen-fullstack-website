import { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "../../components/Imageslider";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../redux/apiCalls";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects);

  useEffect(() => {
    getProject(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <Title data-aos="fade-up">Prosjekter</Title>

      <ImageContainer id="projects" data-aos="fade-up">
        <ImageSlider images={projects} slidesToShow={5} />
      </ImageContainer>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  margin-top: 5em;
  flex-direction: column;
  text-align: center;
`;

const ImageContainer = styled.div`
  transition: all 0.3s ease;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  color: #032859;
  transition: all 0.3s ease;
  margin-bottom: 1em;

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;
