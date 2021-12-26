import styled from "styled-components";
import Expertise from "./Expertise";
import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../../components/Footer";

const Home = () => {
    const { width } = getWindowDimensions();
    
    return (
        <Container>
            <Navbar/>
            <Hero/> 
            {width < 800 && <About/>}
            <Education/>
            <Expertise/>   
            <Projects/>
            <Contact/>  
            <Footer/>     
        </Container>
    )
}

export default Home;

const Container = styled.div``;
