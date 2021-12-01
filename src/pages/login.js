import React from "react";
import { PRIMARY_GREEN } from "../styles/colorPallete.js";
import LoginWith from "../components/loginWith";
import Register from "../components/register";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div style={navBar}></div>
      <Router>
        <Routes>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/" element={<LoginWith />}></Route>
        </Routes>
      </Router>
    </>
  );
};
const navBar = {
  backgroundColor: "#06A561",
  maxWidth: "1440px",
  height: "101px",
};

export default Login;
