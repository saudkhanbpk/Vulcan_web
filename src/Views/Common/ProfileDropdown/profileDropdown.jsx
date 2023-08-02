import React from "react";
import { IconButton, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Infrastructure/config";
import {
  AuthButton,
  IconButtonStyle,
  MenuStyle,
  SmNavlink,
  Span,
  AboutDownArrow,
} from "./styles";
import "./styles.scss";
import { Nav } from "react-bootstrap";
import useAuthentication from "../../../Infrastructure/States/onAuthStateChange";
import { useDispatch } from "react-redux";
import {
  chooseModalEmailVerify,
  chooseModalLogin,
} from "../../../Infrastructure/States/authModalsSlice";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const { user } = useAuthentication();

  const handleLogout = () => {
    auth.signOut();
  };

  const handleDashboardClick = async () => {
    if (user) {
      if (!user?.emailVerified) {
        dispatch(chooseModalEmailVerify());
      } else {
        
        window.location.href = "/dashboard";
      }
    } else {
      dispatch(chooseModalLogin());
    }
  };
  const handleProfileClick = async () => {
    if (user) {
      if (!user?.emailVerified) {
        dispatch(chooseModalEmailVerify());
      } else {
        window.location.href = "/profile";
      }
    } else {
      dispatch(chooseModalLogin());
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
            {/* <AccountCircleIcon /> */}
          </IconButton>
        </div>
        <div className="dropdown-content">
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              onClick={handleDashboardClick}
              className="menuitems"
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={handleProfileClick}
              className="menuitems"
            >
              Profile
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

export const ProfileDropdownSmallScreen = ({ handleCloseNavMenu }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleLogout = () => {
    auth.signOut();
  };
  const handleClose = () => {
    setAnchorElNav(null);
    handleCloseNavMenu();
  };
  return (
    <>
      <Box>
        <IconButton
          size="large"
          edge="end"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AccountCircleIcon />
        </IconButton>
        <AboutDownArrow theme="secondary" />
      </Box>
      <MenuStyle
        id="menu-appbar"
        anchorEl={anchorElNav}
        keepMounted
        mt={3}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleClose}
        PaperProps={{
          className: "css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper",
          sx: {
            borderRadius: "20px !important",
          },
        }}
      >
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ pl: "10px", pr: "10px" }}
          >
            <Span>
              <SmNavlink
                onClick={() => {
                  navigate("/dashboard");
                  handleClose();
                }}
                variant="body2"
                curser="pointer"
              >
                Dashboard
              </SmNavlink>
            </Span>
            <Span>
              <SmNavlink
                onClick={() => {
                  navigate("/profile");
                  handleClose();
                }}
                variant="body2"
              >
                Profile
              </SmNavlink>
            </Span>
          </Box>
          <Box display="flex" justifyContent="center" pt="20px" pb="10px">
            <AuthButton signup="true" onClick={handleLogout}>
              Logout
            </AuthButton>
          </Box>
        </Box>
      </MenuStyle>
    </>
  );
};

export const AboutDropDown = ({ handleCloseNavMenu }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClose = () => {
    handleCloseNavMenu();
    setAnchorElNav(null);
  };
  return (
    <>
      <div>
        <IconButtonStyle
          size="large"
          edge="end"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AboutDownArrow theme="secondary" />
        </IconButtonStyle>
        <MenuStyle
          id="menu-appbar"
          anchorEl={anchorElNav}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleClose}
          PaperProps={{
            className:
              "css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper",
            sx: {
              borderRadius: "20px !important",
            },
          }}
        >
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ pl: "10px", pr: "10px" }}
            >
              <Span>
                <SmNavlink
                  onClick={() => {
                    navigate("/about");
                    handleClose();
                  }}
                  variant="body2"
                  curser="pointer"
                >
                  Our Mission
                </SmNavlink>
              </Span>
              <Span>
                <SmNavlink
                  onClick={() => {
                    navigate("/");
                    handleClose();
                  }}
                  variant="body2"
                >
                  Admission
                </SmNavlink>
              </Span>
            </Box>
          </Box>
        </MenuStyle>
      </div>
    </>
  );
};
