import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import { getSkills } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Expertise = () => {
  const [activateAnimationOne, setActivateAnimationOne] = useState(false);
  const { width } = getWindowDimensions();

  const skills = useSelector((state) => state.skill.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    getSkills(dispatch);
  }, [dispatch]);

  const activateAnimations = () => {
    if (width > 400 && window.scrollY >= 580) {
      setActivateAnimationOne(true);
    } else if (width <= 400 && window.scrollY >= 800) {
      setActivateAnimationOne(true);
    } else {
      setActivateAnimationOne(false);
    }
  };

  window.addEventListener("scroll", activateAnimations);

  return (
    <Container id="expertice">
      <Title data-aos="fade-up">Ferdigheter</Title>
      <AnimationBox data-aos="fade-up">
        {skills.map((skill, index) => (
          <AnimationTwo key={index} w={skill.grade}>
            <TextContainer>
              <Text>{skill.title}</Text>
            </TextContainer>{" "}
            {activateAnimationOne && (
              <FillContent bc={skill.color}>{skill.details[0]}</FillContent>
            )}{" "}
          </AnimationTwo>
        ))}
      </AnimationBox>
    </Container>
  );
};

export default Expertise;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  margin: 3em auto;
`;

const fill = keyframes`
        0%{
            width: 0%;
        }
        100%{
            width: 100%;
        }        
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

const AnimationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

const AnimationTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-self: start;
  width: ${(prop) => prop.w};
  align-items: center;
  margin: 1em auto auto 1em;
  height: 30px;
  transition: all 2s;
`;

const FillContent = styled.div`
  height: 100%;
  animation-name: ${fill};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  background-color: ${(prop) => prop.bc};
  width: 0%;
  display: flex;
  align-items: center;
  padding-left: 1em;
  color: white;

  &:before {
    background-color: ${(prop) => prop.bc};
    width: 0%;
  }

  &:after {
    background-color: ${(prop) => prop.bc};
    width: 100%;
  }

  @media (max-width: 8000px) {
    font-size: 0.5rem;
  }
`;

const TextContainer = styled.div``;

const Text = styled.p`
  width: 5em;
  font-size: 1.5rem;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;
