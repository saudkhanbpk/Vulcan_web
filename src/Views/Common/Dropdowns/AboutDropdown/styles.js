import { IconButton, Menu, Typography, styled } from "@mui/material";

export  const SmNavlink = styled(Typography)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    textTransform: "capitalize",
    textAlign: "center",
  }));
 export  const MenuStyle = styled(Menu)(({ theme }) => ({
    display: { xs: "block", md: "none" },
    marginTop: "8px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "30px ",
    },
  }));
  export const Span = styled("span")(({ theme }) => ({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  }));
  export const IconButtonStyle = styled(IconButton)(({ theme }) => ({
    '&:hover': {
      backgroundColor: 'transparent',  
    },
  }));

  export const AboutDownArrow = styled('span')(({ theme }) => ({
    position: "absolute",
    top: "83%",
    transform: "translateY(-50%) ",
    width: 0,
    height: 0,
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderTop: `6px solid ${theme === "secondary" ? "black" : "white"}`, 
    pointerEvents: "none", 

  }));
  