import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";

export default function ProgressBar() {
  const steps = useSelector((state) => state.progressBar.steps);
  const progressPercentage = (steps - 1) * 50;

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progressPercentage} />
    </Box>
  );
}
