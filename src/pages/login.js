import React from "react";
import { PRIMARY_GREEN } from "../styles/colorPallete.js";
import LoginWith from "../components/loginWith";
import "../styles/login.css";
import Grid from "@mui/material/Grid";
import Register from "../components/register";
import useMediaQuery from "@mui/material/useMediaQuery";
import CarouselMode from "../components/CarouselMode.js";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
const Login = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="navBar"></div>
      <Grid container>
        <Grid item xs={8} sm={5.5} med={6} lg={6.5}>
          <Router>
            <Routes>
              <Route path="/Register" element={<Register />}></Route>
              <Route path="/" element={<LoginWith />}></Route>
            </Routes>
          </Router>
        </Grid>
        {!matches && (
          <Grid item xs={4} sm={6.5} md={6} lg={5.5}>
            <CarouselMode />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Login;
