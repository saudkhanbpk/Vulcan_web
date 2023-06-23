import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { specialFont } from "../../../Theme/fontFamily";
import Steps from "./Steps/steps";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EducatorAccountMainPage = () => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState(1);
  const step1Data= useSelector((state)=>state.auth.stepOneData);
  const step2Data= useSelector((state)=>state.auth.stepTwoData);
  useEffect(()=>{
 
  },[steps])

  const MainBox = styled(Box)((theme) => ({
    height: "100vh",
    width: "100%",
    paddingTop: "100px",
  }));
  const Header = styled(Box)((theme) => ({
    height: "70px",
    width: "100%",
    position: "fixed",
    top: 0,
    background: "white",
    zIndex: 50,
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25)", // Add boxShadow for top and bottom shadows
  }));

  const ContinueButton = styled(Button)((theme) => ({
    borderRadius: "0px",
    textTransform: "capitalize",
    border: "none",
    height: "50px",
  }));
  const PreviousButton = styled(Button)((theme) => ({
    borderRadius: "0px",
    textTransform: "capitalize",
    border: "none",
    height: "50px",
  }));

  const StepsTypo = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    lineHeight: 1.4,

    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  }));

  const ExitTypo = styled(Typography)(({ theme }) => ({
    curser: "pointer",
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      // padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  }));

  const LogoTypo = styled(Typography)(({ theme }) => ({
    fontFamily: `${specialFont} !important`,
    fontWeight: 400,
    // margin:theme.spacing(2),
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  }));
  const Footer = styled(Box)(({ theme }) => ({
    height: "80px",
    width: "100%",
    position: "fixed",
    bottom: "0px",
    boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.25)",
    background: "white",
  }));

  const handleDec = () => {
    if (steps > 1) {
      setSteps(steps - 1);
    }
  };

  const handleInc = () => {
    if (steps >= 1 && steps < 2) {
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
                borderRight: "1px solid grey",
                height: "70px",
              }}
              display={"Flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <LogoTypo color={"primary"} variant="h4">
                Vulcan
              </LogoTypo>
            </Box>
          </Grid>
          <Grid
            lg={6}
            display={"flex"}
            justifyContent={{
              sm: "center",
              xs: "center",
            }}
            alignItems={"center"}
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
            <ExitTypo variant="h6" color="primary" onClick={()=>navigate("/")}>
              Exit
            </ExitTypo>
          </Grid>
        </Grid>
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
              
              <ContinueButton disabled={!step1Data} variant="contained" onClick={handleInc}>
              Continue
            </ContinueButton>
            )}
          </Grid>
          <Grid>
            <Grid>
              {steps > 1 ? (
                <ContinueButton  disabled={!step2Data} variant="contained" onClick={handleInc}>
                  Continue
                </ContinueButton>
              ) : ""}
            </Grid>
          </Grid>
        </Grid>
      </Footer>
    </MainBox>
  );
};

export default EducatorAccountMainPage;

// https://www.udemy.com/home/teaching/onboarding/teaching-experience
