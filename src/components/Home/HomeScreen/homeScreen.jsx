import React from "react";
import "./homeScreen.scss";
import WelcomeBox from "../WelcomeBox/welcomeBox";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./styles";
import Grid from '@mui/material/Unstable_Grid2';


const HomeScreen = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm')); // Change breakpoint as needed

 
  return (
    <Grid>
    {isDesktop  ?
    (

      <Box sx={styles.box} className="home">
      <WelcomeBox />
      </Box>
    )
    :
    (
      <>
      <Box component="div">
      <WelcomeBox />
      </Box>
      <Box component="div" className="home" sx={{overflow: 'hidden'}}>
        
      </Box>
  </>
    )
  }
    </Grid>
    );
};

export default HomeScreen;
