import styled, { keyframes } from "styled-components";
import { useState } from "react";
import getWindowDimensions from "../../commonFunctions/Dimentions";

const Expertise = () => {
  const [activateAnimationOne, setActivateAnimationOne] = useState(false);
  const { width } = getWindowDimensions();


  const activateAnimations = () => {
    if (width > 400 && window.scrollY >= 790) {
      setActivateAnimationOne(true);
    } 
    else if (width <= 400 && window.scrollY >= 1020) {
      setActivateAnimationOne(true);
    } 
    
    else {
      setActivateAnimationOne(false);
    }
  };

  window.addEventListener("scroll", activateAnimations);

  return (
    <Container id="expertice">
      {/* <Animation ></Animation> */}
<Title data-aos="fade-up">Ferdigheter</Title>
{/* <Undertitle data-aos="fade-up">Foretrukne språk</Undertitle> */}

      <AnimationBox data-aos="fade-up">
      <AnimationTwo w="90%">
          <TextContainer>
            <Text>Javascript</Text>
          </TextContainer>{" "}
          {activateAnimationOne && <FillContent>React</FillContent>}{" "}
        </AnimationTwo>
        <AnimationTwo w="80%">
          <TextContainer>
            <Text>Java</Text>
          </TextContainer>{" "}
          {activateAnimationOne && <FillContent>Spring</FillContent>}{" "}
        </AnimationTwo>
        <AnimationTwo w="80%">
          <TextContainer>
            <Text>C#</Text>
          </TextContainer>{" "}
          {activateAnimationOne && <FillContent>.NET</FillContent>}{" "}
        </AnimationTwo>
        <AnimationTwo w="70%">
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
        <AnimationTwo w="60%">
          <TextContainer>
            <Text>Python</Text>
          </TextContainer>{" "}
          {activateAnimationOne && <FillContent>Django</FillContent>}{" "}
        </AnimationTwo>
        <AnimationTwo w="50%">
          <TextContainer>
            <Text>Flutter</Text>
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
  height: auto;
margin: 3em auto;
`;

// const rotate = keyframes`
//     0%{
//             transform: rotate(0deg);
//         }
//         100%{
//             transform: rotate(-360deg);
//         }
// `;

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

const Title = styled.h1`
font-size: 2.3rem;
color: #091922;
transition: all 0.3s ease;

@media (max-width: 1000px) {
  font-size: 1.8rem;
}
`;

// const Animation = styled.div`
//   width: 200px;
//   height: 200px;
//   box-shadow: 16px 14px 20px #0000008c;
//   border-radius: 10px;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:before {
//     content: "";
//     background-image: conic-gradient(#ff0052 20deg, transparent 120deg);
//     width: 150%;
//     height: 150%;
//     position: absolute;
//     animation: ${rotate} 2s linear infinite;
//   }

//   &:after {
//     content: "Animation";
//     width: 190px;
//     height: 190px;
//     background: #101010;
//     position: absolute;
//     border-radius: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #ff0052;
//     font-size: larger;
//     letter-spacing: 5px;
//     box-shadow: inset 20px 20px 20px #0000008c;
//   }
// `;

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
  width: 0%;
  display: flex;
  align-items: center;
  padding-left: 1em;
  color: white;

  @media (max-width: 8000px) {
    font-size: .5rem;
  }

`;

// const Button = styled.button`
//   height: 50px;
//   width: 50px;
//   background-color: orange;
// `;

const TextContainer = styled.div`

`;
// const Undertitle = styled.p`
//   font-size: 1.5rem;
// `;

const Text = styled.p`
  width: 5em;
  font-size: 1.5rem;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;
