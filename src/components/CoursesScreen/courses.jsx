import React from 'react'
import { Box, Typography } from "@mui/material";

export const Courses = () => {
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
      <Typography variant="h1" color={"primary"}>Courses</Typography>
      <Typography variant="h5">Comming soon!</Typography>
      </Box>
      );
}
