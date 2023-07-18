import React from "react";
import {
 
  IconButton,
  Box,
  Avatar,
 
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/config";
import { AuthButton, MenuStyle, SmNavlink, Span } from "./styles";
import ProfileImg from '../../assets/images/profile.jpg'

const ProfileDropdown = () => {
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
  };
 

  return (
    <div>
      <IconButton
        size="large"
        edge="end"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
          {ProfileImg ? (
        <Avatar alt="Profile" src={ProfileImg} />
      ) : (
        <AccountCircleIcon />
      )}
      </IconButton>
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
          className: "css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper",
          sx: {
            borderRadius: "20px !important",
          },
        }}
      >
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
              navigate("/profile");
              handleClose();
            }}
            variant="body2"
          >
            Profile
          </SmNavlink>
        </Span>
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
        </Box>
        {/* Small Screen */}
        <Box display="flex" justifyContent="space-around" pt="20px">
          <AuthButton signup="true" onClick={handleLogout}>
            Logout
          </AuthButton>
        </Box>
      </MenuStyle>
    </div>
  );
};

export default ProfileDropdown;
