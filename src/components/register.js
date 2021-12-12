import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import "../styles/loginWith.css";
import "../styles/register.css";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      setPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="loginDiv">
        <Grid container>
          <Grid item xs={12}>
            <Typography className="headings">Register</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="text">Tell us about yourself!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen ">Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              className="styledInput height-20 width-80"
              id="namw"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen ">Email</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              className="styledInput height-20 width-80"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen">Set Password</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              className="styledInput height-20 width-80"
              id="setPassword"
              name="setPassword"
              type="setPassword"
              onChange={formik.handleChange}
              value={formik.values.setPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen">Confirm Password</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              className="styledInput height-20 width-80"
              id="ConfirmPassword"
              name="ConfirmPassword"
              type="ConfirmPassword"
              onChange={formik.handleChange}
              value={formik.values.ConfirmPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className="styledButtonForL width-80 marginR"
              type="submit"
              onClick={formik.handleSubmit}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Register;
