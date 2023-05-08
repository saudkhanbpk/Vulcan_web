import React from "react";
import "./BecomeEducator.scss";
import { Box } from "@mui/system";
import { Button, Grid, Paper, Typography } from "@mui/material";
import MoneyIcon from "../../assets/images/moneyIcon.png";
import SharingIcon from "../../assets/images/sharingIcon.png";
import TeachIcon from "../../assets/images/teachIcon.png";
import styled from "styled-components";
import { mainFont } from "../../theme/FontFamily";


const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'start',
  height: 294,
  width: 586,
  borderRadius: `${20} !important`,
  fontSize: 23,
  padding: 40,
  paddingTop: 40,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly"


}));

const BecomeEducator = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <section className="bg-img">
          <Box>
            <Grid item sx={{ pt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Item  >
                <Typography variant="h1" sx={{ fontFamily: `${mainFont} !important`, fontWeight: "bold" }}>
                  Teach Live Classes Online
                </Typography>
                <Typography variant="body2" align="start" sx={{ fontWeight: "bold", pt: 2 }} >
                  Become an Educator on the Vulcan Platform. Enrich lives. Earn income.
                </Typography>
                <Box xs={12} sm={8} display="flex" justifyContent="space-around" sx={{ pt: 5 }} >
                  <Button
                    variant="contained"
                    sx={{ textTransform: "capitalize", }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Item>
            </Grid>
          </Box>
        </section>
        <section className=" ">
          <p className="h3 p-5 text-start fw-bold">
            Why teach on the Vulcan Learning platform?
            <Typography>
            {/* Why teach on the Vulcan Learning platform? */}
            </Typography>
          </p>
          <div className="row">
            <div className="col-md-4 p-5">
              <div className="row">
                <div className="  img-div d-flex justify-content-center align-items-center ">
                  <img src={MoneyIcon} alt="" className="img-fluid" />
                </div>
                <p className="h3 fw-bold p-2">Monetize Your Knowledge</p>
                <p className="fw-bold">
                  Generate consistent and unbounded income. Part time or Full
                  time. On the Vulcan Learning platform you keep 100% of what
                  you earn.
                </p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div className="row">
                <div className="img-div d-flex justify-content-center align-items-center ">
                  <img src={SharingIcon} alt="" />
                </div>
                <p className="h3 fw-bold p-2">Change Lives</p>
                <p className="fw-bold">
                  Share your experience and help learners explore their
                  interests, gain new skills, and advance their careers.
                </p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div className="row">
                <div className="img-div d-flex justify-content-center align-items-center ">
                  <img src={TeachIcon} alt="" />
                </div>
                <p className="h3 fw-bold p-2">You are in control</p>
                <p className="fw-bold">
                  Set the course curriculum, choose the class schedule, and
                  devise the teaching strategies that work best for you.{" "}
                </p>
              </div>
            </div>
          </div>
          <Box className="p-5 " display="flex" justifyContent="center">
            <Button variant="contained" style={{ textTransform: "capitalize" }}>
              Educator FAQ
            </Button>
          </Box>
        </section>
      </div>
    </div>
  );
};

export default BecomeEducator;
