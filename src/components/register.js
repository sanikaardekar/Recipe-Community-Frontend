import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../styles/loginWith.css";
import "../styles/register.css";
const Register = () => {
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
            <form className="styledForm height-20 width-80" />
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen ">Email</Typography>
          </Grid>
          <Grid item xs={12}>
            <form className="styledForm height-20 width-80" />
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen">Set Password</Typography>
          </Grid>
          <Grid item xs={12}>
            <form className="styledForm height-20 width-80" />
          </Grid>
          <Grid item xs={12}>
            <Typography className="textInGreen">Confirm Password</Typography>
          </Grid>
          <Grid item xs={12}>
            <form className="styledForm height-20 width-80" />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className="styledButtonForL width-80 marginR"
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
