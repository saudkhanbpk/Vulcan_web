import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Steps from "./Steps/steps";
import { useNavigate } from "react-router-dom";
import {
  ExitTypo,
  Header,
  LogoTypo,
  EduMainBox,
  Span,
  StepsTypo,
} from "./styles";
import ProgressBar from "./progressbar";
import { useSelector } from "react-redux";

const EducatorAccountMainPage = () => {
  const navigate = useNavigate();
  const steps = useSelector((state) => state.educatorSteps.steps);
  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <EduMainBox>
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
                  onClick={() => {
                    navigate("/");
                    window.location.reload();
                  }}
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
              <ExitTypo variant="h6" color="primary" onClick={handleClick}>
                Exit
              </ExitTypo>
            </Span>
          </Grid>
        </Grid>
        <ProgressBar />
      </Header>
      <Steps controlSteps={steps} />
    </EduMainBox>
  );
};

export default EducatorAccountMainPage;
