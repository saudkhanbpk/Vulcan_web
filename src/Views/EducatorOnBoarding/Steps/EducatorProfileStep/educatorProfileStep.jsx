import { Avatar, Box, IconButton, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ProfileImage from "../../../../Assets/Images/profile.png";
import {
  decrementSteps,
  resetSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AboutMe, ContinueButton, Footer, FullName, PreviousButton, TitleText } from "../../styles";

export const EducatorProfileStep = () => {
  const steps = useSelector((state) => state.educatorSteps.steps);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDec = () => {
    if (steps > 1) {
      dispatch(decrementSteps());
    }
  };

  const handleInc = () => {
    navigate("/");
    dispatch(resetSteps());
  };
  return (
    <>
      <Box height={{ sm: "120vh", lg: "100vh", xs: "130vh" }} pt={18}>
        <Grid container>
          <Grid lg={1} md={0} sm={0} xs={0}></Grid>
          <Grid
            lg={6}
            md={12}
            sm={12}
            xs={12}
            p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <TitleText color={"primary"} pb={2}>
              Educator
            </TitleText>
            <FullName color={"secondary"}>Ayaz Khan</FullName>
            <AboutMe pt={10} color={"primary"} mb={3}>
              About Me
            </AboutMe>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={6}
              InputLabelProps={{
                style: { fontSize: 16 },
              }}
              InputProps={{
                style: { fontSize: 18 },
              }}
              fullWidth
            />
          </Grid>
          <Grid
            p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
            lg={4}
            md={12}
            sm={12}
            xs={12}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box>
              <Stack direction="row" spacing={2}>
                <Box position="relative">
                  <Avatar
                    alt="Remy Sharp"
                    src={ProfileImage}
                    sx={{ width: 150, height: 150 }}
                  />
                  <IconButton
                    aria-label="Edit"
                    size="small"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      color: "blue",
                      bgcolor: "white",
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Box>
              </Stack>
              <TextField
                name="websiteLink"
                sx={{ mt: "6px" }}
                label={"Website Link"}
                variant="standard"
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />
              <TextField
                name="youtubeLink"
                sx={{ mt: "6px" }}
                label={"Youtube Link"}
                variant="standard"
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />
              <TextField
                name="twitterLink"
                sx={{ mt: "6px" }}
                label={"Twitter Link"}
                variant="standard"
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />

              <TextField
                name="tiktokLink"
                sx={{ mt: "6px" }}
                label={"Tik Tak Link"}
                variant="standard"
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid lg={1} md={0} sm={0} xs={0}></Grid>
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
