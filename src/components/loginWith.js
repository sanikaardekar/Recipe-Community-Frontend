import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const LoginWith = () => {
  return (
    <>
      <Typography style={headings}>Login</Typography>
      <Typography style={email}>Email</Typography>
      <form style={styledFormForE} />
      <Typography style={password}>Password</Typography>
      <form style={styledFormForP} />
      <Button variant="contained" style={styledButtonForL}>
        Login
        {/* <Typography style={styeledlogin}>Login</Typography> */}
      </Button>
      <Typography style={newUser}>New User?</Typography>
      <Button variant="contained" style={styledButtonForR}>
        <Link to="/Register" style={styledRegister}>
          Register
        </Link>
        {/* <Typography style={styeledlogin}>Login</Typography> */}
      </Button>
    </>
  );
};
const headings = {
  fontFamily: "Poppins",
  fontWeight: "600",
  fontStyle: "normal",
  fontSize: " 40px",
  lineHeight: "60px",
  //   lineHeight: "100%",
  float: "Left",
  verticalAlign: "Top",
  fill: "#000000",
  position: "absolute",
  width: "109px",
  height: "60px",
  marginLeft: "98px",
  marginTop: "83px",
};
const email = {
  fontFamily: "Poppins",
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: " 25px",
  lineHeight: "37.5px",
  color: "#06A561",
  position: "absolute",
  width: "68px",
  height: "38px",
  marginLeft: "98px",
  marginTop: "178px",
};

const password = {
  fontFamily: "Poppins",
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: " 25px",
  lineHeight: "37px",
  color: "#06A561",
  position: "absolute",
  width: "121px",
  height: "38px",
  marginLeft: "98px",
  marginTop: "291px",
};
const styledFormForE = {
  position: "absolute",
  width: "390px",
  height: "40px",
  float: "left!important",
  marginLeft: "98px",
  marginTop: "216px",
  backgroundColor: "#E5E5E5",
  borderRadius: "20px",
  boxShadow: "inset 1px 1px 20px rgba(0, 0, 0, 0.25)",
};

const styledFormForP = {
  position: "absolute",
  width: "390px",
  height: "40px",
  float: "left!important",
  marginLeft: "98px",
  marginTop: "329px",
  backgroundColor: "#E5E5E5",
  borderRadius: "20px",
  boxShadow: "inset 1px 1px 20px rgba(0, 0, 0, 0.25)",
};

const styledRegister = {
  fontFamily: "Poppins",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: " 15px",
  lineHeight: "22px",
  color: "#FFFFFF",
  position: "absolute",
  textDecoration: "none",
  height: "23px",
};

const styledButtonForL = {
  fontFamily: "Poppins",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: " 15px",
  lineHeight: "22px",
  color: "#FFFFFF",
  backgroundColor: "#06A561",
  width: "130px",
  height: "38px",
  marginLeft: "358px",
  marginTop: "411px",
  borderRadius: "20px",
  float: "left",
};
const newUser = {
  fontFamily: "Poppins",
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: " 15px",
  lineHeight: "22.5px",
  float: "Left",
  position: "absolute",
  width: "77px",
  height: "23px",
  marginLeft: "302px",
  marginTop: "491px",
  color: "#000000",
};

const styledButtonForR = {
  display: "flex",
  fontFamily: "Poppins",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: " 15px",
  lineHeight: "22px",
  color: "#FFFFFF",
  backgroundColor: "#06A561",
  width: "100px",
  height: "23px",
  marginLeft: "388px",
  marginTop: "491px",
  borderRadius: "20px",
  position: "relative",
};
export default LoginWith;
