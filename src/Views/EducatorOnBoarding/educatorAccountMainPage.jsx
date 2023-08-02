import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import Steps from "./Steps/steps";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ContinueButton,
  ExitTypo,
  Footer,
  Header,
  LogoTypo,
  MainBox,
  PreviousButton,
  Span,
  StepsTypo,
} from "./styles";
import ProgressBar from "./progressbar";
import {
  incrementSteps,
  decrementSteps,
} from "../../Infrastructure/States/educatorStepsSlice";

const EducatorAccountMainPage = () => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState(1);
  const dispatch = useDispatch();
  const step1Data = useSelector((state) => state.educatorSteps.stepOneData);

  useEffect(() => {}, [steps]);

  const handleDec = () => {
    if (steps > 1) {
      setSteps(steps - 1);
      dispatch(decrementSteps());
    }
  };

  const handleInc = () => {
    if (steps >= 1 && steps < 2) {
      dispatch(incrementSteps());
      setSteps(steps + 1);
    }
  };

  return (
    <MainBox>
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
                <LogoTypo
                  color={"primary"}
                  variant="h4"
                  onClick={() => navigate("/")}
                >
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
            <StepsTypo variant="h6">Step {steps} of 2</StepsTypo>
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
              <ExitTypo
                variant="h6"
                color="primary"
                onClick={() => navigate("/")}
              >
                Exit
              </ExitTypo>
            </Span>
          </Grid>
        </Grid>
        <ProgressBar />
      </Header>
      <Steps steps={steps} />
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
                disabled={!step1Data.length > 0}
                variant="contained"
                onClick={handleInc}
              >
                Continue
              </ContinueButton>
            </Grid>
          </Grid>
        </Grid>
      </Footer>
    </MainBox>
  );
};

export default EducatorAccountMainPage;
