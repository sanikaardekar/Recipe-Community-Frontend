import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/loginWith.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const LoginWith = () => {
  return (
    <div className="loginDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="headings">Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="email">Email</Typography>
        </Grid>
        <Grid item xs={12}>
          <form className="styledForm" />
        </Grid>
        <Grid item xs={12}>
          <Typography className="email">Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <form className="styledForm" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" className="styledButtonForL">
            Login
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Typography className="newUser">New User?</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" className="styledButtonForR">
            <Link to="/Register" className="styledRegister">
              Register
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default LoginWith;
