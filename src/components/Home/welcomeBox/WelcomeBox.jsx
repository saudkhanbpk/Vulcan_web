import React from 'react'
import './WelcomeBox.scss';
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { useState } from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import styled from 'styled-components';


const dividerStyle = {
  height: "40px",
  width: "2px",
  backgroundColor: "black",
  border: "none",
  margin: "20px 0",
  position: "relative !important",
  opacity: "0.2 !important"
}
const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  height: 421,
  width: 500,
  borderRadius: `${20} !important`,
  fontSize: 23,
  padding: 40,
  paddingTop: 40,
  marginLeft: 40,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

  "@media (max-width: 480px)": {
    textAlign: 'center',
    height: 600,
    width: 500,
    borderRadius: `${20} !important`,
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

  const [isClicked, setIsClicked] = useState(true); // Initial state is false


  const handleClick = () => {
    setIsClicked(!isClicked);

  }
  const styles = {
    pt: 8,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  }
  return (
    <>
      <Grid container item sx={styles}>
        <Item >
          <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Grid onClick={handleClick}>
              {isClicked ? <CastForEducationIcon style={{ color: 'blue' }} /> : <CastForEducationIcon />}
              <Box>
                <Typography variant='body5'>Teach</Typography>
                {isClicked ?
                  <Divider sx={{ opacity: 1, color: "blue" }} />
                  : <Divider sx={{ opacity: 0 }} />}
              </Box>
            </Grid>


            <Divider sx={dividerStyle} />

            <Grid onClick={handleClick}>
              {isClicked ? <LocalLibraryIcon /> : <LocalLibraryIcon style={{ color: 'blue' }} />}
              <Box  >
                <Typography variant='body5'>Learn</Typography>
                {
                  isClicked ? <Divider sx={{ opacity: 0 }} /> :
                    <Divider sx={{ opacity: 1, color: "blue" }} />
                }
              </Box>
            </Grid>
          </Grid>
          {
            isClicked ? <>
              {/* fontWeight: 0, p: 2, */}
              <Typography variant="body2" sx={{
                fontWeight: 0, 
                p: 2, 
                textAlign: "center", // default alignment
                "@media (max-width: 300px)": {
                 textAlign: "left", // alignment for screen width less than or equal to 600px
                },
              }} >
                Become an Educator <br /> on the Vulcan Platform
              </Typography>
              <Typography variant="body5" sx={{ fontFamily: "Inter", fontWeight: "" }}>
                Teach live online classes on any subject matter of your expertise. Keep 100% of the earnings.
              </Typography>
            </>
              :
              <>
                <Typography variant="body2" align=" " sx={{ fontWeight: " ", pt: 2 }} >
                  Enroll in a Course <br /> on the Vulcan Platform
                </Typography>
                <Typography variant="body3" sx={{ fontFamily: "Inter", fontWeight: "" }}>
                  Learn directly from subject matter experts in live classes. Courses available soon.
                </Typography>
              </>
          }
          <Box display="flex" justifyContent="center">
            <Button variant="contained" style={{ textTransform: 'capitalize', }}>
              {isClicked ? "Sign Up To Teach" : "Get on Waitlist"}
            </Button>
          </Box>


        </Item>


      </Grid>
    </>
  )
}

export default WelcomeBox;