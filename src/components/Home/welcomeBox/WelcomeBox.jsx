import React from 'react'
import './WelcomeBox.scss';
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { useState } from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import ModalComponent from '../../coursesScreen/modal/ModalComponent';



const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  height: 421,
  width: 500,
  borderRadius: `${20} !important`,
  fontSize: 23,
  padding: 40,
  paddingTop: 20,
  marginTop: 40,
  marginLeft: 180,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

  "@media (max-width: 480px)": {
    textAlign: 'center',
    height: 600,
    width: 500,
    // borderRadius: `${20} !important`,
    fontSize: 16,
    padding: 30,
    paddingTop: 30,
    marginLeft: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));



const WelcomeBox = () => {

  // state 

  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  //  navigation hook declear 
  const navigate = useNavigate();


  //  toggle handle func   
  const handleButtonClick = (val) => {
    if (val.value === 1) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }

  // navigation handle func  
  const navigateToBecomeEdu = () => {
    navigate('/become-educator');
  };
  const modalHandle = () => {
    setOpen(!open)
  }

  // style for comp 
  const myStyles = {
    mainGrid: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
    },
    item:{ borderRadius: '20px' },
    subGrid:{ cursor: "pointer" },
    subGridIconClicked:{ fontSize: "3.1875rem", color: 'blue' },
    subGridIconNotClicked:{ fontSize: "3.1875rem" },
    dividerAfterClick:{ opacity: 1, color: "blue" },
    dividerbeforeClick:{opacity:0},

    dividerStyle :{
      height: "40px",
      width: "2px",
      backgroundColor: "black",
      border: "none",
      margin: "20px 0",
      position: "relative !important",
      opacity: "0.2 !important",
      mb: "15px"
    },
    boxDescription:{ fontFamily: "Inter", pt: "12px" },
    textCapitalize: { textTransform: "capitalize" },

    

  }
  return (
    <>
    <ModalComponent open={open} setOpen={setOpen} />
      <Grid container item sx={myStyles.mainGrid}>
        <Item sx={myStyles.item}>
          <Grid display= 'flex' justifyContent= 'space-around'  alignItems= 'center'>
            <Grid onClick={(e) => handleButtonClick({ value: 1 })} sx={myStyles.subGrid}>
              {isClicked ? <CastForEducationIcon sx={myStyles.subGridIconClicked} /> : <CastForEducationIcon sx={myStyles.subGridIconNotClicked} />}
              <Box>
                <Typography variant='body5'>Teach</Typography>
                {isClicked ?
                  <Divider sx={myStyles.dividerAfterClick} />
                  : <Divider sx={myStyles.dividerbeforeClick}/>
                }
              </Box>
            </Grid>
            <Divider sx={myStyles.dividerStyle} />
            <Grid onClick={(e) => handleButtonClick({ value: 2 })} sx={myStyles.subGrid}>
              {isClicked ? <LocalLibraryIcon sx={myStyles.subGridIconNotClicked} /> : <LocalLibraryIcon sx={myStyles.subGridIconClicked} />}
              <Box  >
                <Typography variant='body5'>Learn</Typography>
                {
                  isClicked ? <Divider sx={myStyles.dividerbeforeClick} /> :
                    <Divider sx={myStyles.dividerAfterClick} />
                }
              </Box>
            </Grid>
          </Grid>
          {
            isClicked ? <>
              <Typography variant="body2"  >
                Become an Educator <br /> on the Vulcan Platform
              </Typography>
              <Typography variant="body5" sx={myStyles.boxDescription}>
                Teach live online classes on any subject matter of your expertise. Keep 100% of the earnings.
              </Typography>
            </>
              :
              <>
                <Typography variant="body2"  >
                  Enroll in a Course <br /> on the Vulcan Platform
                </Typography>
                <Typography variant="body5" sx={myStyles.boxDescription}>
                  Learn directly from subject matter experts in live classes. Courses available soon.
                </Typography>
              </>
          }
          <Box display="flex" justifyContent="center" mt={6}>
            <Button onClick={isClicked ? navigateToBecomeEdu : modalHandle} variant="contained" sx={myStyles.textCapitalize}>
              {isClicked ? "Sign Up To Teach" : "Get on Waitlist"}
            </Button>
          </Box>
        </Item>
      </Grid>
    </>
  )
}

export default WelcomeBox;