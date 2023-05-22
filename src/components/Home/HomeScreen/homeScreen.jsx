import React from "react";
import "./homeScreen.scss";
import WelcomeBox from "../WelcomeBox/welcomeBox";
import { Box } from "@mui/material";
import { styles } from "./styles";
const HomeScreen = () => {
  return (
    <Box sx={styles.box} className="home">
      <WelcomeBox />
    </Box>
  );
};

export default HomeScreen;
