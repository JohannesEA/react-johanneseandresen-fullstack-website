import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const Expertise = () => {
  const [fill, setFill] = useState(false);
  const [activateAnimationOne, setActivateAnimationOne] = useState(false);

  const activateAnimations = () => {
    if (window.scrollY >= 790) {
      setActivateAnimationOne(true);
    } else {
      setActivateAnimationOne(false);
    }
  };

  window.addEventListener("scroll", activateAnimations);

  return (
    <Container>
      {/* <Animation ></Animation> */}

      <AnimationBox>
        <AnimationTwo w="80%">
          <TextContainer>
            <Text>Html</Text>
          </TextContainer>
          {activateAnimationOne && <FillContent></FillContent>}{" "}
        </AnimationTwo>
        <AnimationTwo w="70%">
          <TextContainer>
            <Text>Css</Text>
          </TextContainer>{" "}
          {activateAnimationOne && <FillContent></FillContent>}{" "}
        </AnimationTwo>
        <AnimationTwo w="90%">
          <TextContainer>
            <Text>Javascript</Text>
          </TextContainer>{" "}
          {activateAnimationOne && <FillContent></FillContent>}{" "}
        </AnimationTwo>
        <AnimationTwo w="60%">
          <TextContainer>
            <Text>Java</Text>
          </TextContainer>{" "}
          {activateAnimationOne && <FillContent></FillContent>}{" "}
        </AnimationTwo>
        <AnimationTwo w="60%">
          <TextContainer>
            <Text>C++</Text>
          </TextContainer>{" "}
          {activateAnimationOne && <FillContent></FillContent>}{" "}
        </AnimationTwo>
      </AnimationBox>
    </Container>
  );
};

export default Expertise;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
`;

const rotate = keyframes`
    0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(-360deg);
        }
`;

const fill = keyframes`
        0%{
            width: 0%;
            background-color: #032859;
        }
        100%{
            background-color: #032859;
            width: 100%;
        }        
        
        `;

const Animation = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 16px 14px 20px #0000008c;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    background-image: conic-gradient(#ff0052 20deg, transparent 120deg);
    width: 150%;
    height: 150%;
    position: absolute;
    animation: ${rotate} 2s linear infinite;
  }

  &:after {
    content: "Animation";
    width: 190px;
    height: 190px;
    background: #101010;
    position: absolute;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff0052;
    font-size: larger;
    letter-spacing: 5px;
    box-shadow: inset 20px 20px 20px #0000008c;
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
  animation-duration: 1s;
  animation-fill-mode: forwards;
  width: 0%;
`;

const Button = styled.button`
  height: 50px;
  width: 50px;
  background-color: orange;
`;

const TextContainer = styled.div`

`;
const Text = styled.p`
  width: 5em;
  font-size: 1.5rem;
`;
