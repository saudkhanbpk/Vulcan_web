import { Box, styled } from "@mui/material";

export const ResetPassMainBox = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: {},
}));

export const ResetPassFormBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("md")]: {},
}));
