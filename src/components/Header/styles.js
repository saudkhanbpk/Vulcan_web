import { Menu,Typography,styled} from '@mui/material';
import { specialFont } from "../../Theme/fontFamily";
export const styles = {
  appBar: {
    backgroundColor: "white",
    color: "blue",
    textTransform: "capitalize",
  },
  logo: { display: { xs: "none", md: "flex" }, mr: 0, mb: 0, curser:"pointer" },
  logoTypo: {
    mb: 0,
    display: { xs: "none", md: "flex" },
    fontFamily: `${specialFont} !important`,
    fontSize: "40px",
    fontWeight: 400,
    lineHeight: "51px",
    textDecoration: "none",
  },
  menuIcon: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: { xs: "flex-end" },
  },
  menu: {
    display: { xs: "block", md: "none" },
    // display: { xs: "flex", md: "flex" },
    // justifyContent: {xs:"flex-Start"},
    // alignItems:"center"
  },
  capitalize: { 
    textTransform: "capitalize",
   
 },
  xsLogoMainBox: {
    display: { xs: "flex", md: "none" },
    justifyContent: { xs: "flex-end", md: "none" },
    mr: 1,
   
  },
  xsLogo: {
    display: { xs: "flex", md: "none" },
    alignItems: { xs: "center", md: "none" },
    mr: 1,
  },
  xsLogoName: {
    mr: { xs: 0, md: 2, lg: 2, sm: 0 },
    display: { xs: "flex", md: "none" },
    alignItems: { xs: "center", md: "none" },
    flexGrow: 1,
    fontFamily: `${specialFont} !important`,
    fontWeight: 700,


    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
    
  },
  xsMenuBox: { flexGrow: 1, display: { xs: "none", md: "flex",}, justifyContent:"space-around"  },
  xsNavLinkBtn: {
     ml: 4, border: "none", textTransform: "capitalize" 
    },
  rightBox: { flexGrow: 1, display: { xs: "none", md: "flex" } },
  rightBoxBecomeEdLink: { ml: 2, border: "none", textTransform: "capitalize" },
};

export const MenuStyle = styled(Menu)(({theme})=>({
  [theme.breakpoints.down("sm")]:{
    borderRadius: "30px ",
  }
}))
export const NavLink = styled(Typography)(({ theme }) => ({
  color: "secondary",
  fontSize: "20px !important",
  fontWeight: "bold !important",
  lineHeight: "24px !important",
  }));
export const Span = styled("span")(({ theme }) => ({
  cursor: "pointer",
  display:"flex",
  alignItems:"center"
}));