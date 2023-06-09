import { Box, Typography, styled } from "@mui/material";
export const styles = {
  main: {
    height: "100vh",
  },
};
export const SigUpTextLink = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.primary.main,
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {},
}));
export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  border: "1px solid black",
  borderRadius: "50px",
  width: "358px",
  height: "437px",
  backgroundColor: "white",
  paddingBottom: 5,
  // paddingTop: theme.spacing(5),
  [theme.breakpoints.down("md")]: {},
}));
export const FormBox = styled(Box)(({ theme }) => ({
  width: "150px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {},
}));
export const ModalBackgroundBox = styled(Box)(({ theme }) => ({
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
