import React from "react";
import "./welcomeBox.scss";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { useState } from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Divider, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import ModalComponent from '../../coursesScreen/modal/ModalComponent';
import Grid from "@mui/material/Unstable_Grid2";
import { styles } from "./styles";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  height: 421,
  width: 500,
  borderRadius: `${20} !important`,
  fontSize: 23,
  padding: 40,
  paddingTop: 20,
  marginTop: 40,
  marginLeft: 180,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

  "@media (max-width: 600px)": {
    textAlign: "center",
    height: 600,
    width: 600,
    fontSize: 16,
  borderRadius: `${0} !important`,
    padding: 30,
    paddingTop: 30,
    marginLeft: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));

const WelcomeBox = () => {
  // state

  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  //  navigation hook declear
  const navigate = useNavigate();

  //  toggle handle func
  const handleButtonClick = (val) => {
    if (val.value === 1) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  // navigation handle func
  const navigateToBecomeEdu = () => {
    navigate("/become-educator");
  };
  const modalHandle = () => {
    setOpen(!open);
  };

  // style for comp

  return (
    <>
      {/* <ModalComponent open={open} setOpen={setOpen} /> */}
      <Grid container item sx={styles.mainGrid}>
        <Item sx={styles.item}>
          <Grid
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              onClick={(e) => handleButtonClick({ value: 1 })}
              sx={styles.subGrid}
            >
              {isClicked ? (
                <CastForEducationIcon sx={styles.subGridIconClicked} />
              ) : (
                <CastForEducationIcon sx={styles.subGridIconNotClicked} />
              )}
              <Box>
                <Typography variant="body5">Teach</Typography>
                {isClicked ? (
                  <Divider sx={styles.dividerAfterClick} />
                ) : (
                  <Divider sx={styles.dividerbeforeClick} />
                )}
              </Box>
            </Grid>
            <Divider sx={styles.dividerStyle} />
            <Grid
              onClick={(e) => handleButtonClick({ value: 2 })}
              sx={styles.subGrid}
            >
              {isClicked ? (
                <LocalLibraryIcon sx={styles.subGridIconNotClicked} />
              ) : (
                <LocalLibraryIcon sx={styles.subGridIconClicked} />
              )}
              <Box>
                <Typography variant="body5">Learn</Typography>
                {isClicked ? (
                  <Divider sx={styles.dividerbeforeClick} />
                ) : (
                  <Divider sx={styles.dividerAfterClick} />
                )}
              </Box>
            </Grid>
          </Grid>
          {isClicked ? (
            <>
              <Typography variant="body2">
                Become an Educator <br /> on the Vulcan Platform
              </Typography>
              <Typography variant="body5" sx={styles.boxDescription}>
                Teach live online classes on any subject matter of your
                expertise. Keep 100% of the earnings.
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body2">
                Enroll in a Course <br /> on the Vulcan Platform
              </Typography>
              <Typography variant="body5" sx={styles.boxDescription}>
                Learn directly from subject matter experts in live classes.
                Courses available soon.
              </Typography>
            </>
          )}
          <Box display="flex" justifyContent="center" mt={6}>
            <Button
              onClick={isClicked ? navigateToBecomeEdu : modalHandle}
              variant="contained"
              sx={styles.textCapitalize}
            >
              {isClicked ? "Sign Up To Teach" : "See Courses"}
            </Button>
          </Box>
        </Item>
      </Grid>
    </>
  );
};

export default WelcomeBox;
