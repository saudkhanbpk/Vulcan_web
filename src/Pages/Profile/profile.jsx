import { Box, Typography } from "@mui/material";
import React from "react";
export const Profile = () => {
  return (
    <Box
    sx={{
      height: "100vh",
      display: "flex",
      flexDirection:"column",
      justifyContent: "Center",
      alignItems: "center",
    }}
  >
    <Typography variant="h1" color={"primary"}>Profile</Typography>
    <Typography variant="h5">Comming soon!</Typography>
    </Box>
  );
};
