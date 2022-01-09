import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Form,
  Input,
  ButtonContainer,
  Label,
  ErrorMessage,
  ConfirmMessage,
} from "./Forms";
import Button from "../../../components/Button";
import LoadingAnimation from "../../../components/LoadingAnimation";
import { addEducation, getEducation } from "../../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const AdminEducation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const educationUploadError = useSelector(
    (state) => state.education.educations
  );
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getEducation(dispatch);
  }, [dispatch]);

  const [data, setData] = useState({ title: "", area: "", year: "" });

  const validateInputs = (title, area, year) => {
    if (title.length < 1 || area.length < 1 || year.length < 1) {
      setError(true);
      return false;
    } else {
      setError(false);
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
    if (validateInputs(data.title, data.area, data.year)) {
      setIsLoading(true);
      addEducation(data, dispatch);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      if (educationUploadError) {
        setError(true);
      }
      setSuccess(true);
    }
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
        {error && <ErrorMessage>Uploading failed..</ErrorMessage>}
        {success && <ConfirmMessage>Uploading success!</ConfirmMessage>}
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
