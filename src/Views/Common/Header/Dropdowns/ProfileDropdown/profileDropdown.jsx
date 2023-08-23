import React from "react";
import { IconButton, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../../../Infrastructure/config";
import { AuthButton } from "./styles";
import "./styles.css";
import { Nav } from "react-bootstrap";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    auth.signOut();
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/account"
    ) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <IconButton
            size="large"
            edge="end"
            aria-controls="profile-menu"
            aria-haspopup="true"
          >
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className="dropdown-content">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/dashboard" className="menuitems">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/account" className="menuitems">
              Account
            </Nav.Link>
          </Nav>
          <Box display="flex" justifyContent="center" py="10px">
            <AuthButton signup="true" onClick={handleLogout}>
              Logout
            </AuthButton>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
