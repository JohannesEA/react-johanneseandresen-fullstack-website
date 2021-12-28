import styled from "styled-components";

const IconBox = ({ src, alt, text, title }) => {
  return (
    <Container>
      <ImageContainer>
      <Image src={src} alt={alt} />
      </ImageContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default IconBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-height: 20em;
  max-width: 20em;
  margin: 0 auto;
  color: var(--color-3);

  &:hover{
    color: black;
  }

`;

const ImageContainer = styled.div`
  display: flex;
  border-radius: .5em .5em 0 0;
`;

const Image = styled.img`
max-height: 10em;
max-width: 10em;
border-radius: .5em .5em 0 0;

@media (max-width: 800px){
    max-height: 8em;
    max-width: 8em;

}

@media (max-width: 400px){
    max-height: 6em;
    max-width: 6em;
}

@media (max-width: 350px){
    max-height: 4em;
    max-width: 4em;
}

@media (max-width: 300px){
    max-height: 2em;
    max-width: 2em;
}
  
`;

const Text = styled.p`
  font-size: 1rem;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;


const Title = styled.h1`
  font-size: 1.2rem;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;