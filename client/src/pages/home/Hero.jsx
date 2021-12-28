import styled from "styled-components";
import Button from "../../components/Button";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import { Link } from "react-scroll";

const Hero = () => {
  const { width } = getWindowDimensions();

  // const handleDownloadResumme = () => {
  //   alert("Download");
  // };

  return (
    <Container id="hero">
      {width > 800 && (
        <Left>
          <Title>Johannes Erdahl Andresen</Title>
          {/* <Logo src="/assets/logos/logo3.png" alt="hero-logo"/> */}
          <Text>
          Jeg er en svært motivert, sosial og pliktoppfyllende ung mann på 24 år som går mitt siste år som dataingeniørstudent ved OsloMet.
          </Text>

          <ButtonContainer>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <Button text="Kontakt Meg" bc="color-2"></Button>{" "}
            </Link>

            <DownloadButton
              href="/assets/files/Johannes-Erdahl-Andresen_CV.pdf"
              download
            >
              Last ned CV
            </DownloadButton>
          </ButtonContainer>
        </Left>
      )}

      {width > 800 && (
        <Right>
          <Image src="/assets/images/johannes.png" alt="johannes-hero-img" />
        </Right>
      )}
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  min-height: 50vh;
  max-height: 80vh;
  padding: 1em;
  transition: all 0.3s ease;

  @media (max-width: 800px) {
    max-height: 30vh;
    min-height: 28vh;
    background: url("/assets/logos/logo1.png") no-repeat center;
    background-size: cover;
    padding: 0px;
  }
`;

const Left = styled.div`
  display: grid;
  padding-top: 8em;
  grid-template-rows: 1.7fr 1.5fr  1.5fr;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  max-width: 15em;
`;

// const Logo = styled.img`
//   max-height: 20em;
//   min-width: 30em;
// `;

const Title = styled.h1`
  font-size: 2.3rem;
  color: #032859;
  transition: all 0.3s ease;
  font-family: 'Licorice', cursive;

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

const Right = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-height: 80vh;
  margin-bottom: 2.5em;
`;

const DownloadButton = styled.a`
  font-size: 1rem;
  font-weight: 500;
  z-index: 1;
  border-radius: .5em;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  background-color: #fff;
  color: #032859;
  padding: 10px 14px;
  box-shadow: 0px 0px 4px 2px #f0f8ff;
  &:hover {
    background-color: #e1f5ff;
    border-radius: 0px;
  }

  @media (max-width: 1000px) {
    padding: 9px 13px;
  }
  @media (max-width: 400px) {
    padding: 8px 12px;
  }
`;

// {
//   /* <a
// href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
// download
// >
// Click to download
// </a> */
// }
