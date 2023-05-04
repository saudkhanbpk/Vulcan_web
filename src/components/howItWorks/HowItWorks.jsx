import React from "react";
import "./HowItWorks.scss";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Grid, TextField, Typography, makeStyles } from "@mui/material";
import arrow from "../../assets/images/Arrow 3.png";

const HowItWorks = () => {
  return (
    <>
      <Grid container>
        <Grid lg={12} xs={12}>
          <Typography variant="body1" color="black" align="start" ml={8} mt={5}>
            How the Vulcan Learning platform works
          </Typography>
        </Grid>
        <Grid lg={9}>
          <item>
            <Typography
              variant="body2"
              color="black"
              align="start"
              ml={8}
              mt={10}
            >
              Our service connects Learners with Educators offering live
              educational <br /> classes on a wide range of subjects. Here's how
              it works:
            </Typography>
          </item>
        </Grid>
      </Grid>
      <Grid container>
        <Grid lg={6}>
          <Box style={{ borderRight: "1px solid black", marginTop: "10px" }}>
            <Grid lg={12}>
              <item>
                <Typography
                  variant="h1"
                  color="black"
                  align="center"
                  ml={8}
                  mt={10}
                >
                  Learner
                </Typography>
                <Typography
                  variant="h5"
                  color="primary"
                  align="start"
                  ml={8}
                  mt={5}
                  mb={2}
                >
                  1. Find a course
                </Typography>
                <Typography variant="body3" color="black" align="start">
                  <Box ml={8}>
                    {" "}
                    Explore our courses and pick one you want to take.
                  </Box>
                </Typography>
                <Box justifyContent="center" display="flex" mt={8} mb={5}>
                  <img src={arrow} alt="arrow" />
                </Box>
              </item>
            </Grid>
            <Grid lg={12}>
              <item>
                <Typography
                  variant="h5"
                  color="primary"
                  align="start"
                  ml={8}
                  mt={5}
                  mb={2}
                >
                  2. Decide if it's right for you
                </Typography>
                <Typography variant="body3" color="black" align="start">
                  <Box ml={8}>
                    Check the course curriculum, class schedule, <br />{" "}
                    instructor profile, and learner reviews to verify that{" "}
                    <br /> the course is the right it for you.
                  </Box>
                </Typography>
                <Box justifyContent="center" display="flex" mt={5} mb={5}>
                  <img src={arrow} alt="arrow" />
                </Box>
              </item>
            </Grid>{" "}
          </Box>
          <Grid lg={12}>
            <item>
              <Typography
                variant="h5"
                color="primary"
                align="start"
                ml={8}
                mt={5}
                mb={2}
              >
                3. Complete Enrollment
              </Typography>
              <Typography variant="body3" color="black" align="start">
                <Box ml={8}>
                  Choose among the available class schedules, and <br /> click
                  on enroll. No application required. All you <br /> need to
                  complete enrollment is successfully <br />
                  checkout.
                </Box>
              </Typography>
            </item>
          </Grid>

          <Grid lg={12}>
            <item>
              <Box mt={6} mb={9} justifyContent="center" display="flex">
                <Button
                  variant="contained"
                  size="small"
                  style={{ textTransform: "capitalize" }}
                >
                  Learner FAQ
                </Button>
              </Box>
            </item>
          </Grid>
        </Grid>
        <Grid lg={6}>
          <Grid lg={12}>
            <item>
              <Typography
                variant="h1"
                color="black"
                align="center"
                ml={8}
                mt={10}
              >
                Educators
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                align="start"
                ml={8}
                mt={5}
                mb={2}
              >
                1. Create your course
              </Typography>
              <Typography variant="body3" color="black" align="start">
                <Box ml={8}>
                  {" "}
                  Set up an Educator account and create the course <br />
                  that you want to offer.{" "}
                </Box>
              </Typography>
              <Box justifyContent="center" display="flex" mt={5} mb={5}>
                <img src={arrow} alt="arrow" />
              </Box>
            </item>
          </Grid>
          <Grid lg={12}>
            <item>
              <Typography
                variant="h5"
                color="primary"
                align="start"
                ml={8}
                mt={5}
                mb={2}
              >
                2. Submit for approval
              </Typography>
              <Typography variant="body3" color="black" align="start">
                {" "}
                <Box ml={8}>
                  Meet all the requirements and submit your course <br />
                  for review. We will review your course application <br />
                  thoroughly and get back to you with a decision.{" "}
                </Box>
              </Typography>
              <Box justifyContent="center" display="flex" mt={5} mb={5}>
                <img src={arrow} alt="arrow" />
              </Box>
            </item>
          </Grid>
          <Grid lg={12}>
            <item>
              <Typography
                variant="h5"
                color="primary"
                align="start"
                ml={8}
                mt={5}
                mb={2}
              >
                3. Make your courses available
              </Typography>
              <Typography variant="body3" color="black" align="start">
                {" "}
                <Box ml={8}>
                  Finalize the class schedule and curriculum, pick <br />
                  the start date, and publish your course.{" "}
                </Box>
              </Typography>
            </item>
          </Grid>
          <Grid lg={12}>
            <item>
              <Box mt={12} mb={10} justifyContent="center" display="flex">
                <Button
                  variant="contained"
                  size="small"
                  style={{ textTransform: "capitalize" }}
                >
                  Educator FAQ
                </Button>
              </Box>
            </item>
          </Grid>
        </Grid>
      </Grid>

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-6 how">
            <h2>How the Vulcan Learning platform works</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 our">
            <p className="text-start">
              Our service connects Learners with Educators offering live
              educational <br /> classes on a wide range of subjects. Here's how
              it works:
            </p>
          </div>
        </div>
        <div className="row learn">
          <div className="col-6 border-end">
            <h2 className="text-center learner">Learners</h2>
            <h5 className="find">1. Find a course</h5>
            <p className="e text-start">
              Explore our courses and pick one you want to take.
            </p>
          </div>
          <div className="col-6 ">
            <h2 className="text-center learner">Educators</h2>
            <h5 className="find">1. Create your course</h5>
            <p className="e text-start">
              Set up an Educator account and create the course <br />
              that you want to offer.
            </p>
          </div>
          <div className="col-6 border-end">
            <h5 className="find">2. Decide if it's right for you</h5>
            <p className="e text-start">
              Check the course curriculum, class schedule, <br /> instructor
              profile, and learner reviews to verify that <br /> the course is
              the right it for you.
            </p>
          </div>
          <div className="col-6 ">
            <h5 className="find">2. Submit for approval</h5>
            <p className="e text-start">
              Meet all the requirements and submit your course <br />
              for review. We will review your course application <br />
              thoroughly and get back to you with a decision.
            </p>
          </div>
          <div className="col-6 border-end">
            <h5 className="find">3. Complete Enrollment </h5>
            <p className="e text-start">
              Choose among the available class schedules, and <br /> click on
              enroll. No application required. All you <br /> need to complete
              enrollment is successfully <br />
              checkout.
            </p>
          </div>
          <div className="col-6 ">
            <h5 className="find">3. Make your courses available</h5>
            <p className="e text-start">
              Finalize the class schedule and curriculum, pick <br />
              the start date, and publish your course.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HowItWorks;
