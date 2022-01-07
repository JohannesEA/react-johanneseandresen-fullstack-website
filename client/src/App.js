import { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "./pages/home/Home";
import "aos/dist/aos.css";
import AOS from "aos";
// import { useDispatch, useSelector } from "react-redux";
import AdminHome from "./pages/home/admin/AdminHome.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/home/admin/Login";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "./redux/apiCalls";
import LoadingAnimation from "./components/LoadingAnimation";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const content = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    getContent(dispatch);
  }, [dispatch]);

  AOS.init();

  return (
    <Router>
      {content.length > 0 ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={user ? <AdminHome /> : <Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <Container>
          <LoadingAnimation></LoadingAnimation>
          <p>Laster inn johanneseandresen.no</p>
        </Container>
      )}
    </Router>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 25%;
`;
