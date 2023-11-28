import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate()
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
      {/* <Typography variant="h5">Create Course</Typography> */}
      <Button variant="contained" onClick={()=>navigate('/create-course')} sx={{mt:5}}>Create Course</Button>
    </Box>
  );
};
