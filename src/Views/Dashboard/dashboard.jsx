import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const navigate = useNavigate()
  const userData = useSelector((state) => state.userData.data);
  const isEducator = userData?.is_educator
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
      {isEducator ?
        <Button variant="contained" onClick={() => navigate('/create-course')} sx={{ mt: 5 }}>Create Course</Button>
        :
        <Button variant="contained" sx={{ mt: 5 }}>Enroll Course</Button>
      }
    </Box>
  );
};
