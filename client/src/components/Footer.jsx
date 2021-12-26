import styled from "styled-components";
import {Link} from "react-scroll";
const Footer = () => {
    return (
        <Container>
            <Top>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >                <Image src="/assets/logos/logo1.png" alt="footer-img"/> </Link></Top>
           
            <Bottom>Copyright johanneseandresen.no</Bottom>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: white;
margin-top: 3em;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #032859;
width: 100%;
height:  42vh;
`;

const Image = styled.img`
max-height: 40vh;
`;


const Bottom = styled.div`
background-color: #0248a3;
height:  5vh;
width: 100%;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: .8rem;

`;

