import React from 'react'
import './homeScreen.scss';
import WelcomeBox from '../WelcomeBox/welcomeBox';
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