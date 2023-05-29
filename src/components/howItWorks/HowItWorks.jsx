import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import arrow from "../../assets/images/Arrow 3.png";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';

import { styles } from "./styles";



const HowItWorks = () => {
  function useScreenSize(breakpoint) {
    return useMediaQuery(breakpoint);
  }
  const isSmallScreen = useScreenSize('(min-width:899px)');

  const navigate = useNavigate();

  const navigateToEdu = () => {
    // 👇️ navigate to /educator-faq
    navigate('/educator-faq');
  };
  const navigateToLearn = () => {
    // 👇️ navigate to /learner-faq
    navigate('/learner-faq');
  };

  // const styles={
  //   heading:{ml:{lg:8, xs:2}, mt:{lg:5, xs:4}, },
  //   description:{ml:{lg:8, xs:2}, mt:{lg:10, xs:4}, },
  //   divider:{ border: "1px solid grey", height: "600px", width: "1px", }, 
  // }
  

  return (
    <>
      <Grid container alignContent="center" alignItems="center">
        <Grid lg={12} xs={12}>
          <Typography variant="body1" color="black" align="start" sx={styles.heading} >
            How the Vulcan Learning platform works
          </Typography>
        </Grid>
        <Grid lg={9}>
        
            <Typography
              variant="body2"
              color="black"
              align="start"
              
              sx={styles.description}
            >
              Our service connects Learners with Educators offering live
              educational classes on a wide range of subjects. Here's how
              it works:
            </Typography>
            
        </Grid>
      </Grid>


      <Grid container  display="flex" justifyContent="center" alignItems="center">
        
          <Grid lg={5} md={5} sm={12} xs={12}  sx={{p:{xs:2}}}>
            <Grid lg={12} flexDirection="row" display="flex" justifyContent="" alignItems="center" >
              <Box>
                <Typography
                  variant="h1"
                  color="black"
                  align="center"
                  // ml={8}
                  mt={10}
                >
                  Learner
                </Typography>
                <Typography
                  variant="h5"
                  color="primary"
                  align="start"
                // ml={8}
                // mt={5}
                // mb={2}
                mt={10}
                >
                  1. Find a course
                </Typography>
                <Typography variant="body3" color="black" align="start">

                  Explore our courses and pick one you want to take.

                </Typography>
                <Box justifyContent="center" display="flex" mt={8} mb={5}>
                  <img src={arrow} alt="arrow" />
                </Box>
              </Box>
            </Grid>
            <Grid lg={12}>
              <Box>
                <Typography
                  variant="h5"
                  color="primary"
                  align="start"
                // ml={8}
                // mt={5}
                // mb={2}
                >
                  2. Decide if it's right for you
                </Typography>
                <Typography variant="body3" color="black" align="start">

                  Check the course curriculum, class schedule, <br />{" "}
                  instructor profile, and learner reviews to verify that{" "}
                  <br /> the course is the right it for you.

                </Typography>
                <Box justifyContent="center" display="flex" mt={5} mb={5}>
                  <img src={arrow} alt="arrow" />
                </Box>
              </Box>
            </Grid>{" "}



            <Grid lg={12}>
            <Box>
              <Typography
                variant="h5"
                color="primary"
                align="start"

              >
                3. Complete Enrollment
              </Typography>
              <Typography variant="body3" color="black" align="start">

                Choose among the available class schedules, and <br /> click
                on enroll. No application required. All you <br /> need to
                complete enrollment is successfully <br />
                checkout.

              </Typography>
            </Box>
          </Grid>

          <Grid lg={12}>
            <Box>
              <Box mt={6} mb={9} justifyContent="center" display="flex">
                <Button
                  onClick={navigateToLearn}
                  variant="contained"
                  size="small"
                  style={{ textTransform: "capitalize" }}
                >
                  Learner FAQ
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid lg={1} md={1}  direction="column" display="flex" justifyContent="start" alignItems="center">
          <Box sx={{ pb: 15 }}>
            {isSmallScreen && <Divider orientation="horizontal" sx={styles.divider} />}
          </Box>
        </Grid>

        <Grid lg={5} md={5} sm={12} xs={12}   sx={{p:{xs:2}}} >
          <Grid lg={12}>
            <Box>
              <Typography
                variant="h1"
                color="black"
                align="center"
                // ml={8}
                mt={10}
              >
                Educators
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                align="start"
                mt={10}
              >
                1. Create your course
              </Typography>
              <Typography variant="body3" color="black" align="start">

                Set up an Educator account and create the course <br />
                that you want to offer.{" "}

              </Typography>
              <Box justifyContent="center" display="flex" mt={5} mb={5}>
                <img src={arrow} alt="arrow" />
              </Box>
            </Box>
          </Grid>
          <Grid lg={12}>
            <Box>
              <Typography
                variant="h5"
                color="primary"
                align="start"
              >
                2. Submit for approval
              </Typography>
              <Typography variant="body3" color="black" align="start">
  
                Meet all the requirements and submit your course <br />
                for review. We will review your course application <br />
                thoroughly and get back to you with a decision.

              </Typography>
              <Box justifyContent="center" display="flex" mt={5} mb={5}>
                <img src={arrow} alt="arrow" />
              </Box>
            </Box>
          </Grid>
          <Grid lg={12}>
            <Box>
              <Typography
                variant="h5"
                color="primary"
                align="start"
              >
                3. Make your courses available
              </Typography>
              <Typography variant="body3" color="black" align="start">
                {" "}

                Finalize the class schedule and curriculum, pick <br />
                the start date, and publish your course.
                <br/>
                {" "}

              </Typography>
            </Box>
          </Grid>
          <Grid lg={12}>
            <Box>
              <Box mt={12} mb={10} justifyContent="center" display="flex">
                <Button
                  onClick={navigateToEdu}
                  variant="contained"
                  size="small"
                  style={{ textTransform: "capitalize" }}
                >
                  Educator FAQ
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HowItWorks;
