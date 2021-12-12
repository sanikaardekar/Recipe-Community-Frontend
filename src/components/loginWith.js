import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/loginWith.css";
import { useFormik } from "formik";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const LoginWith = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  return (
    <div className="loginDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="headings ">Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="textInGreen size-150">Email</Typography>
        </Grid>

        <Grid item xs={12}>
          <input
            className="styledInput"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className="textInGreen size-150">Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            className="styledInput"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            className="styledButtonForL"
            onClick={formik.handleSubmit}
          >
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
