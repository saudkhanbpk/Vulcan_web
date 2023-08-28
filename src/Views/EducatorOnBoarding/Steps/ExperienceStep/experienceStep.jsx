import { Box, Grid } from "@mui/material";
import React from "react";
import QuestionTwo from "./questionTwo";
import QuestionOne from "./questionOne";
import QuestionThree from "./questionThree";
import {
  decrementSteps,
  incrementSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ContinueButton,
  Footer,
  PreviousButton,
  TopHeading,
  TopHeadingBox,
} from "../../styles";

export const ExperienceStep = () => {
  const steps = useSelector((state) => state.educatorSteps.steps);
  const dispatch = useDispatch();
  const handleDec = () => {
    if (steps > 1) {
      dispatch(decrementSteps());
    }
  };
  const handleInc = () => {
    if (steps >= 1 && steps < 4) {
      dispatch(incrementSteps());
    }
  };
  return (
    <>
      <Box pt={14}>
        <TopHeadingBox>
          <TopHeading variant="" mt={5} ml={3}>
            Experience
          </TopHeading>
        </TopHeadingBox>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid lg={4} md={6} sm={10} xs={10}>
            <Box p={3} sx={{ height: "100vh" }}>
              <Box sx={{ maxWidth: "100%" }} pt={5}>
                <QuestionTwo />
              </Box>
            </Box>
          </Grid>
          <Grid lg={4} md={6} sm={10} xs={10}>
            <Box p={3} sx={{ height: "100vh" }}>
              <Box sx={{ maxWidth: "100%" }} pt={5}>
                <QuestionOne />
              </Box>
            </Box>
          </Grid>
          <Grid lg={4} md={6} sm={10} xs={10}>
            <Box p={3} sx={{ height: "100vh" }}>
              <Box sx={{ maxWidth: "100%" }} pt={5}>
                <QuestionThree />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer>
        <Grid container justifyContent={"space-between"} p={2}>
          <Grid>
            {steps > 1 ? (
              <PreviousButton variant="contained" onClick={handleDec}>
                Previous
              </PreviousButton>
            ) : (
              <></>
            )}
          </Grid>
          <Grid>
            <Grid>
              <ContinueButton
                // disabled={!step1Data.length > 0}
                variant="contained"
                onClick={handleInc}
              >
                Continue
              </ContinueButton>
            </Grid>
          </Grid>
        </Grid>
      </Footer>
    </>
  );
};
