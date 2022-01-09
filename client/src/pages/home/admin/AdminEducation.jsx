import { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Input, ButtonContainer, Label } from "./Forms";
import Button from "../../../components/Button";
import LoadingAnimation from "../../../components/LoadingAnimation";
import { addEducation, getEducation } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";

const AdminEducation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getEducation(dispatch);
  }, [dispatch]);

  const [data, setData] = useState({ title: "", area: "", year: "" });

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    addEducation(data, dispatch);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <Title>Edit Education Section</Title>

      <Form>
        <Label>Utdannelse</Label>
        <Input
          type="text"
          name="title"
          placeholder="Studiespesialiserende fag.."
          onChange={handleChange}
        />
        <Input
          type="text"
          name="area"
          placeholder="Nesbru vgs.."
          onChange={handleChange}
        />

        <Input
          type="text"
          name="year"
          placeholder="2013-2016.."
          onChange={handleChange}
        />

        <ButtonContainer>
          <Button text="Send" bc="color-2" onClick={handleClick} />
        </ButtonContainer>

        {isLoading && <LoadingAnimation />}
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
