import styled from "styled-components";
import EducationModel from "../../models/education";

const Education = () => {
  const edu3 = new EducationModel("Dataingeniør", "OsloMet", "2019-2022");
  const edu = new EducationModel(
    "Studiespesialiserende fag",
    "Nesbru VGS",
    "2013-2016"
  );
  const edu2 = new EducationModel("Førstegangstjenesten", "Trondheim", "2017");

  const arr = [edu, edu2, edu3];

  console.log(arr);

  return (
    <Container id="education">
      <Top>
        <Title data-aos="fade-up">Utdannelse</Title>

        <List>
          {arr.map((item, index) => (
            <ListPoint key={index} data-aos="fade-up">
              <ListItem>
                {item.name}, {item.area}, {item.year}
              </ListItem>
            </ListPoint>
          ))}
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
  color: #032859;
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

const ListPoint = styled.li`
  margin: 0px auto;
  list-style-type: circle;
  color: #032859;
  font-size: 2rem;

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

const ListItem = styled.a`
  color: black;
  font-size: 1.5rem;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;
