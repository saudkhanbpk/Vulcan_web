import {
  Box,
  Typography,  
  styled,
} from "@mui/material";
export const styles = {
  main: {
    height: "100vh",
  },
};
export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  border: "1px solid black",
  borderRadius: "50px",
  width: "450px",
  height: "623px",
  backgroundColor: "white",
  paddingBottom: 5,
  pt: 2,
  [theme.breakpoints.down("sm")]: {
    height: "723px",
  },
}));
export const AuthButton = styled("button")(({ theme }) => ({
  borderRadius: "30px",
  border: "none",
  fontFamily: "Inter, sans-serif",
  fontWeight: 800,
  position: "relative",
  height: "41px",
  width: "200px",

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    marginBottom:theme.spacing(1),
    
  },
}));

export const CreateAccButton = styled("button")(({ theme }) => ({
  borderRadius: "30px",
  border: "1px solid black",
  fontFamily: "Inter, sans-serif",
  fontWeight: 800,
  position: "relative",

  height: "41px",
  width: "200px",
  background: theme.palette.primary.main,
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    // backgroundColor:"white"
  },
}));

export const ChooseAccBox = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
  alignItems:"center", 
  backgroundColor: "#D9D9D9",
  borderRadius: "30px",
  border: "none",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
    backgroundColor: "white",
  },
}));
export const Heading = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  fontSize: "36px",
  [theme.breakpoints.down("md")]: {},
}));

export const SignInTextLink = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.primary.main,
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {},
}));

export const FormBox = styled(Typography)(({ theme }) => ({
  width: "170px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  // paddingTop: theme.spacing(1),
  [theme.breakpoints.down("md")]: {},
}));

export const ModalBackgroundBox = styled(Typography)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(5px)",
  zIndex: 9999,
  [theme.breakpoints.down("md")]: {},
}));
