import React from "react";
import "./OurMission.scss";
import bringIm from "../../assets/images/bringimg.png";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

  const Item = styled(Paper)(({ isSmallScreen }) => ({
  textAlign: 'start',
  height: isSmallScreen ?  300 : 266,
  // width:414,
  width: isSmallScreen ? 350 : 414,
  // height: isSmallScreen ? '200px' : '400px',
  borderRadius: `${20} !important`,
  fontSize: 24,
  // paddingRight: 20,
  // paddingLeft:20,
  // paddingTop: 20,
  padding:20,
  border: "1px solid black",
}));

const OurMission = () => {
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery('(max-width: 390px)');
  return (
    <>
      <div className="container-fluid ">
      <div className="row"  >
      
          <div className="col-md-4 linear_back">
            <div className="ourmiss">
              <Box className="container" mt={5} mb={5} >
              <Typography variant="h1" color="primary">Our Mission</Typography>
                <Typography   align="start" variant="body2" >
                  Connecting learners directly with subject matter experts - in any subject.
                </Typography>
              </Box> 
               
            </div>
          </div>

          <div className="col-md-8 teacher_back" />
          
        </div>
        </div>
        
        <Box m={6}>
          <Typography align="center" >Bringing Education into the 21st century</Typography>
        </Box>
        <Grid container spacing={3} sx={{p:{xs:0,sm:0,lg:1,md:1},display:"flex", alignItems:"center", justifyContent:"center"}}>

          <Grid item xs={12} sm={10} md={6} lg={6}   >
            <Box>
              <img src={bringIm} className="img-fluid brinaaimg" alt="" />
            </Box>

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <Box p={3}>
              <Typography align="start" variant="paragraph">
                Education is a core pillar of our society. But the current system
                hasn’t been working for everyone. It’s been plagued with ever
                rising costs, long timeframes, unsatisfactory outcomes, and high
                barriers to entry.
              </Typography>
              <Box mt={5}>
                <Typography align="start" variant="paragraph">
                  We asked the question: What would an education system that works
                  for everyone look like? The Vulcan Learning platform was the
                  answer.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

  
 
  
          <Box mt={10} mb={10} ><Typography align="center">Vulcan Learning Platform</Typography></Box>


          <Grid container spacing={2} sx={{displey:"flex",justifyContent:"center",alignItems:"center",}}>
            <Grid  item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
              <Typography variant="body4" color="primary.main" sx={{pb:4, pt:2}}>
                Univeral Access
              </Typography>
              <Item sx={{borderRadius:'20px'}} isSmallScreen={isSmallScreen}>
                No GPA. No SAT. No assessment. No Application. Anyone can enroll
                in a course on the Vulcan Learning platform. We won’t turn our
                backs on learners.
              </Item>
            </Grid>

            <Grid item xs={11} sm={10} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body4" color="primary.main" sx={{pb:4, pt:2}}>
                Best Educators
              </Typography>
              <Item sx={{borderRadius:'20px'}}  isSmallScreen={isSmallScreen}>
                Our courses are taught by the top educators in a given field.
                Educators are vetted for demonstrated experience, skill, and
                character.
              </Item>
            </Grid>

            <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body4" color="primary.main" sx={{pb:4, pt:2}}>
                Personalized
              </Typography>
              <Item sx={{borderRadius:'20px'}}  isSmallScreen={isSmallScreen}>
                We offer a wide variety of courses with unique Educators,
                subjects, and teaching styles. This allows learners to choose
                the instructor, pace, and level that fits them best.
              </Item>
            </Grid>

          </Grid>

         
    
          <Box mt={5} mb={5} onClick={()=>navigate('/how-it-works')}>
            <Typography sx={{ textDecoration: 'underline', cursor: "pointer" }} variant="h4" align="center">Learn more about how the Vulcan Learning platform works</Typography>
          </Box> 
          </>    
 
  );
};

export default OurMission;
 
