import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Register = () => {
  return (
    <>
      <Typography style={headings}>Register</Typography>
      <Typography style={text}>Tell us about yourself!</Typography>
      <Typography style={name}>Name</Typography>
      <form style={styledFormForN} />
      <Typography style={email}>Email</Typography>
      <form style={styledFormForE} />
      <Typography style={setPass}>Set Password</Typography>
      <form style={styledFormForSP} />
      <Typography style={confirmPass}>Confirm Password</Typography>
      <form style={styledFormForCP} />
      <Button variant="contained" style={styledButtonForL}>
        Login
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
  float: "Left",
  verticalAlign: "Top",
  fill: "#000000",
  position: "absolute",
  width: "167px",
  height: "60px",
  marginLeft: "98px",
  marginTop: "83px",
};
const text = {
  fontFamily: "Poppins",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: " 25px",
  lineHeight: "37.5px",
  float: "Left",
  color: "#7E84A3",
  position: "absolute",
  //   width: "272px",
  height: "38px",
  marginLeft: "98px",
  marginTop: "136px",
};

const email = {
  fontFamily: "Poppins",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: " 15px",
  lineHeight: "22px",
  color: "#06A561",
  position: "absolute",
  width: "46px",
  height: "23px",
  marginLeft: "98px",
  marginTop: "375px",
};
const setPass = {
  fontFamily: "Poppins",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: " 15px",
  lineHeight: "22px",
  color: "#06A561",
  position: "absolute",

  height: "23px",
  marginLeft: "98px",
  marginTop: "436px",
};
const confirmPass = {
  fontFamily: "Poppins",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: " 15px",
  lineHeight: "22px",
  color: "#06A561",
  position: "absolute",
  height: "23px",
  marginLeft: "98px",
  marginTop: "497px",
};
const name = {
  fontFamily: "Poppins",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: " 15px",
  lineHeight: "22px",
  color: "#06A561",
  position: "absolute",
  width: "46px",
  height: "23px",
  marginLeft: "98px",
  marginTop: "314px",
};
const styledFormForN = {
  position: "absolute",
  width: "272px",
  height: "20px",
  float: "left!important",
  marginLeft: "98px",
  marginTop: "337px",
  backgroundColor: "#E5E5E5",
  borderRadius: "20px",
  boxShadow: "inset 1px 1px 20px rgba(0, 0, 0, 0.25)",
};
const styledFormForE = {
  position: "absolute",
  width: "272px",
  height: "20px",
  float: "left!important",
  marginLeft: "98px",
  marginTop: "398px",
  backgroundColor: "#E5E5E5",
  borderRadius: "20px",
  boxShadow: "inset 1px 1px 20px rgba(0, 0, 0, 0.25)",
};
const styledFormForSP = {
  position: "absolute",
  width: "272px",
  height: "20px",
  float: "left!important",
  marginLeft: "98px",
  marginTop: "459px",
  backgroundColor: "#E5E5E5",
  borderRadius: "20px",
  boxShadow: "inset 1px 1px 20px rgba(0, 0, 0, 0.25)",
};
const styledFormForCP = {
  position: "absolute",
  width: "272px",
  height: "20px",
  float: "left!important",
  marginLeft: "98px",
  marginTop: "520px",
  backgroundColor: "#E5E5E5",
  borderRadius: "20px",
  boxShadow: "inset 1px 1px 20px rgba(0, 0, 0, 0.25)",
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
  marginLeft: "238px",
  marginTop: "591px",
  borderRadius: "20px",
  float: "left",
};
export default Register;
