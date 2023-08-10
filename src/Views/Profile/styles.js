import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  maxHeight: "110vh",
  alignItems: "flex-start",
  padding: theme.spacing(5),
  marginBottom: theme.spacing(20),
  [theme.breakpoints.down("md")]: {
    height: "100vh",
  },
}));
export const TextLabel = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  textAlign: "center",
  color: "black",
  [theme.breakpoints.down("md")]: {
  fontSize: 12,
  },
}));
export const TextValue = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  color: "grey",
  [theme.breakpoints.down("md")]: {
  fontSize: 12,
  },
}));
export const TextButton = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: "#0000FF",
  paddingRight: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
  fontSize: 12,

  },
}));
export const HeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "24px",
  marginLeft: "24px",
}));
export const AboutDownArrow = styled("span")(({ theme }) => ({
  position: "relative",
  top: "74%",
  transform: "translateY(-50%) ",
  width: 0,
  height: 0,
  borderLeft: "6px solid transparent",
  borderRight: "6px solid transparent",
  borderTop: `6px solid #0000FF`,
  pointerEvents: "none",
}));
export const AboutDownArrowUp = styled("span")(({ theme }) => ({
  position: "relative",
  top: "74%",
  transform: "translateX(-50%) rotate(180deg)",
  width: 0,
  height: 0,
  borderLeft: "6px solid transparent",
  borderRight: "6px solid transparent",
  borderTop: `6px solid #0000FF`,
  pointerEvents: "none",
}));
export const FormBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {},
}));
export const OldPassBox = styled(Box)(({ theme }) => ({
  width: "100%",
}));
