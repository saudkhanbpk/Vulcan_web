import { Box } from "@mui/material";
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
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const ExperienceStep = () => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.educatorSteps.steps);
  const experienceStepQ1 = useSelector((state) => state.educatorSteps.experienceStepQ1);
  const experienceStepQ2 = useSelector((state) => state.educatorSteps.experienceStepQ2);
  const experienceStepQ3 = useSelector((state) => state.educatorSteps.experienceStepQ3);

  const handleDec = () => {
    if (steps > 1) {
      dispatch(decrementSteps());
    }
  };
  const handleInc = () => {
    if (steps >= 1 && steps < 4) {
      if (experienceStepQ1.length > 0 && experienceStepQ2.length > 0) {
        dispatch(incrementSteps());
      } else {
        alert("Please select at least one option");
      }
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
                disabled={
                  !((experienceStepQ2.length > 0 && experienceStepQ1.length > 0) && experienceStepQ3.trim() !== "")
                }
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
