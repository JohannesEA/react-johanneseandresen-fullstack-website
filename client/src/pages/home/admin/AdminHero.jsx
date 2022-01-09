import { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Input, ButtonContainer, Label } from "./Forms";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import Button from "../../../components/Button";
import LoadingAnimation from "../../../components/LoadingAnimation";
import { updateContent, getContent } from "../../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const AdminHero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const content = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    getContent(dispatch);
  }, [dispatch]);

  const [data, setData] = useState({
    title: "",
    subtitle: "",
    heroImg: "",
    heroCV: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let name = e.target.name;
    const fileName = new Date().getTime + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setImageIsLoading(true);
        switch (snapshot.state) {
          case "paused":
            setImageIsLoading(false);
            break;
          case "running":
            setImageIsLoading(true);
            break;
          default:
            console.log("Defaukt");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData({ ...data, [name]: downloadURL });
          setImageIsLoading(false);
        });
      }
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    updateContent(content[0]._id, data, dispatch);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <Title>Edit Hero Section</Title>

      <Form>
        <Label>Tittel</Label>

        <Input
          type="text"
          name="title"
          placeholder="Tittel.."
          onChange={handleChange}
        />
        <Label>Undertittel</Label>
        <Input
          type="text"
          name="subtitle"
          placeholder="Undertittel.."
          onChange={handleChange}
        />
        <Label>Bilde</Label>
        <Input
          type="file"
          name="heroImg"
          placeholder="Bilde.."
          onChange={handleFileUpload}
        />

        <Label>CV</Label>
        <Input
          type="file"
          name="heroCV"
          placeholder="CV.."
          onChange={handleFileUpload}
        />
        {imageIsLoading && <LoadingAnimation />}

        <ButtonContainer>
          {" "}
          <Button text="Send" bc="color-2" onClick={handleClick} />
        </ButtonContainer>

        {isLoading && <LoadingAnimation />}
      </Form>
    </Container>
  );
};

export default AdminHero;

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
