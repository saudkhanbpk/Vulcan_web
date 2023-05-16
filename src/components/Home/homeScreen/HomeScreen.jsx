import React from 'react'
import './HomeScreen.scss';
import WelcomeBox from '../welcomeBox/WelcomeBox';
import { Box } from '@mui/material';

const HomeScreen = () => {
  const myStyles={
    box:{
      height: {xs: "150vh"}
    }
  }
  return (
    <Box sx={myStyles.box}
     className='home'>
      <WelcomeBox  />
     
    </Box>



  )
}

export default HomeScreen;