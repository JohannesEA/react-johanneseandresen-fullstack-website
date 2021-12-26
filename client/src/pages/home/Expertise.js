import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const Expertise = () => {
  const [fill, setFill] = useState(false);
  const [activateAnimationOne, setActivateAnimationOne] = useState(false);
  const [activateAnimationTwo, setActivateAnimationTwo] = useState(false);
  const [activateAnimationThree, setActivateAnimationThree] = useState(false);

  const activateAnimations = () => {
    if (window.scrollY >= 40) {
      setActivateAnimationOne(true);
    }  if (window.scrollY >= 250) {
      setActivateAnimationOne(true);
      setActivateAnimationTwo(true);
    }  if (window.scrollY >= 500) {
      setActivateAnimationOne(true);
      setActivateAnimationTwo(true);
      setActivateAnimationThree(true);
    } else {
      setActivateAnimationOne(false);
      setActivateAnimationTwo(false);
      setActivateAnimationThree(false);
    }
  };

  window.addEventListener("scroll", activateAnimations);

  return (
    <Container>
      {/* <Animation></Animation> */}
      <AnimationTwo>
        {(activateAnimationOne || fill) && <FillContent></FillContent>}{" "}
      </AnimationTwo>
      <AnimationTwo>
        {(activateAnimationTwo || fill) && <FillContent></FillContent>}{" "}
      </AnimationTwo>
      <AnimationTwo>
        {(activateAnimationThree || fill) && <FillContent></FillContent>}{" "}
      </AnimationTwo>

      <Button onClick={() => setFill(!fill)}>Click</Button>
    </Container>
  );
};

export default Expertise;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
            background-color: #f06060;

        }
        10%{
            background-color: #f06060;

            width: 10%;
        }
        20%{
            background-color: #f06060;

            width: 20%;
        }
        30%{
            background-color: #f06060;

            width: 30%;
        }
        40%{
            background-color: #f06060;

            width: 40%;
        }
        50%{
            background-color: #f06060;

            width: 50%;
        }
        60%{
            background-color: #f06060;

            width: 60%;
        }
        70%{
            background-color: #f06060;

            width: 70%;
        }
        80%{
            background-color: #f06060;

            width: 80%;
        }
        90%{
            background-color: #f06060;

            width: 90%;
        }
        100%{
            background-color: #f06060;

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

const AnimationTwo = styled.div`
  width: 200px;
  height: 50px;
  background-color: #928d8d;
  transition: all 2s;
`;

const FillContent = styled.div`
  height: 100%;
  animation-name: ${fill};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  width: 0%;
`;

const Button = styled.button`
  height: 50px;
  width: 50px;
  background-color: orange;
`;
