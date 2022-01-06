import { useState } from "react";
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

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  // const content = useSelector((state) => state.content.contents);
  // const dispatch = useDispatch();
  const [user, setUser] = useState(true);

  // useEffect(() => {
  //     getContent(dispatch);
  // }, [dispatch]);

  AOS.init();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={user ? <AdminHome /> : <Home />} />
      </Routes>
      1
    </Router>
  );
};

export default App;

const Container = styled.div``;
