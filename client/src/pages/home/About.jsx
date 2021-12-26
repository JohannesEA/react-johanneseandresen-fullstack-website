import styled, { keyframes } from "styled-components";
import Button from "../../components/Button";
import getWindowDimensions from "../../commonFunctions/Dimentions";

const About = () => {
  const { width } = getWindowDimensions();

  return (
    <Container id="about" >

     <Top>
        {/* <Title>Johannes Erdahl Andresen</Title> */}
        {/* <Logo src="/assets/logos/logo3.png" alt="hero-logo"/> */}


        <Image src="/assets/images/johannes.png" alt="johannes-hero-img"  data-aos="fade-up"/>

        <Text data-aos="fade-up">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>

        <ButtonContainer data-aos="fade-up">
          <Button
            text="Kontakt Meg"
            bc="color-2"
            onClick={() => console.log("Kontakt meg")}
          ></Button>
          <Button
            text="Last ned CV"
            bc="color-1"
            shadow="#e1effc"
            onClick={() => console.log("Last ned CV")}
          ></Button>
        </ButtonContainer>
      </Top>


    </Container>
  );
};

export default About;

const Container = styled.div`
padding: 0 1em;
  transition: all .3s ease;
`;

const Top = styled.div`
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
`;


const ButtonContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
height: auto;
min-width: 15em;
`;

const Logo = styled.img`
max-height: 20em;
min-width: 30em;
`;



const Title = styled.h1`
  font-size: 2.3rem;
  color: #091922;
  transition: all .3s ease;


  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

`;

const Text = styled.p`
  font-size: 1.5rem;
  transition: all .3s ease;


  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

const Bottom = styled.div`
  text-align: center;

`;

const Image = styled.img`
  min-height: 50vh;
  max-height: 60vh;

`;
