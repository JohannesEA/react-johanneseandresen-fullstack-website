import styled from "styled-components";
import getWindowDimensions from "../../../commonFunctions/Dimentions";
import AdminHero from "./AdminHero";
import AdminEducation from "./AdminEducation";
import AdminExpertise from "./AdminExpertise";

const AdminHome = () => {
  const { width } = getWindowDimensions();

  return (
    <Container>
      <AdminHero />
      <AdminEducation />
      <AdminExpertise />
    </Container>
  );
};

export default AdminHome;

const Container = styled.div``;
