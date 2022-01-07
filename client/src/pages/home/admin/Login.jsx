import { useState } from "react";
import styled from "styled-components";
import { Form, Input, ButtonContainer, Label } from "./Forms";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/apiCalls";
import Button from "../../../components/Button";
import Navbar from "./Navbar";

const Login = () => {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Navbar />
      <Title>Login</Title>
      <Form>
        <Label>Brukernavn</Label>
        <Input
          type="text"
          name="username"
          placeholder="Brukernavn.."
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Passord</Label>
        <Input
          type="password"
          name="password"
          placeholder="Passord.."
          onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonContainer>
          <Button text="Send" bc="color-2" onClick={handleLogin} />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3em;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: black;
`;
