import { Box, Typography, styled } from "@mui/material";
// export const loginStyles = {
//   main: {
//     height: "100vh",
//   },
// };
export const LoginSigUpTextLink = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.primary.main,
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {},
}));
export const LoginMainBox = styled(Box)(({ theme }) => ({
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
export const LoginFormBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {},
}));
