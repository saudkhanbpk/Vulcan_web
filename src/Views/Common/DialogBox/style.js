import { styled } from "@mui/material";

export const Message = styled("p")(({ theme }) => ({
    fontWeight:"bold",
  fontSize: "32px",
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));
