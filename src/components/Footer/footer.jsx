import React, { useContext, useEffect, useState } from "react";
import footerlogo from "../../assets/images/footerlogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Typography,
  Box,
  Modal,
  styled,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { ModalBackgroundBox } from "../Contact/styles";
import { FeatureFlags } from "../../contexts/FeatureFlags";

const Footer = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { features, setFeatures } = useContext(FeatureFlags);

  // Access the showCourses flag
  const showCourses = features.showCourses;
  const flag2 = features.flag2;
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleClose = () => {
    setModalOpen(false);
    setClickCount(0);
  };
  const handleToggleShowCourses = () => {
    // Update the showCourses flag value
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      showCourses: !prevFeatures.showCourses,
    }));
    console.log("Show Courses", showCourses);
  };
  const handleToggleFlag2 = () => {
    // Update the showCourses flag value
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      flag2: !prevFeatures.flag2,
    }));
    console.log("Flag 2 ", flag2);
  };

  useEffect(() => {
    if (clickCount === 3) {
      setModalOpen(true);
    }
  }, [clickCount]);

  const MainBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    border: "1px solid black",
    borderRadius: "50px",
    width: "300px",
    height: "400px",
    backgroundColor: "white",
    paddingBottom: 5,
    pt: 2,
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
  }));

  return (
    <>
      {modalOpen && (
        <ModalBackgroundBox>
          <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="login-modal-title"
            aria-describedby="login-modal-description"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MainBox display={"flex"} flexDirection={"Column"}>
              <Typography variant="h6" p={5}>
                Flag Features
              </Typography>
              <FormGroup style={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={!showCourses}
                      onChange={() => handleToggleShowCourses(showCourses)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  }
                  label={
                    <span
                      style={{
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Show Courses
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={!flag2}
                      onChange={() => handleToggleFlag2(flag2)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  }
                  label={
                    <span
                      style={{
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Flag 2
                    </span>
                  }
                />

                {/*
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label={
                    <span style={{ fontSize: "20px", }}>
                      Label 3
                    </span>
                  }
                /> */}
              </FormGroup>
            </MainBox>
          </Modal>
        </ModalBackgroundBox>
      )}
      <Box sx={styles.mainBox}>
        <Grid container spcing={3}>
          {/* Sub Grid 1 */}
          <Grid xs={12} sm={12} md={12} lg={6} sx={{ mb: { xs: 2, sm: 2 } }}>
            <Box sx={styles.subGrid1Box}>
              <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                <img src={footerlogo} alt="" />
              </Box>

              <Typography
                variant="h1"
                sx={styles.subGrid1BoxTypo}
                onClick={handleClick}
              >
                Education for Everyone
              </Typography>
            </Box>
            <Typography
              variant="h1"
              className="container"
              sx={styles.subGrid1Typo}
            >
              © 2023 Vulcan Learning Institute LLC
            </Typography>
          </Grid>

          {/* Sub Grid 2 */}
          <Grid
            xs={10}
            sm={11}
            md={11}
            lg={5}
            sx={styles.subGrid2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Typography
              variant="h6"
              sx={styles.subGrid2Typo}
              onClick={() => navigate("/policies")}
            >
              Policies
            </Typography>

            <Typography
              variant="h6"
              sx={styles.subGrid2Typo}
              onClick={() => navigate("/privacy")}
            >
              Privacy
            </Typography>

            <Typography
              variant="h6"
              sx={styles.subGrid2Typo}
              onClick={() => navigate("/contact")}
            >
              Contact
            </Typography>
          </Grid>

          {/* Sub Grid 3 */}
          <Grid
            xs={2}
            sm={1}
            md={1}
            lg={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Link
              to="https://twitter.com/vulcaninstitute"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                fontSize="large"
                className="twticon"
                sx={styles.subGrid3Icon}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
