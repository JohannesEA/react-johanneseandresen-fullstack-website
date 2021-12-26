import styled from "styled-components";
// import Button from "../../components/Button";
// import getWindowDimensions from "../../commonFunctions/Dimentions";

const Education = () => {
  // const { width } = getWindowDimensions();



  return (
    <Container id="education">
      <Top>
        <Title data-aos="fade-up">Utdannelse</Title>

        <List>
          <ListPoint data-aos="fade-up"> <ListItem>Studiespesialiserende fag, Nesbru VGS, Asker</ListItem></ListPoint>
          <ListPoint data-aos="fade-up"> <ListItem>Førstegangstjenesten, Luftforsvaret </ListItem></ListPoint>
          <ListPoint data-aos="fade-up"> <ListItem>Ingeniørfag, data, OsloMet</ListItem></ListPoint>
        </List>

      </Top>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  padding: 0 1em;
  margin-top: 2em;
  transition: all 0.3s ease;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;



const Title = styled.h1`
  font-size: 2.3rem;
  color: #091922;
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

const List = styled.ul`
  font-size: 1.5rem;
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

const ListPoint  = styled.li`
margin: 0px auto;
  list-style-type: circle;
    color: #032859;  
    font-size: 2rem;  

    @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

const ListItem  = styled.a`
    color: black;    
    font-size: 1.5rem;  

    @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

