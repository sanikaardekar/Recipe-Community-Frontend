import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
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
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .max(30, "Exceeded maximum charecter length of 30"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Required"),
      setPassword: Yup.string()
        .required("Required")
        .min(8, "Minimum legth for password is 8")
        .max(16, "Exceeded maximum charecter length of 16"),
      confirmPassword: Yup.string()
        .required("Required")
        .min(8, "Minimum legth for password is 8")
        .max(16, "Exceeded maximum charecter length of 16")
        .oneOf([Yup.ref("setPassword"), null], "password does not match"),
    }),
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
              id="name"
              name="name"
              type="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="error">{formik.errors.name}</p>
            ) : null}
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen">Set Password</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              className="styledInput height-20 width-80"
              id="setPassword"
              name="setPassword"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.setPassword}
            />
            {formik.touched.setPassword && formik.errors.setPassword ? (
              <p className="error">{formik.errors.setPassword}</p>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen">Confirm Password</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              className="styledInput height-20 width-80"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="error">{formik.errors.confirmPassword}</p>
            ) : null}
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
