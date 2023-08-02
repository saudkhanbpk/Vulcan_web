import { Box, Typography } from "@mui/material";
import React from "react";

export const Dashboard = () => {
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
      <Typography variant="h1" color={"primary"}>Dashboard</Typography>
      <Typography variant="h5">Comming soon!</Typography>

    </Box>
  );
};
