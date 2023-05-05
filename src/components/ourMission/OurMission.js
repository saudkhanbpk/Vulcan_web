import React from "react";
import "./OurMission.scss";
import bringIm from "../../assets/images/bringimg.png";
import { Box, Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";

  const   Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.h1,
  // padding: theme.spacing(1),
  textAlign: 'start',
  // color: theme.palette.text.secondary,
  height: 266,
  width: 414,
  borderRadius: 20,
  fontSize: 23,
  padding: 20,
  paddingTop: 40,
  border: "1px solid black",

}));

const OurMission = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-4 linear_back">
            <div className="ourmiss">
              <Typography variant="h1" color="primary">Our Mission</Typography>
              <Box mt={5} mb={5} sx={{ zIndex: 10 }}>
                <Typography sx={{ zIndex: 10 }} align="start" variant="body2">
                  Connecting learners directly with subject matter experts - in any subject.
                </Typography>
              </Box>
            </div>
          </div>

          <div className="col-8 teacher_back" />
        </div>

        <Box m={6}>
          <Typography align="center" >Bringing Education into the 21st century</Typography>
        </Box>
        <Grid container spacing={3} sx={{pr: 10, pl:10}}>

          <Grid item xs={12} sm={10} md={6} lg={6}   >
            <Box>
              <img src={bringIm} className="img-fluid brinaaimg" alt="" />
            </Box>

          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={6} >
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

        <div className="row mt-2 mb-2 align-center">

          <Box mt={10} mb={10}><Typography>Vulcan Learning Platform</Typography></Box>


          <Grid container spacing={2}>
            <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body4" color="primary.main">
                Univeral Access
              </Typography>
              <Item>

                No GPA. No SAT. No assessment. No Application. Anyone can enroll
                in a course on the Vulcan Learning platform. We won’t turn our
                backs on learners.

              </Item>
            </Grid>

            <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body4" color="primary.main">
                Best Educators
              </Typography>
              <Item >

                Our courses are taught by the top educators in a given field.
                Educators are vetted for demonstrated experience, skill, and
                character.

              </Item>
            </Grid>

            <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body4" color="primary.main" >
                Personalized
              </Typography>
              <Item>

                We offer a wide variety of courses with unique Educators,
                subjects, and teaching styles. This allows learners to choose
                the instructor, pace, and level that fits them best.

              </Item>
            </Grid>

          </Grid>

          <Box mt={5} mb={5}>
            <Typography sx={{ textDecoration: 'underline' }} variant="h4" align="center">Learn more about how the Vulcan Learning platform works</Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
 
