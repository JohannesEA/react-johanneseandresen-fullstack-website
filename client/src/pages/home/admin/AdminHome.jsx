import styled from "styled-components";
import AdminHero from "./AdminHero";
import AdminEducation from "./AdminEducation";
import AdminExpertise from "./AdminExpertise";
import AdminProjects from "./AdminProjects";
import Navbar from "./Navbar";
import Footer from "../../../components/Footer";

const AdminHome = () => {
  return (
    <Container>
      <Navbar />
      <AdminHero />
      <AdminEducation />
      <AdminExpertise />
      <AdminProjects />
      <Footer />
    </Container>
  );
};

export default AdminHome;

const Container = styled.div``;
