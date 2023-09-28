import { Box, TextField } from "@mui/material";
import React from "react";
import {
  ContinueButton,
  ExitTypo,
  Footer,
  Header,
  LogoTypo,
  PreviousButton,
  QuestionFormBox,
  QuestionName,
  Span,
  StepsTypo,
  TopHeading,
  TopHeadingBox,
} from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementSteps,
  incrementSteps,
  resetExperienceStepValues,
  resetSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useFormik } from "formik";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../../../Infrastructure/config";
import { ShowErrorToast } from "../../../Common/Toast/toast";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../progressbar";

export const ReachStep = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.educatorSteps.steps);
  const handleDec = async () => {
    if (steps > 1) {
      try {
        const updateReachStep = httpsCallable(functions, "updatereachstep");
        await updateReachStep(formik.values);
        dispatch(decrementSteps());
      } catch (error) {
        ShowErrorToast(error);
      }
    }
  };
  const initialValues = {
    platformLink1: "",
    platformLink2: "",
    platformLink3: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      if (steps >= 1 && steps < 4) {
        try {
          const updateReachStep = httpsCallable(functions, "updatereachstep");
          await updateReachStep(values);
          dispatch(incrementSteps());
        } catch (error) {
          ShowErrorToast(error);
        }
      }
    },
  });
  const handleExit = async () => {
    try {
      const updateEducatorStep = httpsCallable(
        functions,
        "updatereachstep"
      );
      await updateEducatorStep(formik.values);
      dispatch(resetExperienceStepValues());
      dispatch(resetSteps());
      navigate("/");
    } catch (err) {}
  };
  return (
    <>
  <Header alignItems={"center"}>
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Grid lg={2} md={2} sm={3} xs={3}>
            <Box
              sx={{
                borderRight: "1px solid rgba(128, 128, 128, 0.5)",
                height: "70px",
              }}
              display={"Flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Span>
                <LogoTypo color={"primary"} variant="h4" onClick={handleExit}>
                  Vulcan
                </LogoTypo>
              </Span>
            </Box>
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={{
              lg: "flex-start",
              sm: "center",
              xs: "center",
            }}
            alignItems={"center"}
            lg={7}
            md={6}
            sm={6}
            xs={6}
          >
            <StepsTypo variant="h6">Step {steps} of 4</StepsTypo>
          </Grid>
          <Grid
            lg={2}
            md={2}
            sm={2}
            xs={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Span>
              <ExitTypo variant="h6" color="primary" onClick={handleExit}>
                Exit
              </ExitTypo>
            </Span>
          </Grid>
        </Grid>
        <ProgressBar />
      </Header>
    <Box mt={14} height="100vh">
      <form onSubmit={formik.handleSubmit}>
        <TopHeadingBox>
          <TopHeading>Reach</TopHeading>
        </TopHeadingBox>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid lg={6} md={6} sm={10} xs={10}>
            <Box p={3}>
              <Box my={1} sx={{ height: { lg: "100px", md: "100px" } }}>
                <QuestionName variant="h6">
                  Have you taught on any teaching platforms? (Udemy, Skillshare,
                  Wyzant, etc)
                </QuestionName>
              </Box>
              <QuestionFormBox>
                <TextField
                  name="platformLink1"
                  label="Link 1"
                  variant="outlined"
                  placeholder="Paste your link"
                  onChange={formik.handleChange}
                  value={formik.values.platformLink1}
                  sx={{ m: "3px" }}
                  InputLabelProps={{
                    style: { fontSize: 16 },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />
                <TextField
                  name="platformLink2"
                  label="Link 2"
                  variant="outlined"
                  placeholder="Paste your link"
                  onChange={formik.handleChange}
                  value={formik.values.platformLink2}
                  sx={{ m: "3px" }}
                  InputLabelProps={{
                    style: { fontSize: 16 },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />
                <TextField
                  name="platformLink3"
                  label="Link 3"
                  variant="outlined"
                  placeholder="Paste your link"
                  onChange={formik.handleChange}
                  value={formik.values.platformLink3}
                  sx={{ m: "3px" }}
                  InputLabelProps={{
                    style: { fontSize: 16 },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />
              </QuestionFormBox>
            </Box>
          </Grid>
          <Grid lg={6} md={6} sm={10} xs={10}>
            <Box p={3}>
              <Box my={1} sx={{ height: { lg: "100px", md: "100px" } }}>
                <QuestionName variant="h6">
                  Do you have any social media where you post educational
                  content? (Youtube, Tik Tok, Twitter, etc)
                </QuestionName>
              </Box>
              <QuestionFormBox>
                <TextField
                  name="socialLink1"
                  label="Link 1"
                  variant="outlined"
                  placeholder="Paste your link"
                  onChange={formik.handleChange}
                  value={formik.values.socialLink1}
                  sx={{ m: "3px" }}
                  InputLabelProps={{
                    style: { fontSize: 16 },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />
                <TextField
                  name="socialLink2"
                  label="Link 2"
                  variant="outlined"
                  placeholder="Paste your link"
                  onChange={formik.handleChange}
                  value={formik.values.socialLink2}
                  sx={{ m: "3px" }}
                  InputLabelProps={{
                    style: { fontSize: 16 },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />
                <TextField
                  name="socialLink3"
                  label="Link 3"
                  variant="outlined"
                  placeholder="Paste your link"
                  onChange={formik.handleChange}
                  value={formik.values.socialLink3}
                  sx={{ m: "3px" }}
                  InputLabelProps={{
                    style: { fontSize: 16 },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />
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
    </>
  );
};
