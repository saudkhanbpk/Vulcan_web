import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import StepTwo from "./stepTwo";
import StepOne from "./stepOne";

const Steps = ({ steps }) => {
  
 
   const TopHeadingBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]:{
  
      }
  }));
  const TopHeading = styled(Typography)(({ theme }) => ({
    marginTop: 12,

    fontWeight: 700,
    fontSize: "2.2rem",
    lineHeight: 1.25,
    letterSpacing: "-.05rem",
    [theme.breakpoints.down('sm')]:{
    fontSize: "2rem",

    }
  }));
  const Description = styled(Typography)(({ theme }) => ({
  }));
  
  const DescriptionBox = styled(Box)(({ theme }) => ({
    maxWidth: "70%",
    paddingTop: 32,
    [theme.breakpoints.down('sm')]:{
      maxWidth: "100%",
  
      }
  }));

  return (
    <>
      {steps === 1 && (
        <Box p={3} sx={{ height: "100vh" }}>
        <TopHeadingBox>
        <TopHeading variant="" mt={5}>Teaching Experience</TopHeading>
        </TopHeadingBox>
          <DescriptionBox>
            <Description variant="body">
              Udemy courses are video-based experiences that give students the
              chance to learn actionable skills. Whether you have experience
              teaching, or it’s your first time, we’ll help you package your
              knowledge into an online course that improves student lives.
            </Description>
          </DescriptionBox>

          <Box sx={{ maxWidth: "100%" }} pt={5}>
            <Typography variant="h6" pb={2}>
              What teaching roles have you occupied?
            </Typography>

            <StepOne />
          </Box>
        </Box>
      )}
      {steps === 2 && (
        <Box p={3} sx={{ height: "100vh" }}>
           <TopHeadingBox>
        <TopHeading variant="" mt={5}>Teaching Medium</TopHeading>
        </TopHeadingBox>
          <DescriptionBox>
            <Description variant="body">
              Udemy courses are video-based experiences that give students the
              chance to learn actionable skills. Whether you have experience
              teaching, or it’s your first time, we’ll help you package your
              knowledge into an online course that improves student lives.
            </Description>
          </DescriptionBox>
         
            <Box sx={{ maxWidth: "100%" }} pt={5}>
            <Typography variant="h6" pb={2}>
            What mediums have you taught in?

            </Typography>
          
            <StepTwo />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Steps;
