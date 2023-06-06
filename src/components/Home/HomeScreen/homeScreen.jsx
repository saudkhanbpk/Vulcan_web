import React from "react";
import "./homeScreen.scss";
import WelcomeBox from "../WelcomeBox/welcomeBox";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./styles";
import Grid from '@mui/material/Unstable_Grid2';
import mobileImage from '../../../assets/images/backhome.png'


const HomeScreen = () => {
  const theme = useTheme();
  const is_desktop = useMediaQuery(theme.breakpoints.up('sm')); // Change breakpoint as needed

 
  return (
    <Grid>
    {is_desktop  ?
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
      <Box component="div" className="" sx={{overflow: 'hidden'}}>
        <img src={mobileImage} width={"100%"} height={"auto"} alt=""  />
      </Box>
  </>
    )
  }
    </Grid>
    );
};

export default HomeScreen;
