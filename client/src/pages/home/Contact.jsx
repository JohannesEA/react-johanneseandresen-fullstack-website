import styled from "styled-components";
import { useState } from "react";
import Button from "../../components/Button";
import { send, init } from "emailjs-com";

const Contact = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Request message state => the userrequest that will get validated and sent to our mailbox
  const [requestMessage, setRequestMessage] = useState({
    email: "",
    phonenumber: "",
    title: "",
    message: "",
  });

  const handleSendRequest = (e) => {
    e.preventDefault();
    send(
      "service_c4intou",
      "template_39mbyff",
      requestMessage,
      "user_1fuo6rPChJNJaBBRPrhaQ"
    ).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setConfirmationMessage(
          "Takk for at du ønsker å komme i kontakt med meg. Jeg svarer så fort jeg kan."
        );
      },
      function (error) {
        console.log("FAILED...", error);
        setErrorMessage("Noe gikk galt.");
      }
    );
  };

  const handleChange = (e) => {
    setRequestMessage({ ...requestMessage, [e.target.name]: e.target.value });
  };

  return (
    <Container id="contact">
      <Title data-aos="fade-up">Kontakt</Title>

      <ContactForm
        data-aos="fade-up"
        name="myForm"
        onSubmit={handleSendRequest}
      >
        {/* <Label>Email</Label> */}
        <Input
          type="text"
          placeholder="Epost"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.email}</ErrorMessage> */}

        <Input
          type="text"
          placeholder="Mobilnummer"
          name="phonenumber"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.phonenumber}</ErrorMessage> */}

        <Input
          type="text"
          placeholder="Tittel"
          name="title"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.title}</ErrorMessage> */}

        <TextArea
          type="text"
          placeholder="Melding"
          name="message"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.message}</ErrorMessage> */}

        <Button
          text="Send"
          bc="color-2"
          btnOnClick={handleSendRequest}
        ></Button>
        {confirmationMessage.length > 0 && (
          <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>
        )}

        {errorMessage.length > 0 && 
          <ErrorMessage>{errorMessage}</ErrorMessage>
        }
      </ContactForm>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  background-color: white;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

const Title = styled.h1`
  flex: 1;
  color: black;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2em;
`;

const ContactForm = styled.form`
  flex: 1;
  flex-direction: column;
  text-align: center;
  border-radius: 1em;
  padding: 1em 1em 0 1em;
  background-color: #fff;
  box-shadow: 0px 0px 4px 2px #e1f5ff;
  width: 80%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

// const Label = styled.label`
//   /* align-self: flex-start; */
//   font-size: 20px;
//   color: black;
// `;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  min-height: 4em;
  width: 100%;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #e1f5ff;
`;

const TextArea = styled.textarea`
  flex: 1;
  border: none;
  padding: 5px;
  width: 100%;
  max-width: 100%;
  font-size: 1.2rem;
  min-height: 10em;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
`;
const ConfirmationMessage = styled.p`
  font-size: 1.2rem;
  color: #032859;
`;
