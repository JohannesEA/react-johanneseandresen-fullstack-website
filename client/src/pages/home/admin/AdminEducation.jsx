import { useState } from "react";
import styled from "styled-components";
import getWindowDimensions from "../../../commonFunctions/Dimentions";
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

const AdminEducation = () => {
  const { width } = getWindowDimensions();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({ education: "" });

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Container>
      <Title>Edit Education Section</Title>

      <Form>
        <Label>Utdannelse</Label>
        <Input
          type="text"
          name="education"
          placeholder="Utdannelse, sted, år.."
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

export default AdminEducation;

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
