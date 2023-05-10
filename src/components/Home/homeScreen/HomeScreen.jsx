import React from 'react'
import './HomeScreen.scss';
import WelcomeBox from '../welcomeBox/WelcomeBox';
import { Box } from '@mui/material';

const HomeScreen = () => {
  return (
    <Box sx={{
      height: {xs: "150vh"}
    }}
     className='home'>
      <WelcomeBox  />
     
    </Box>



  )
}

export default HomeScreen;