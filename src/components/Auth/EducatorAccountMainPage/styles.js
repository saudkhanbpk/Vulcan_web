import { styled } from "@mui/system";
import { specialFont } from "../../../Theme/fontFamily";
import { Box, Button, Typography } from "@mui/material";

export const styles = {
  
  logoTypo: {
    mb: 0,
    display: { xs: "none", md: "flex" },
    fontFamily: `${specialFont} !important`,
    fontSize: "40px",
    fontWeight: 400,
    lineHeight: "51px",
    textDecoration: "none",
  },
};
export const Span = styled("span")(({ theme }) => ({
    cursor: "pointer",
    display:"flex",
    alignItems:"center"
  }));
  export const MainBox = styled(Box)((theme) => ({
    height: "100vh",
    width: "100%",
    paddingTop: "100px",
  }));
  export const Header = styled(Box)((theme) => ({
    height: "70px",
    width: "100%",
    position: "fixed",
    top: 0,
    background: "white",
    zIndex: 50,
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25)", // Add boxShadow for top and bottom shadows
  }));

  export const ContinueButton = styled(Button)((theme) => ({
    borderRadius: "0px",
    textTransform: "capitalize",
    border: "none",
    height: "50px",
  }));
  export const PreviousButton = styled(Button)((theme) => ({
    borderRadius: "0px",
    textTransform: "capitalize",
    border: "none",
    height: "50px",
  }));

  export const StepsTypo = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    lineHeight: 1.4,

    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  }));

  export const ExitTypo = styled(Typography)(({ theme }) => ({
    curser: "pointer",
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      // padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  }));

  export const LogoTypo = styled(Typography)(({ theme }) => ({
    fontFamily: `${specialFont} !important`,
    fontWeight: 400,
    // margin:theme.spacing(2),
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  }));
  export const Footer = styled(Box)(({ theme }) => ({
    height: "80px",
    width: "100%",
    position: "fixed",
    bottom: "0px",
    boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.25)",
    background: "white",
  }));