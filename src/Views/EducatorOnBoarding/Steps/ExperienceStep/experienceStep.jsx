import { Box } from "@mui/material";
import React from "react";
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
import QuestionOne from "./questionOne";
import QuestionTwo from "./questionTwo";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../../../Infrastructure/config";
import { ShowErrorToast } from "../../../Common/Toast/toast";

export const ExperienceStep = () => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.educatorSteps.steps);
  const experienceStep = useSelector(
    (state) => state.educatorSteps.experienceStep
  );
  const handleDec = async () => {
    if (steps > 1) {
      try {
        const updateexperiences = httpsCallable(
          functions,
          "updateexperiencestep"
        );
        await updateexperiences(experienceStep);
        dispatch(decrementSteps());
      } catch (error) {
        ShowErrorToast(error)
        
      }
    }
  };
  const handleInc = async () => {
    if (steps >= 1 && steps < 4) {
      try {
        const updateexperiences = httpsCallable(
          functions,
          "updateexperiencestep"
        );
        await updateexperiences(experienceStep);
        dispatch(incrementSteps());
      } catch (error) {
        ShowErrorToast(error)
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
                <QuestionOne />
              </Box>
            </Box>
          </Grid>
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
                  !(
                    (experienceStep.inPerson ||
                      experienceStep.liveOnline ||
                      experienceStep.recordedOnline ||
                      experienceStep.mediumOther) &&
                    (experienceStep.professor ||
                      experienceStep.teacher ||
                      experienceStep.independent ||
                      experienceStep.experienceOther ||
                      experienceStep.tutor) &&
                    experienceStep.years.trim() !== ""
                  )
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
