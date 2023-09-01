import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { MyBox, styles } from "./styles";
import DialogBox from "../../Common/Dialog/dialogBox";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { fetchUserData } from "../../../Infrastructure/States/userDataSlice";

const WelcomeBox = () => {
  const auth = getAuth();
  const uid = auth.currentUser ? auth.currentUser.uid : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(true);
  const [open, setOpen] = useState(false);
  const [isEducator, setIsEducator] = useState(false);
  const { data } = useSelector((state) => state.userData);
  const message = "Student accounts cannot be an Educator";

  const handleButtonClick = (val) => {
    if (val.value === 1) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  const navigateToBecomeEdu = () => {
    navigate("/educator-account");
  };
  const handleStudentSignUpAsEducator = () => {
    setOpen(true);
  };

  const navigateToCourses = () => {
    navigate("/courses");
  };

  useEffect(() => {
    dispatch(fetchUserData(uid));
    if (data) {
      setIsEducator(data[uid]?.is_educator || false);
      console.log(data)
    }
  }, [data, dispatch, uid]);
  return (
    <>
      <DialogBox open={open} setOpen={setOpen} message={message} />
      <Grid container item sx={styles.mainGrid}>
        <MyBox sx={styles.item}>
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

          <Box display="flex" justifyContent="center" mt={6} height={40}>
            {isClicked ? (
              !isEducator ? (
                <Button
                  onClick={
                    isEducator
                      ? navigateToBecomeEdu
                      : handleStudentSignUpAsEducator
                  }
                  variant="contained"
                  sx={styles.textCapitalize}
                >
                  Sign Up To Teach
                </Button>
              ) : null
            ) : (
              <Button
                onClick={navigateToCourses}
                variant="contained"
                sx={styles.textCapitalize}
              >
                See Courses
              </Button>
            )}
          </Box>
        </MyBox>
      </Grid>
    </>
  );
};

export default WelcomeBox;
