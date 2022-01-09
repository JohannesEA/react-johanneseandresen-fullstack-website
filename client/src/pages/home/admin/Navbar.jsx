import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <Container>
      <Link to="hero">
        <MenuLogoText>JEA</MenuLogoText>
      </Link>

      <Menu>
        <Link to="/">
          <Menulink>Hjem</Menulink>
        </Link>
        {user && (
          <Menulink
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logg Ut
          </Menulink>
        )}
      </Menu>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  width: 100%;
  margin: 0 auto;
  z-index: 100;
`;

const animationOne = keyframes`
0%{
  opacity: 0;
},
100%{
  opacity: 1;

}

`;

const animationTwo = keyframes`
0%{
  right: -100%;
},
100%{
  right: 0;
}

`;

const Menu = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
`;

const Menulink = styled.p`
  margin: auto 1.2rem;
  font-size: 1.3rem;
  cursor: pointer;
  color: #032859;

  &:hover {
    color: #04397e;
  }

  @media (max-width: 800px) {
    margin: 1.1rem;
  }
`;

const HamburgerContainer = styled.div`
  margin: auto 1.2rem;

  @media (max-width: 800px) {
    margin: 1.2rem;
  }
`;

const MenuLogoText = styled.h1`
  margin: auto 1.2rem;

  font-size: 1.5rem;
  color: #032859;
  transition: all 0.3s ease;
  font-family: "Licorice", cursive;

  @media (max-width: 800px) {
    font-size: 1.2rem;
    margin: 1.2rem;
  }
`;
