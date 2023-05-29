import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import logo from "../../assets/images/Logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "./styles";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Custom Button
  const NavLinksButton = styled(Button)(({ theme }) => ({
    color: "secondary !important",
    fontSize: "20px !important",
    fontWeight: "bold !important",
    lineHeight: "24px !important",
  }));

  return (
    <AppBar sx={styles.appBar} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={styles.logo}>
            <img src={logo} className=" img-fluid logoImage" alt="" />
          </Box>
          <Typography
            noWrap
            component="a"
            href="/"
            color="primary"
            sx={styles.logoTypo}
          >
            Vulcan
          </Typography>

          {/* Small Devices */}
          <Box sx={styles.xsLogoMainBox}>
            <Box sx={styles.xsLogo}>
              <img src={logo} className=" img-fluid logoImage" alt="" />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={styles.xsLogoName}
            >
              Vulcan
            </Typography>
          </Box>

          <Box sx={styles.menuIcon}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.menu}
            >
              <MenuItem
                onClick={() => {
                  navigate("/about");
                  handleCloseNavMenu();
                }}
              >
                <Typography
                  variant="body2"
                  sx={styles.capitalize}
                  textAlign="center"
                >
                  About
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/how-it-works");
                  handleCloseNavMenu();
                }}
              >
                <Typography
                  variant="body2"
                  sx={styles.capitalize}
                  textAlign="center"
                >
                  How it Works
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/courses");
                  handleCloseNavMenu();
                }}
              >
                <Typography
                  variant="body2"
                  sx={styles.capitalize}
                  textAlign="center"
                >
                  Courses
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/become-educator");
                  handleCloseNavMenu();
                }}
              >
                <Typography
                  variant="body2"
                  sx={styles.capitalize}
                  textAlign="center"
                >
                  Become Educator
                </Typography>
              </MenuItem>

              <Box display="flex" justifyContent="space-around">
                <MenuItem>
                  <Button
                    onClick={() => {
                      navigate("/login");
                      handleCloseNavMenu();
                    }}
                    variant="outlined"
                    color="secondary"
                    sx={styles.capitalize}
                  >
                    Log in
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    onClick={() => {
                      navigate("/signup");
                      handleCloseNavMenu();
                    }}
                    variant="contained"
                    sx={styles.capitalize}
                  >
                    SignUp
                  </Button>
                </MenuItem>
              </Box>
            </Menu>
          </Box>

          <Box sx={styles.xsMenuBox}>
            <Link as={Link} to="/about" className="nav_liddd">
              <NavLinksButton
                sx={styles.xsNavLinkBtn}
                variant="text"
                color="secondary"
              >
                About
              </NavLinksButton>
            </Link>
            <Link as={Link} to="/how-it-works" className="nav_liddd">
              <NavLinksButton
                sx={styles.xsNavLinkBtn}
                variant="text"
                color="secondary"
              >
                How it Works
              </NavLinksButton>
            </Link>
            <Link as={Link} to="/courses" className="nav_liddd">
              <NavLinksButton
                sx={styles.xsNavLinkBtn}
                variant="text"
                color="secondary"
              >
                Courses
              </NavLinksButton>
            </Link>
          </Box>

          <Box
            // sx={{ flexGrow: 0 }}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={styles.rightBox}
          >
            <Stack direction="row" spacing={2}>
              <Link as={Link} to="/become-educator" className="nav_liddd">
                <NavLinksButton
                  sx={styles.rightBoxBecomeEdLink}
                  variant="text"
                  color="secondary"
                >
                  Become Educator
                </NavLinksButton>
              </Link>
              <Link as={Link} to="/login" className="nav_liddd">
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={styles.capitalize}
                >
                  Log in
                </Button>
              </Link>

              <Link as={Link} to="/signup" className="nav_liddd">
                <Button variant="contained" sx={styles.capitalize}>
                  SignUp
                </Button>
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
