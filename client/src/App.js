import styled from "styled-components";
import Home from "./pages/home/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import { useDispatch, useSelector } from "react-redux";
// import { getContent } from "./redux/apiCalls";

const App = () => {
  AOS.init();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const testAPI = async () => {
  //     try {
  //       const res = await publicRequest.get("api/test");
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   testAPI();
  // }, []);

  return (
    <Container>
      <Home />
    </Container>
  );
};

export default App;

const Container = styled.div``;
