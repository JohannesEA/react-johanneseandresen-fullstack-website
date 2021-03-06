import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Form,
  Input,
  ErrorMessage,
  ConfirmMessage,
  ButtonContainer,
  Label,
} from "./Forms";
import Button from "../../../components/Button";
import LoadingAnimation from "../../../components/LoadingAnimation";
import { addSkill, getSkills } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";

const AdminExpertise = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getSkills(dispatch);
  }, [dispatch]);

  const [data, setData] = useState({
    title: "",
    details: "",
    grade: "",
    color: "",
  });

  const validateInputs = (title, details, grade, color) => {
    if (title === "" || grade === "" || color === "") {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (validateInputs(data.title, data.details, data.grade, data.color)) {
      addSkill(data, dispatch);
      setSuccess(true);
      setError(false);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setError(true);
    setSuccess(false);
  };

  return (
    <Container>
      <Title>Edit Expertise Section</Title>

      <Form>
        <Label>Tittel</Label>
        <Input
          type="text"
          name="title"
          placeholder="Javascript.."
          onChange={handleChange}
        />
        <Label>Detaljer</Label>
        <Input
          type="text"
          name="details"
          placeholder="Reactjs, nodejs.."
          onChange={handleChange}
        />
        <Label>Nivå</Label>
        <Input
          type="text"
          name="grade"
          placeholder="90%.."
          onChange={handleChange}
        />
        <Label>Farge</Label>
        <Input
          type="text"
          name="color"
          placeholder="fff..."
          onChange={handleChange}
        />

        <ButtonContainer>
          <Button text="Send" bc="color-2" onClick={handleClick} />
        </ButtonContainer>

        {isLoading && <LoadingAnimation />}
        {error && <ErrorMessage>Error</ErrorMessage>}
        {success && <ConfirmMessage>Success</ConfirmMessage>}
      </Form>
    </Container>
  );
};

export default AdminExpertise;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 3em;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: black;
`;
