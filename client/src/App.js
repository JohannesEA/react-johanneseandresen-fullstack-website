import styled from 'styled-components';
import Home from './pages/home/Home';
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  AOS.init();


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
      <Home/>

    </Container>
  );
}

export default App;

const Container = styled.div``;
