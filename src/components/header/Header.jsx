import React from "react";
import "./header.scss";
import logo from "../../assets/images/Logo.png";
import Button from "@mui/material/Button";
import { specialFont } from "./../../Theme/fontFamily";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  const navstyle = {
    background: "white"
  };
  const logostyle = {
    color: "blue",
    fontStyle: "Audi",
    fontSize: "35px"
  };
  const headingText = {
    color: "black",
    fontSize: "20px",
    marginLeft: "10px",
    borderRadius: "100px",
    width: "150px",
    display: "flex",
    justifyContent: "center",
    padding: "5px",
    cursor: "pointer"
  };
  const log = {
    marginLeft: "40px"
  };
  const toobar = {
    width: "35%",
    display: "flex",
    justifyContent: "end",
    alignItems: "center"
  };
  const becometext = {
    color: "black",
    fontSize: "20px",
    marginLeft: "10px",
    borderRadius: "100px",
    display: "flex",
    marginRight: "10px",
    justifyContent: "center",
    padding: "5px",
    cursor: "pointer"
  };
  const lginbtn = {
    fontsize: "16px",
    color: "black",
    fontWeight: "bold",
    marginRight: "10px",
    width: "85px"
  };
  const signbtn = {
    fontsize: "16px",
    color: "white",
    fontWeight: "bold",
    width: "85px",
    backgroundColor: "blue"
  };
  const linkbox = {
    display: "flex",
    width: "80%",
    alignItems: "center"
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={navstyle}>
        <Toolbar>
          <img
            src={logo}
            alt=""
            style={log}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Box style={linkbox}>
            <Typography
              variant="h4"
              noWrap
              href="/"
              style={logostyle}
              sx={{ fontFamily: `${specialFont} !important` }}
            >
              VulCan
            </Typography>
            <Typography variant="h6" noWrap href="/" style={headingText}>
              About
            </Typography>
            <Typography variant="h6" noWrap href="/" style={headingText}>
              How its works
            </Typography>
            <Typography variant="h6" noWrap href="/" style={headingText}>
              Courses
            </Typography>
          </Box>
          <Box style={toobar}>
            <Typography variant="h6" noWrap href="/" style={becometext}>
              Become an Educator
            </Typography>
            <Button style={lginbtn}>Log In</Button>
            <Button style={signbtn}>Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
