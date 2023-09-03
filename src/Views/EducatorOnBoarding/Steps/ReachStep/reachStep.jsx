import { Box, TextField } from "@mui/material";
import React from "react";
import {
  ContinueButton,
  Footer,
  PreviousButton,
  QuestionFormBox,
  QuestionName,
  TopHeading,
  TopHeadingBox,
} from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementSteps,
  incrementSteps,
  reachSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useFormik } from "formik";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const ReachStep = () => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.educatorSteps.steps);
  const handleDec = () => {
    if (steps > 1) {
      dispatch(decrementSteps());
    }
  };
  const Q1Options = [
    { id: 0, text: "Link 1" },
    { id: 1, text: "Link 2" },
    { id: 2, text: "Link 3" },
  ];
  const Q2Options = [
    { id: 0, text: "Link 1" },
    { id: 1, text: "Link 2" },
    { id: 2, text: "Link 3" },
  ];
  const initialValues = {
    linksQ1: {},
    linksQ2: {},
  };
  Q1Options.forEach((option) => {
    initialValues.linksQ1[option.id] = "";
  });
  Q2Options.forEach((option) => {
    initialValues.linksQ2[option.id] = "";
  });
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const { linksQ1, linksQ2 } = values;
      if (steps >= 1 && steps < 4) {
        dispatch(incrementSteps());
      }
      dispatch(reachSteps({ linksQ1, question: "one" }));
      dispatch(reachSteps({ linksQ2, question: "two" }));
    },
  });
  return (
    <Box mt={14} height="100vh">
      <form onSubmit={formik.handleSubmit}>
        <TopHeadingBox>
          <TopHeading>
            Reach
          </TopHeading>
        </TopHeadingBox>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid lg={6} md={6} sm={10} xs={10}>
            <Box p={3}>
              <Box m={1} sx={{ height: { lg: "100px", md: "100px" } }}>
                <QuestionName variant="h6">
                  Have you taught on any teaching platforms? (Udemy, Skillshare,
                  Wyzant, etc)
                </QuestionName>
              </Box>
              <QuestionFormBox>
                {Q1Options.map((option) => (
                  <TextField
                    key={option.id}
                    label={option.text}
                    variant="outlined"
                    placeholder="Paste your link"
                    onChange={(e) => {
                      formik.handleChange(e);
                      formik.values.linksQ1[option.id] = e.target.value;
                    }}
                    value={formik.values.linksQ1[option.id]}
                    sx={{ m: "3px" }}
                    InputLabelProps={{
                      style: { fontSize: 16 },
                    }}
                    InputProps={{
                      style: { fontSize: 18 },
                    }}
                    fullWidth
                  />
                ))}
              </QuestionFormBox>
            </Box>
          </Grid>
          <Grid lg={6} md={6} sm={10} xs={10}>
            <Box p={3}>
              <Box m={1} sx={{ height: { lg: "100px", md: "100px" } }}>
                <QuestionName variant="h6">
                  Do you have any social media where you post educational
                  content? (Youtube, Tik Tok, Twitter, etc)
                </QuestionName>
              </Box>
              <QuestionFormBox>
                {Q2Options.map((option) => (
                  <TextField
                    key={option.id}
                    label={option.text}
                    variant="outlined"
                    placeholder="Paste your link"
                    onChange={(e) => {
                      formik.handleChange(e);
                      formik.values.linksQ2[option.id] = e.target.value;
                    }}
                    value={formik.values.linksQ2[option.id]}
                    sx={{ m: "3px" }}
                    InputLabelProps={{
                      style: { fontSize: 16 },
                    }}
                    InputProps={{
                      style: { fontSize: 18 },
                    }}
                    fullWidth
                  />
                ))}
              </QuestionFormBox>
            </Box>
          </Grid>
        </Grid>
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
                <ContinueButton variant="contained" type="submit">
                  Continue
                </ContinueButton>
              </Grid>
            </Grid>
          </Grid>
        </Footer>
      </form>
    </Box>
  );
};