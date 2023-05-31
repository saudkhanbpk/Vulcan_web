import { Box,  ListItemText, Typography, styled } from "@mui/material";
import { specialFont } from "../../Theme/fontFamily";


export const styles = {
   listItemText:{
      textAlign:"center",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "Inter",
   },
   heading:{
    fontFamily: `${specialFont} !important`,
    fontSize: "40px",
    fontWeight: 400,
    lineHeight: "51px",
    textDecoration: "none",
   }
}
export const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  // padding: theme.spacing(5),
}));
export const MainSubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  // padding: theme.spacing(5),
}));

export const Heading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
  paddingTop: theme.spacing(3)
}));
export const Title = styled(Typography)(({ theme }) => ({
  color: "black",
  textAlign: "center",
//   color: theme.palette.primary.main,
  padding:theme.spacing(3),
  paddingBottom:theme.spacing(0),
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: 1.2,
  fontFamily: "'Inter', sans-serif",

}));
export const Subtitle = styled(Typography)(({ theme }) => ({
    color: "black",
    textAlign: "center",
  //   color: theme.palette.primary.main,
    padding:theme.spacing(3),
    paddingBottom:theme.spacing(0),
    fontSize: "24px",
    // fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: "'Inter', sans-serif",
  
  }));

export const Description = styled(Typography)(({ theme }) => ({
   // variant="body3",
   color: "black",
   padding:theme.spacing(3),
   textAlign: "center",
   
}));

export const ItemText = styled(ListItemText)(({ theme }) => ({
   fontSize: "20px",
   // fontWeight: 400,
   fontFamily: "Inter",

}));