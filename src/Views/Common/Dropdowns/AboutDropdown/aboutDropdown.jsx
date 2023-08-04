import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AboutDownArrow,
  IconButtonStyle,
  MenuStyle,
  SmNavlink,
  Span,
} from "./styles";
import { Box } from "@mui/material";

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
