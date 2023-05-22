import React from "react";
import "./header.scss";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/material';
import  Grid  from '@mui/material/Unstable_Grid2';
import logo from '../../assets/images/Logo.png'
import { Button } from '@mui/material';
 import { specialFont } from './../../Theme/fontFamily';
 import { Hidden } from '@material-ui/core';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
  },
}));


const Header = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };


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
  const flexBoxx={
    display:"flex"
  }
  const logombl={
    display: "flex",
  }
  const toobarbor={
    width: {xs: 0 , sm : 0 , md: 700},
    border: "1px solid red"
  }
  return (
    
    <div >
      <AppBar position="static" style={navstyle}>
        <Toolbar style={toobarbor} xs={0} md={8}>
        <Typography variant="h6" className={classes.title}>
        <Hidden  mdUp >
        <Grid style={logombl}>
            <img src={logo} alt="Logo" className={classes.logo} />
            <Typography
            variant="h4"
            noWrap
            href="/"
            style={logostyle}
            sx={{ fontFamily: `${specialFont} !important` }}
          >
            VulCan
          </Typography>
          </Grid>
          </Hidden>

          </Typography>
          {isMobile ? (
          <IconButton
            edge="end"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="black"
          >
            <MenuIcon />
          </IconButton>
          ) : (
            <Box style={flexBoxx}>
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
          </Box>
            )}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerClose}
          >
            <div
              className={classes.drawer}
              role="presentation"
              onClick={handleDrawerClose}
              onKeyDown={handleDrawerClose}
            >
              <List>
                <ListItem button>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="How it work" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Courses" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Become an Educator" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Log In" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Sign Up" />
                </ListItem>
              </List>
            </div>
          </Drawer>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
