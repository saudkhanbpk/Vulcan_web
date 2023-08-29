import { Box, Grid, TextField, Typography } from "@mui/material";
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
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useFormik } from "formik";

export const ReachStep = () => {
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

  const optionsQ1 = [
    { id: 0, text: "Link 1" },
    { id: 1, text: "Link 2" },
    { id: 2, text: "Link 3" },
  ];
  const optionsQ2 = [
    { id: 0, text: "Link 1" },
    { id: 1, text: "Link 2" },
    { id: 2, text: "Link 3" },
  ];

  const initialValues = {
    linksQ1: optionsQ1.reduce(
      (acc, option) => ({ ...acc, [option.id]: "" }),
      {}
    ),
    linksQ2: optionsQ2.reduce(
      (acc, option) => ({ ...acc, [option.id]: "" }),
      {}
    ),
  };

  const formik = useFormik({
    initialValues,
    onSubmit:(values) => {
      dispatch(incrementSteps());
      console.log("Links for Question 1:", values.linksQ1);
      console.log("Links for Question 2:", values.linksQ2);

  }})
  return (
    <>
      <form  onSubmit={formik.handleSubmit} >
        <TopHeadingBox>
          <TopHeading variant="" mt={5} ml={3}>
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
            <Box
              p={{
                lg: 3,
              }}
            >
              <Box
                pt={{
                  lg: 5,
                }}
              >
                {/* <QuestionOne /> */}
                <Box
                  sx={{
                    height: {
                      lg: "100vh",
                      md: "50vh",
                      sm: "50vh",
                      xs: "50vh",
                    },
                  }}
                >
                  <Box sx={{ height: { lg: "100px", md: "100px" } }}>
                    <QuestionName variant="h6" py={3}>
                      Have you taught on any teaching platforms? (Udemy,
                      Skillshare, Wyzant, etc)
                    </QuestionName>
                  </Box>
                  <Grid
                    container
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent="center"
                  >
                    <Grid lg={12} md={12} sm={12} xs={12}>
                      <QuestionFormBox>
                        {optionsQ1.map((option) => (
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
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid lg={6} md={6} sm={10} xs={10}>
            <Box
              p={{
                lg: 3,
              }}
            >
              <Box
                pt={{
                  lg: 5,
                }}
              >
                {/* <QuestionTwo /> */}
                <Box sx={{ height: "100vh" }}>
                  <Box sx={{ height: { lg: "100px", md: "100px" } }}>
                    <Typography variant="h6" py={3}>
                      Do you have any social media where you post educational
                      content? (Youtube, Tik Tok, Twitter, etc)
                    </Typography>
                  </Box>
                  <Grid container>
                    <Grid lg={12} md={12} sm={12} xs={12}>
                      <QuestionFormBox>
                        {optionsQ2.map((option) => (
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
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
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
