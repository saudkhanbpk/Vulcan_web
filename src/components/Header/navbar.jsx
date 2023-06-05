import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { styles, MenuStyle, Span, NavLink } from "./styles";
import "./navbar.scss";
import { styled } from "@mui/system";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const AuthButton = styled("button")(({ theme, signup }) => ({
    borderRadius: "30px",
    border: "1px solid black",
    fontFamily: "Inter, sans-serif",
    fontWeight: 800,
    height: "40px",
    width: "80px",
    background: signup ? theme.palette.primary.main : "#fff",
    color: signup ? "#fff" : theme.palette.secondary,

    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  }));

  const SmNavlink = styled(Typography)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    textTransform: "capitalize",
    textAlign: "center",
  }));
  return (
    <AppBar sx={styles.appBar} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={styles.logo} onClick={navigateToHome} curser="pointer">
            <Span>
              <img src={logo} className=" img-fluid logoImage" alt="" />
            </Span>
          </Box>
          <Span>
            <Typography
              noWrap
              component="a"
              onClick={navigateToHome}
              color="primary"
              sx={styles.logoTypo}
              curser="pointer"
            >
              Vulcan
            </Typography>
          </Span>

          {/* Small Devices */}
          <Box sx={styles.xsLogoMainBox}>
            <Box sx={styles.xsLogo} onClick={navigateToHome}>
              <img src={logo} className=" img-fluid logoImage" alt="" />
            </Box>
            <Typography
              variant="h5"
              noWrap
              onClick={navigateToHome}
              color="primary"
              component="a"
              sx={styles.xsLogoName}
            >
              Vulcan
            </Typography>
          </Box>

          {/* Small Devices */}
          <Box sx={styles.menuIcon}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e)=>handleOpenNavMenu(e)}
              color="inherit"
              curser="pointer"
            >
              <MenuIcon color="primary" />
            </IconButton>
            <MenuStyle
              id="menu-appbar"
              anchorEl={anchorElNav}
              // anchorOrigin={{   vertical: "bottom",   }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.menu}
              PaperProps={{
                className: 'css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper',
                sx: {
                  borderRadius: '20px !important',
                },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ pl: "10px", pr: "10px",}}
              >
                <SmNavlink
                  onClick={() => {
                    navigate("/about");
                    handleCloseNavMenu();
                  }}
                  variant="body2"
                >
                  About
                </SmNavlink>

                <SmNavlink
                  onClick={() => {
                    navigate("/how-it-works");
                    handleCloseNavMenu();
                  }}
                  variant="body2"
                >
                  How it Works
                </SmNavlink>

                <SmNavlink
                  onClick={() => {
                    navigate("/courses");
                    handleCloseNavMenu();
                  }}
                  variant="body2"
                >
                  Courses
                </SmNavlink>

                <SmNavlink
                  onClick={() => {
                    navigate("/become-educator");
                    handleCloseNavMenu();
                  }}
                  variant="body2"
                >
                  Become Educator
                </SmNavlink>
              </Box>

              <Box display="flex" justifyContent="space-around" pt="20px">
                <AuthButton
                  onClick={() => {
                    navigate("/login");
                    handleCloseNavMenu();
                  }}
                >
                  Login
                </AuthButton>

                <AuthButton
                  onClick={() => {
                    navigate("/signup");
                    handleCloseNavMenu();
                  }}
                  signup="true"
                >
                  Sign Up
                </AuthButton>
              </Box>
            </MenuStyle>
          </Box>
          <Box sx={styles.xsMenuBox}>
            <Span onClick={() => navigate("/about")}>
              <NavLink color="secondary">About</NavLink>
            </Span>
            <Span onClick={() => navigate("/how-it-works")}>
              <NavLink color="secondary">How it Works</NavLink>
            </Span>
            <Span onClick={() => navigate("/courses")}>
              <NavLink color="secondary">Courses</NavLink>
            </Span>
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={styles.rightBox}
          >
            <Stack direction="row" spacing={2}>
              <Span onClick={() => navigate("/about")}>
                <NavLink color="secondary"> Become Educator</NavLink>
              </Span>


              <Link as={Link} to="/login">
              <AuthButton>Login</AuthButton>
              </Link>

              <Link as={Link} to="/signup">
                <AuthButton signup="true">Sign Up</AuthButton>
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
