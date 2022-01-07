import styled from "styled-components";
import { Link } from "react-scroll";
import {
  AiOutlineCopyrightCircle,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import getWindowDimensions from "../commonFunctions/Dimentions";
import { Link as DomLink } from "react-router-dom";

const Footer = () => {
  const { width } = getWindowDimensions();
  return (
    <Container>
      <Top>
        <Right>
          <SocialLink
            onClick={() =>
              (window.location.href = "https://github.com/JohannesEA")
            }
          >
            <AiOutlineGithub fontSize={30} />
          </SocialLink>
          <SocialLink
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/johannes-erdahl-andresen-2aa117205/")
            }
          >
            <AiOutlineLinkedin fontSize={30} />
          </SocialLink>
        </Right>
        {width > 800 && (
          <Left>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <Image src="/assets/logos/logo1.png" alt="footer-img" />{" "}
            </Link>
          </Left>
        )}
      </Top>

      <Bottom>
        <BottomLeft>
          <Text>johanneseandresen.no</Text>&nbsp;
          <AiOutlineCopyrightCircle fontSize={15} />
          &nbsp;<Text>2021</Text>
        </BottomLeft>

        <BottomRight>
          {" "}
          <DomLink to="/admin">
            {" "}
            <Text>Admin</Text>
          </DomLink>
        </BottomRight>
      </Bottom>
      {/* <Bottom3></Bottom3> */}
    </Container>
  );
};

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
  height: 42vh;
`;

const Image = styled.img`
  max-height: 40vh;
`;

const Left = styled.div`
  background-color: #032859;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const Right = styled.div`
  background-color: #032859;
  width: 50%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

const SocialLink = styled.div``;
const Bottom = styled.div`
  background-color: #0248a3;
  height: 5vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const BottomLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 1em;
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 1em;
`;

const Text = styled.p`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
`;
