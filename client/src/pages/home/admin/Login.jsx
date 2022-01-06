import { useState } from "react";
import styled from "styled-components";
import {
  Form,
  Input,
  ErrorMessage,
  ConfirmMessage,
  ButtonContainer,
  Label,
} from "./Forms";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/apiCalls";
import Button from "../../../components/Button";
import LoadingAnimation from "../../../components/LoadingAnimation";

const Login = () => {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  //   const { error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
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

        {isLoading && <LoadingAnimation />}
        {/* {error && <ErrorMessage>Error</ErrorMessage>} */}
      </Form>
    </Container>
  );
};

export default Login;

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
