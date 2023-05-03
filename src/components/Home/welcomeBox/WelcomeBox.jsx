import React from 'react'
import './WelcomeBox.scss';
import Teach from '../../../assets/images/teach.png';
import Learn from '../../../assets/images/learn.png';
import TeachBlack from '../../../assets/images/teachBlack.png';
import LearnBlue from '../../../assets/images/learnBlue.png';

import Button from '@mui/material/Button'
import { Box } from '@mui/system';

import { useState } from 'react';


const WelcomeBox = () => {
  const [isClicked, setIsClicked] = useState(false); // Initial state is false

  const handleClick = () => {
    setIsClicked(!isClicked);
   
  }
  return (
    <div className="welcome-box">
      <div className="header">
        <div onClick={handleClick} className="iconHeader-1">
          <img src={isClicked ? Teach : TeachBlack} alt="" />
          <p>Teach</p>
          <hr className={isClicked ? 'header-icon-base' : 'header-icon-base-grey'} />
        </div>

        <hr className='header-div' />

        <div onClick={handleClick} className="iconHeader-2">
          <img src={isClicked ? Learn: LearnBlue} alt="" />
          <p>Learn</p>
          <hr className={isClicked ? 'header-icon-base-grey' : 'header-icon-base'} />
        </div>
      </div>
      {
        isClicked ?
         <>
          <h3>Become an Educator <br /> on the Vulcan platform</h3> 
          <p>Teach live online classes on any subject matter of your expertise. Keep 100% of the earnings.</p>
         </> 
          :
          <>
           <h3>Enroll in a course on <br /> the Vulcan platform</h3>
           <p>Learn directly from subject matter experts in live classes. Courses available soon.</p>
          </>}

      

      <Box display="flex" justifyContent="center">
        <Button variant="contained" style={{ textTransform: 'capitalize', }}>
          {isClicked? "Sign Up To Teach":"Get on Waitlist"}
        </Button>
      </Box>
    </div>
  )
}

export default WelcomeBox;