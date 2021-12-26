import styled from "styled-components";
import Expertise from "./Expertise";
import Hero from "./Hero";
const Home = () => {
    return (
        <Container>
            <Hero/> 
            <Expertise/>           
        </Container>
    )
}

export default Home;

const Container = styled.div``;
