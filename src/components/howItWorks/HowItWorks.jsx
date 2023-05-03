import React from "react";
import "./HowItWorks.scss";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import arrow from "../Images/Arrow 3.png";

const useStyles = makeStyles({
  how: {
    fontSize: [40, "!important"],
    fontWeight: "bold",
    fontfamily: "Inter",
  },
  our: {
    marginLeft: "5%",
    marginTop: "3%",
    fontweight: "700",
    fontfamily: "Inter",
  },
  learn: {
    marginTop: "5%",
  },
});
const HowItWorks = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid lg={12} xs={12}>
          <h2 className="how">How the Vulcan Learning platform works</h2>
        </Grid>
        <Grid lg={12}>
          <item>
            <p className="text-start our">
              Our service connects Learners with Educators offering live
              educational <br /> classes on a wide range of subjects. Here's how
              it works:
            </p>
          </item>
        </Grid>
      </Grid>
      <Grid container className=" learn">
        <Grid lg={6}>
          <item>
            <h2 className="text-center learner">Learners</h2>
            <h5 className="find">1. Find a course</h5>
            <p className="e text-start">
              Explore our courses and pick one you want to take.
            </p>
          </item>
        </Grid>
        <Grid lg={6}>
          <item>
            <h2 className="text-center learner">Educators</h2>
            <h5 className="find">1. Create your course</h5>
            <p className="e text-start">
              Set up an Educator account and create the course <br />
              that you want to offer.
            </p>
            <img src={arrow} alt="arrow" />
          </item>
        </Grid>
      </Grid>
      <Grid container className=" learn">
        <Grid lg={6}>
          <item>
            <h5 className="find">2. Decide if it's right for you</h5>
            <p className="e text-start">
              Check the course curriculum, class schedule, <br /> instructor
              profile, and learner reviews to verify that <br /> the course is
              the right it for you.
            </p>
          </item>
        </Grid>
        <Grid lg={6}>
          <item>
            <h5 className="find">2. Submit for approval</h5>
            <p className="e text-start">
              Meet all the requirements and submit your course <br />
              for review. We will review your course application <br />
              thoroughly and get back to you with a decision.
            </p>
          </item>
        </Grid>
      </Grid>
      <Grid container className=" learn">
        <Grid lg={6}>
          <item>
            <h5 className="find">3. Complete Enrollment </h5>
            <p className="e text-start">
              Choose among the available class schedules, and <br /> click on
              enroll. No application required. All you <br /> need to complete
              enrollment is successfully <br />
              checkout.
            </p>
          </item>
        </Grid>
        <Grid lg={6}>
          <item>
            <h5 className="find">3. Make your courses available</h5>
            <p className="e text-start">
              Finalize the class schedule and curriculum, pick <br />
              the start date, and publish your course.
            </p>
          </item>
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
